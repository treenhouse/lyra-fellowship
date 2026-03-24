/* eslint-disable @typescript-eslint/no-base-to-string */
"use client";

import { useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta    = RouterOutputs["table"]["getById"];
type FieldRow         = TableWithMeta["fields"][number];
type ViewConfig       = NonNullable<RouterOutputs["view"]["getWithConfig"]>;
type ActiveFilter     = ViewConfig["filters"][number];
type RecordListOutput = RouterOutputs["record"]["list"];
type RecordRow        = RecordListOutput["records"][number];

const FILTER_OPERATORS = [
  { value: "equals",       label: "is"               },
  { value: "not_equals",   label: "is not"           },
  { value: "contains",     label: "contains"         },
  { value: "not_contains", label: "does not contain" },
  { value: "gt",           label: "greater than"     },
  { value: "lt",           label: "less than"        },
  { value: "is_empty",     label: "is empty"         },
  { value: "is_not_empty", label: "is not empty"     },
] as const;

type FilterOperator = typeof FILTER_OPERATORS[number]["value"];

function applyFiltersToRecords(
  records: RecordRow[],
  filters: { fieldId: string | null; operator: string | null; value: unknown }[],
  fields: FieldRow[]
): RecordRow[] {
  const active = filters.filter((f) => {
    if (!f.fieldId) return false;
    if (["is_empty", "is_not_empty"].includes(f.operator ?? "")) return true;
    return f.value !== null && f.value !== undefined && f.value !== "";
  });
  if (active.length === 0) return records;

  return records.filter((record) =>
    active.every((f) => {
      const field = fields.find((fl) => fl.id === f.fieldId);
      if (!field) return true;
      const cell   = record.cells.find((c) => c.fieldId === f.fieldId);
      const textVal = cell?.valueText ?? null;
      const numVal  = cell?.valueNumber ?? null;
      const fStr    = f.value == null ? "" : String(f.value);
      const fNum    = f.value == null || f.value === "" ? null : Number(f.value);

      switch (f.operator) {
        case "equals":      return field.type === "number" ? numVal === fNum : textVal === fStr;
        case "not_equals":  return field.type === "number" ? numVal !== fNum : textVal !== fStr;
        case "contains":    return (textVal ?? "").toLowerCase().includes(fStr.toLowerCase());
        case "not_contains": return !(textVal ?? "").toLowerCase().includes(fStr.toLowerCase());
        case "gt":          return fNum !== null && numVal !== null && numVal > fNum;
        case "lt":          return fNum !== null && numVal !== null && numVal < fNum;
        case "is_empty":    return cell == null || (textVal === null && numVal === null);
        case "is_not_empty": return cell != null && (textVal !== null || numVal !== null);
        default:            return true;
      }
    })
  );
}

export function FilterPanel({
  viewId,
  tableId,
  fields,
  onClose,
}: {
  viewId: string;
  tableId: string;
  fields: FieldRow[];
  onClose: () => void;
}) {
  const utils = api.useUtils();
  const { data: viewConfig } = api.view.getWithConfig.useQuery({ id: viewId });
  const [localValues, setLocalValues] = useState<Record<string, string>>({});
  const debounceRefs = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const recordKey = { tableId, viewId, limit: 500 } as const;

  const upsertFilter = api.view.upsertFilter.useMutation({
    onMutate: async (input) => {
      await Promise.all([
        utils.view.getWithConfig.cancel({ id: viewId }),
        utils.record.list.cancel(recordKey),
      ]);
      const prevConfig  = utils.view.getWithConfig.getData({ id: viewId });
      const prevRecords = utils.record.list.getData(recordKey);

      const patchedFilter = {
        id:       input.id!,
        viewId,
        fieldId:  input.fieldId,
        operator: input.operator,
        value:    input.value === undefined ? null : input.value,
        position: null,
        field:    null,
      };
      const currentFilters = prevConfig?.filters ?? [];
      const exists = currentFilters.some((f) => f.id === input.id);
      const newFilters = exists
        ? currentFilters.map((f) => (f.id === input.id ? patchedFilter : f))
        : [...currentFilters, patchedFilter];

      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, filters: newFilters };
      });

      if (prevRecords) {
        utils.record.list.setData(recordKey, (old) => {
          if (!old) return old;
          return { ...old, records: applyFiltersToRecords(old.records, newFilters, fields) };
        });
      }

      return { prevConfig, prevRecords };
    },
    onError: (_err, _input, context) => {
      utils.view.getWithConfig.setData({ id: viewId }, context?.prevConfig);
      utils.record.list.setData(recordKey, context?.prevRecords);
    },
    onSuccess: () => {
      void utils.view.getWithConfig.invalidate({ id: viewId });
      void utils.record.list.invalidate({ tableId, viewId });
    },
  });

  const deleteFilter = api.view.deleteFilter.useMutation({
    onMutate: async ({ id }) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const prevConfig = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, filters: old.filters.filter((f) => f.id !== id) };
      });
      return { prevConfig };
    },
    onError: (_err, _input, context) => {
      utils.view.getWithConfig.setData({ id: viewId }, context?.prevConfig);
    },
    onSuccess: () => {
      void utils.view.getWithConfig.invalidate({ id: viewId });
      void utils.record.list.invalidate({ tableId, viewId });
    },
  });

  function addFilter() {
    if (!fields[0]) return;
    upsertFilter.mutate({ id: crypto.randomUUID(), viewId, fieldId: fields[0].id, operator: "equals", value: "" });
  }

  function updateFilter(
    filter: ActiveFilter,
    patch: { fieldId?: string; operator?: FilterOperator; value?: string | number | null }
  ) {
    const nextOperator   = patch.operator ?? (filter.operator as FilterOperator);
    const hasValueChange = "value" in patch;
    const nextValue      = hasValueChange ? patch.value : filter.value;
    const mutationValue: string | number | null =
      nextOperator === "is_empty" || nextOperator === "is_not_empty"
        ? null
        : nextValue == null
        ? ""
        : typeof nextValue === "boolean"
        ? String(nextValue)
        : (nextValue as string | number);

    upsertFilter.mutate({
      id:       filter.id,
      viewId,
      fieldId:  patch.fieldId ?? filter.fieldId ?? fields[0]!.id,
      operator: nextOperator,
      value:    mutationValue,
    });
  }

  function handleValueInput(filter: ActiveFilter, value: string) {
    setLocalValues((prev) => ({ ...prev, [filter.id]: value }));
    clearTimeout(debounceRefs.current[filter.id]);
    debounceRefs.current[filter.id] = setTimeout(() => {
      updateFilter(filter, { value });
    }, 300);
  }

  const filters = viewConfig?.filters ?? [];

  return (
    <div
      data-panel="filter"
      className="absolute top-full left-0 mt-1 z-40 w-[520px] bg-white rounded-xl shadow-xl border border-gray-200 p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-semibold text-gray-700">
          {filters.length === 0 ? "No filters applied" : `${filters.length} filter${filters.length > 1 ? "s" : ""}`}
        </span>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
          <X size={14} />
        </button>
      </div>
      {filters.length === 0 && (
        <p className="text-[12px] text-gray-400 mb-3">
          Show records in this view that match the conditions below.
        </p>
      )}
      <div className="space-y-2 mb-3">
        {filters.map((filter, i) => {
          const needsValue = !["is_empty", "is_not_empty"].includes(filter.operator ?? "equals");
          const field      = fields.find((f) => f.id === filter.fieldId);
          const localVal   = filter.id in localValues
            ? localValues[filter.id]!
            : (() => {
                const v = filter.value;
                if (v == null) return "";
                if (typeof v === "string") return v;
                if (typeof v === "number" || typeof v === "boolean") return String(v);
                try { return JSON.stringify(v); } catch { return ""; }
              })();

          return (
            <div key={filter.id} className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400 w-8 text-right flex-shrink-0">
                {i === 0 ? "Where" : "And"}
              </span>
              <select
                value={filter.fieldId ?? ""}
                onChange={(e) => updateFilter(filter, { fieldId: e.target.value })}
                className="px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {fields.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
              <select
                value={filter.operator ?? "equals"}
                onChange={(e) => updateFilter(filter, { operator: e.target.value as FilterOperator })}
                className="px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {FILTER_OPERATORS.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
              </select>
              {needsValue && (
                <input
                  value={localVal}
                  onChange={(e) => handleValueInput(filter, e.target.value)}
                  placeholder={`Enter ${field?.type === "number" ? "number" : "text"}...`}
                  type={field?.type === "number" ? "number" : "text"}
                  className="flex-1 px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              <button
                onClick={() => deleteFilter.mutate({ id: filter.id })}
                className="p-1 rounded hover:bg-red-50 text-gray-300 hover:text-red-400 flex-shrink-0"
              >
                <X size={13} />
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={addFilter}
        disabled={upsertFilter.isPending}
        className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 font-medium"
      >
        <Plus size={13} /> Add condition
      </button>
    </div>
  );
}
