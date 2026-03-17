"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Plus, Search, Filter, Grid3X3, X, Loader2, Check,
  Trash2, ChevronDown, Hash, Type, Settings, EyeOff,
  ArrowUpDown, Palette, AlignJustify, Share2, Zap,
  MonitorPlay, ClipboardList, Wrench, Link, Users,
  MoreHorizontal, Edit2,
} from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";
import { type FieldType } from "../../../../generated/prisma";

// ─── Types from router outputs ────────────────────────────────────────────────
type TableWithMeta    = RouterOutputs["table"]["getById"];
type RecordListOutput = RouterOutputs["record"]["list"];
type RecordRow        = RecordListOutput["records"][number];
type CellValueRow     = RecordRow["cells"][number];
type FieldRow         = TableWithMeta["fields"][number];
type ViewRow          = TableWithMeta["views"][number];

// ─── Constants ────────────────────────────────────────────────────────────────
const COL_WIDTH     = 180;
const ROW_HEIGHT    = 32;
const ROW_NUM_WIDTH = 52;

// ─── Cell value display ───────────────────────────────────────────────────────
function getCellDisplay(record: RecordRow, fieldId: string): string {
  const cell = record.cells.find((c: CellValueRow) => c.fieldId === fieldId);
  const v = cell?.value;
  if (v === null || v === undefined) return "";
  if (typeof v === "string")  return v;
  if (typeof v === "number")  return String(v);
  if (typeof v === "boolean") return String(v);
  return "";
}

// ─── Add Table Modal ──────────────────────────────────────────────────────────
function AddTableModal({ baseId, onClose, onCreated }: {
  baseId: string; onClose: () => void; onCreated: (id: string) => void;
}) {
  const [name, setName] = useState("");
  const utils = api.useUtils();
  const create = api.table.create.useMutation({
    onSuccess: (t) => {
     void utils.base.getById.invalidate({ id: baseId }); 
      onCreated(t.id); onClose(); 
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-80 rounded-xl bg-white shadow-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 text-[15px]">Add table</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400"><X size={16} /></button>
        </div>
        <input
          autoFocus value={name} onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && create.mutate({ baseId, name: name.trim() })}
          placeholder="Table name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200">Cancel</button>
          <button
            disabled={!name.trim() || create.isPending}
            onClick={() => create.mutate({ baseId, name: name.trim() })}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1.5"
          >
            {create.isPending && <Loader2 size={12} className="animate-spin" />} Add table
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Add Field Modal ──────────────────────────────────────────────────────────
function AddFieldModal({ tableId, onClose }: { tableId: string; onClose: () => void }) {
  const [name, setName] = useState("");
  const [type, setType] = useState<FieldType>("text");
  const utils = api.useUtils();
  const create = api.field.create.useMutation({
    onMutate: async (input) => {
      await utils.table.getById.cancel({ id: tableId });
      
      const previous = utils.table.getById.getData({ id: tableId });

      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return {
          ...old,
          fields: [
            ...old.fields,
            {
              id: `temp-${Date.now()}`,
              tableId,
              name: input.name,
              type: input.type,
              position: old.fields.length,
            },
          ],
        };
      });

      return { previous };
    },

    onError: (_err, _input, context) => {
      utils.table.getById.setData({ id: tableId }, context?.previous);
    },

    onSettled: () => {
      void utils.table.getById.invalidate({ id: tableId });
      void utils.record.list.invalidate({ tableId });
    },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-72 rounded-xl bg-white shadow-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 text-[15px]">Add field</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400"><X size={16} /></button>
        </div>
        <label className="block text-[12px] font-medium text-gray-600 mb-1">Name</label>
        <input
          autoFocus value={name} onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && create.mutate({ tableId, name: name.trim(), type })}
          placeholder="Field name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">Type</label>
        <div className="flex gap-2 mb-4">
          {(["text", "number"] as FieldType[]).map((t) => (
            <button key={t} onClick={() => setType(t)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[12px] font-medium transition-colors ${type === t ? "border-blue-500 bg-blue-50 text-blue-600" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              {t === "text" ? <Type size={13} /> : <Hash size={13} />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200">Cancel</button>
          <button
            disabled={!name.trim() || create.isPending}
            onClick={() => create.mutate({ tableId, name: name.trim(), type })}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1.5"
          >
            {create.isPending && <Loader2 size={12} className="animate-spin" />} Add field
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Field Header ─────────────────────────────────────────────────────────────
function FieldHeader({ field, tableId }: { field: FieldRow; tableId: string }) {
  const [open, setOpen]           = useState(false);
  const [confirming, setConfirming] = useState(false);
  const utils = api.useUtils();
  const del = api.field.delete.useMutation({
    onMutate: async ({ id }) => {
      await utils.table.getById.cancel({ id: tableId });
      const previous = utils.table.getById.getData({ id: tableId });
  
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return {
          ...old,
          fields: old.fields.filter((f) => f.id !== id),
        };
      });
  
      return { previous };
    },
  
    onError: (_err, _input, context) => {
      utils.table.getById.setData({ id: tableId }, context?.previous);
    },
  
    onSettled: () => {
      void utils.table.getById.invalidate({ id: tableId });
    },
  });

  return (
    <div
      className="relative flex-shrink-0 flex items-center gap-1.5 border-r border-b border-gray-200 bg-[#f8f9fa] px-2 group cursor-pointer hover:bg-gray-100"
      style={{ width: COL_WIDTH, height: ROW_HEIGHT }}
      onClick={() => { setOpen((v) => !v); setConfirming(false); }}
    >
      {field.type === "number"
        ? <Hash size={12} className="text-gray-400 flex-shrink-0" />
        : <Type size={12} className="text-gray-500 flex-shrink-0" />
      }
      <span className="text-[12px] font-medium text-gray-700 truncate flex-1 select-none">{field.name}</span>
      <ChevronDown size={11} className="text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0" />

      {open && (
        <>
          <div className="fixed inset-0 z-20" onClick={(e) => { e.stopPropagation(); setOpen(false); setConfirming(false); }} />
          <div className="absolute left-0 top-full z-30 w-44 rounded-lg bg-white shadow-xl border border-gray-200 py-1 text-[12px]" onClick={(e) => e.stopPropagation()}>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 text-gray-700"><Edit2 size={12} /> Edit field</button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 text-gray-700"><EyeOff size={12} /> Hide field</button>
            <hr className="my-1 border-gray-100" />
            {confirming ? (
              <div className="px-3 py-2">
                <p className="text-gray-500 mb-2">Delete &quot;{field.name}&quot;?</p>
                <div className="flex gap-1.5">
                  <button onClick={() => setConfirming(false)} className="flex-1 px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50">No</button>
                  <button onClick={() => del.mutate({ id: field.id })} disabled={del.isPending}
                    className="flex-1 px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 flex items-center justify-center gap-1">
                    {del.isPending ? <Loader2 size={10} className="animate-spin" /> : <Check size={10} />} Yes
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => setConfirming(true)} className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-red-50 text-red-500">
                <Trash2 size={12} /> Delete field
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Editable Cell ────────────────────────────────────────────────────────────
function Cell({ recordId, fieldId, fieldType, value, isSelected, isEditing, onSelect, onEdit, onCommit, onKeyNav }: {
  recordId: string; fieldId: string; fieldType: FieldType; value: string;
  isSelected: boolean; isEditing: boolean;
  onSelect: () => void; onEdit: () => void;
  onCommit: (v: string) => void; onKeyNav: (e: React.KeyboardEvent) => void;
}) {
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setDraft(value); }, [value]);
  useEffect(() => { if (isEditing) { inputRef.current?.focus(); inputRef.current?.select(); } }, [isEditing]);

  return (
    <div
      className={`relative flex items-center border-r border-b border-gray-200 overflow-hidden ${isSelected ? "ring-2 ring-inset ring-blue-500 z-10" : "hover:bg-[#f0f7ff]"}`}
      style={{ width: COL_WIDTH, minWidth: COL_WIDTH, height: ROW_HEIGHT }}
      onClick={onSelect}
      onDoubleClick={onEdit}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => onCommit(draft)}
          onKeyDown={(e) => {
            if (e.key === "Escape") { setDraft(value); onCommit(value); }
            else if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); onCommit(draft); onKeyNav(e); }
          }}
          type={fieldType === "number" ? "number" : "text"}
          className="w-full h-full px-2 text-[13px] outline-none bg-white border-none"
        />
      ) : (
        <span className="px-2 text-[13px] text-gray-800 truncate w-full select-none">{value}</span>
      )}
    </div>
  );
}

function Grid({ table, records, viewId, onSavingChange }: {
  table: TableWithMeta; 
  records: RecordRow[]; 
  viewId: string | null; 
  onSavingChange: (v: boolean) => void;
}) {
  const queryKey = { 
    tableId: table.id, 
    viewId: viewId ?? undefined, 
    limit: 500 
  } as const;

  const [selected,    setSelected]    = useState<{ r: number; c: number } | null>(null);
  const [editing,     setEditing]     = useState<{ r: number; c: number } | null>(null);
  const [addingField, setAddingField] = useState(false);
  const utils = api.useUtils();

  const fields = [...table.fields].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));

  const updateCell = api.cell.update.useMutation({
    onMutate:  async ({ recordId, fieldId, value }) => {
      onSavingChange(true);

      await utils.record.list.cancel(queryKey);

      const previous = utils.record.list.getData(queryKey);

      utils.record.list.setData(queryKey, (old) => {
          if (!old) return old;
          return {
            ...old,
            records: old.records.map((record) => {
              if (record.id !== recordId) return record;
              const existingCell = record.cells.find((c) => c.fieldId === fieldId);
              const updatedCells = existingCell
                ? record.cells.map((c) =>
                    c.fieldId === fieldId ? { ...c, value } : c
                  )
                : [...record.cells, { recordId, fieldId, value }];
              return { ...record, cells: updatedCells };
            }),
          };
        }
      );
      return { previous };
    },

    onError: (_err, _input, context) => {
      utils.record.list.setData(queryKey, context?.previous);
    },

    onSettled: () => {
      onSavingChange(false);
      void utils.record.list.invalidate({ tableId: table.id })
    },
  });

  const addRecord = api.record.create.useMutation({
    onMutate: async () => {
      await utils.record.list.cancel(queryKey);
  
      const previous = utils.record.list.getData(queryKey);
  
      // Insert a placeholder row with a temp ID
      const tempId = `temp-${Date.now()}`;
      utils.record.list.setData(queryKey, (old) => {
        if (!old) return old;
        return {
          ...old,
          records: [
            ...old.records,
            {
              id: tempId,
              tableId: table.id,
              position: old.records.length,
              createdAt: new Date(),
              updatedAt: new Date(),
              userId: null,
              cells: [],
            },
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
        return {
          ...old,
          records: old.records.filter((r) => r.id !== id),
        };
      });
  
      return { previous };
    },
  
    onError: (_err, _input, context) => {
      utils.record.list.setData(queryKey,context?.previous);
    },
  
    onSettled: () => {
      void utils.record.list.invalidate({ tableId: table.id });
    },
  });

  const gridRef = useRef<HTMLDivElement>(null);

  function commitCell(recordId: string, fieldId: string, raw: string, fieldType: FieldType) {
    const value: string | number | null = fieldType === "number" ? (raw === "" ? null : Number(raw)) : raw;
    updateCell.mutate({ recordId, fieldId, value });
  }

  function handleKeyNav(e: React.KeyboardEvent, ri: number, ci: number) {
    setEditing(null);
    if (e.key === "Tab")   setSelected(ci + 1 < fields.length ? { r: ri, c: ci + 1 } : ri + 1 < records.length ? { r: ri + 1, c: 0 } : null);
    if (e.key === "Enter") setSelected(ri + 1 < records.length ? { r: ri + 1, c: ci } : null);
  }

  function openAddField() {
    gridRef.current?.blur();
    setSelected(null);
    setEditing(null);
    setAddingField(true);
  }

  function handleGridKeyDown(e: React.KeyboardEvent) {
    if (addingField) return;
    if (!selected || editing) return;
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
    <div ref={gridRef} className="flex-1 overflow-auto outline-none focus:outline-none" tabIndex={0} onKeyDown={handleGridKeyDown}>
      {addingField && <AddFieldModal tableId={table.id} onClose={() => setAddingField(false)} />}

      <div className="inline-block min-w-full">
        {/* Header */}
        <div className="flex sticky top-0 z-20">
          {/* Checkbox + row num corner */}
          <div
            className="flex-shrink-0 border-r border-b border-gray-200 bg-[#f8f9fa] flex items-center justify-center gap-2 px-3"
            style={{ width: ROW_NUM_WIDTH, height: ROW_HEIGHT }}
          >
            <input type="checkbox" className="w-3.5 h-3.5 rounded accent-blue-600" />
          </div>

          {fields.map((field) => (
            <FieldHeader key={field.id} field={field} tableId={table.id} />
          ))}

          {/* Add field button */}
          <div
            onClick={openAddField}
            className="flex-shrink-0 border-b border-gray-200 bg-[#f8f9fa] flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors px-2 gap-1 text-gray-500 hover:text-gray-700"
            style={{ width: 120, height: ROW_HEIGHT }}
          >
            <Plus size={13} />
            <span className="text-[12px]">Add or import</span>
          </div>
        </div>

        {/* Rows */}
        {records.map((record, ri) => (
          <div key={record.id} className="flex group/row">
            {/* Row num cell */}
            <div
              className="flex-shrink-0 border-r border-b border-gray-200 bg-white group-hover/row:bg-[#f0f7ff] flex items-center px-3 gap-2"
              style={{ width: ROW_NUM_WIDTH, height: ROW_HEIGHT }}
            >
              <input type="checkbox" className="w-3.5 h-3.5 rounded accent-blue-600 opacity-0 group-hover/row:opacity-100 flex-shrink-0" />
              <span className="text-[12px] text-gray-400 group-hover/row:hidden flex-1 text-right">{ri + 1}</span>
              <button
                onClick={() => deleteRecord.mutate({ id: record.id })}
                className="hidden group-hover/row:flex p-0.5 rounded hover:bg-red-100 text-gray-300 hover:text-red-400 ml-auto"
              >
                <X size={11} />
              </button>
            </div>

            {fields.map((field, ci) => (
              <Cell
                key={field.id}
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
            ))}

            <div className="flex-shrink-0 border-b border-gray-200 bg-white group-hover/row:bg-[#f0f7ff]" style={{ width: 120 }} />
          </div>
        ))}

        {/* Add record row */}
        <div className="flex border-b border-gray-200">
          <div
            onClick={() => addRecord.mutate({ tableId: table.id })}
            className="flex items-center gap-1.5 px-3 cursor-pointer hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors"
            style={{ height: ROW_HEIGHT, width: ROW_NUM_WIDTH }}
          >
            {addRecord.isPending ? <Loader2 size={13} className="animate-spin" /> : <Plus size={13} />}
          </div>
          <div
            onClick={() => addRecord.mutate({ tableId: table.id })}
            className="flex items-center gap-1 px-2 cursor-pointer hover:bg-gray-50 text-gray-400 hover:text-gray-600 transition-colors border-l border-gray-200"
            style={{ height: ROW_HEIGHT }}
          >
            <span className="text-[12px]">Add...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function BasePage() {
  const params = useParams();
  const router = useRouter();
  const baseId = params.baseId as string;

  const [activeTableId, setActiveTableId] = useState<string | null>(null);
  const [activeViewId,  setActiveViewId]  = useState<string | null>(null);
  const [addingTable,   setAddingTable]   = useState(false);
  const [search,        setSearch]        = useState("");
  const [showSearch,    setShowSearch]    = useState(false);
  const [isSaving,      setIsSaving]      = useState(false);

  const { data: base, isLoading: baseLoading } = api.base.getById.useQuery({ id: baseId });

  useEffect(() => {
    if (base?.tables?.length && !activeTableId) setActiveTableId(base.tables[0]!.id);
  }, [base, activeTableId]);

  const { data: table, isLoading: tableLoading } =
    api.table.getById.useQuery({ id: activeTableId! }, { enabled: !!activeTableId });

  useEffect(() => {
    if (table?.views?.length) setActiveViewId(table.views[0]!.id);
  }, [table?.id]);

  const { data: recordData, isLoading: recordsLoading } =
    api.record.list.useQuery(
      { tableId: activeTableId!, viewId: activeViewId ?? undefined, limit: 500 },
      { enabled: !!activeTableId }
    );

  const records: RecordRow[] = recordData?.records ?? [];
  const filteredRecords = search && table
    ? records.filter((r) => table.fields.some((f: FieldRow) => getCellDisplay(r, f.id).toLowerCase().includes(search.toLowerCase())))
    : records;

  if (baseLoading) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <Loader2 size={24} className="animate-spin text-blue-600" />
    </div>
  );

  if (!base) return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-gray-500 text-[14px]">Base not found.</p>
        <button onClick={() => router.push("/")} className="mt-3 text-blue-600 text-[13px] hover:underline">← Back to home</button>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">

      {/* ── Top nav bar (white, like real Airtable) ── */}
      <header className="flex-shrink-0 flex items-center h-[56px] border-b border-gray-200 px-4 gap-3 bg-white">
        {/* Logo + base name */}
        <div className="flex items-center gap-2 min-w-0">
          <button onClick={() => router.push("/")} className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-[13px]">A</span>
          </button>
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-semibold text-gray-900 text-[15px] truncate">{base.name}</span>
            <ChevronDown size={14} className="text-gray-400 flex-shrink-0" />
          </div>
        </div>

        {/* Center nav tabs */}
        <nav className="flex items-end gap-0 ml-4 h-full">
          {[
            { label: "Data",        active: true  },
            { label: "Automations", active: false },
            { label: "Interfaces",  active: false },
            { label: "Forms",       active: false },
          ].map(({ label, active }) => (
            <button
              key={label}
              className={`px-3 h-full text-[13px] font-medium border-b-2 transition-colors ${
                active
                  ? "text-blue-600 border-blue-600"
                  : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex-1" />

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50 font-medium">
            <MonitorPlay size={14} /> Launch
          </button>
          <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
            <Link size={14} />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700">
            Share
          </button>
        </div>
      </header>

      {/* ── Table tabs row ── */}
      <div className="flex-shrink-0 flex items-stretch h-[42px] border-b border-gray-200 bg-white px-2 overflow-x-auto">
        {(base.tables ?? []).map((t) => (
          <button
            key={t.id}
            onClick={() => { setActiveTableId(t.id); setActiveViewId(null); }}
            className={`flex items-center gap-1.5 px-3 text-[13px] font-medium border-b-2 whitespace-nowrap flex-shrink-0 transition-colors ${
              activeTableId === t.id
                ? "text-blue-600 border-blue-600 bg-blue-50"
                : "text-gray-600 border-transparent hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            {t.name}
            {activeTableId === t.id && <ChevronDown size={12} className="text-blue-400" />}
          </button>
        ))}
        <button
          onClick={() => setAddingTable(true)}
          className="flex items-center gap-1 px-3 text-[13px] text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-b-2 border-transparent flex-shrink-0"
        >
          <Plus size={13} /> Add or import
        </button>

        <div className="flex-1" />
        <button className="flex items-center gap-1.5 px-3 text-[12px] text-gray-500 hover:bg-gray-50 border-b-2 border-transparent flex-shrink-0">
          <Wrench size={13} /> Tools <ChevronDown size={11} />
        </button>
      </div>

      {/* ── Toolbar ── */}
      <div className="flex-shrink-0 flex items-center h-[42px] border-b border-gray-200 bg-white px-3 gap-0.5">
        {/* Left: sidebar toggle + view name */}
        <button className="p-2 rounded hover:bg-gray-100 text-gray-500 mr-1">
          <AlignJustify size={15} />
        </button>
        <button className="flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-gray-100 text-[12px] text-gray-700 font-medium border border-transparent hover:border-gray-200">
          <Grid3X3 size={13} className="text-blue-600" />
          Grid view
          <ChevronDown size={11} className="text-gray-400" />
        </button>

        <div className="w-px h-5 bg-gray-200 mx-2" />

        {/* Toolbar actions matching Airtable exactly */}
        {[
          { icon: EyeOff,      label: "Hide fields" },
          { icon: Filter,      label: "Filter"      },
          { icon: Users,       label: "Group"       },
          { icon: ArrowUpDown, label: "Sort"        },
          { icon: Palette,     label: "Color"       },
          { icon: AlignJustify,label: "Row height"  },
        ].map(({ icon: Icon, label }) => (
          <button key={label} className="flex items-center gap-1.5 px-2 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <Icon size={13} /> {label}
          </button>
        ))}

        <button className="flex items-center gap-1.5 px-2 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100">
          <Share2 size={13} /> Share and sync
        </button>

        <div className="flex-1" />

        {/* Search */}
        {showSearch ? (
          <div className="flex items-center gap-1 bg-white border border-blue-500 rounded-lg px-2 py-1 mr-1">
            <Search size={12} className="text-blue-500" />
            <input
              autoFocus value={search} onChange={(e) => setSearch(e.target.value)}
              placeholder="Find in view" className="text-[12px] w-36 outline-none"
            />
            <button onClick={() => { setSearch(""); setShowSearch(false); }} className="text-gray-400 hover:text-gray-600"><X size={12} /></button>
          </div>
        ) : (
          <button onClick={() => setShowSearch(true)} className="p-2 rounded hover:bg-gray-100 text-gray-500">
            <Search size={15} />
          </button>
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* Views sidebar — matches screenshot exactly */}
        <div className="flex-shrink-0 w-[268px] border-r border-gray-200 bg-white flex flex-col overflow-hidden">
          {/* Create new view */}
          <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 border-b border-gray-100 font-medium">
            <Plus size={14} className="text-gray-500" /> Create new...
          </button>

          {/* Find a view */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
            <Search size={13} className="text-gray-400 flex-shrink-0" />
            <input placeholder="Find a view" className="flex-1 text-[12px] text-gray-600 outline-none bg-transparent placeholder-gray-400" />
            <button className="p-1 rounded hover:bg-gray-100 text-gray-400 flex-shrink-0">
              <Settings size={13} />
            </button>
          </div>

          {/* View list */}
          <div className="flex-1 overflow-y-auto py-1">
            {table?.views?.map((v: ViewRow) => (
              <button
                key={v.id}
                onClick={() => setActiveViewId(v.id)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-[13px] transition-colors ${
                  activeViewId === v.id
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Grid3X3 size={13} className={activeViewId === v.id ? "text-blue-600" : "text-blue-500"} />
                {v.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid + status bar */}
        <div className="flex-1 flex flex-col overflow-hidden bg-white">
          {tableLoading || recordsLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <Loader2 size={20} className="animate-spin text-blue-600" />
                <p className="text-[12px] text-gray-400">Loading…</p>
              </div>
            </div>
          ) : table ? (
            <>
              <Grid table={table} records={filteredRecords} viewId={activeViewId} onSavingChange={setIsSaving} />

              {/* Status bar matching Airtable */}
              <div className="flex-shrink-0 flex items-center h-[32px] border-t border-gray-200 px-4 bg-white gap-3">
                <span className="text-[12px] text-gray-500">
                  {filteredRecords.length} record{filteredRecords.length !== 1 ? "s" : ""}
                  {search ? ` matching "${search}"` : ""}
                </span>
                {isSaving && (
                  <span className="text-[12px] text-gray-400 flex items-center gap-1">
                    <Loader2 size={11} className="animate-spin" /> Saving…
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-[13px] text-gray-400">Select a table to get started.</p>
            </div>
          )}
        </div>
      </div>

      {addingTable && (
        <AddTableModal baseId={baseId} onClose={() => setAddingTable(false)} onCreated={(id) => setActiveTableId(id)} />
      )}
    </div>
  );
}