/* eslint-disable @typescript-eslint/no-base-to-string */
// src/server/api/routers/record.ts
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Prisma, type ViewFilter, type Field, type FieldType } from "../../../../generated/prisma";

function mapValue(fieldType: FieldType, raw: string | number | null) {
  if (raw == null) return { valueText: null, valueNumber: null };

  if (fieldType === "number") {
    const num = Number(raw);
    return { valueText: null, valueNumber: isNaN(num) ? null : num };
  } else {
    const str = String(raw);
    return { valueText: str, valueNumber: null };
  }
}

function buildFilterCondition(f: ViewFilter, field: Field): Prisma.RecordWhereInput {
  const raw = f.value;

  const stringValue =
    raw === null || raw === undefined ? "" : String(raw);

  const numberValue =
  raw === null || raw === undefined || raw === ""
    ? null
    : Number(raw);

  switch (f.operator) {
    case "equals":
      return field.type === "number"
        ? { cells: { some: { fieldId: f.fieldId!, valueNumber: numberValue } } }
        : { cells: { some: { fieldId: f.fieldId!, valueText: stringValue } } };

    case "not_equals":
      return field.type === "number"
        ? { cells: { none: { fieldId: f.fieldId!, valueNumber: numberValue } } }
        : { cells: { none: { fieldId: f.fieldId!, valueText: stringValue } } };

    case "contains":
      return { cells: { some: { fieldId: f.fieldId!, valueText: { contains: stringValue, mode: "insensitive" } } } };

    case "not_contains":
      return { cells: { none: { fieldId: f.fieldId!, valueText: { contains: stringValue, mode: "insensitive" } } } };

    case "gt":
      if (numberValue === null) return {};

      return {
        cells: {
          some: {
            fieldId: f.fieldId!,
            valueNumber: { gt: numberValue },
          },
        },
      };

    case "lt":
      if (numberValue === null) return {};

      return {
        cells: {
          some: {
            fieldId: f.fieldId!,
            valueNumber: { lt: numberValue },
          },
        },
      };

    case "is_empty":
      return { cells: { none: { fieldId: f.fieldId! } } };

    case "is_not_empty":
      return { cells: { some: { fieldId: f.fieldId! } } };

    default:
      return {};
  }
}

export const recordRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({
      tableId: z.string().uuid(),
      viewId:  z.string().uuid().optional(),
      search:  z.string().optional(),
      cursor:  z.string().uuid().optional(),
      limit:   z.number().int().min(1).max(1000).default(100),
    }))
    .query(async ({ ctx, input }) => {
      const { tableId, viewId, cursor, limit } = input;
      const fields = await ctx.db.field.findMany({
        where: { tableId },
        select: { id: true, name: true, type: true, tableId: true, position: true },
      });
      // Load view config if provided
      let filters: ViewFilter[] = [];
      let sorts:   { fieldId: string; direction: "asc" | "desc"; order: number }[] = [];

      if (viewId) {
        const view = await ctx.db.view.findUnique({
          where: { id: viewId },
          include: {
            filters: true,
            sorts:   { orderBy: { order: "asc" } },
          },
        });
        if (view) {
          filters = view.filters.filter((f) => {
            if (!f.fieldId) return false;

            const noValueNeeded = ["is_empty", "is_not_empty"].includes(f.operator ?? "");

            if (noValueNeeded) return true;

            return f.value !== null && f.value !== undefined;
          });

          sorts = view.sorts.map((s) => ({
            fieldId:   s.fieldId,
            direction: s.direction,
            order:     s.order ?? 0,
          }));
        }
      }

      const where: Prisma.RecordWhereInput = { tableId };

      if (filters.length > 0) {
        where.AND = filters
          .map((f) => {
            const field = fields.find((fld) => fld.id === f.fieldId);
            if (!field) return null;
            return buildFilterCondition(f, field);
          })
          .filter((c): c is Prisma.RecordWhereInput => !!c && Object.keys(c).length > 0);
      }

      const dbOrderBy: Prisma.RecordOrderByWithRelationInput[] =
        sorts.length > 0
          ? sorts
              .map((s) => {
                const field = fields.find((f) => f.id === s.fieldId);
                if (!field) return null;

                return field.type === "number"
                  ? { sortValueNumber: s.direction }
                  : { sortValueText: s.direction };
              })
              .filter(Boolean) as Prisma.RecordOrderByWithRelationInput[]
          : [
              { position: "asc" },
              { createdAt: "asc" },
            ];

      const records = await ctx.db.record.findMany({
        where,
        include: { cells: true },
        orderBy: dbOrderBy,
        take:   limit + 1, 
        cursor: cursor && sorts.length === 0 ? { id: cursor } : undefined,
        skip:   cursor ? 1 : 0,
      });
      
      let nextCursor: string | undefined;
      let resultRecords = records;
      if (records.length > limit) {
        nextCursor = records.pop()!.id;
        resultRecords = records;
      }

      return { records: resultRecords, nextCursor };
    }),

  create: publicProcedure
    .input(
      z.object({
        tableId: z.string().uuid(),
        cells: z
          .array(
            z.object({
              fieldId: z.string().uuid(),
              value: z.union([z.string(), z.number(), z.null()]),
            })
          )
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const maxPos = await ctx.db.record.aggregate({
        where: { tableId: input.tableId },
        _max: { position: true },
      });
      let fieldMap: Map<string, FieldType> | undefined;
      let sortedFieldIds = new Set<string>();

      if (input.cells) {  
        const fieldIds = [...new Set(input.cells.map(c => c.fieldId))];
        const fields = await ctx.db.field.findMany({ where: { id: { in: fieldIds } } });
        fieldMap = new Map(fields.map(f => [f.id, f.type]));

        // Check which fields are used in sorting
        const sortedFields = await ctx.db.viewSort.findMany({
          where: { fieldId: { in: fieldIds } },
          select: { fieldId: true },
        });
        sortedFieldIds = new Set(sortedFields.map(s => s.fieldId));
      }

      // Determine sort values from the input cells
      let sortValueText: string | null = null;
      let sortValueNumber: number | null = null;

      if (input.cells && sortedFieldIds.size > 0) {
        // Use the first sorted field's value
        const firstSortedCell = input.cells.find(c => sortedFieldIds.has(c.fieldId));
        if (firstSortedCell) {
          const fieldType = fieldMap!.get(firstSortedCell.fieldId)!;
          const mapped = mapValue(fieldType, firstSortedCell.value);
          sortValueText = mapped.valueText;
          sortValueNumber = mapped.valueNumber;
        }
      }

      return ctx.db.record.create({
        data: {
          tableId: input.tableId,
          position: (maxPos._max.position ?? -1) + 1,
          sortValueText,
          sortValueNumber,
          cells: input.cells
            ? {
                create: input.cells.map((c) => {
                  const fieldType = fieldMap!.get(c.fieldId)!;
                  const mapped = mapValue(fieldType, c.value);
                  return {
                    fieldId: c.fieldId,
                    valueText: mapped.valueText,
                    valueNumber: mapped.valueNumber,
                  };
                }),
              }
            : undefined,
        },
        include: { cells: true },
      });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.record.delete({ where: { id: input.id } });
    }),

  deleteMany: publicProcedure
    .input(z.object({ ids: z.array(z.string().uuid()).min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.record.deleteMany({ where: { id: { in: input.ids } } });
    }),
});