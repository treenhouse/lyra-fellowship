"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Search, Plus, Star, Home, Share2,
  Briefcase, ChevronRight, ChevronDown, LayoutTemplate,
  ShoppingBag, Upload, X, Bell,
  Grid2X2, List, HelpCircle, Sparkles, ArrowUpFromLine, FileText,
  AlignJustify,
} from "lucide-react";
import { api } from "~/trpc/react";
import { CreateBaseModal } from "./components/home/CreateBaseModal";
import { BaseListItem } from "./components/home/BaseListItem";
import { BaseGridCard } from "./components/home/BaseGridCard";
import { ProfilePanel } from "./components/home/ProfilePanel";

function relativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Opened just now";
  if (mins < 60) return `Opened ${mins} minute${mins === 1 ? "" : "s"} ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `Opened ${hours} hour${hours === 1 ? "" : "s"} ago`;
  const days = Math.floor(hours / 24);
  return `Opened ${days} day${days === 1 ? "" : "s"} ago`;
}

function isToday(date: Date): boolean {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

const ACTION_CARDS = [
  { icon: Sparkles,        label: "Start with Omni",         desc: "Use AI to build a custom app tailored to your workflow" },
  { icon: Grid2X2,         label: "Start with templates",    desc: "Select a template to get started and customize as you go." },
  { icon: ArrowUpFromLine, label: "Quickly upload",          desc: "Easily migrate your existing projects in just a few minutes." },
  { icon: FileText,        label: "Build an app on your own", desc: "Start with a blank app and build your ideal workflow." },
];

export default function HomePage() {
  const [creating,     setCreating]     = useState(false);
  const [search,       setSearch]       = useState("");
  const [viewMode,     setViewMode]     = useState<"list" | "grid">("grid");
  const [profileOpen,  setProfileOpen]  = useState(false);
  const { data: session } = useSession();

  const { data, isLoading } = api.base.list.useQuery();
  const bases    = data ?? [];
  const filtered = bases.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));

  const todayBases   = filtered.filter((b) => isToday(new Date(b.createdAt)));
  const olderBases   = filtered.filter((b) => !isToday(new Date(b.createdAt)));

  const groups = [
    ...(todayBases.length   ? [{ label: "Today",        items: todayBases   }] : []),
    ...(olderBases.length   ? [{ label: "Past 30 days", items: olderBases   }] : []),
  ];

  const userInitial = (session?.user?.name ?? session?.user?.email ?? "U")[0]?.toUpperCase() ?? "U";

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white font-sans">
      {/* Topbar */}
      <header className="h-[56px] relative flex items-center gap-3 px-3 border-b border-gray-200 flex-shrink-0 shadow-sm">
        <button className="rounded hover:bg-gray-100 text-gray-500 mr-0.5">
          <AlignJustify size={18} />
        </button>
        <div className="h-[40px] flex items-center flex-shrink-0">
          <svg width="40" height="32" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yellow — r=4 */}
            <path d="
              M 44.4,6.8  Q 48,5    51.6,6.8
              L 76.4,19.2 Q 80,21   76.4,22.8
              L 51.6,35.2 Q 48,37   44.4,35.2
              L 19.6,22.8 Q 16,21   19.6,19.2 Z"
              fill="#FCB400"/>

            {/* Blue — r=4 */}
            <path d="
              M 78.4,25.8 Q 82,24   82,28
              L 82,52     Q 82,56   78.3,57.6
              L 53.7,68.4 Q 50,70   50,66
              L 50,44     Q 50,40   53.6,38.2 Z"
              fill="#18BFFF"/>

            {/* Red — r=3, right vertex moved to (46,40) for consistent (-2,+3) gap from yellow */}
            <path d="
              M 16.7,25.3 Q 14,24   14,27
              L 14,49     Q 14,52   16.8,51
              L 43.2,41.1 Q 46,40   43.3,38.7 Z"
              fill="#F82B60"/>

            {/* Inner darker red — right vertex (46,40), 1/3 point → (35.3,44) */}
            <path d="
              M 15.5,25.3 Q 14,24   15.8,24.9
              L 44.2,39.1 Q 46,40   44.1,40.7
              L 37.2,43.3 Q 35.3,44 33.8,42.6 Z"
              fill="#B01030"/>
          </svg>
          <span className="text-[20px] font-bold text-gray-800">Airtable</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-[360px]" title="Search">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full pl-9 pr-16 py-1.5 rounded-full border border-gray-300 bg-white text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {search ? (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={13} />
            </button>
          ) : (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-gray-400 px-1.5 py-0.5 rounded pointer-events-none">
              ctrl K
            </span>
          )}
        </div>
        <div className="ml-auto flex items-center gap-7">
          <button className="flex items-center gap-1.5 text-[13px] text-gray-600 hover:text-gray-900">
            <HelpCircle size={15} /> Help
          </button>
          <button className="text-[13px] text-gray-600 hover:text-gray-900">Contact sales</button>
          <button className="text-gray-500 hover:text-gray-700">
            <Bell size={18} />
          </button>
          <div className="relative">
            <button
              onClick={() => setProfileOpen((v) => !v)}
              className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-[13px] font-semibold hover:bg-blue-700"
            >
              {userInitial}
            </button>
            {profileOpen && <ProfilePanel onClose={() => setProfileOpen(false)} />}
          </div>
        </div>
      </header>

      <div className="flex h-screen overflow-hidden bg-white font-sans">
        {/* ── Sidebar ── */}
        <aside className="w-14 lg:w-[240px] pt-3 flex-shrink-0 flex flex-col h-full border-r border-gray-200 bg-white transition-all duration-200">
          <nav className="flex-1 px-2 py-1 overflow-y-auto space-y-0.5">
            <button className="w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-2.5 px-2 py-2 rounded-lg text-[14px] font-semibold text-gray-900 bg-gray-100">
              <Home size={16} className="flex-shrink-0" /> <span className="hidden lg:inline">Home</span>
            </button>
            <div>
              <button className="w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
                <Star size={16} className="text-gray-500 flex-shrink-0" />
                <span className="hidden lg:flex flex-1 text-left">Starred</span>
                <ChevronDown size={14} className="text-gray-400 hidden lg:block" />
              </button>
              <p className="ml-9 text-[12px] text-gray-400 px-1 pb-1 leading-relaxed hidden lg:block">
                Your starred bases, interfaces, and workspaces will appear here
              </p>
            </div>
            <button className="w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
              <Share2 size={16} className="text-gray-500 flex-shrink-0" /> <span className="hidden lg:inline">Shared</span>
            </button>
            <button className="w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-2.5 px-2 py-2 rounded-lg text-[14px] text-gray-700 hover:bg-gray-100">
              <Briefcase size={16} className="text-gray-500 flex-shrink-0" />
              <span className="hidden lg:flex flex-1 text-left">Workspaces</span>
              <Plus size={14} className="text-gray-400 hidden lg:block" />
              <ChevronRight size={14} className="text-gray-400 hidden lg:block" />
            </button>

            <div className="my-2 border-t border-gray-200" />

            {[
              { icon: LayoutTemplate, label: "Templates and apps" },
              { icon: ShoppingBag,    label: "Marketplace"        },
              { icon: Upload,         label: "Import"             },
            ].map(({ icon: Icon, label }) => (
              <button key={label} className="w-full flex items-center justify-center lg:justify-start gap-0 lg:gap-2.5 px-2 py-2 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100">
                <Icon size={15} className="text-gray-500 flex-shrink-0" /> <span className="hidden lg:inline">{label}</span>
              </button>
            ))}
          </nav>

          <div className="p-2 lg:p-3 border-t border-gray-200 flex-shrink-0">
            <button
              onClick={() => setCreating(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-blue-600 text-white text-[14px] font-semibold hover:bg-blue-700 transition-colors"
            >
              <Plus size={16} /> <span className="hidden lg:inline">Create</span>
            </button>
          </div>
        </aside>

        {/* ── Main ── */}
        <div className="flex flex-col flex-1 min-w-0 bg-gray-100">
          <main className="flex-1 overflow-y-auto w-full">
            <div className="px-8 py-6">
              <h1 className="text-[28px] font-bold text-gray-900 mb-6">Home</h1>

              {/* Action cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3 mb-8 w-full">
                {ACTION_CARDS.map(({ icon: Icon, label, desc }) => (
                  <button
                    key={label}
                    className="flex-col items-start gap-3 p-4 rounded-lg border border-gray-300 bg-white hover:border-gray-300 hover:shadow-sm text-left transition-all"
                  >
                    <div className="flex gap-3">
                      <Icon size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                      <p className="text-[15px] font-semibold text-gray-800">{label}</p>
                    </div>
                    <p className="text-[13px] text-gray-500 mt-0.5 leading-relaxed">{desc}</p>
                  </button>
                ))}
              </div>

              {/* Bases header row */}
              <div className="flex items-center justify-between mb-3">
                <button className="flex items-center gap-1.5 text-[13px] text-gray-700 hover:bg-gray-100 px-2 py-1.5 rounded-lg transition-colors">
                  Opened anytime
                  <ChevronDown size={13} className="text-gray-500" />
                </button>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "bg-gray-200 text-gray-700" : "text-gray-400 bg-gray-100"}`}
                  >
                    <AlignJustify size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "bg-gray-200 text-gray-700" : "text-gray-400 bg-gray-100"}`}
                  >
                    <Grid2X2 size={16} />
                  </button>
                </div>
              </div>

              {/* Bases content */}
              {isLoading ? (
                <div className="space-y-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-3 animate-pulse">
                      <div className="w-8 h-8 rounded-lg bg-gray-200 flex-shrink-0" />
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
                <div>
                  {/* Column headers */}
                  <div className="flex items-center px-4 py-2 text-[12px] text-gray-500 border-b border-gray-200">
                    <span className="flex-1">Name</span>
                    <span className="w-44">Last opened</span>
                    <span className="w-44">Workspace</span>
                  </div>
                  {groups.map((group) => (
                    <div key={group.label}>
                      <p className="px-4 pt-4 pb-1 text-[12px] font-semibold text-gray-500">{group.label}</p>
                      {group.items.map((base) => (
                        <BaseListItem
                          key={base.id}
                          base={base}
                          lastOpened={relativeTime(new Date(base.createdAt))}
                          workspace="My First Workspace"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {groups.map((group) => (
                    <div key={group.label} className="mb-6">
                      <p className="mb-3 text-[12px] font-semibold text-gray-500">{group.label}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {group.items.map((base) => (
                          <BaseGridCard
                            key={base.id}
                            base={base}
                            lastOpened={relativeTime(new Date(base.createdAt))}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {creating && <CreateBaseModal onClose={() => setCreating(false)} />}
    </div>
  );
}
