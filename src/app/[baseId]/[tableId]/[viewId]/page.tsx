"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Plus, Search, Filter, Grid3X3, X, Loader2,
  ChevronDown, Settings, EyeOff, ArrowUpDown,
  Palette, AlignJustify, Share2, MonitorPlay,
  Wrench, Link, Users,
} from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";
import Sidebar from "../../../components/table/sidebar";
import { Grid } from "../../../components/table/Grid";
import { FilterPanel } from "../../../components/table/FilterPanel";
import { SortPanel } from "../../../components/table/SortPanel";
import { AddTableModal } from "../../../components/table/AddTableModal";

type TableWithMeta    = RouterOutputs["table"]["getById"];
type RecordListOutput = RouterOutputs["record"]["list"];
type RecordRow        = RecordListOutput["records"][number];
type FieldRow         = TableWithMeta["fields"][number];
type ViewRow          = TableWithMeta["views"][number];

function getCellDisplay(record: RecordRow, fieldId: string): string {
  const cell = record.cells.find((c) => c.fieldId === fieldId);
  if (!cell) return "";
  if (cell.valueText !== null) return String(cell.valueText);
  if (cell.valueNumber !== null) return String(cell.valueNumber);
  return "";
}

export default function ViewPage() {
  const { baseId, tableId, viewId } = useParams<{
    baseId: string;
    tableId: string;
    viewId: string;
  }>();
  const router = useRouter();

  const [addingTable, setAddingTable] = useState(false);
  const [search,      setSearch]      = useState("");
  const [showSearch,  setShowSearch]  = useState(false);
  const [isSaving,    setIsSaving]    = useState(false);
  const [filterOpen,  setFilterOpen]  = useState(false);
  const [sortOpen,    setSortOpen]    = useState(false);

  const { data: base, isLoading: baseLoading } = api.base.getById.useQuery({ id: baseId });

  const { data: viewConfig } = api.view.getWithConfig.useQuery(
    { id: viewId },
    { enabled: !!viewId }
  );

  const activeFilterCount = viewConfig?.filters.length ?? 0;
  const activeSortCount   = viewConfig?.sorts.length   ?? 0;

  // Close panels on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-panel]")) { setFilterOpen(false); setSortOpen(false); }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const { data: table, isLoading: tableLoading } =
    api.table.getById.useQuery({ id: tableId }, { enabled: !!tableId });

  const { data: recordData, isLoading: recordsLoading } =
    api.record.list.useQuery(
      { tableId, viewId, limit: 500 },
      { enabled: !!tableId && !!viewId }
    );

  const records: RecordRow[] = recordData?.records ?? [];
  const filteredRecords = search && table
    ? records.filter((r) =>
        table.fields.some((f: FieldRow) =>
          getCellDisplay(r, f.id).toLowerCase().includes(search.toLowerCase())
        )
      )
    : records;

  function handleTableSelect(id: string) {
    // Navigate to table index, which redirects to its first view
    router.push(`/${baseId}/${id}`);
  }

  function handleViewSelect(id: string) {
    router.push(`/${baseId}/${tableId}/${id}`);
  }

  function handleTableCreated(id: string) {
    router.push(`/${baseId}/${id}`);
  }

  if (baseLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <Loader2 size={24} className="animate-spin text-blue-600" />
      </div>
    );
  }

  if (!base) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-gray-500 text-[14px]">Base not found.</p>
          <button onClick={() => router.push("/")} className="mt-3 text-blue-600 text-[13px] hover:underline">
            ← Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden font-sans">
      <Sidebar />

      <div className="pl-[56px] h-full flex flex-col overflow-hidden">

        {/* ── Top nav ── */}
        <header className="flex-shrink-0 flex items-center h-[56px] border-b border-gray-200 px-4 bg-white">
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={() => router.push("/")}
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center flex-shrink-0 shadow-sm"
            >
              <span className="text-white font-black text-[13px]">A</span>
            </button>
            <div className="flex items-center gap-1 min-w-0">
              <span className="font-semibold text-gray-900 text-[15px] truncate">{base.name}</span>
              <ChevronDown size={14} className="text-gray-500 flex-shrink-0" />
            </div>
          </div>

          <nav className="absolute left-1/2 -translate-x-1/2 flex items-end gap-0 h-[56px]">
            {[
              { label: "Data",        active: true  },
              { label: "Automations", active: false },
              { label: "Interfaces",  active: false },
              { label: "Forms",       active: false },
            ].map(({ label, active }) => (
              <button
                key={label}
                className={`px-4 h-full text-[13px] font-medium border-b-2 transition-colors ${
                  active ? "text-blue-600 border-blue-600" : "text-gray-600 border-transparent hover:text-gray-900"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex-1" />
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-50 font-medium">
              <MonitorPlay size={14} /> Launch
            </button>
            <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 text-gray-500">
              <Link size={14} />
            </button>
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700">
              Share
            </button>
          </div>
        </header>

        {/* ── Table tabs ── */}
        <div className="flex-shrink-0 flex items-stretch h-[32px] border-b border-gray-200 bg-white overflow-x-auto">
          {(base.tables ?? []).map((t) => (
            <button
              key={t.id}
              onClick={() => handleTableSelect(t.id)}
              className={`flex items-center gap-1.5 px-4 text-[13px] font-medium border-b-2 whitespace-nowrap flex-shrink-0 transition-colors ${
                tableId === t.id
                  ? "text-blue-700 border-blue-600 bg-white"
                  : "text-gray-700 border-transparent hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {t.name}
              {tableId === t.id && <ChevronDown size={12} className="text-blue-500 ml-0.5" />}
            </button>
          ))}
          <button
            onClick={() => setAddingTable(true)}
            className="flex items-center gap-1.5 px-3 text-[13px] text-gray-500 hover:text-gray-700 hover:bg-gray-50 border-b-2 border-transparent flex-shrink-0"
          >
            <Plus size={13} /> Add or import
          </button>
          <div className="flex-1" />
          <button className="flex items-center gap-1.5 px-4 text-[12px] text-gray-500 hover:bg-gray-50 border-b-2 border-transparent flex-shrink-0">
            <Wrench size={13} /> Tools <ChevronDown size={11} className="ml-0.5" />
          </button>
        </div>

        {/* ── Toolbar ── */}
        <div className="flex-shrink-0 flex items-center h-[48px] border-b border-gray-200 bg-white px-2 gap-0">
          <button className="p-2 rounded hover:bg-gray-100 text-gray-500 mr-0.5">
            <AlignJustify size={15} />
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-gray-100 text-[12px] text-gray-700 font-medium">
            <Grid3X3 size={13} className="text-blue-600" /> Grid view
            <ChevronDown size={11} className="text-gray-400 ml-0.5" />
          </button>
          <div className="flex-1" />

          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <EyeOff size={13} /> Hide fields
          </button>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => { setFilterOpen((v) => !v); setSortOpen(false); }}
              data-panel="filter"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] whitespace-nowrap hover:bg-gray-100 ${
                filterOpen || activeFilterCount > 0 ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <Filter size={13} /> Filter
              {activeFilterCount > 0 && (
                <span className="ml-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold px-1">
                  {activeFilterCount}
                </span>
              )}
            </button>
            {filterOpen && table && (
              <FilterPanel
                viewId={viewId}
                tableId={table.id}
                fields={table.fields}
                onClose={() => setFilterOpen(false)}
              />
            )}
          </div>

          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <Users size={13} /> Group
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => { setSortOpen((v) => !v); setFilterOpen(false); }}
              data-panel="sort"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] whitespace-nowrap hover:bg-gray-100 ${
                sortOpen || activeSortCount > 0 ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <ArrowUpDown size={13} /> Sort
              {activeSortCount > 0 && (
                <span className="ml-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold px-1">
                  {activeSortCount}
                </span>
              )}
            </button>
            {sortOpen && table && (
              <SortPanel viewId={viewId} fields={table.fields} onClose={() => setSortOpen(false)} />
            )}
          </div>

          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <Palette size={13} /> Color
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <AlignJustify size={13} /> Row height
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <Share2 size={13} /> Share and sync
          </button>

          <div className="w-px h-5 bg-gray-200 mx-1" />

          {showSearch ? (
            <div className="flex items-center gap-1 bg-white border border-blue-500 rounded-lg px-2 py-1">
              <Search size={12} className="text-blue-500 flex-shrink-0" />
              <input
                autoFocus
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Find in view"
                className="text-[12px] w-36 outline-none"
              />
              <button
                onClick={() => { setSearch(""); setShowSearch(false); }}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                <X size={12} />
              </button>
            </div>
          ) : (
            <button onClick={() => setShowSearch(true)} className="p-2 rounded hover:bg-gray-100 text-gray-500">
              <Search size={15} />
            </button>
          )}
        </div>

        {/* ── Content ── */}
        <div className="flex flex-1 overflow-hidden">

          {/* Views sidebar */}
          <div className="flex-shrink-0 w-[268px] border-r border-gray-200 bg-white flex flex-col overflow-hidden">
            <button className="flex items-center gap-2 px-4 py-3 text-[13px] text-gray-700 hover:bg-gray-50 border-b border-gray-100 font-medium">
              <Plus size={14} className="text-gray-500" /> Create new...
            </button>
            <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100">
              <Search size={13} className="text-gray-400 flex-shrink-0" />
              <input
                placeholder="Find a view"
                className="flex-1 text-[12px] text-gray-600 outline-none bg-transparent placeholder-gray-400"
              />
              <button className="p-1 rounded hover:bg-gray-100 text-gray-400 flex-shrink-0">
                <Settings size={13} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-1">
              {table?.views?.map((v: ViewRow) => (
                <button
                  key={v.id}
                  onClick={() => handleViewSelect(v.id)}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-[13px] transition-colors ${
                    viewId === v.id ? "bg-blue-50 text-blue-700 font-medium" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Grid3X3 size={13} className={viewId === v.id ? "text-blue-600" : "text-blue-500"} />
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid + status bar */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f0f0f0] relative">
            {tableLoading || recordsLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <Loader2 size={20} className="animate-spin text-blue-600" />
                  <p className="text-[12px] text-gray-400">Loading…</p>
                </div>
              </div>
            ) : table ? (
              <>
                <Grid
                  table={table}
                  records={filteredRecords}
                  viewId={viewId}
                  onSavingChange={setIsSaving}
                />
                <div className="flex-shrink-0 flex items-center justify-between h-[32px] border-t border-gray-200 px-4 bg-white z-10">
                  <span className="text-[12px] text-gray-500">
                    {filteredRecords.length} record{filteredRecords.length !== 1 ? "s" : ""}
                    {search ? ` matching "${search}"` : ""}
                    {isSaving && (
                      <span className="ml-2 text-gray-400 inline-flex items-center gap-1">
                        <Loader2 size={10} className="animate-spin" /> Saving…
                      </span>
                    )}
                  </span>
                  <span className="text-[12px] text-gray-500">Sum 0.0</span>
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
          <AddTableModal
            baseId={baseId}
            onClose={() => setAddingTable(false)}
            onCreated={handleTableCreated}
          />
        )}
      </div>
    </div>
  );
}