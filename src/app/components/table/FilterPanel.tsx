/* eslint-disable @typescript-eslint/no-base-to-string */
"use client";

import { useState, useRef } from "react";
import { Plus, X, Trash2, ChevronDown } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta    = RouterOutputs["table"]["getById"];
type FieldRow         = TableWithMeta["fields"][number];
type ViewConfig       = NonNullable<RouterOutputs["view"]["getWithConfig"]>;
type UngroupedFilter  = ViewConfig["filters"][number];
type FilterGroup      = ViewConfig["filterGroups"][number];
type GroupFilter      = FilterGroup["filters"][number];
type AnyFilter        = UngroupedFilter | GroupFilter;
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

function isActive(f: { fieldId: string | null; operator: string | null; value: unknown }) {
  if (!f.fieldId) return false;
  if (["is_empty", "is_not_empty"].includes(f.operator ?? "")) return true;
  return f.value !== null && f.value !== undefined && f.value !== "";
}

function matchFilter(record: RecordRow, f: AnyFilter, fields: FieldRow[]): boolean {
  const field = fields.find((fl) => fl.id === f.fieldId);
  if (!field) return true;
  const cell    = record.cells.find((c) => c.fieldId === f.fieldId);
  const textVal = cell?.valueText ?? null;
  const numVal  = cell?.valueNumber ?? null;
  const fStr    = f.value == null ? "" : String(f.value);
  const fNum    = f.value == null || f.value === "" ? null : Number(f.value);

  switch (f.operator) {
    case "equals":       return field.type === "number" ? numVal === fNum : textVal === fStr;
    case "not_equals":   return field.type === "number" ? numVal !== fNum : textVal !== fStr;
    case "contains":     return (textVal ?? "").toLowerCase().includes(fStr.toLowerCase());
    case "not_contains": return !(textVal ?? "").toLowerCase().includes(fStr.toLowerCase());
    case "gt":           return fNum !== null && numVal !== null && numVal > fNum;
    case "lt":           return fNum !== null && numVal !== null && numVal < fNum;
    case "is_empty":     return cell == null || (textVal === null && numVal === null);
    case "is_not_empty": return cell != null && (textVal !== null || numVal !== null);
    default:             return true;
  }
}

function applyFiltersToRecords(
  records: RecordRow[],
  ungrouped: UngroupedFilter[],
  groups: FilterGroup[],
  fields: FieldRow[],
  ungroupedConjunction = "and"
): RecordRow[] {
  type Block = { passes: (r: RecordRow) => boolean; connector: "and" | "or" };
  const blocks: Block[] = [];

  const activeUngrouped = ungrouped.filter(isActive);
  if (activeUngrouped.length > 0) {
    blocks.push({
      passes: (r) =>
        ungroupedConjunction === "or"
          ? activeUngrouped.some((f) => matchFilter(r, f, fields))
          : activeUngrouped.every((f) => matchFilter(r, f, fields)),
      connector: "and",
    });
  }

  for (const g of groups) {
    const active = g.filters.filter(isActive);
    if (active.length === 0) continue;
    blocks.push({
      passes: (r) =>
        g.conjunction === "or"
          ? active.some((f) => matchFilter(r, f, fields))
          : active.every((f) => matchFilter(r, f, fields)),
      connector: (g.connector ?? "and") as "and" | "or",
    });
  }

  if (blocks.length === 0) return records;

  return records.filter((record) => {
    let result = blocks[0]!.passes(record);
    for (const block of blocks.slice(1)) {
      if (block.connector === "or") result = result || block.passes(record);
      else result = result && block.passes(record);
    }
    return result;
  });
}

export function FilterPanel({
  viewId,
  tableId,
  fields,
  onClose,
}: {
  viewId:  string;
  tableId: string;
  fields:  FieldRow[];
  onClose: () => void;
}) {
  const utils = api.useUtils();
  const { data: viewConfig } = api.view.getWithConfig.useQuery({ id: viewId });
  const [localValues, setLocalValues] = useState<Record<string, string>>({});
  const debounceRefs = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const recordKey = { tableId, viewId, limit: 500 } as const;

  const ungroupedFilters: UngroupedFilter[] = viewConfig?.filters      ?? [];
  const filterGroups:     FilterGroup[]     = viewConfig?.filterGroups ?? [];
  const ungroupedConjunction = viewConfig?.filterConjunction ?? "and";
  const totalCount = ungroupedFilters.length + filterGroups.reduce((s, g) => s + g.filters.length, 0);
  const hasAnyItems = ungroupedFilters.length > 0 || filterGroups.length > 0;

  // ── Helpers ────────────────────────────────────────────────────────────────

  function getLocalVal(filter: AnyFilter): string {
    if (filter.id in localValues) return localValues[filter.id]!;
    const v = filter.value;
    if (v == null) return "";
    if (typeof v === "string") return v;
    if (typeof v === "number" || typeof v === "boolean") return String(v);
    try { return JSON.stringify(v); } catch { return ""; }
  }

  function buildPatch(config: ViewConfig, patchedFilter: UngroupedFilter, groupId: string | null | undefined): ViewConfig {
    if (groupId) {
      return {
        ...config,
        filterGroups: config.filterGroups.map((g) => {
          if (g.id !== groupId) return g;
          const exists = g.filters.some((f) => f.id === patchedFilter.id);
          return {
            ...g,
            filters: exists
              ? g.filters.map((f) => f.id === patchedFilter.id ? { ...patchedFilter, groupId } as GroupFilter : f)
              : [...g.filters, { ...patchedFilter, groupId } as GroupFilter],
          };
        }),
      };
    }
    const exists = config.filters.some((f) => f.id === patchedFilter.id);
    return {
      ...config,
      filters: exists
        ? config.filters.map((f) => f.id === patchedFilter.id ? patchedFilter : f)
        : [...config.filters, patchedFilter],
    };
  }

  // ── Mutations ──────────────────────────────────────────────────────────────

  const upsertFilter = api.view.upsertFilter.useMutation({
    onMutate: async (input) => {
      await Promise.all([
        utils.view.getWithConfig.cancel({ id: viewId }),
        utils.record.list.cancel(recordKey),
      ]);
      const prevConfig  = utils.view.getWithConfig.getData({ id: viewId });
      const prevRecords = utils.record.list.getData(recordKey);

      const patchedFilter: UngroupedFilter = {
        id:       input.id,
        viewId,
        groupId:  input.groupId ?? null,
        fieldId:  input.fieldId,
        operator: input.operator,
        value:    input.value === undefined ? null : input.value,
        position: input.position ?? null,
        field:    null,
      };

      const patched = buildPatch(
        prevConfig ?? { id: viewId, name: "", tableId, position: null, createdAt: new Date(), filterConjunction: "and", filters: [], filterGroups: [], sorts: [] },
        patchedFilter,
        input.groupId
      );

      utils.view.getWithConfig.setData({ id: viewId }, patched);

      if (prevRecords) {
        utils.record.list.setData(recordKey, (old) => {
          if (!old) return old;
          return { ...old, records: applyFiltersToRecords(old.records, patched.filters, patched.filterGroups, fields, patched.filterConjunction ?? "and") };
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
        return {
          ...old,
          filters:      old.filters.filter((f) => f.id !== id),
          filterGroups: old.filterGroups.map((g) => ({ ...g, filters: g.filters.filter((f) => f.id !== id) })),
        };
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

  const setFilterConjunction = api.view.setFilterConjunction.useMutation({
    onMutate: async ({ conjunction }) => {
      await Promise.all([
        utils.view.getWithConfig.cancel({ id: viewId }),
        utils.record.list.cancel(recordKey),
      ]);
      const prevConfig  = utils.view.getWithConfig.getData({ id: viewId });
      const prevRecords = utils.record.list.getData(recordKey);
      utils.view.getWithConfig.setData({ id: viewId }, (old) =>
        old ? { ...old, filterConjunction: conjunction } : old
      );
      if (prevRecords && prevConfig) {
        utils.record.list.setData(recordKey, (old) => {
          if (!old) return old;
          return { ...old, records: applyFiltersToRecords(old.records, prevConfig.filters, prevConfig.filterGroups, fields, conjunction) };
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

  const upsertGroup = api.view.upsertFilterGroup.useMutation({
    onMutate: async (input) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const prevConfig = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        const exists = old.filterGroups.some((g) => g.id === input.id);
        const patched = {
          id:          input.id,
          viewId,
          conjunction: input.conjunction ?? "and",
          connector:   input.connector   ?? "and",
          position:    input.position ?? old.filterGroups.length,
          filters:     exists ? old.filterGroups.find((g) => g.id === input.id)!.filters : [],
        };
        return {
          ...old,
          filterGroups: exists
            ? old.filterGroups.map((g) => g.id === input.id ? { ...g, ...patched } : g)
            : [...old.filterGroups, patched],
        };
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

  const deleteGroup = api.view.deleteFilterGroup.useMutation({
    onMutate: async ({ id }) => {
      await utils.view.getWithConfig.cancel({ id: viewId });
      const prevConfig = utils.view.getWithConfig.getData({ id: viewId });
      utils.view.getWithConfig.setData({ id: viewId }, (old) => {
        if (!old) return old;
        return { ...old, filterGroups: old.filterGroups.filter((g) => g.id !== id) };
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

  // ── Actions ────────────────────────────────────────────────────────────────

  function addUngroupedFilter() {
    if (!fields[0]) return;
    upsertFilter.mutate({
      id:       crypto.randomUUID(),
      viewId,
      groupId:  null,
      fieldId:  fields[0].id,
      operator: "equals",
      value:    "",
      position: ungroupedFilters.length,
    });
  }

  function addFilterToGroup(groupId: string) {
    if (!fields[0]) return;
    const group = filterGroups.find((g) => g.id === groupId);
    upsertFilter.mutate({
      id:       crypto.randomUUID(),
      viewId,
      groupId,
      fieldId:  fields[0].id,
      operator: "equals",
      value:    "",
      position: group?.filters.length ?? 0,
    });
  }

  function addConditionGroup() {
    const newGroupId = crypto.randomUUID();
    const isFirstGroup = !hasAnyItems;
    upsertGroup.mutate(
      { id: newGroupId, viewId, conjunction: "and", connector: isFirstGroup ? "and" : "and", position: filterGroups.length },
      {
        onSuccess: () => {
          if (!fields[0]) return;
          upsertFilter.mutate({
            id: crypto.randomUUID(), viewId, groupId: newGroupId,
            fieldId: fields[0].id, operator: "equals", value: "", position: 0,
          });
        },
      }
    );
  }

  function updateFilter(filter: AnyFilter, groupId: string | null | undefined, patch: { fieldId?: string; operator?: FilterOperator; value?: string | number | null }) {
    const nextOperator   = patch.operator ?? (filter.operator as FilterOperator);
    const hasValueChange = "value" in patch;
    const nextValue      = hasValueChange ? patch.value : filter.value;
    const mutationValue: string | number | null =
      nextOperator === "is_empty" || nextOperator === "is_not_empty" ? null
      : nextValue == null ? ""
      : typeof nextValue === "boolean" ? String(nextValue)
      : (nextValue as string | number);

    upsertFilter.mutate({
      id: filter.id, viewId,
      groupId:  groupId ?? undefined,
      fieldId:  patch.fieldId ?? filter.fieldId ?? fields[0]!.id,
      operator: nextOperator,
      value:    mutationValue,
    });
  }

  function handleValueInput(filter: AnyFilter, groupId: string | null | undefined, value: string) {
    setLocalValues((prev) => ({ ...prev, [filter.id]: value }));
    clearTimeout(debounceRefs.current[filter.id]);
    debounceRefs.current[filter.id] = setTimeout(() => {
      updateFilter(filter, groupId, { value });
    }, 300);
  }

  function toggleGroupConjunction(group: FilterGroup) {
    upsertGroup.mutate({
      id: group.id, viewId,
      conjunction: group.conjunction === "and" ? "or" : "and",
      connector:   group.connector as "and" | "or",
      position:    group.position,
    });
  }

  function toggleGroupConnector(group: FilterGroup) {
    upsertGroup.mutate({
      id: group.id, viewId,
      conjunction: group.conjunction as "and" | "or",
      connector:   group.connector === "and" ? "or" : "and",
      position:    group.position,
    });
  }

  // ── Render: single filter row ──────────────────────────────────────────────

  function renderFilterRow(
    filter:  AnyFilter,
    groupId: string | null | undefined,
    prefix:  React.ReactNode
  ) {
    const needsValue = !["is_empty", "is_not_empty"].includes(filter.operator ?? "equals");
    const field = fields.find((f) => f.id === filter.fieldId);

    return (
      <div key={filter.id} className="flex items-center gap-1.5">
        <div className="w-14 flex-shrink-0 flex justify-end">{prefix}</div>
        <select
          value={filter.fieldId ?? ""}
          onChange={(e) => updateFilter(filter, groupId, { fieldId: e.target.value })}
          className="px-2 py-1.5 rounded border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        >
          {fields.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
        </select>
        <select
          value={filter.operator ?? "equals"}
          onChange={(e) => updateFilter(filter, groupId, { operator: e.target.value as FilterOperator })}
          className="px-2 py-1.5 rounded border border-gray-200 text-[12px] text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
        >
          {FILTER_OPERATORS.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
        </select>
        {needsValue && (
          <input
            value={getLocalVal(filter)}
            onChange={(e) => handleValueInput(filter, groupId, e.target.value)}
            placeholder={field?.type === "number" ? "Enter a number" : "Enter a value"}
            type={field?.type === "number" ? "number" : "text"}
            className="flex-1 min-w-0 px-2 py-1.5 rounded border border-gray-200 text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        )}
        <button
          onClick={() => deleteFilter.mutate({ id: filter.id })}
          className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-red-400 flex-shrink-0"
        >
          <Trash2 size={13} />
        </button>
      </div>
    );
  }

  // ── Panel ──────────────────────────────────────────────────────────────────

  return (
    <div
      data-panel="filter"
      className="absolute top-full left-0 mt-1 z-40 w-[600px] bg-white rounded-xl shadow-xl border border-gray-200 p-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-[14px] font-semibold text-gray-800">Filter</span>
        <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
          <X size={14} />
        </button>
      </div>

      <p className="text-[12px] text-gray-500 mb-4">In this view, show records</p>

      {/* Content */}
      <div className="space-y-2">

        {/* Ungrouped (standalone) filter rows */}
        {ungroupedFilters.map((filter, i) =>
          renderFilterRow(
            filter,
            null,
            i === 0 ? (
              <span className="text-[11px] text-gray-500 font-medium">Where</span>
            ) : i === 1 ? (
              <button
                onClick={() => setFilterConjunction.mutate({ id: viewId, conjunction: ungroupedConjunction === "and" ? "or" : "and" })}
                className="flex items-center gap-0.5 text-[11px] font-semibold text-gray-600 hover:text-gray-800"
              >
                {ungroupedConjunction}
                <ChevronDown size={10} />
              </button>
            ) : (
              <span className="text-[11px] text-gray-500 font-medium">{ungroupedConjunction}</span>
            )
          )
        )}

        {/* Condition groups */}
        {filterGroups.map((group, gi) => {
          const isFirst = gi === 0 && ungroupedFilters.length === 0;
          return (
            <div key={group.id} className="flex items-start gap-2">
              {/* Connector toggle (left of box) — hidden for the very first group if there's nothing above */}
              <div className="w-14 flex-shrink-0 flex justify-end pt-[10px]">
                {!isFirst && (
                  <button
                    onClick={() => toggleGroupConnector(group)}
                    className="flex items-center gap-0.5 px-1.5 py-1 rounded border border-gray-200 bg-white text-[11px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    {group.connector === "or" ? "or" : "and"}
                    <ChevronDown size={10} />
                  </button>
                )}
                {isFirst && (
                  <span className="text-[11px] text-gray-500 font-medium">Where</span>
                )}
              </div>

              {/* Group box */}
              <div className="flex-1 border border-gray-200 rounded-lg overflow-hidden">
                {/* Group header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100 bg-gray-50">
                  <button
                    onClick={() => toggleGroupConjunction(group)}
                    className="text-[12px] text-gray-500 hover:text-gray-700 flex items-center gap-1"
                  >
                    {group.conjunction === "and" ? "All" : "Any"} of the following are true...
                  </button>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => addFilterToGroup(group.id)}
                      className="p-1 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600"
                      title="Add condition"
                    >
                      <Plus size={13} />
                    </button>
                    <button
                      onClick={() => deleteGroup.mutate({ id: group.id })}
                      className="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-400"
                      title="Delete group"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Filter rows inside group */}
                <div className="px-3 py-2 space-y-2">
                  {group.filters.length === 0 ? (
                    <p className="text-[12px] text-gray-400 py-1">
                      No conditions yet — click + to add one.
                    </p>
                  ) : (
                    group.filters.map((filter, i) =>
                      renderFilterRow(
                        filter,
                        group.id,
                        i === 0 ? (
                          <span className="text-[11px] text-gray-500 font-medium">Where</span>
                        ) : (
                          <button
                            onClick={() => toggleGroupConjunction(group)}
                            className="flex items-center gap-0.5 text-[11px] font-semibold text-gray-600 hover:text-gray-800"
                          >
                            {group.conjunction}
                            <ChevronDown size={10} />
                          </button>
                        )
                      )
                    )
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Empty state */}
        {!hasAnyItems && (
          <p className="text-[12px] text-gray-400 py-1">
            No conditions yet. Add a condition or a condition group below.
          </p>
        )}
      </div>

      {/* Bottom actions */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-gray-100">
        <button
          onClick={addUngroupedFilter}
          disabled={upsertFilter.isPending}
          className="flex items-center gap-1 text-[12px] text-gray-600 hover:text-gray-900 font-medium"
        >
          <Plus size={13} /> Add condition
        </button>
        <button
          onClick={addConditionGroup}
          disabled={upsertGroup.isPending}
          className="flex items-center gap-1 text-[12px] text-gray-600 hover:text-gray-900 font-medium"
        >
          <Plus size={13} /> Add condition group
        </button>
        {totalCount > 0 && (
          <span className="ml-auto text-[11px] text-gray-400">
            {totalCount} condition{totalCount > 1 ? "s" : ""}
          </span>
        )}
      </div>
    </div>
  );
}
