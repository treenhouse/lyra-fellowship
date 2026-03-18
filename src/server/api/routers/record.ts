/* eslint-disable @typescript-eslint/no-base-to-string */
// src/server/api/routers/record.ts
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Prisma, type ViewFilter, type Field, type FieldType } from "../../../../generated/prisma";

function mapValue(fieldType: FieldType, raw: string | number | null) {
  if (raw == null) return { valueJson: null, valueText: null, valueNumber: null };

  if (fieldType === "number") {
    const num = Number(raw);
    return { valueJson: num, valueText: null, valueNumber: isNaN(num) ? null : num };
  } else {
    const str = String(raw);
    return { valueJson: str, valueText: str, valueNumber: null };
  }
}

function buildFilterCondition(f: ViewFilter, field: Field): Prisma.RecordWhereInput {
  const value = f.value;

  switch (f.operator) {
    case "equals":
      return field.type === "number"
        ? { cells: { some: { fieldId: f.fieldId!, valueNumber: Number(value) } } }
        : { cells: { some: { fieldId: f.fieldId!, valueText: String(value) } } };

    case "contains":
      return { cells: { some: { fieldId: f.fieldId!, valueText: { contains: String(value), mode: "insensitive" } } } };

    case "gt":
      return { cells: { some: { fieldId: f.fieldId!, valueNumber: { gt: Number(value) } } } };

    case "lt":
      return { cells: { some: { fieldId: f.fieldId!, valueNumber: { lt: Number(value) } } } };

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
          filters = view.filters.filter(
            (f) => f.fieldId && f.value !== null && f.value !== undefined
          );

          sorts = view.sorts.map((s) => ({
            fieldId:   s.fieldId,
            direction: s.direction,
            order:     s.order ?? 0,
          }));
        }
      }

      const where: Prisma.RecordWhereInput = { tableId };

      if (filters.length > 0) {
        where.AND = filters.map((f) => {
          const field = fields.find((fld) => fld.id === f.fieldId);
          if (!field) return {}; 
          return buildFilterCondition(f, field);
        });
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
      if (input.cells) {  
        const fieldIds = [...new Set(input.cells.map(c => c.fieldId))];
        const fields = await ctx.db.field.findMany({ where: { id: { in: fieldIds } } });
        fieldMap = new Map(fields.map(f => [f.id, f.type]));
      }

      return ctx.db.record.create({
        data: {
          tableId: input.tableId,
          position: (maxPos._max.position ?? -1) + 1,
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