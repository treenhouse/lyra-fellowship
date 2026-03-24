// src/server/api/routers/base.ts
import { createTRPCRouter, protectedProcedure } from "../trpc";
import {
  CreateBaseSchema,
  UpdateBaseSchema,
  DeleteBaseSchema,
} from "../schemas";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const baseRouter = createTRPCRouter({
  list: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.db.base.findMany({
        where: { ownerId: ctx.session.user.id },
        include: { _count: { select: { tables: true } } },
        orderBy: { createdAt: "desc" },
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const base = await ctx.db.base.findFirst({
        where: { id: input.id, ownerId: ctx.session.user.id },
        include: { tables: { orderBy: { createdAt: "asc" } } },
      });
      if (!base) throw new TRPCError({ code: "NOT_FOUND" });
      return base;
    }),

  create: protectedProcedure
    .input(CreateBaseSchema)
    .mutation(async ({ ctx, input }) => {
      const base = await ctx.db.base.create({
        data: {
          name: input.name,
          ownerId: ctx.session.user.id,
          tables: {
            create: {
              name: "Table 1",
              fields: {
                create: [
                  { name: "Name",  type: "text",   position: 0 },
                  { name: "Notes", type: "text",   position: 1 },
                  { name: "Value", type: "number", position: 2 },
                ],
              },
              views: { create: [{ name: "Grid view" }] },
            },
          },
        },
        include: { tables: true },
      });
      const firstTable = await ctx.db.table.findFirst({ where: { baseId: base.id }, select: { id: true } });
      const tableId = firstTable!.id;
      await ctx.db.record.createMany({
        data: [
          { tableId, position: 0 },
          { tableId, position: 1 },
          { tableId, position: 2 },
        ],
      });
      return base;
    }),

  update: protectedProcedure
    .input(UpdateBaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.update({
        where: { id: input.id, ownerId: ctx.session.user.id },
        data: { name: input.name },
      });
    }),

  delete: protectedProcedure
    .input(DeleteBaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.delete({ where: { id: input.id, ownerId: ctx.session.user.id } });
    }),
});