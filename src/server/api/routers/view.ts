// src/server/api/routers/view.ts
import { createTRPCRouter, publicProcedure, type Context } from "../trpc";
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
const FilterOperatorSchema = z.enum([
  "equals",
  "not_equals",
  "contains",
  "not_contains",
  "starts_with",
  "ends_with",
  "gt",
  "lt",
  "is_empty",
  "is_not_empty",
]);

async function recomputeSortValues(
  ctx: Context,
  tableId: string,
  fieldId: string
) {
  // 1️⃣ get field type
  const field = await ctx.db.field.findUnique({
    where: { id: fieldId },
  });
  if (!field) throw new Error("Field not found");

  // 2️⃣ get records + relevant cell
  const records = await ctx.db.record.findMany({
    where: { tableId },
    include: {
      cells: {
        where: { fieldId },
      },
    },
  });

  // 3️⃣ update sort cache
  await ctx.db.$transaction(
    records.map((r) => {
      const cell = r.cells[0];

      return ctx.db.record.update({
        where: { id: r.id },
        data: {
          sortValueText:
            field.type === "text" ? cell?.valueText ?? null : null,
          sortValueNumber:
            field.type === "number" ? cell?.valueNumber ?? null : null,
        },
      });
    })
  );
}

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
      operator: FilterOperatorSchema,
      value:   z.union([z.string(), z.number(), z.null()]).optional(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const value = toJsonValue(input.value);
    console.log("UPSERT FILTER", { input, value });

    if (input.id) {
      return ctx.db.viewFilter.update({
        where: { id: input.id },
        data: {
          operator: input.operator,  // Add this
          value,
          field: { connect: { id: input.fieldId } },
        },
      });
    }

    return ctx.db.viewFilter.create({
      data: {
        viewId:  input.viewId,
        fieldId: input.fieldId,
        operator: input.operator,  // Add this
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
    // 1️⃣ upsert sort
    const sort = input.id
      ? await ctx.db.viewSort.update({
          where: { id: input.id },
          data: {
            direction: input.direction,
            order:     input.order,
            field:     { connect: { id: input.fieldId } },
          },
        })
      : await ctx.db.viewSort.create({
          data: {
            viewId:    input.viewId,
            fieldId:   input.fieldId,
            direction: input.direction,
            order:     input.order,
          },
        });

    // 2️⃣ get view → need tableId
    const view = await ctx.db.view.findUnique({
      where: { id: input.viewId },
    });
    if (!view) throw new Error("View not found");

    // 3️⃣ recompute ONLY for primary sort (order = 0 or smallest)
    const primarySort = await ctx.db.viewSort.findFirst({
      where: { viewId: input.viewId },
      orderBy: { order: "asc" },
    });

    if (primarySort) {
      await recomputeSortValues(ctx, view.tableId, primarySort.fieldId);
    }

    return sort;
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