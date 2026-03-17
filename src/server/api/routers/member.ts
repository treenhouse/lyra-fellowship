import { createTRPCRouter, protectedProcedure } from "../trpc";
import { AddMemberSchema, RemoveMemberSchema } from "../schemas";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const memberRouter = createTRPCRouter({
  list: protectedProcedure
    .input(z.object({ baseId: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
    //   await assertBaseAccess(ctx, input.baseId);
      return ctx.db.baseMember.findMany({
        where: { baseId: input.baseId },
        include: { user: { select: { id: true, name: true, email: true } } },
      });
    }),

  add: protectedProcedure
    .input(AddMemberSchema)
    .mutation(async ({ ctx, input }) => {
    //   await assertBaseOwner(ctx, input.baseId);
      const user = await ctx.db.user.findUnique({ where: { email: input.email } });
      if (!user) throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      return ctx.db.baseMember.upsert({
        where: { baseId_userId: { baseId: input.baseId, userId: user.id } },
        create: { baseId: input.baseId, userId: user.id },
        update: {},
      });
    }),

  remove: protectedProcedure
    .input(RemoveMemberSchema)
    .mutation(async ({ ctx, input }) => {
    //   await assertBaseOwner(ctx, input.baseId);
      return ctx.db.baseMember.delete({
        where: { baseId_userId: { baseId: input.baseId, userId: input.userId } },
      });
    }),
});