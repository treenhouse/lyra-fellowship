import z from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure, type Context } from "../trpc";
// import { CreateTableSchema, UpdateTableSchema, DeleteTableSchema, GetTableSchema } from "../schemas";
import { TRPCError } from "@trpc/server";

export const tableRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const table = await ctx.db.table.findUnique({
        where: { id: input.id },
        include: {
          fields: { orderBy: { position: "asc" } },
          views: { orderBy: { createdAt: "asc" } },
        },
      });
      if (!table) throw new TRPCError({ code: "NOT_FOUND" });
      return table;
    }),

  create: publicProcedure
    .input(z.object({ baseId: z.string().uuid(), name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      const table = await ctx.db.table.create({
        data: {
          name: input.name,
          baseId: input.baseId,
          fields: {
            create: [
              { name: "Name",  type: "text",   position: 0 },
              { name: "Notes", type: "text",   position: 1 },
              { name: "Value", type: "number", position: 2 },
            ],
          },
          views: { create: [{ name: "Grid view" }] },
        },
        include: { fields: true, views: true },
      });
      await ctx.db.record.createMany({
        data: [
          { tableId: table.id, position: 0 },
          { tableId: table.id, position: 1 },
          { tableId: table.id, position: 2 },
        ],
      });
      return table;
    }),

  update: publicProcedure
    .input(z.object({ id: z.string().uuid(), name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.table.update({ where: { id: input.id }, data: { name: input.name } });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.table.delete({ where: { id: input.id } });
      }),
});

// async function assertBaseMember(ctx: Context, baseId: string) {
//   const base = await ctx.db.base.findFirst({
//     where: {
//       id: baseId,
//       OR: [
//         { ownerId: ctx.session?.user.id },
//         { members: { some: { userId: ctx.session?.user.id } } },
//       ],
//     },
//   });
//   if (!base) throw new TRPCError({ code: "FORBIDDEN" });
// }

// async function assertTableAccess(ctx: Context, tableId: string) {
//   const table = await ctx.db.table.findFirst({
//     where: {
//       id: tableId,
//       base: {
//         OR: [
//           { ownerId: ctx.session?.user.id },
//           { members: { some: { userId: ctx.session?.user.id } } },
//         ],
//       },
//     },
//   });
//   if (!table) throw new TRPCError({ code: "FORBIDDEN" });
// }