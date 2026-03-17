// src/server/api/routers/view.ts
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Prisma } from "../../../../generated/prisma";

function toJsonValue(
  value: string | number | null | undefined
): Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue | undefined {
  if (value === undefined) return undefined;
  if (value === null) return Prisma.DbNull;
  return value;
}

const SortDirectionSchema = z.enum(["asc", "desc"]);

export const viewRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(async ({ ctx, input }) => {
      const view = await ctx.db.view.findUnique({
        where: { id: input.id },
        include: {
          filters: { include: { field: true } },
          sorts: { include: { field: true }, orderBy: { order: "asc" } },
        },
      });
      if (!view) throw new TRPCError({ code: "NOT_FOUND" });
      return view;
    }),

  create: publicProcedure
    .input(z.object({ tableId: z.string().uuid(), name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.view.create({ data: input });
    }),

  update: publicProcedure
    .input(z.object({ id: z.string().uuid(), name: z.string().min(1).max(100) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.view.update({ where: { id: input.id }, data: { name: input.name } });
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.view.delete({ where: { id: input.id } });
    }),

  upsertFilter: publicProcedure
    .input(
      z.object({
        id:      z.string().uuid().optional(),
        viewId:  z.string().uuid(),
        fieldId: z.string().uuid(),
        operator: z.string(), 
        value:   z.union([z.string(), z.number(), z.null()]).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const value = toJsonValue(input.value); // ← fixed

      if (input.id) {
        return ctx.db.viewFilter.update({
          where: { id: input.id },
          data: {
            value,
            field: { connect: { id: input.fieldId } },
          },
        });
      }

      return ctx.db.viewFilter.create({
        data: {
          viewId:  input.viewId,
          fieldId: input.fieldId,
          value,
        },
      });
    }),

  deleteFilter: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.viewFilter.delete({ where: { id: input.id } });
    }),

  upsertSort: publicProcedure
    .input(
      z.object({
        id:        z.string().uuid().optional(),
        viewId:    z.string().uuid(),
        fieldId:   z.string().uuid(),
        direction: SortDirectionSchema,
        order:     z.number().int().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.id) {
        return ctx.db.viewSort.update({
          where: { id: input.id },
          data: {
            direction: input.direction,
            order:     input.order,
            field:     { connect: { id: input.fieldId } },
          },
        });
      }

      return ctx.db.viewSort.create({
        data: {
          viewId:    input.viewId,
          fieldId:   input.fieldId,
          direction: input.direction,
          order:     input.order,
        },
      });
    }),

  deleteSort: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.viewSort.delete({ where: { id: input.id } });
    }),

  getWithConfig: publicProcedure
  .input(z.object({ id: z.string().uuid() }))
  .query(async ({ ctx, input }) => {
    return ctx.db.view.findUnique({
      where: { id: input.id },
      include: {
        filters: { include: { field: true } },
        sorts:   { include: { field: true }, orderBy: { order: "asc" } },
      },
    });
  }),
});