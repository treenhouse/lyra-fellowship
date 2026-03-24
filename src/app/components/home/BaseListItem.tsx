"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, MoreHorizontal } from "lucide-react";
import { type RouterOutputs } from "~/trpc/react";
import { BaseMenu } from "./BaseMenu";
import { RenameModal } from "./RenameModal";

type BaseWithCount = RouterOutputs["base"]["list"][number];

const AVATAR_COLORS = [
  "#4a4a4a", "#1f6feb", "#c9372c", "#206e4e",
  "#ae2e24", "#0055cc", "#7a1fa2", "#164b35",
];

export function avatarColor(id: string) {
  return AVATAR_COLORS[id.charCodeAt(0) % AVATAR_COLORS.length]!;
}

export function initials(name: string) {
  return name.slice(0, 2);
}

export function BaseListItem({ base }: { base: BaseWithCount }) {
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
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded hover:bg-gray-200 text-gray-400 hover:text-yellow-500 transition-colors"
            title="Star"
          >
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
                <div
                  className="fixed inset-0 z-20"
                  onClick={(e) => { e.stopPropagation(); setMenuOpen(false); }}
                />
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