// server/api/routers/cell.ts

import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { type FieldType } from "../../../../generated/prisma";

function mapValue(fieldType: FieldType, value: unknown) {
  if (value === null || value === undefined) {
    return {
      valueText: null,
      valueNumber: null,
    };
  }

  if (fieldType === "number") {
    return {
      valueText: null,
      valueNumber: typeof value === "number" ? value : Number(value),
    };
  }

  if (fieldType === "text") {
    return {
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      valueText: String(value),
      valueNumber: null,
    };
  }
}

const CellValueSchema = z.union([z.string(), z.number(), z.null()]);

export const cellRouter = createTRPCRouter({
  update: publicProcedure
    .input(
      z.object({
        recordId: z.string().uuid(),
        fieldId:  z.string().uuid(),
        value:    CellValueSchema,
      })
    )
    .mutation(async ({ ctx, input }) => {
      const field = await ctx.db.field.findUnique({ where: { id: input.fieldId } });
      const mapped = mapValue(field!.type, input.value);

      // upsert cell
      const cell = await ctx.db.cellValue.upsert({
        where: { recordId_fieldId: { recordId: input.recordId, fieldId: input.fieldId } },
        create: { recordId: input.recordId, fieldId: input.fieldId, ...mapped },
        update: { ...mapped },
      });

      // check if this field is used in sorting
      const sort = await ctx.db.viewSort.findFirst({
        where: {
          fieldId: input.fieldId,
        },
      });

      // update Record if needed
      if (sort && field) {
        await ctx.db.record.update({
          where: { id: input.recordId },
          data: {
            sortValueText:
              field.type === "text"
                ? (input.value as string) ?? null
                : null,
            sortValueNumber:
              field.type === "number"
                ? Number(input.value) || null
                : null,
          },
        });
      }

      return cell;
    }),

  bulkUpdate: publicProcedure
    .input(
      z.object({
        cells: z
          .array(
            z.object({
              recordId: z.string().uuid(),
              fieldId:  z.string().uuid(),
              value:    CellValueSchema,
            })
          )
          .min(1)
          .max(1000),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const fieldIds = [...new Set(input.cells.map(c => c.fieldId))];
      const fields = await ctx.db.field.findMany({ where: { id: { in: fieldIds } } });
      const fieldMap = new Map(fields.map(f => [f.id, f.type]));
      
      return ctx.db.$transaction(async (tx) => {
      // get sorted fields ONCE
      const sortedFieldIds = new Set(
        (await tx.viewSort.findMany()).map((s) => s.fieldId)
      );

      const results = [];

      for (const c of input.cells) {
        const fieldType = fieldMap.get(c.fieldId)!;
        const mapped = mapValue(fieldType, c.value);

        // upsert cell
        const cell = await tx.cellValue.upsert({
          where: {
            recordId_fieldId: {
              recordId: c.recordId,
              fieldId: c.fieldId,
            },
          },
          create: {
            recordId: c.recordId,
            fieldId: c.fieldId,
            ...mapped,
          },
          update: { ...mapped },
        });

        // update Record sort values if needed
        if (sortedFieldIds.has(c.fieldId)) {
          await tx.record.update({
            where: { id: c.recordId },
            data: {
              sortValueText:
                fieldType === "text" ? (c.value as string) ?? null : null,
              sortValueNumber:
                fieldType === "number" ? Number(c.value) || null : null,
            },
          });
        }

        results.push(cell);
      }

      return results;
    });
    }),
});