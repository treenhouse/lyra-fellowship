"use client";

import { Plus, X } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta = RouterOutputs["table"]["getById"];
type FieldRow      = TableWithMeta["fields"][number];

export function SortPanel({
  viewId,
  fields,
  onClose,
}: {
  viewId: string;
  fields: FieldRow[];
  onClose: () => void;
}) {
  const utils = api.useUtils();
  const { data: viewConfig } = api.view.getWithConfig.useQuery({ id: viewId });

  const upsertSort = api.view.upsertSort.useMutation({
    onMutate: async (input) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const previous = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        if (input.id) {
          return {
            ...old,
            sorts: old.sorts.map((s) =>
              s.id === input.id
                ? { ...s, fieldId: input.fieldId, direction: input.direction, order: input.order ?? s.order }
                : s
            ),
          };
        }
        return old;
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

  const deleteSort = api.view.deleteSort.useMutation({
    onMutate: async ({ id }) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const previous = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, sorts: old.sorts.filter((s) => s.id !== id) };
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

  function addSort() {
    if (!fields[0]) return;
    const alreadySorted = viewConfig?.sorts.map((s) => s.fieldId) ?? [];
    const nextField = fields.find((f) => !alreadySorted.includes(f.id));
    if (!nextField) return;
    upsertSort.mutate({ viewId, fieldId: nextField.id, direction: "asc", order: viewConfig?.sorts.length ?? 0 });
  }

  const sorts = viewConfig?.sorts ?? [];

  return (
    <div
      data-panel="sort"
      className="absolute top-full left-0 mt-1 z-40 w-[400px] bg-white rounded-xl shadow-xl border border-gray-200 p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[13px] font-semibold text-gray-700">
          {sorts.length === 0 ? "No sorts applied" : `${sorts.length} sort${sorts.length > 1 ? "s" : ""}`}
        </span>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
          <X size={14} />
        </button>
      </div>
      {sorts.length === 0 && (
        <p className="text-[12px] text-gray-400 mb-3">Sort records in this view by one or more fields.</p>
      )}
      <div className="space-y-2 mb-3">
        {sorts.map((sort, i) => {
          const field = fields.find((f) => f.id === sort.fieldId);
          return (
            <div key={sort.id} className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400 w-8 text-right flex-shrink-0">
                {i === 0 ? "Sort by" : "Then by"}
              </span>
              <select
                value={sort.fieldId}
                onChange={(e) => upsertSort.mutate({ id: sort.id, viewId, fieldId: e.target.value, direction: sort.direction, order: sort.order ?? i })}
                className="flex-1 px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {fields.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
              <select
                value={sort.direction}
                onChange={(e) => upsertSort.mutate({ id: sort.id, viewId, fieldId: sort.fieldId, direction: e.target.value as "asc" | "desc", order: sort.order ?? i })}
                className="px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="asc">{field?.type === "number" ? "1 → 9" : "A → Z"}</option>
                <option value="desc">{field?.type === "number" ? "9 → 1" : "Z → A"}</option>
              </select>
              <button
                onClick={() => deleteSort.mutate({ id: sort.id })}
                className="p-1 rounded hover:bg-red-50 text-gray-300 hover:text-red-400 flex-shrink-0"
              >
                <X size={13} />
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={addSort}
        disabled={upsertSort.isPending || sorts.length >= fields.length}
        className="flex items-center gap-1.5 text-[12px] text-blue-600 hover:text-blue-700 font-medium disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <Plus size={13} /> Add sort
      </button>
    </div>
  );
}