// server/api/routers/cell.ts

import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";
import { Prisma } from "../../../../generated/prisma";

function toJsonValue(
  value: string | number | null
): Prisma.NullableJsonNullValueInput | Prisma.InputJsonValue {
  if (value === null) return Prisma.DbNull; 
  return value;
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
      const value = toJsonValue(input.value);
      return ctx.db.cellValue.upsert({
        where:  { recordId_fieldId: { recordId: input.recordId, fieldId: input.fieldId } },
        create: { recordId: input.recordId, fieldId: input.fieldId, value },
        update: { value },
      });
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
      return ctx.db.$transaction(
        input.cells.map((c) => {        
          const value = toJsonValue(c.value);
          return ctx.db.cellValue.upsert({
            where:  { recordId_fieldId: { recordId: c.recordId, fieldId: c.fieldId } },
            create: { recordId: c.recordId, fieldId: c.fieldId, value },
            update: { value },
          })
        })
      );
    }),
});