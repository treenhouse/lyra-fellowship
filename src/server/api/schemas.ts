// src/server/api/schemas.ts
import { z } from "zod";

// enums
export const FieldTypeSchema = z.enum(["text", "number"]);
export const SortDirectionSchema = z.enum(["asc", "desc"]);

// base
export const CreateBaseSchema = z.object({
  name: z.string().min(1).max(255),
});

export const UpdateBaseSchema = CreateBaseSchema.extend({
  id: z.string().uuid(),
});

export const DeleteBaseSchema = z.object({
  id: z.string().uuid(),
});

// table
export const CreateTableSchema = z.object({
  baseId: z.string().uuid(),
  name: z.string().min(1).max(255),
});

export const UpdateTableSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255),
});

export const DeleteTableSchema = z.object({
  id: z.string().uuid(),
});

export const GetTableSchema = z.object({
  id: z.string().uuid(),
});

//field
export const CreateFieldSchema = z.object({
  tableId: z.string().uuid(),
  name: z.string().min(1).max(255),
  type: FieldTypeSchema,
  position: z.number().int().optional(),
});

export const UpdateFieldSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255).optional(),
  type: FieldTypeSchema.optional(),
  position: z.number().int().optional(),
});

export const DeleteFieldSchema = z.object({
  id: z.string().uuid(),
});

export const ReorderFieldsSchema = z.object({
  tableId: z.string().uuid(),
  // ordered list of field IDs
  fieldIds: z.array(z.string().uuid()),
});

// ─── Record ───────────────────────────────────────────────────────────────────

export const CreateRecordSchema = z.object({
  tableId: z.string().uuid(),
  // optionally seed cell values at creation time
  cells: z
    .array(
      z.object({
        fieldId: z.string().uuid(),
        value: z.union([z.string(), z.number(), z.null()]),
      })
    )
    .optional(),
});

export const UpdateRecordSchema = z.object({
  id: z.string().uuid(),
  position: z.number().int().optional(),
});

export const DeleteRecordSchema = z.object({
  id: z.string().uuid(),
});

export const DeleteManyRecordsSchema = z.object({
  ids: z.array(z.string().uuid()).min(1),
});

export const GetRecordsSchema = z.object({
  tableId: z.string().uuid(),
  viewId: z.string().uuid().optional(), // apply view filters/sorts when present
  cursor: z.string().uuid().optional(), // for cursor-based pagination
  limit: z.number().int().min(1).max(500).default(100),
  search: z.string().optional(),        // global text search across cells
});

// ─── Cell ─────────────────────────────────────────────────────────────────────

export const CellValueSchema = z.union([z.string(), z.number(), z.null()]);

export const UpdateCellSchema = z.object({
  recordId: z.string().uuid(),
  fieldId: z.string().uuid(),
  value: CellValueSchema,
});

export const BulkUpdateCellsSchema = z.object({
  cells: z
    .array(
      z.object({
        recordId: z.string().uuid(),
        fieldId: z.string().uuid(),
        value: CellValueSchema,
      })
    )
    .min(1)
    .max(1000),
});

// ─── View ─────────────────────────────────────────────────────────────────────

export const FilterOperatorSchema = z.enum([
  "equals",
  "not_equals",
  "contains",
  "not_contains",
  "is_empty",
  "is_not_empty",
  "gt",
  "gte",
  "lt",
  "lte",
]);

export const CreateViewSchema = z.object({
  tableId: z.string().uuid(),
  name: z.string().min(1).max(255),
});

export const UpdateViewSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1).max(255).optional(),
});

export const DeleteViewSchema = z.object({
  id: z.string().uuid(),
});

export const UpsertViewFilterSchema = z.object({
  id: z.string().uuid().optional(), // omit to create
  viewId: z.string().uuid(),
  fieldId: z.string().uuid(),
  operator: FilterOperatorSchema,
  value: z.union([z.string(), z.number(), z.null()]).optional(),
});

export const DeleteViewFilterSchema = z.object({
  id: z.string().uuid(),
});

export const UpsertViewSortSchema = z.object({
  id: z.string().uuid().optional(),
  viewId: z.string().uuid(),
  fieldId: z.string().uuid(),
  direction: SortDirectionSchema,
  order: z.number().int().optional(),
});

export const DeleteViewSortSchema = z.object({
  id: z.string().uuid(),
});

// ─── Member ───────────────────────────────────────────────────────────────────

export const AddMemberSchema = z.object({
  baseId: z.string().uuid(),
  email: z.string().email(), // look up user by email
});

export const RemoveMemberSchema = z.object({
  baseId: z.string().uuid(),
  userId: z.string().uuid(),
});