"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, MoreHorizontal } from "lucide-react";
import { type RouterOutputs } from "~/trpc/react";
import { BaseMenu } from "./BaseMenu";
import { RenameModal } from "./RenameModal";
import { avatarColor, initials } from "./BaseListItem";

type BaseWithCount = RouterOutputs["base"]["list"][number];

export function BaseGridCard({ base }: { base: BaseWithCount }) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const color = avatarColor(base.id);

  return (
    <>
      <div
        className="group relative flex flex-col gap-2 p-4 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all"
        onClick={() => !menuOpen && router.push(`/${base.id}`)}
      >
        <div className="flex items-start justify-between">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[14px]"
            style={{ backgroundColor: color }}
          >
            {initials(base.name)}
          </div>
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100">
            <button
              onClick={(e) => e.stopPropagation()}
              className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-yellow-500"
            >
              <Star size={13} />
            </button>
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
                className="p-1 rounded hover:bg-gray-100 text-gray-400"
              >
                <MoreHorizontal size={13} />
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
        <p className="text-[13px] font-semibold text-gray-900 truncate">{base.name}</p>
        <p className="text-[11px] text-gray-400">
          {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
          {(base._count as { tables: number }).tables} table{(base._count as { tables: number }).tables !== 1 ? "s" : ""}
        </p>
      </div>
      {renaming && <RenameModal base={base} onClose={() => setRenaming(false)} />}
    </>
  );
}