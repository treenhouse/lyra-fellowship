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
      const count = await ctx.db.view.count({ where: { tableId: input.tableId } });
      return ctx.db.view.create({ data: { tableId: input.tableId, name: input.name, position: count } });
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

  reorder: publicProcedure
    .input(z.object({
      tableId: z.string().uuid(),
      orderedIds: z.array(z.string().uuid()),
    }))
    .mutation(async ({ ctx, input }): Promise<void> => {
      await ctx.db.$transaction(
        input.orderedIds.map((id, idx) =>
          ctx.db.view.update({ where: { id }, data: { position: idx } })
        )
      );
    }),

  duplicate: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .mutation(async ({ ctx, input }) => {
      const src = await ctx.db.view.findUnique({
        where: { id: input.id },
        include: { filters: true, sorts: true },
      });
      if (!src) throw new TRPCError({ code: "NOT_FOUND" });

      const count = await ctx.db.view.count({ where: { tableId: src.tableId } });
      return ctx.db.view.create({
        data: {
          tableId:  src.tableId,
          name:     `${src.name} (copy)`,
          position: count,
          filters: {
            create: src.filters.map(({ viewId: _v, id: _i, value, ...f }) => ({
              ...f,
              value: value === null ? Prisma.DbNull : value ?? Prisma.DbNull,
            })),
          },
          sorts: { create: src.sorts.map(({ viewId: _v, id: _i, ...s }) => s) },
        },
        select: { id: true, tableId: true, name: true, position: true, createdAt: true },
      });
    }),

  upsertFilter: publicProcedure
  .input(
    z.object({
      id:       z.string().uuid(),
      viewId:   z.string().uuid(),
      fieldId:  z.string().uuid(),
      operator: FilterOperatorSchema,
      value:    z.union([z.string(), z.number(), z.null()]).optional(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const value = toJsonValue(input.value);

    return ctx.db.viewFilter.upsert({
      where: { id: input.id },
      update: {
        operator: input.operator,
        value,
        field: { connect: { id: input.fieldId } },
      },
      create: {
        id:       input.id,
        viewId:   input.viewId,
        fieldId:  input.fieldId,
        operator: input.operator,
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