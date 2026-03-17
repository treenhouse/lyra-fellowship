// src/server/api/routers/record.ts
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Prisma } from "../../../../generated/prisma";

function toJsonValue(
  value: string | number | null
): Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue {
  if (value === null) return Prisma.DbNull;
  return value;
}

export const recordRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({
      tableId: z.string().uuid(),
      viewId:  z.string().uuid().optional(),
      cursor:  z.string().uuid().optional(),
      limit:   z.number().int().min(1).max(1000).default(100),
    }))
    .query(async ({ ctx, input }) => {
      const { tableId, viewId, cursor, limit } = input;

      // Load view config if provided
      let filters: { fieldId: string; value: unknown }[] = [];
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
          filters = view.filters
            .filter((f) => f.fieldId && f.value !== null && f.value !== undefined)
            .map((f) => ({ fieldId: f.fieldId!, value: f.value }));

          sorts = view.sorts.map((s) => ({
            fieldId:   s.fieldId,
            direction: s.direction,
            order:     s.order ?? 0,
          }));
        }
      }

      // Build WHERE — filter by matching cell values
      // Each filter requires a matching cell for that field
      const where: Prisma.RecordWhereInput = { tableId };

      if (filters.length > 0) {
        // Cast each filter clause to Prisma.RecordWhereInput so the AND
        // array is the correct type. We also cast the equals value to
        // Prisma.InputJsonValue to satisfy the Prisma typings.
        where.AND = filters.map((f) => ({
          cells: {
            some: {
              fieldId: f.fieldId,
              value: { equals: f.value as Prisma.InputJsonValue },
            },
          },
        })) as Prisma.RecordWhereInput[];
      }

      // Fetch records — we do app-level sorting since cell values are in a
      // related table (pure SQL ordering on JSON across a join is painful)
      const records = await ctx.db.record.findMany({
        where,
        include: { cells: true },
        // Default DB order — we'll re-sort in JS if view sorts exist
        orderBy: [{ position: "asc" }, { createdAt: "asc" }],
        take:   sorts.length > 0 ? undefined : limit + 1, // skip pagination when sorting
        cursor: cursor && sorts.length === 0 ? { id: cursor } : undefined,
        skip:   cursor && sorts.length === 0 ? 1 : 0,
      });

      // App-level sort by cell values
      let sorted = records;
      if (sorts.length > 0) {
        sorted = [...records].sort((a, b) => {
          for (const sort of sorts) {
            const aCell = a.cells.find((c) => c.fieldId === sort.fieldId);
            const bCell = b.cells.find((c) => c.fieldId === sort.fieldId);
            const aVal  = aCell?.value ?? "";
            const bVal  = bCell?.value ?? "";

            // Numeric comparison if both are numbers
            const aNum = Number(aVal);
            const bNum = Number(bVal);
            const isNum = !isNaN(aNum) && !isNaN(bNum);

            let cmp = 0;
            if (isNum) {
              cmp = aNum - bNum;
            } else {
              // eslint-disable-next-line @typescript-eslint/no-base-to-string
              cmp = String(aVal).localeCompare(String(bVal));
            }

            if (cmp !== 0) return sort.direction === "asc" ? cmp : -cmp;
          }
          return 0;
        });

        // Apply pagination after sort
        const start = cursor ? sorted.findIndex((r) => r.id === cursor) + 1 : 0;
        sorted = sorted.slice(start, start + limit + 1);
      }

      let nextCursor: string | undefined;
      if (sorted.length > limit) {
        nextCursor = sorted.pop()!.id;
      }

      return { records: sorted, nextCursor };
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

      return ctx.db.record.create({
        data: {
          tableId: input.tableId,
          position: (maxPos._max.position ?? -1) + 1,
          cells: input.cells
            ? {
                create: input.cells.map((c) => ({
                  fieldId: c.fieldId,
                  value: toJsonValue(c.value), 
                })),
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