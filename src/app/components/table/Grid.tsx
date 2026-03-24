"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { Plus, GripVertical, Maximize2, Loader2 } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";
import { type FieldType } from "../../../../generated/prisma";
import { FieldHeader } from "./FieldHeader";
import { EditableCell } from "./EditableCell";
import { AddFieldModal } from "./AddFieldModal";

type TableWithMeta    = RouterOutputs["table"]["getById"];
type RecordListOutput = RouterOutputs["record"]["list"];
type RecordRow        = RecordListOutput["records"][number];

const COL_WIDTH     = 180;
const ROW_HEIGHT    = 32;
const ROW_NUM_WIDTH = 60;
const EXPAND_WIDTH  = 32;
const DIVIDER_LEFT  = ROW_NUM_WIDTH + EXPAND_WIDTH + COL_WIDTH - 1;
const PAGE_SIZE     = 100;

function getCellDisplay(record: RecordRow, fieldId: string): string {
  const cell = record.cells.find((c) => c.fieldId === fieldId);
  if (!cell) return "";
  if (cell.valueText !== null) return String(cell.valueText);
  if (cell.valueNumber !== null) return String(cell.valueNumber);
  return "";
}

export function Grid({
  table,
  viewId,
  search,
  onSavingChange,
  onCountChange,
}: {
  table: TableWithMeta;
  viewId: string | null;
  search: string;
  onSavingChange: (v: boolean) => void;
  onCountChange?: (n: number) => void;
}) {
  const queryInput = useMemo(() => ({
    tableId: table.id,
    viewId:  viewId ?? undefined,
    search:  search || undefined,
    limit:   PAGE_SIZE,
  }), [table.id, viewId, search]);

  const [selected,      setSelected]      = useState<{ r: number; c: number } | null>(null);
  const [editing,       setEditing]       = useState<{ r: number; c: number } | null>(null);
  const [addingField,   setAddingField]   = useState(false);
  const [checkedRows,   setCheckedRows]   = useState<Set<string>>(new Set());
  const [allSelected,   setAllSelected]   = useState(false);

  const utils  = api.useUtils();
  const fields = useMemo(
    () => [...table.fields].sort((a, b) => (a.position ?? 0) - (b.position ?? 0)),
    [table.fields]
  );

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = api.record.list.useInfiniteQuery(queryInput, {
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 30_000,
  });

  const records = useMemo(
    () => data?.pages.flatMap((p) => p.records) ?? [],
    [data]
  );

  useEffect(() => {
    onCountChange?.(records.length);
  }, [records.length, onCountChange]);

  // ── Virtualizer ─────────────────────────────────────────────────────────────
  const scrollRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count:           hasNextPage ? records.length + 1 : records.length,
    getScrollElement: () => scrollRef.current,
    estimateSize:    () => ROW_HEIGHT,
    overscan:        15,
  });

  const virtualItems = rowVirtualizer.getVirtualItems();

  // Fetch next page as user scrolls near the bottom
  useEffect(() => {
    const last = virtualItems[virtualItems.length - 1];
    if (!last) return;
    if (last.index >= records.length - 20 && hasNextPage && !isFetchingNextPage) {
      void fetchNextPage();
    }
  }, [virtualItems, records.length, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // ── Mutations ────────────────────────────────────────────────────────────────
  const updateCell = api.cell.update.useMutation({
    onMutate: async ({ recordId, fieldId, value }) => {
      onSavingChange(true);
      await utils.record.list.cancel(queryInput);
      const previous = utils.record.list.getInfiniteData(queryInput);
      const fieldType = fields.find((f) => f.id === fieldId)?.type;
      const mapped =
        fieldType === "number"
          ? { valueText: null, valueNumber: typeof value === "number" ? value : value ? Number(value) : null }
          : { valueText: value ? String(value) : null, valueNumber: null };

      utils.record.list.setInfiniteData(queryInput, (old) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            records: page.records.map((record) => {
              if (record.id !== recordId) return record;
              const existingCell = record.cells.find((c) => c.fieldId === fieldId);
              const updatedCells = existingCell
                ? record.cells.map((c) => c.fieldId === fieldId ? { ...c, ...mapped } : c)
                : [...record.cells, { recordId, fieldId, ...mapped }];
              return { ...record, cells: updatedCells };
            }),
          })),
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setInfiniteData(queryInput, context?.previous);
    },
    onSettled: () => {
      onSavingChange(false);
      void utils.record.list.invalidate({ tableId: table.id });
    },
  });

  const addRecord = api.record.create.useMutation({
    onMutate: async () => {
      await utils.record.list.cancel(queryInput);
      const previous = utils.record.list.getInfiniteData(queryInput);

      const tempId = crypto.randomUUID();
      const tempRecord: RecordRow = {
        id:              tempId,
        tableId:         table.id,
        createdAt:       new Date(),
        updatedAt:       new Date(),
        position:        null,
        sortValueText:   null,
        sortValueNumber: null,
        userId:          null,
        cells: fields.map((f) => ({
          recordId:    tempId,
          fieldId:     f.id,
          valueText:   null,
          valueNumber: null,
        })),
      };

      utils.record.list.setInfiniteData(queryInput, (old) => {
        if (!old) return old;
        const pages = old.pages;
        const lastPage = pages[pages.length - 1];
        if (!lastPage) return old;
        return {
          ...old,
          pages: [
            ...pages.slice(0, -1),
            { ...lastPage, records: [...lastPage.records, tempRecord] },
          ],
        };
      });

      return { previous };
    },
    onError: (_err, _input, context) => {
      if (context?.previous)
        utils.record.list.setInfiniteData(queryInput, context.previous);
    },
    onSettled: () => void utils.record.list.invalidate({ tableId: table.id }),
  });

  const deleteRecords = api.record.deleteMany.useMutation({
    onMutate: async ({ ids }) => {
      await utils.record.list.cancel(queryInput);
      const previous = utils.record.list.getInfiniteData(queryInput);
      const idSet = new Set(ids);
      utils.record.list.setInfiniteData(queryInput, (old) => {
        if (!old) return old;
        return {
          ...old,
          pages: old.pages.map((page) => ({
            ...page,
            records: page.records.filter((r) => !idSet.has(r.id)),
          })),
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setInfiniteData(queryInput, context?.previous);
    },
    onSettled: () => void utils.record.list.invalidate({ tableId: table.id }),
  });

  const deleteAllRecords = api.record.deleteByTable.useMutation({
    onMutate: async () => {
      await utils.record.list.cancel(queryInput);
      const previous = utils.record.list.getInfiniteData(queryInput);
      utils.record.list.setInfiniteData(queryInput, (old) => {
        if (!old) return old;
        return { ...old, pages: old.pages.map((page) => ({ ...page, records: [] })) };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setInfiniteData(queryInput, context?.previous);
    },
    onSettled: () => void utils.record.list.invalidate({ tableId: table.id }),
  });

  function commitCell(recordId: string, fieldId: string, raw: string, fieldType: FieldType) {
    const value: string | number | null =
      fieldType === "number" ? (raw === "" ? null : Number(raw)) : raw;
    updateCell.mutate({ recordId, fieldId, value });
  }

  function handleKeyNav(e: React.KeyboardEvent, ri: number, ci: number) {
    setEditing(null);
    if (e.key === "Tab")
      setSelected(ci + 1 < fields.length ? { r: ri, c: ci + 1 } : ri + 1 < records.length ? { r: ri + 1, c: 0 } : null);
    if (e.key === "Enter")
      setSelected(ri + 1 < records.length ? { r: ri + 1, c: ci } : null);
  }

  // ── TanStack Table (header + column sizing only) ─────────────────────────────
  const columns = useMemo<ColumnDef<RecordRow>[]>(() => {
    const rowNumCol: ColumnDef<RecordRow> = {
      id: "__rownum__",
      size: ROW_NUM_WIDTH,
      enableResizing: false,
      header: () => (
        <div className="flex items-center justify-center w-full h-full">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={toggleAll}
            className="w-3.5 h-3.5 accent-blue-600"
          />
        </div>
      ),
      cell: () => null,
    };
    const expandCol: ColumnDef<RecordRow> = {
      id: "__expand__",
      size: EXPAND_WIDTH,
      enableResizing: false,
      header: () => <div className="w-full h-full" />,
      cell: () => null,
    };
    const dataCols: ColumnDef<RecordRow>[] = fields.map((field) => ({
      id: field.id,
      size: COL_WIDTH,
      header: () => <FieldHeader field={field} tableId={table.id} />,
      cell: () => null,
    }));
    return [rowNumCol, expandCol, ...dataCols];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, table.id, allSelected]);

  const tanTable = useReactTable({
    data:              [],
    columns,
    getCoreRowModel:   getCoreRowModel(),
    columnResizeMode:  "onChange",
  });

  // Build a fast column-size lookup from the table instance
  const colSizeMap = useMemo(() => {
    const map = new Map<string, number>();
    tanTable.getAllColumns().forEach((col) => map.set(col.id, col.getSize()));
    return map;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tanTable.getState().columnSizing]);

  function getColSize(id: string) {
    return colSizeMap.get(id) ?? COL_WIDTH;
  }

  const totalTableWidth = tanTable.getTotalSize();

  function toggleRowCheck(recordId: string) {
    setAllSelected(false);
    setCheckedRows((prev) => {
      const next = new Set(prev);
      if (next.has(recordId)) next.delete(recordId);
      else next.add(recordId);
      return next;
    });
  }

  function toggleAll() {
    if (allSelected) {
      setAllSelected(false);
      setCheckedRows(new Set());
    } else {
      setAllSelected(true);
      setCheckedRows(new Set(records.map((r) => r.id)));
    }
  }

  // ── Keyboard nav ─────────────────────────────────────────────────────────────
  function handleGridKeyDown(e: React.KeyboardEvent) {
    if (addingField || editing) return;

    // Delete all rows when "select all" is active and Del is pressed
    if (e.key === "Delete" && allSelected) {
      e.preventDefault();
      deleteAllRecords.mutate({ tableId: table.id });
      setAllSelected(false);
      setCheckedRows(new Set());
      setSelected(null);
      return;
    }

    // Delete checked rows when Del is pressed
    if (e.key === "Delete" && checkedRows.size > 0) {
      e.preventDefault();
      deleteRecords.mutate({ ids: Array.from(checkedRows) });
      setCheckedRows(new Set());
      setSelected(null);
      return;
    }

    if (!selected) return;
    const { r, c } = selected;
    const moves: Partial<Record<string, { r: number; c: number }>> = {
      ArrowDown:  { r: Math.min(r + 1, records.length - 1), c },
      ArrowUp:    { r: Math.max(r - 1, 0), c },
      ArrowRight: { r, c: Math.min(c + 1, fields.length - 1) },
      ArrowLeft:  { r, c: Math.max(c - 1, 0) },
    };
    if (moves[e.key]) { e.preventDefault(); setSelected(moves[e.key]!); return; }
    if (e.key === "Enter" || e.key === "F2") { e.preventDefault(); setEditing(selected); return; }
    if ((e.key === "Delete" || e.key === "Backspace") && records[r] && fields[c]) {
      commitCell(records[r].id, fields[c].id, "", fields[c].type); return;
    }
    if (!e.metaKey && !e.ctrlKey && e.key.length === 1) setEditing(selected);
  }

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="flex-1 relative overflow-hidden">
      {/* Frozen column divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#d0d0d0] z-30 pointer-events-none"
        style={{ left: DIVIDER_LEFT }}
      />

      <div
        ref={scrollRef}
        className="h-full overflow-auto outline-none focus:outline-none bg-[#f6f8fc]"
        tabIndex={0}
        onKeyDown={handleGridKeyDown}
      >
        {addingField && <AddFieldModal tableId={table.id} onClose={() => setAddingField(false)} />}

        <div className="flex">
          <div style={{ width: totalTableWidth }}>

            {/* ── Header (sticky) ── */}
            <div className="flex sticky top-0 z-20">
              {tanTable.getHeaderGroups().map((hg) =>
                hg.headers.map((header) => (
                  <div
                    key={header.id}
                    className={`relative flex-shrink-0 border-b border-[#dde1e3] bg-white ${
                      header.id === "__rownum__" || header.id === "__expand__" ? "" : "border-r"
                    }`}
                    style={{
                      width:  header.getSize(),
                      height: ROW_HEIGHT
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none hover:bg-blue-400 opacity-0 hover:opacity-100"
                      />
                    )}
                  </div>
                ))
              )}
            </div>

            {/* ── Loading skeleton ── */}
            {isLoading && (
              <div className="flex items-center justify-center py-16 text-gray-400 gap-2">
                <Loader2 size={16} className="animate-spin" />
                <span className="text-[12px]">Loading…</span>
              </div>
            )}

            {/* ── Virtualized rows ── */}
            {!isLoading && (
              <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
                {virtualItems.map((virtualRow) => {
                  const ri       = virtualRow.index;
                  const record   = records[ri];
                  const isLoader = ri >= records.length;
                  const isChecked = !isLoader && !!record && (allSelected || checkedRows.has(record.id));
                  const rowBg = isChecked ? "bg-blue-50" : "bg-white group-hover/row:bg-gray-50";

                  return (
                    <div
                      key={virtualRow.key}
                      className="flex group/row absolute top-0 left-0 w-full"
                      style={{ transform: `translateY(${virtualRow.start}px)`, height: ROW_HEIGHT }}
                    >
                      {isLoader ? (
                        /* Loading sentinel row */
                        <div
                          className="flex items-center px-4 gap-2 text-[12px] text-gray-400 border-b border-[#dde1e3] w-full bg-white"
                          style={{ height: ROW_HEIGHT }}
                        >
                          <Loader2 size={11} className="animate-spin" /> Loading more…
                        </div>
                      ) : record ? (
                        <>
                          {/* Row number */}
                          <div
                            className={`flex-shrink-0 border-b border-[#dde1e3] ${rowBg} relative flex items-center justify-center`}
                            style={{ width: getColSize("__rownum__"), height: ROW_HEIGHT }}
                          >
                            {isChecked ? null : (
                              <span className="text-[12px] text-gray-400 group-hover/row:hidden select-none">
                                {ri + 1}
                              </span>
                            )}
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleRowCheck(record.id)}
                              onClick={(e) => e.stopPropagation()}
                              className={`w-3.5 h-3.5 accent-blue-600 ${isChecked ? "block" : "hidden group-hover/row:block"}`}
                            />
                            <GripVertical
                              size={13}
                              className="absolute left-1.5 hidden group-hover/row:block text-gray-300"
                            />
                          </div>

                          {/* Expand */}
                          <div
                            className={`flex-shrink-0 border-b border-[#dde1e3] ${rowBg} flex items-center justify-center`}
                            style={{ width: getColSize("__expand__"), height: ROW_HEIGHT }}
                          >
                            <Maximize2
                              size={11}
                              className="hidden group-hover/row:block text-gray-400 hover:text-gray-600 cursor-pointer"
                            />
                          </div>

                          {/* Data cells */}
                          {fields.map((field, ci) => (
                            <div
                              key={field.id}
                              className={`flex-shrink-0 border-b border-r border-[#dde1e3] overflow-hidden ${rowBg}`}
                              style={{ width: getColSize(field.id), height: ROW_HEIGHT }}
                            >
                              <EditableCell
                                recordId={record.id}
                                fieldId={field.id}
                                fieldType={field.type}
                                value={getCellDisplay(record, field.id)}
                                isSelected={selected?.r === ri && selected?.c === ci}
                                isEditing={editing?.r === ri && editing?.c === ci}
                                onSelect={() => { setSelected({ r: ri, c: ci }); setEditing(null); }}
                                onEdit={() => setEditing({ r: ri, c: ci })}
                                onCommit={(v) => { commitCell(record.id, field.id, v, field.type); setEditing(null); }}
                                onKeyNav={(e) => handleKeyNav(e, ri, ci)}
                              />
                            </div>
                          ))}
                        </>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            )}

            {/* ── Add record row ── */}
            <div className="flex bg-white border-b border-[#dde1e3]">
              <div
                onClick={() => addRecord.mutate({ tableId: table.id })}
                className="flex items-center justify-center cursor-pointer hover:bg-gray-50 text-gray-400 hover:text-gray-600"
                style={{ height: ROW_HEIGHT, width: getColSize("__rownum__") }}
              >
                <Plus size={13} />
              </div>
              <div style={{ height: ROW_HEIGHT, width: getColSize("__expand__") }} />
              {fields.map((field) => (
                <div
                  key={field.id}
                  onClick={() => addRecord.mutate({ tableId: table.id })}
                  className="flex items-center px-2 text-gray-400 text-[12px] hover:bg-gray-50 cursor-pointer border-r border-[#dde1e3]"
                  style={{ height: ROW_HEIGHT, width: getColSize(field.id) }}
                />
              ))}
            </div>
          </div>

          {/* Add field button */}
          <div
            onClick={() => setAddingField(true)}
            className="flex items-center justify-center w-[40px] cursor-pointer bg-white border-b border-r border-[#dde1e3] text-gray-400 hover:text-gray-600 hover:bg-gray-100 sticky top-0 z-20"
            style={{ height: ROW_HEIGHT }}
          >
            <Plus size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
