"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Search, Plus, Star, Home, Share2,
  Briefcase, ChevronRight, ChevronDown, LayoutTemplate,
  ShoppingBag, Upload, X, Loader2,
  Grid2X2, List, Clock,
} from "lucide-react";
import { api } from "~/trpc/react";
import { CreateBaseModal } from "./components/home/CreateBaseModal";
import { BaseListItem } from "./components/home/BaseListItem";
import { BaseGridCard } from "./components/home/BaseGridCard";

export default function HomePage() {
  const [creating, setCreating] = useState(false);
  const [search,   setSearch]   = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const { data: session } = useSession();

  const { data, isLoading } = api.base.list.useQuery();
  const bases    = data ?? [];
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
            {search ? (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={13} />
              </button>
            ) : (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded pointer-events-none">
                ctrl K
              </span>
            )}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="text-[13px] text-gray-600">{session?.user?.email}</span>
            <button
              onClick={() => signOut()}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-[13px] text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
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
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100"}`}
              >
                <List size={16} />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-gray-200 text-gray-700" : "text-gray-400 hover:bg-gray-100"}`}
              >
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
                <>
                  <p className="text-[15px] font-semibold text-gray-700">No bases match &quot;{search}&quot;</p>
                  <p className="text-[13px] text-gray-400 mt-1">Try a different search</p>
                </>
              ) : (
                <>
                  <p className="text-[15px] font-semibold text-gray-700">No bases yet</p>
                  <button
                    onClick={() => setCreating(true)}
                    className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-[13px] font-medium hover:bg-blue-700"
                  >
                    <Plus size={14} /> Create a base
                  </button>
                </>
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