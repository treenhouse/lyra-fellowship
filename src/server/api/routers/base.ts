// src/server/api/routers/base.ts
import { createTRPCRouter, protectedProcedure, type Context } from "../trpc";
import {
  CreateBaseSchema,
  UpdateBaseSchema,
  DeleteBaseSchema,
} from "../schemas";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const baseRouter = createTRPCRouter({
  // List all bases the calling user owns or is a member of
  list: protectedProcedure
    .query(async ({ ctx }) => {
      return ctx.db.base.findMany({
        // where: {
        //   OR: [
        //     { ownerId: ctx.session.user.id },
        //     { members: { some: { userId: ctx.session.user.id } } },
        //   ],
        // },
        include: { _count: { select: { tables: true } } },
        orderBy: { createdAt: "desc" },
      });
    }),

  // Get a single base with its tables
  getById: protectedProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const base = await ctx.db.base.findFirst({
        where: {
          id: input.id
          // OR: [
          //   { ownerId: ctx.session.user.id },
          //   { members: { some: { userId: ctx.session.user.id } } },
          // ],
        },
        include: { tables: { orderBy: { createdAt: "asc" } } },
      });
      if (!base) throw new TRPCError({ code: "NOT_FOUND" });
      return base;
    }),

  create: protectedProcedure
    .input(CreateBaseSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.base.create({
        data: { 
          name: input.name
          // ownerId: ctx.session.user.id 
        },
      });
    }),

  update: protectedProcedure
    .input(UpdateBaseSchema)
    .mutation(async ({ ctx, input }) => {
      // await assertBaseOwner(ctx, input.id);
      return ctx.db.base.update({
        where: { id: input.id },
        data: { name: input.name },
      });
    }),

  delete: protectedProcedure
    .input(DeleteBaseSchema)
    .mutation(async ({ ctx, input }) => {
      // await assertBaseOwner(ctx, input.id);
      return ctx.db.base.delete({ where: { id: input.id } });
    }),
});

// !!!! context sessions are not validated by the middleware for non protected procedures
// async function assertBaseOwner(ctx: Context, baseId: string) {
//   const base = await ctx.db.base.findUnique({ where: { id: baseId } });
//   if (base?.ownerId !== ctx.session?.user.id)
//     throw new TRPCError({ code: "FORBIDDEN" });
// }