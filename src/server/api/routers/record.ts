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
    .input(
      z.object({
        tableId: z.string().uuid(),
        viewId: z.string().uuid().optional(),
        cursor: z.string().uuid().optional(),
        limit: z.number().int().min(1).max(1000).default(100),
        search: z.string().optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { tableId, cursor, limit } = input;

      const records = await ctx.db.record.findMany({
        where: { tableId },
        include: { cells: true },
        orderBy: [{ position: "asc" }, { createdAt: "asc" }],
        take: limit + 1,
        cursor: cursor ? { id: cursor } : undefined,
        skip: cursor ? 1 : 0,
      });

      let nextCursor: string | undefined;
      if (records.length > limit) {
        nextCursor = records.pop()!.id;
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