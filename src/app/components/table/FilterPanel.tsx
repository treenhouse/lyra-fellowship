"use client";

import { Plus, X } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta = RouterOutputs["table"]["getById"];
type FieldRow      = TableWithMeta["fields"][number];
type ViewConfig    = NonNullable<RouterOutputs["view"]["getWithConfig"]>;
type ActiveFilter  = ViewConfig["filters"][number];

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

  const upsertFilter = api.view.upsertFilter.useMutation({
    onMutate: async (input) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const previous = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return {
          ...old,
          filters: old.filters.map((f) =>
            f.id === input.id
              ? { ...f, operator: input.operator, fieldId: input.fieldId, value: input.value === undefined ? f.value : input.value }
              : f
          ),
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.view.getWithConfig.setData({ id: viewId }, context?.previous);
    },
    onSuccess: () => {
      void utils.view.getWithConfig.invalidate({ id: viewId });
      void utils.record.list.invalidate({ tableId, viewId });
    },
  });

  const deleteFilter = api.view.deleteFilter.useMutation({
    onMutate: async ({ id }) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const previous = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, filters: old.filters.filter((f) => f.id !== id) };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.view.getWithConfig.setData({ id: viewId }, context?.previous);
    },
    onSuccess: () => {
      void utils.view.getWithConfig.invalidate({ id: viewId });
      void utils.record.list.invalidate();
    },
  });

  function addFilter() {
    if (!fields[0]) return;
    upsertFilter.mutate({ viewId, fieldId: fields[0].id, operator: "equals", value: "" });
  }

  function updateFilter(
    filter: ActiveFilter,
    patch: { fieldId?: string; operator?: FilterOperator; value?: string | number | null }
  ) {
    const nextOperator = patch.operator ?? (filter.operator as FilterOperator);
    const hasValueChange = "value" in patch;
    const nextValue = hasValueChange ? patch.value : filter.value;
    const mutationValue: string | number | null =
      nextOperator === "is_empty" || nextOperator === "is_not_empty"
        ? null
        : nextValue == null
        ? ""
        : typeof nextValue === "boolean"
        ? String(nextValue)
        : (nextValue as string | number);

    upsertFilter.mutate({
      id: filter.id,
      viewId,
      fieldId: patch.fieldId ?? filter.fieldId ?? fields[0]!.id,
      operator: nextOperator,
      value: mutationValue,
    });
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
          const field = fields.find((f) => f.id === filter.fieldId);
          const defaultFilterValue = (() => {
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
                  defaultValue={defaultFilterValue}
                  onBlur={(e) => updateFilter(filter, { value: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && updateFilter(filter, { value: (e.target as HTMLInputElement).value })}
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