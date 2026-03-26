/* eslint-disable @typescript-eslint/no-base-to-string */
// src/server/api/routers/record.ts
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { type Prisma, type ViewFilter, type Field, type FieldType } from "../../../../generated/prisma";

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
      cursor:  z.number().int().min(0).optional(), // offset-based cursor
      limit:   z.number().int().min(1).max(1000).default(100),
    }))
    .query(async ({ ctx, input }) => {
      const { tableId, viewId, cursor, limit } = input;
      const offset = cursor ?? 0;

      const fields = await ctx.db.field.findMany({
        where: { tableId },
        select: { id: true, name: true, type: true, tableId: true, position: true },
      });

      // Load view config if provided
      let sorts: { fieldId: string; direction: "asc" | "desc"; order: number }[] = [];
      const filterConditions: Prisma.RecordWhereInput[] = [];

      if (viewId) {
        const view = await ctx.db.view.findUnique({
          where: { id: viewId },
          include: {
            filters:      { where: { groupId: null } }, // ungrouped (legacy AND)
            filterGroups: { include: { filters: true }, orderBy: { position: "asc" } },
            sorts:        { orderBy: { order: "asc" } },
          },
        });

        if (view) {
          function isActive(f: ViewFilter) {
            if (!f.fieldId) return false;
            if (["is_empty", "is_not_empty"].includes(f.operator ?? "")) return true;
            return f.value !== null && f.value !== undefined;
          }

          // Build ordered blocks: ungrouped first (always AND), then groups in position order
          type Block = { cond: Prisma.RecordWhereInput; connector: "and" | "or" };
          const blocks: Block[] = [];

          // Ungrouped filters — conjunction determined by view.filterConjunction
          const activeUngrouped = view.filters.filter(isActive);
          if (activeUngrouped.length > 0) {
            const conds = activeUngrouped
              .map((f) => {
                const field = fields.find((fld) => fld.id === f.fieldId);
                if (!field) return null;
                return buildFilterCondition(f, field);
              })
              .filter((c): c is Prisma.RecordWhereInput => !!c && Object.keys(c).length > 0);
            if (conds.length > 0) {
              const ungroupedCond = (view as { filterConjunction?: string }).filterConjunction === "or"
                ? { OR: conds } : { AND: conds };
              blocks.push({ cond: ungroupedCond, connector: "and" });
            }
          }

          // Grouped filters — each group has its own connector to items above
          for (const group of view.filterGroups) {
            const activeFilters = group.filters.filter(isActive);
            if (activeFilters.length === 0) continue;
            const conds = activeFilters
              .map((f) => {
                const field = fields.find((fld) => fld.id === f.fieldId);
                if (!field) return null;
                return buildFilterCondition(f, field);
              })
              .filter((c): c is Prisma.RecordWhereInput => !!c && Object.keys(c).length > 0);
            if (conds.length === 0) continue;
            const groupCond = group.conjunction === "or" ? { OR: conds } : { AND: conds };
            blocks.push({ cond: groupCond, connector: (group.connector ?? "and") as "and" | "or" });
          }

          // Chain blocks left-to-right respecting connectors
          if (blocks.length > 0) {
            let chained = blocks[0]!.cond;
            for (let i = 1; i < blocks.length; i++) {
              const { cond, connector } = blocks[i]!;
              if (connector === "or") {
                chained = { OR: [chained, cond] };
              } else if (Array.isArray((chained as { AND?: unknown }).AND)) {
                chained = { AND: [...(chained as { AND: Prisma.RecordWhereInput[] }).AND, cond] };
              } else {
                chained = { AND: [chained, cond] };
              }
            }
            filterConditions.push(chained);
          }

          sorts = view.sorts.map((s) => ({
            fieldId:   s.fieldId,
            direction: s.direction,
            order:     s.order ?? 0,
          }));
        }
      }

      const where: Prisma.RecordWhereInput = { tableId };

      if (filterConditions.length > 0) {
        where.AND = filterConditions;
      }

      // Server-side search across text cells
      if (input.search) {
        const searchCondition: Prisma.RecordWhereInput = {
          cells: {
            some: {
              valueText: { contains: input.search, mode: "insensitive" },
            },
          },
        };
        where.AND = where.AND
          ? [...(Array.isArray(where.AND) ? where.AND : [where.AND]), searchCondition]
          : [searchCondition];
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
        skip:   offset,
      });

      let nextCursor: number | undefined;
      if (records.length > limit) {
        records.pop();
        nextCursor = offset + limit;
      }

      return { records, nextCursor };
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

  seedFake: publicProcedure
    .input(z.object({
      tableId: z.string().uuid(),
      count:   z.number().int().min(1).max(100_000),
    }))
    .mutation(async ({ ctx, input }) => {
      const { faker } = await import("@faker-js/faker");
      const { tableId, count } = input;

      const fields = await ctx.db.field.findMany({ where: { tableId } });

      const maxPos = await ctx.db.record.aggregate({
        where: { tableId },
        _max: { position: true },
      });
      let pos = (maxPos._max.position ?? -1) + 1;

      const BATCH = 500;
      let created = 0;

      while (created < count) {
        const batchSize = Math.min(BATCH, count - created);

        // Generate UUIDs for records upfront so we can create cells without a second query
        const { randomUUID } = await import("crypto");
        const recordIds = Array.from({ length: batchSize }, () => randomUUID());

        await ctx.db.record.createMany({
          data: recordIds.map((id, i) => ({
            id,
            tableId,
            position: pos + i,
          })),
        });

        const cellData = recordIds.flatMap((recordId) =>
          fields.map((field) => {
            if (field.type === "number") {
              return {
                recordId,
                fieldId: field.id,
                valueText: null,
                valueNumber: parseFloat(faker.finance.amount({ min: 0, max: 100_000, dec: 2 })),
              };
            } else {
              const text = field.name.toLowerCase().includes("name")
                ? faker.person.fullName()
                : field.name.toLowerCase().includes("note") || field.name.toLowerCase().includes("desc")
                ? faker.lorem.sentence()
                : faker.lorem.words({ min: 1, max: 4 });
              return {
                recordId,
                fieldId: field.id,
                valueText: text,
                valueNumber: null,
              };
            }
          })
        );

        await ctx.db.cellValue.createMany({ data: cellData });

        pos += batchSize;
        created += batchSize;
      }

      return { count };
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

  deleteByTable: publicProcedure
    .input(z.object({ tableId: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.record.deleteMany({ where: { tableId: input.tableId } });
    }),

  reorder: publicProcedure
    .input(z.object({
      tableId: z.string().uuid(),
      orderedIds: z.array(z.string().uuid()),
    }))
    .mutation(async ({ ctx, input }): Promise<void> => {
      await ctx.db.$transaction(
        input.orderedIds.map((id, idx) =>
          ctx.db.record.update({ where: { id }, data: { position: idx } })
        )
      );
    }),
});
