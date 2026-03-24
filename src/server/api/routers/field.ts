import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

const FieldTypeSchema = z.enum(["text", "number"]);

export const fieldRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        tableId:  z.string().uuid(),
        name:     z.string().min(1).max(100),
        type:     FieldTypeSchema,
        position: z.number().int().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const maxPos = await ctx.db.field.aggregate({
        where: { tableId: input.tableId },
        _max: { position: true },
      });
      return ctx.db.field.create({
        data: {
          ...input,
          position: input.position ?? (maxPos._max.position ?? -1) + 1,
        },
      });
    }),

  update: publicProcedure
    .input(
      z.object({
        id:       z.string().uuid(),
        name:     z.string().min(1).max(100).optional(),
        type:     FieldTypeSchema.optional(),
        position: z.number().int().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;
      return ctx.db.field.update({ where: { id }, data });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.field.delete({ where: { id: input.id } });
    }),

  reorder: publicProcedure
    .input(z.object({ tableId: z.string().uuid(), fieldIds: z.array(z.string().uuid()) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.$transaction(
        input.fieldIds.map((id, index) =>
          ctx.db.field.update({ where: { id }, data: { position: index } })
        )
      );
      return { success: true };
    }),
});
