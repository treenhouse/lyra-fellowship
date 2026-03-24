"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta    = RouterOutputs["table"]["getById"];
type FieldRow         = TableWithMeta["fields"][number];
type ViewConfig       = NonNullable<RouterOutputs["view"]["getWithConfig"]>;
type SortRow          = ViewConfig["sorts"][number];
type RecordListOutput = RouterOutputs["record"]["list"];
type RecordRow        = RecordListOutput["records"][number];

function applySortsToRecords(
  records: RecordRow[],
  sorts: { fieldId: string; direction: string; order: number | null }[],
  fields: FieldRow[]
): RecordRow[] {
  if (sorts.length === 0) return [...records].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  const ordered = [...sorts].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return [...records].sort((a, b) => {
    for (const sort of ordered) {
      const field = fields.find((f) => f.id === sort.fieldId);
      if (!field) continue;
      const cellA = a.cells.find((c) => c.fieldId === sort.fieldId);
      const cellB = b.cells.find((c) => c.fieldId === sort.fieldId);
      let cmp = 0;
      if (field.type === "number") {
        const va = cellA?.valueNumber ?? null;
        const vb = cellB?.valueNumber ?? null;
        if (va === null && vb === null) cmp = 0;
        else if (va === null) cmp = 1;
        else if (vb === null) cmp = -1;
        else cmp = va - vb;
      } else {
        const va = cellA?.valueText ?? "";
        const vb = cellB?.valueText ?? "";
        cmp = va.localeCompare(vb);
      }
      if (cmp !== 0) return sort.direction === "desc" ? -cmp : cmp;
    }
    return 0;
  });
}

export function SortPanel({
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
  // Local overrides for sort field/direction while mutation is in-flight
  const [localSorts, setLocalSorts] = useState<Record<string, { fieldId?: string; direction?: string }>>({});
  const recordKey = { tableId, viewId, limit: 500 } as const;

  const upsertSort = api.view.upsertSort.useMutation({
    onMutate: async (input) => {
      await Promise.all([
        utils.view.getWithConfig.cancel({ id: viewId }),
        utils.record.list.cancel(recordKey),
      ]);
      const prevConfig  = utils.view.getWithConfig.getData({ id: viewId });
      const prevRecords = utils.record.list.getData(recordKey);

      const patchedSort = {
        id:        input.id ?? `temp-${Date.now()}`,
        viewId,
        fieldId:   input.fieldId,
        direction: input.direction,
        order:     input.order ?? 0,
        field:     fields.find((f) => f.id === input.fieldId) ?? fields[0]!,
      };
      const currentSorts = prevConfig?.sorts ?? [];
      const newSorts = input.id
        ? currentSorts.map((s) => (s.id === input.id ? patchedSort : s))
        : [...currentSorts, patchedSort];

      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, sorts: newSorts };
      });

      if (prevRecords) {
        utils.record.list.setData(recordKey, (old) => {
          if (!old) return old;
          return { ...old, records: applySortsToRecords(old.records, newSorts, fields) };
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

  const deleteSort = api.view.deleteSort.useMutation({
    onMutate: async ({ id }) => {
      await Promise.all([
        utils.view.getWithConfig.cancel({ id: viewId }),
        utils.record.list.cancel(recordKey),
      ]);
      const prevConfig  = utils.view.getWithConfig.getData({ id: viewId });
      const prevRecords = utils.record.list.getData(recordKey);

      const newSorts = (prevConfig?.sorts ?? []).filter((s) => s.id !== id);

      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, sorts: newSorts };
      });

      if (prevRecords) {
        utils.record.list.setData(recordKey, (old) => {
          if (!old) return old;
          return { ...old, records: applySortsToRecords(old.records, newSorts, fields) };
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

  function addSort() {
    if (!fields[0]) return;
    const alreadySorted = viewConfig?.sorts.map((s) => s.fieldId) ?? [];
    const nextField = fields.find((f) => !alreadySorted.includes(f.id));
    if (!nextField) return;
    upsertSort.mutate({ viewId, fieldId: nextField.id, direction: "asc", order: viewConfig?.sorts.length ?? 0 });
  }

  function handleSortChange(sort: SortRow, patch: { fieldId?: string; direction?: "asc" | "desc" }) {
    const merged = { ...localSorts[sort.id], ...patch };
    setLocalSorts((prev) => ({ ...prev, [sort.id]: merged }));
    upsertSort.mutate({
      id:        sort.id,
      viewId,
      fieldId:   patch.fieldId ?? sort.fieldId,
      direction: patch.direction ?? (sort.direction as "asc" | "desc"),
      order:     sort.order ?? 0,
    });
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
          const local    = localSorts[sort.id] ?? {};
          const fieldId  = local.fieldId  ?? sort.fieldId;
          const direction = local.direction ?? sort.direction;
          const field    = fields.find((f) => f.id === fieldId);
          return (
            <div key={sort.id} className="flex items-center gap-2">
              <span className="text-[11px] text-gray-400 w-8 text-right flex-shrink-0">
                {i === 0 ? "Sort by" : "Then by"}
              </span>
              <select
                value={fieldId}
                onChange={(e) => handleSortChange(sort, { fieldId: e.target.value })}
                className="flex-1 px-2 py-1.5 rounded-lg border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                {fields.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
              </select>
              <select
                value={direction}
                onChange={(e) => handleSortChange(sort, { direction: e.target.value as "asc" | "desc" })}
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
