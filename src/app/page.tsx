"use client";

// src/app/page.tsx

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search, Plus, Star, MoreHorizontal, Home, Share2,
  Briefcase, ChevronRight, ChevronDown, LayoutTemplate,
  ShoppingBag, Upload, X, Loader2, Edit2, Trash2, Check,
  Grid2X2, List, Clock, Zap, FileUp, Hammer,
} from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type BaseWithCount = RouterOutputs["base"]["list"][number];

// ─── Avatar helpers ───────────────────────────────────────────────────────────
const AVATAR_COLORS = [
  "#4a4a4a", "#1f6feb", "#c9372c", "#206e4e",
  "#ae2e24", "#0055cc", "#7a1fa2", "#164b35",
];
function avatarColor(id: string) {
  return AVATAR_COLORS[id.charCodeAt(0) % AVATAR_COLORS.length]!;
}
function initials(name: string) {
  return name.slice(0, 2);
}

function CreateBaseModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("Untitled Base");
  const utils = api.useUtils();
  const create = api.base.create.useMutation({
    onSuccess: () => { void utils.base.list.invalidate(); onClose(); },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-[480px] rounded-xl bg-white shadow-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[17px] font-semibold text-gray-900">Create a base</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400"><X size={18} /></button>
        </div>
        <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Base name</label>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && create.mutate({ name: name.trim() })}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2 justify-end mt-5">
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-100 border border-gray-200">Cancel</button>
          <button
            disabled={!name.trim() || create.isPending}
            onClick={() => create.mutate({ name: name.trim() })}
            className="px-4 py-2 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {create.isPending && <Loader2 size={13} className="animate-spin" />}
            Create base
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Rename Modal ─────────────────────────────────────────────────────────────
function RenameModal({ base, onClose }: { base: BaseWithCount; onClose: () => void }) {
  const [name, setName] = useState(base.name);
  const utils = api.useUtils();
  const update = api.base.update.useMutation({
    onSuccess: () => { void utils.base.list.invalidate(); onClose(); },
  });
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-80 rounded-xl bg-white shadow-2xl p-5">
        <h2 className="text-[15px] font-semibold text-gray-900 mb-4">Rename base</h2>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && update.mutate({ id: base.id, name: name.trim() })}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2 justify-end mt-4">
          <button onClick={onClose} className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200">Cancel</button>
          <button
            disabled={!name.trim() || update.isPending}
            onClick={() => update.mutate({ id: base.id, name: name.trim() })}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2"
          >
            {update.isPending && <Loader2 size={12} className="animate-spin" />}
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Base Context Menu ────────────────────────────────────────────────────────
function BaseMenu({ base, onRename, onClose }: { base: BaseWithCount; onRename: () => void; onClose: () => void }) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const utils = api.useUtils();
  const del = api.base.delete.useMutation({
    onSuccess: () => { void utils.base.list.invalidate(); onClose(); },
  });
  return (
    <div className="absolute right-0 top-8 z-30 w-52 rounded-lg bg-white shadow-xl border border-gray-200 py-1.5 text-[13px]">
      <button onClick={() => { onRename(); onClose(); }} className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700">
        <Edit2 size={14} className="text-gray-400" /> Rename
      </button>
      <button className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700">
        <Share2 size={14} className="text-gray-400" /> Duplicate
      </button>
      <button className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700">
        <ChevronRight size={14} className="text-gray-400" /> Move
      </button>
      <button className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700">
        <Briefcase size={14} className="text-gray-400" /> Go to workspace
      </button>
      <button className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700">
        <Grid2X2 size={14} className="text-gray-400" /> Customize appearance
      </button>
      <hr className="my-1 border-gray-100" />
      {!confirmDelete ? (
        <button onClick={() => setConfirmDelete(true)} className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-red-50 text-red-500">
          <Trash2 size={14} /> Delete
        </button>
      ) : (
        <div className="px-3 py-2">
          <p className="text-gray-500 text-[12px] mb-2">Delete &quot;{base.name}&quot;? This can&apos;t be undone.</p>
          <div className="flex gap-2">
            <button onClick={onClose} className="flex-1 px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-[12px]">Cancel</button>
            <button
              onClick={() => del.mutate({ id: base.id })}
              disabled={del.isPending}
              className="flex-1 px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 text-[12px] flex items-center justify-center gap-1"
            >
              {del.isPending ? <Loader2 size={11} className="animate-spin" /> : <Check size={11} />} Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Base List Item ───────────────────────────────────────────────────────────
function BaseListItem({ base }: { base: BaseWithCount }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const color = avatarColor(base.id);
  return (
    <>
      <div
        className="group relative flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
        onClick={() => !menuOpen && router.push(`/base/${base.id}`)}
      >
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-[14px]"
          style={{ backgroundColor: color }}
        >
          {initials(base.name)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-gray-900 truncate">{base.name}</p>
          <p className="text-[12px] text-blue-600 mt-0.5">Open data</p>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={(e) => e.stopPropagation()} className="p-1.5 rounded hover:bg-gray-200 text-gray-400 hover:text-yellow-500 transition-colors" title="Star">
            <Star size={15} />
          </button>
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
              className="p-1.5 rounded hover:bg-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <MoreHorizontal size={15} />
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-20" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }} />
                <BaseMenu base={base} onRename={() => setRenaming(true)} onClose={() => setMenuOpen(false)} />
              </>
            )}
          </div>
        </div>
      </div>
      {renaming && <RenameModal base={base} onClose={() => setRenaming(false)} />}
    </>
  );
}

// ─── Base Grid Card ───────────────────────────────────────────────────────────
function BaseGridCard({ base }: { base: BaseWithCount }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const color = avatarColor(base.id);
  return (
    <>
      <div
        className="group relative flex flex-col gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all"
        onClick={() => !menuOpen && router.push(`/base/${base.id}`)}
      >
        <div className="flex items-start justify-between">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[14px]" style={{ backgroundColor: color }}>
            {initials(base.name)}
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <button onClick={(e) => e.stopPropagation()} className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-yellow-500"><Star size={13} /></button>
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }} className="p-1 rounded hover:bg-gray-100 text-gray-400"><MoreHorizontal size={13} /></button>
              {menuOpen && (
                <>
                  <div className="fixed inset-0 z-20" onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }} />
                  <BaseMenu base={base} onRename={() => setRenaming(true)} onClose={() => setMenuOpen(false)} />
                </>
              )}
            </div>
          </div>
        </div>
        <p className="text-[13px] font-semibold text-gray-900 truncate">{base.name}</p>
        <p className="text-[11px] text-gray-400">{base._count.tables} table{base._count.tables !== 1 ? "s" : ""}</p>
      </div>
      {renaming && <RenameModal base={base} onClose={() => setRenaming(false)} />}
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [creating,  setCreating]  = useState(false);
  const [search,    setSearch]    = useState("");
  const [viewMode,  setViewMode]  = useState<"list" | "grid">("list");

  const { data, isLoading } = api.base.list.useQuery();
  const bases    = (data ?? []);
  const filtered = bases.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex h-screen overflow-hidden bg-white font-sans">

      {/* ── Sidebar ── */}
      <aside className="w-[264px] flex-shrink-0 flex flex-col h-full border-r border-gray-200 bg-white">
        <div className="h-[56px] flex items-center px-4 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 flex items-center justify-center">
            <span className="text-white font-black text-[13px]">A</span>
          </div>
        </div>

        <nav className="flex-1 px-3 py-1 overflow-y-auto space-y-0.5">
          <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[14px] font-semibold text-gray-900 bg-gray-100">
            <Home size={16} /> Home
          </button>
          <div>
            <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
              <Star size={16} className="text-gray-500" />
              <span className="flex-1 text-left">Starred</span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>
            <p className="ml-9 text-[12px] text-gray-400 px-1 pb-1 leading-relaxed">
              Your starred bases, interfaces, and workspaces will appear here
            </p>
          </div>
          <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
            <Share2 size={16} className="text-gray-500" /> Shared
          </button>
          <button className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
            <Briefcase size={16} className="text-gray-500" />
            <span className="flex-1 text-left">Workspaces</span>
            <Plus size={14} className="text-gray-400" />
            <ChevronRight size={14} className="text-gray-400" />
          </button>

          <div className="my-2 border-t border-gray-200" />

          {[
            { icon: LayoutTemplate, label: "Templates and apps" },
            { icon: ShoppingBag,    label: "Marketplace"        },
            { icon: Upload,         label: "Import"             },
          ].map(({ icon: Icon, label }) => (
            <button key={label} className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100">
              <Icon size={15} className="text-gray-500" /> {label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-200 flex-shrink-0">
          <button
            onClick={() => setCreating(true)}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-[14px] font-semibold hover:bg-blue-700 transition-colors"
          >
            <Plus size={16} /> Create
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="flex flex-col flex-1 min-w-0 bg-[#f8f8f8]">

        {/* Topbar */}
        <header className="h-[56px] flex items-center gap-3 px-6 flex-shrink-0">
          <div className="flex-1 max-w-[480px] relative">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full pl-9 pr-16 py-2 rounded-full border border-gray-300 bg-white text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            {search
              ? <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"><X size={13} /></button>
              : <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded pointer-events-none">ctrl K</span>
            }
          </div>
          <div className="ml-auto">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[13px] font-semibold">D</div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-8 py-6">
          <h1 className="text-[28px] font-bold text-gray-900 mb-6">Home</h1>

          {/* Bases header */}
          <div className="flex items-center justify-between mb-3">
            <button className="flex items-center gap-1.5 text-[13px] text-gray-700 hover:bg-gray-200 px-2 py-1.5 rounded-lg transition-colors">
              <Clock size={14} className="text-gray-500" />
              Opened anytime
              <ChevronDown size={13} className="text-gray-500" />
            </button>
            <div className="flex items-center gap-1">
              <button onClick={() => setViewMode("list")} className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100"}`}>
                <List size={16} />
              </button>
              <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100"}`}>
                <Grid2X2 size={16} />
              </button>
            </div>
          </div>

          {/* Bases list/grid */}
          {isLoading ? (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3 animate-pulse">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex-shrink-0" />
                  <div className="flex-1 space-y-1.5">
                    <div className="h-3.5 bg-gray-200 rounded w-1/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/6" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                <Search size={22} className="text-gray-300" />
              </div>
              {search ? (
                <><p className="text-[15px] font-semibold text-gray-700">No bases match &quot;{search}&quot;</p><p className="text-[13px] text-gray-400 mt-1">Try a different search</p></>
              ) : (
                <><p className="text-[15px] font-semibold text-gray-700">No bases yet</p><button onClick={() => setCreating(true)} className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700"><Plus size={14} /> Create a base</button></>
              )}
            </div>
          ) : viewMode === "list" ? (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
              {filtered.map((base) => <BaseListItem key={base.id} base={base} />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {filtered.map((base) => <BaseGridCard key={base.id} base={base} />)}
            </div>
          )}
        </main>
      </div>

      {creating && <CreateBaseModal onClose={() => setCreating(false)} />}
    </div>
  );
}