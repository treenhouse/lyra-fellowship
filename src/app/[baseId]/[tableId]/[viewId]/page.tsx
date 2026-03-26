"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Plus, Search, Filter, Grid3X3, X, Loader2,
  ChevronDown, Settings, EyeOff, ArrowUpDown,
  Palette, AlignJustify, Share2, MonitorPlay,
  Wrench, Link, Users, DatabaseZap, FlaskConical,
  MoreHorizontal, Trash2, GripVertical, Star, Pencil, Copy,
} from "lucide-react";
import { api } from "~/trpc/react";
import Sidebar from "../../../components/table/sidebar";
import { Grid } from "../../../components/table/Grid";
import { FilterPanel } from "../../../components/table/FilterPanel";
import { SortPanel } from "../../../components/table/SortPanel";
import { AddTableModal } from "../../../components/table/AddTableModal";
import { HideFieldsPanel } from "../../../components/table/HideFieldsPanel";


export default function ViewPage() {
  const { baseId, tableId, viewId } = useParams<{
    baseId: string;
    tableId: string;
    viewId: string;
  }>();
  const router = useRouter();

  const [addingTable,       setAddingTable]       = useState(false);
  const [search,            setSearch]            = useState("");
  const [showSearch,        setShowSearch]        = useState(false);
  const [isSaving,          setIsSaving]          = useState(false);
  const [filterOpen,        setFilterOpen]        = useState(false);
  const [sortOpen,          setSortOpen]          = useState(false);
  const [hideFieldsOpen,    setHideFieldsOpen]    = useState(false);
  const [hiddenFieldIds,    setHiddenFieldIds]    = useState<Set<string>>(new Set());
  const [recordCount,       setRecordCount]       = useState(0);
  const [seedLargeProgress, setSeedLargeProgress] = useState<{ done: number; total: number } | null>(null);

  // View rename/delete/reorder state
  const [renamingViewId,    setRenamingViewId]    = useState<string | null>(null);
  const [renameValue,       setRenameValue]       = useState("");
  const [viewMenuId,        setViewMenuId]        = useState<string | null>(null);
  const [viewMenuPos,       setViewMenuPos]       = useState<{ top: number; left: number } | null>(null);
  const [draggedViewId,     setDraggedViewId]     = useState<string | null>(null);
  const [viewOrder,         setViewOrder]         = useState<string[]>([]);
  // Ref so drag-end handler always reads the latest order without stale closures
  const viewOrderRef = useRef<string[]>([]);
  useEffect(() => { viewOrderRef.current = viewOrder; }, [viewOrder]);

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
      if (!target.closest("[data-panel]")) { setFilterOpen(false); setSortOpen(false); setHideFieldsOpen(false); }
      if (!target.closest("[data-view-menu]")) { setViewMenuId(null); setViewMenuPos(null); }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Ctrl+F / Cmd+F opens search
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        setShowSearch(true);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const { data: table, isLoading: tableLoading } =
    api.table.getById.useQuery({ id: tableId }, { enabled: !!tableId });

  const utils = api.useUtils();

  const createView = api.view.create.useMutation({
    onMutate: async (input) => {
      await utils.table.getById.cancel({ id: tableId });
      const prev  = utils.table.getById.getData({ id: tableId });
      const tempId = crypto.randomUUID();
      const tempView = { id: tempId, tableId, name: input.name, position: viewOrderRef.current.length, createdAt: new Date(), filterConjunction: "and" };
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return { ...old, views: [...old.views, tempView] };
      });
      setViewOrder((prev) => [...prev, tempId]);
      return { prev, tempId };
    },
    onSuccess: (newView, _input, ctx) => {
      if (!ctx) return;
      setViewOrder((prev) => prev.map((id) => id === ctx.tempId ? newView.id : id));
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return { ...old, views: old.views.map((v) => v.id === ctx.tempId ? newView : v) };
      });
      router.push(`/${baseId}/${tableId}/${newView.id}`);
    },
    onError: (_err, _input, ctx) => {
      utils.table.getById.setData({ id: tableId }, ctx?.prev);
      if (ctx) setViewOrder((prev) => prev.filter((id) => id !== ctx.tempId));
    },
    onSettled: () => utils.table.getById.invalidate({ id: tableId }),
  });

  const renameView = api.view.update.useMutation({
    onMutate: async (input) => {
      await utils.table.getById.cancel({ id: tableId });
      const prev = utils.table.getById.getData({ id: tableId });
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return { ...old, views: old.views.map((v) => v.id === input.id ? { ...v, name: input.name } : v) };
      });
      return { prev };
    },
    onError: (_err, _input, ctx) => {
      utils.table.getById.setData({ id: tableId }, ctx?.prev);
    },
    onSettled: () => utils.table.getById.invalidate({ id: tableId }),
  });

  const deleteView = api.view.delete.useMutation({
    onSuccess: async (deleted) => {
      await utils.table.getById.invalidate({ id: tableId });
      // Navigate away if deleted view was active
      if (deleted.id === viewId) {
        const remaining = (table?.views ?? []).filter((v) => v.id !== deleted.id);
        if (remaining[0]) router.push(`/${baseId}/${tableId}/${remaining[0].id}`);
        else router.push(`/${baseId}/${tableId}`);
      }
    },
  });

  const duplicateView = api.view.duplicate.useMutation({
    onSuccess: async (copy) => {
      await utils.table.getById.invalidate({ id: tableId });
      router.push(`/${baseId}/${tableId}/${copy.id}`);
    },
  });

  const reorderViews = api.view.reorder.useMutation({
    onSettled: () => utils.table.getById.invalidate({ id: tableId }),
  });

  const seedFake = api.record.seedFake.useMutation({
    onSettled: () => void utils.record.list.invalidate({ tableId }),
  });

  // Sync viewOrder from server — but only when the set of view IDs actually changes
  // (not on every drag, which would undo the local reorder immediately)
  useEffect(() => {
    if (!table?.views) return;
    const sorted = [...table.views].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
    const serverIds = sorted.map((v) => v.id);
    setViewOrder((prev) => {
      const sameSet = prev.length === serverIds.length && serverIds.every((id) => prev.includes(id));
      return sameSet ? prev : serverIds;
    });
  }, [table?.views]);

  const handleCountChange = useCallback((n: number) => setRecordCount(n), []);

  async function handleSeedLarge() {
    if (!tableId || seedLargeProgress) return;
    const TOTAL = 10_000;
    const BATCH = 1_000;
    setSeedLargeProgress({ done: 0, total: TOTAL });
    try {
      for (let done = 0; done < TOTAL; done += BATCH) {
        await seedFake.mutateAsync({ tableId, count: BATCH });
        setSeedLargeProgress({ done: done + BATCH, total: TOTAL });
      }
    } finally {
      setSeedLargeProgress(null);
    }
  }

  function handleTableSelect(id: string) {
    router.push(`/${baseId}/${id}`);
  }

  function handleViewSelect(id: string) {
    router.push(`/${baseId}/${tableId}/${id}`);
  }

  function handleTableCreated(id: string) {
    router.push(`/${baseId}/${id}`);
  }

  function handleCreateView() {
    const name = `Grid ${(table?.views?.length ?? 0) + 1}`;
    createView.mutate({ tableId, name });
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
              className="w-8 h-8 rounded-md bg-[#535965] flex items-center justify-center flex-shrink-0 shadow-sm"
            >
              <svg width="30" height="24" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Yellow — r=4 */}
                <path d="
                  M 44.4,6.8  Q 48,5    51.6,6.8
                  L 76.4,19.2 Q 80,21   76.4,22.8
                  L 51.6,35.2 Q 48,37   44.4,35.2
                  L 19.6,22.8 Q 16,21   19.6,19.2 Z"
                  fill="#FFFFFF"/>

                {/* Blue — r=4 */}
                <path d="
                  M 78.4,25.8 Q 82,24   82,28
                  L 82,52     Q 82,56   78.3,57.6
                  L 53.7,68.4 Q 50,70   50,66
                  L 50,44     Q 50,40   53.6,38.2 Z"
                  fill="#FFFFFF"/>

                {/* Red — r=3, right vertex moved to (46,40) for consistent (-2,+3) gap from yellow */}
                <path d="
                  M 16.7,25.3 Q 14,24   14,27
                  L 14,49     Q 14,52   16.8,51
                  L 43.2,41.1 Q 46,40   43.3,38.7 Z"
                  fill="#FFFFFF"/>
              </svg>
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
                className={`mx-2 h-full text-[13px] font-medium border-b-2 transition-colors ${
                  active ? "text-gray-900 border-gray-600" : "text-gray-600 border-transparent hover:text-gray-900"
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
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gray-600 text-white text-[13px] font-semibold hover:bg-blue-700">
              Share
            </button>
          </div>
        </header>

        {/* ── Table tabs ── */}
        <div className="flex-shrink-0 flex items-stretch h-[32px] bg-[#f6f8fc] border-b border-[#d5d5d5] overflow-x-auto">
          {(base.tables ?? []).map((t) => (
            <button
              key={t.id}
              onClick={() => handleTableSelect(t.id)}
              className={`flex items-center gap-1.5 px-3 text-[12px] font-medium whitespace-nowrap flex-shrink-0 transition-colors ${
                tableId === t.id
                  ? "bg-white text-gray-900 z-50 rounded-t border-t border-l border-r border-[#d5d5d5]"
                  : "text-gray-600 hover:text-gray-800 hover:bg-[#e3e3e3]"
              }`}
            >
              {t.name}
              {tableId === t.id && <ChevronDown size={16} className="text-gray-400 ml-0.5" />}
            </button>
          ))}
          <button className="flex items-center gap-1 px-3 h-[32px] text-[12px] text-gray-500 hover:text-gray-700 hover:bg-[#e3e3e3] rounded flex-shrink-0">
            <ChevronDown size={16} />
          </button>
          <button
            onClick={() => setAddingTable(true)}
            className="flex items-center gap-1 px-3 h-[32px] text-[12px] text-gray-500 hover:text-gray-700 hover:bg-[#e3e3e3] rounded flex-shrink-0"
          >
            <Plus size={16} /> Add or import
          </button>
          <div className="flex-1" />
          <button className="flex items-center gap-1.5 px-4 h-[28px] text-[12px] text-gray-500 hover:bg-[#e3e3e3] rounded-t flex-shrink-0">
            <Wrench size={12} /> Tools <ChevronDown size={10} className="ml-0.5" />
          </button>
        </div>

        {/* ── Toolbar ── */}
        <div className="flex-shrink-0 flex items-center h-[48px] border-b border-gray-200 bg-white px-2 gap-1">
          <button className="p-2 rounded hover:bg-gray-100 text-gray-500 mr-0.5">
            <AlignJustify size={15} />
          </button>
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded hover:bg-gray-100 text-[12px] text-gray-700 font-medium">
            <Grid3X3 size={13} className="text-blue-600" /> Grid view
            <ChevronDown size={11} className="text-gray-400 ml-0.5" />
          </button>
          <div className="flex-1" />

          {/* Hide fields */}
          <div className="relative">
            <button
              data-panel="hidefields"
              onClick={() => { setHideFieldsOpen((v) => !v); setFilterOpen(false); setSortOpen(false); }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] whitespace-nowrap transition-colors ${
                hiddenFieldIds.size > 0
                  ? "bg-blue-100 text-gray-600 hover:bg-blue-200 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <EyeOff size={13} />
              {hiddenFieldIds.size > 0
                ? `${hiddenFieldIds.size} hidden field${hiddenFieldIds.size !== 1 ? "s" : ""}`
                : "Hide fields"
              }
            </button>
            {hideFieldsOpen && table && (
              <HideFieldsPanel
                fields={table.fields}
                hiddenFieldIds={hiddenFieldIds}
                onToggle={(id) =>
                  setHiddenFieldIds((prev) => {
                    const next = new Set(prev);
                    if (next.has(id)) next.delete(id); else next.add(id);
                    return next;
                  })
                }
              />
            )}
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => { setFilterOpen((v) => !v); setSortOpen(false); }}
              data-panel="filter"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] whitespace-nowrap transition-colors ${
                activeFilterCount > 0
                  ? "bg-green-100 text-gray-600 hover:bg-green-200 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Filter size={13} />
              {activeFilterCount > 0
                ? `Filtered by ${viewConfig?.filters.map((f) => f.field?.name).filter(Boolean).join(", ") ?? `${activeFilterCount} field${activeFilterCount !== 1 ? "s" : ""}`}`
                : "Filter"
              }
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

          {/* Group */}
          <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-gray-600 hover:bg-gray-100 whitespace-nowrap">
            <Users size={13} /> Group
          </button>

          {/* Sort */}
          <div className="relative">
            <button
              onClick={() => { setSortOpen((v) => !v); setFilterOpen(false); }}
              data-panel="sort"
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] whitespace-nowrap transition-colors ${
                activeSortCount > 0
                  ? "bg-orange-100 text-gray-600 hover:bg-orange-200 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <ArrowUpDown size={13} />
              {activeSortCount > 0
                ? `Sorted by ${activeSortCount} field${activeSortCount !== 1 ? "s" : ""}`
                : "Sort"
              }
            </button>
            {sortOpen && table && (
              <SortPanel viewId={viewId} tableId={tableId} fields={table.fields} onClose={() => setSortOpen(false)} />
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

          {/* ── Seed data buttons ── */}
          <button
            onClick={() => tableId && seedFake.mutate({ tableId, count: 10 })}
            disabled={seedFake.isPending || !tableId}
            title="Add 10 fake rows"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-emerald-700 hover:bg-emerald-50 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {seedFake.isPending
              ? <Loader2 size={13} className="animate-spin" />
              : <FlaskConical size={13} />
            }
            +10 rows
          </button>

          <button
            onClick={handleSeedLarge}
            disabled={!!seedLargeProgress || !tableId}
            title="Add 100k fake rows in 1k batches"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-[12px] text-violet-700 hover:bg-violet-50 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {seedLargeProgress
              ? <Loader2 size={13} className="animate-spin" />
              : <DatabaseZap size={13} />
            }
            {seedLargeProgress
              ? `+100k (${(seedLargeProgress.done / 1000).toFixed(0)}k / ${seedLargeProgress.total / 100}k)`
              : "+100k rows"
            }
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
          <div className="flex-shrink-0 w-[280px] border-r border-gray-200 bg-white flex flex-col overflow-hidden">
            <div className="flex-shrink-0 flex-col items-center rounded gap-2 px-3 py-2">
              <button
                onClick={handleCreateView}
                disabled={createView.isPending}
                className="flex items-center rounded gap-1.5 px-2 py-2 text-[12px] w-[255px] text-gray-700 hover:bg-gray-100 font-medium disabled:opacity-50"
              >
                <Plus size={16} className="rounded text-gray-500 flex-shrink-0" /> Create new...
              </button>
              <div className="flex items-center rounded gap-2 px-2 py-2 border-b border-gray-100">
                <Search size={16} className="text-gray-400 flex-shrink-0" />
                <input
                  placeholder="Find a view"
                  className="flex-1 text-[12px] rounded text-gray-600 outline-none bg-transparent placeholder-gray-400"
                />
                <button className="p-1 rounded hover:bg-gray-100 text-gray-400 flex-shrink-0">
                  <Settings size={16} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-1">
                {viewOrder.map((vid) => {
                  const v = table?.views?.find((x) => x.id === vid);
                  if (!v) return null;
                  const isActive   = viewId === v.id;
                  const isRenaming = renamingViewId === v.id;
                  return (
                    <div
                      key={v.id}
                      draggable
                      onDragStart={() => setDraggedViewId(v.id)}
                      onDragOver={(e) => {
                        e.preventDefault();
                        if (!draggedViewId || draggedViewId === v.id) return;
                        setViewOrder((prev) => {
                          const next = prev.filter((id) => id !== draggedViewId);
                          const idx  = next.indexOf(v.id);
                          next.splice(idx, 0, draggedViewId);
                          return next;
                        });
                      }}
                      onDragEnd={() => {
                        const finalOrder = viewOrderRef.current;
                        setDraggedViewId(null);
                        reorderViews.mutate({ tableId, orderedIds: finalOrder });
                      }}
                      className={`group w-full flex items-center gap-1.5 px-2 py-1.5 text-[13px] transition-colors cursor-pointer ${
                        isActive ? "bg-gray-100 text-gray-800 font-medium" : "text-gray-700 hover:bg-gray-50"
                      } ${draggedViewId === v.id ? "opacity-40" : ""}`}
                      onClick={() => { if (!isRenaming) handleViewSelect(v.id); }}
                    >
                      <GripVertical size={12} className="text-gray-300 flex-shrink-0 opacity-0 group-hover:opacity-100 cursor-grab active:cursor-grabbing" />
                      <Grid3X3 size={13} className={isActive ? "text-blue-600 flex-shrink-0" : "text-blue-500 flex-shrink-0"} />
                      {isRenaming ? (
                        <input
                          autoFocus
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              if (renameValue.trim()) renameView.mutate({ id: v.id, name: renameValue.trim() });
                              setRenamingViewId(null);
                            }
                            if (e.key === "Escape") setRenamingViewId(null);
                          }}
                          onBlur={() => {
                            if (renameValue.trim()) renameView.mutate({ id: v.id, name: renameValue.trim() });
                            setRenamingViewId(null);
                          }}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 text-[13px] outline-none bg-white border border-blue-400 rounded px-1 py-0.5 min-w-0"
                        />
                      ) : (
                        <span className="flex-1 truncate">{v.name}</span>
                      )}
                      {/* dots button — menu is rendered at page level to escape overflow:hidden */}
                      <button
                        data-view-menu
                        onClick={(e) => {
                          e.stopPropagation();
                          const rect = e.currentTarget.getBoundingClientRect();
                          if (viewMenuId === v.id) {
                            setViewMenuId(null);
                            setViewMenuPos(null);
                          } else {
                            setViewMenuId(v.id);
                            setViewMenuPos({ top: rect.bottom + 4, left: rect.left });
                          }
                        }}
                        className="p-0.5 rounded hover:bg-gray-200 text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0"
                      >
                        <MoreHorizontal size={13} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grid + status bar */}
          <div className="flex-1 flex flex-col overflow-hidden bg-[#f0f0f0] relative">
            {tableLoading ? (
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
                  viewId={viewId}
                  search={search}
                  hiddenFieldIds={hiddenFieldIds}
                  onSavingChange={setIsSaving}
                  onCountChange={handleCountChange}
                />
                <div className="flex-shrink-0 flex items-center justify-between h-[32px] border-t border-gray-200 px-4 bg-white z-10">
                  <span className="text-[12px] text-gray-500">
                    {recordCount.toLocaleString()} record{recordCount !== 1 ? "s" : ""} loaded
                    {search ? ` matching "${search}"` : ""}
                    {seedLargeProgress && (
                      <span className="ml-2 text-violet-500 inline-flex items-center gap-1">
                        <Loader2 size={10} className="animate-spin" />
                        Seeding {seedLargeProgress.done.toLocaleString()} / 100k…
                      </span>
                    )}
                    {!seedLargeProgress && seedFake.isPending && (
                      <span className="ml-2 text-emerald-500 inline-flex items-center gap-1">
                        <Loader2 size={10} className="animate-spin" /> Seeding…
                      </span>
                    )}
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

      {/* View context menu — rendered at root to escape overflow:hidden on sidebar */}
      {viewMenuId && viewMenuPos && (() => {
        const menuView = table?.views?.find((x) => x.id === viewMenuId);
        if (!menuView) return null;
        return (
          <div
            data-view-menu
            style={{ position: "fixed", top: viewMenuPos.top, left: viewMenuPos.left, zIndex: 999 }}
            className="bg-white border border-gray-200 rounded-xl shadow-xl py-1.5 w-[220px]"
          >
            <button
              onClick={() => setViewMenuId(null)}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50"
            >
              <Star size={14} className="text-gray-400" />
              Add to &apos;My favorites&apos;
            </button>
            <div className="my-1 border-t border-gray-100" />
            <button
              onClick={() => {
                setRenamingViewId(menuView.id);
                setRenameValue(menuView.name);
                setViewMenuId(null);
                setViewMenuPos(null);
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50"
            >
              <Pencil size={14} className="text-gray-400" />
              Rename view
            </button>
            <button
              onClick={() => {
                setViewMenuId(null);
                setViewMenuPos(null);
                duplicateView.mutate({ id: menuView.id });
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50"
            >
              <Copy size={14} className="text-gray-400" />
              Duplicate view
            </button>
            <div className="my-1 border-t border-gray-100" />
            <button
              onClick={() => {
                setViewMenuId(null);
                setViewMenuPos(null);
                deleteView.mutate({ id: menuView.id });
              }}
              disabled={(table?.views?.length ?? 0) <= 1}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] text-red-500 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Trash2 size={14} className="text-red-400" />
              Delete view
            </button>
          </div>
        );
      })()}
    </div>
  );
}
