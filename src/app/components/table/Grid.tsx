"use client";

import { useState, useRef, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
  type CellContext,
} from "@tanstack/react-table";
import { Plus, Loader2, X } from "lucide-react";
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
const ROW_NUM_WIDTH = 83;

function getCellDisplay(record: RecordRow, fieldId: string): string {
  const cell = record.cells.find((c) => c.fieldId === fieldId);
  if (!cell) return "";
  if (cell.valueText !== null) return String(cell.valueText);
  if (cell.valueNumber !== null) return String(cell.valueNumber);
  return "";
}

export function Grid({
  table,
  records,
  viewId,
  onSavingChange,
}: {
  table: TableWithMeta;
  records: RecordRow[];
  viewId: string | null;
  onSavingChange: (v: boolean) => void;
}) {
  const queryKey = { tableId: table.id, viewId: viewId ?? undefined, limit: 500 } as const;

  const [selected,    setSelected]    = useState<{ r: number; c: number } | null>(null);
  const [editing,     setEditing]     = useState<{ r: number; c: number } | null>(null);
  const [addingField, setAddingField] = useState(false);

  const utils  = api.useUtils();
  const fields = useMemo(
    () => [...table.fields].sort((a, b) => (a.position ?? 0) - (b.position ?? 0)),
    [table.fields]
  );

  const updateCell = api.cell.update.useMutation({
    onMutate: async ({ recordId, fieldId, value }) => {
      onSavingChange(true);
      await utils.record.list.cancel(queryKey);
      const previous = utils.record.list.getData(queryKey);
      const fieldType = fields.find((f) => f.id === fieldId)?.type;
      const mapped =
        fieldType === "number"
          ? { valueText: null, valueNumber: typeof value === "number" ? value : value ? Number(value) : null }
          : { valueText: value ? String(value) : null, valueNumber: null };

      utils.record.list.setData(queryKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          records: old.records.map((record) => {
            if (record.id !== recordId) return record;
            const existingCell = record.cells.find((c) => c.fieldId === fieldId);
            const updatedCells = existingCell
              ? record.cells.map((c) =>
                  c.fieldId === fieldId ? { ...c, ...mapped } : c
                )
              : [...record.cells, { recordId, fieldId, ...mapped }];
            return { ...record, cells: updatedCells };
          }),
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setData(queryKey, context?.previous);
    },
    onSettled: () => {
      onSavingChange(false);
      void utils.record.list.invalidate({ tableId: table.id });
    },
  });

  const addRecord = api.record.create.useMutation({
    onMutate: async () => {
      await utils.record.list.cancel(queryKey);
      const previous = utils.record.list.getData(queryKey);
      const tempId = `temp-${Date.now()}`;
      utils.record.list.setData(queryKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          records: [
            ...old.records,
            { id: tempId, tableId: table.id, position: old.records.length, createdAt: new Date(), updatedAt: new Date(), userId: null, cells: [], sortValueText: null, sortValueNumber: null },
          ],
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setData(queryKey, context?.previous);
    },
    onSettled: () => void utils.record.list.invalidate({ tableId: table.id }),
  });

  const deleteRecord = api.record.delete.useMutation({
    onMutate: async ({ id }) => {
      await utils.record.list.cancel(queryKey);
      const previous = utils.record.list.getData(queryKey);
      utils.record.list.setData(queryKey, (old) => {
        if (!old) return old;
        return { ...old, records: old.records.filter((r) => r.id !== id) };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.record.list.setData(queryKey, context?.previous);
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

  const columns = useMemo<ColumnDef<RecordRow>[]>(() => {
    const rowNumCol: ColumnDef<RecordRow> = {
      id: "__rownum__",
      size: ROW_NUM_WIDTH,
      enableResizing: false,
      header: () => (
        <div className="flex items-center justify-center w-full h-full px-3">
          <input type="checkbox" className="w-3.5 h-3.5 rounded accent-blue-600" />
        </div>
      ),
      cell: ({ row }) => (
        <div className="flex items-center px-3 gap-2 w-full h-full">
          <input type="checkbox" className="w-3.5 h-3.5 rounded accent-blue-600 opacity-0 group-hover/row:opacity-100 flex-shrink-0" />
          <span className="text-[12px] text-gray-400 group-hover/row:hidden flex-1 text-right">{row.index + 1}</span>
          <button
            onClick={() => deleteRecord.mutate({ id: row.original.id })}
            className="hidden group-hover/row:flex p-0.5 rounded hover:bg-red-100 text-gray-300 hover:text-red-400 ml-auto"
          >
            <X size={11} />
          </button>
        </div>
      ),
    };

    const dataCols: ColumnDef<RecordRow>[] = fields.map((field, ci) => ({
      id: field.id,
      size: COL_WIDTH,
      header: () => <FieldHeader field={field} tableId={table.id} />,
      cell: ({ row }: CellContext<RecordRow, unknown>) => {
        const ri = row.index;
        return (
          <EditableCell
            recordId={row.original.id}
            fieldId={field.id}
            fieldType={field.type}
            value={getCellDisplay(row.original, field.id)}
            isSelected={selected?.r === ri && selected?.c === ci}
            isEditing={editing?.r === ri && editing?.c === ci}
            onSelect={() => { setSelected({ r: ri, c: ci }); setEditing(null); }}
            onEdit={() => setEditing({ r: ri, c: ci })}
            onCommit={(v) => { commitCell(row.original.id, field.id, v, field.type); setEditing(null); }}
            onKeyNav={(e) => handleKeyNav(e, ri, ci)}
          />
        );
      },
    }));

    return [rowNumCol, ...dataCols];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, table.id, selected, editing]);

  const tanTable = useReactTable({
    data: records,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  const gridRef = useRef<HTMLDivElement>(null);

  function handleGridKeyDown(e: React.KeyboardEvent) {
    if (addingField || !selected || editing) return;
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

  return (
    <div
      ref={gridRef}
      className="flex-1 overflow-auto outline-none focus:outline-none bg-[#f6f8fc]"
      tabIndex={0}
      onKeyDown={handleGridKeyDown}
    >
      {addingField && <AddFieldModal tableId={table.id} onClose={() => setAddingField(false)} />}

      <div className="flex">
        <div className="inline-block overflow-hidden" style={{ width: tanTable.getTotalSize() }}>

          {/* Header */}
          <div className="flex sticky top-0 z-20">
            {tanTable.getHeaderGroups().map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <div
                  key={header.id}
                  className="relative flex-shrink-0 border-r border-b border-[#dde1e3] bg-white"
                  style={{ width: header.getSize(), height: ROW_HEIGHT }}
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

          {/* Rows */}
          {tanTable.getRowModel().rows.map((row) => (
            <div key={row.id} className="flex group/row hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  className="flex-shrink-0 border-r border-b border-[#dde1e3] overflow-hidden bg-white group-hover/row:bg-gray-50"
                  style={{ width: cell.column.getSize(), height: ROW_HEIGHT }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          ))}

          {/* Add record row */}
          <div className="flex bg-white border-b border-r border-[#dde1e3]">
            <div
              onClick={() => addRecord.mutate({ tableId: table.id })}
              className="flex items-center justify-center cursor-pointer hover:bg-gray-50 text-gray-400 hover:text-gray-600"
              style={{ height: ROW_HEIGHT, width: ROW_NUM_WIDTH }}
            >
              {addRecord.isPending ? <Loader2 size={13} className="animate-spin" /> : <Plus size={13} />}
            </div>
            {fields.map((field) => (
              <div
                key={field.id}
                onClick={() => addRecord.mutate({ tableId: table.id })}
                className="flex items-center px-2 text-gray-400 text-[12px] hover:bg-gray-50 cursor-pointer"
                style={{ height: ROW_HEIGHT, width: COL_WIDTH }}
              />
            ))}
          </div>
        </div>

        {/* Add field button */}
        <div
          onClick={() => setAddingField(true)}
          className="flex items-center justify-center w-[40px] cursor-pointer bg-white border-b border-r border-[#dde1e3] text-gray-400 hover:text-gray-600 hover:bg-gray-100"
          style={{ height: ROW_HEIGHT }}
        >
          <Plus size={14} />
        </div>
      </div>
    </div>
  );
}