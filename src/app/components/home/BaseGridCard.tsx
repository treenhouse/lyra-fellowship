"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, MoreHorizontal } from "lucide-react";
import { type RouterOutputs } from "~/trpc/react";
import { BaseMenu } from "./BaseMenu";
import { RenameModal } from "./RenameModal";
import { avatarColor, initials } from "./BaseListItem";

type BaseWithCount = RouterOutputs["base"]["list"][number];

interface Props {
  base: BaseWithCount;
  lastOpened: string;
}

export function BaseGridCard({ base, lastOpened }: Props) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [renaming, setRenaming] = useState(false);
  const color = avatarColor(base.id);

  return (
    <>
      <div
        className="group relative flex items-center gap-3 p-3 rounded-lg shadow-sm border border-gray-300 bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all"
        onClick={() => !menuOpen && router.push(`/${base.id}`)}
      >
        <div
          className="w-13 h-13 rounded-lg m-2 flex items-center justify-center flex-shrink-0 text-white font-semi-bold text-[18px]"
          style={{ backgroundColor: color }}
        >
          {initials(base.name)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-semibold text-gray-900 truncate">{base.name}</p>
          <p className="text-[12px] text-gray-400 mt-0.5">{lastOpened}</p>
        </div>
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
          <button
            onClick={(e) => e.stopPropagation()}
            className="p-1 rounded hover:bg-gray-100 text-gray-400 hover:text-yellow-500"
            title="Star"
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
      {renaming && <RenameModal base={base} onClose={() => setRenaming(false)} />}
    </>
  );
}