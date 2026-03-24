"use client";

import { useState } from "react";
import { Share2, ChevronRight, Briefcase, Grid2X2, Trash2, Edit2, Loader2, Check } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type BaseWithCount = RouterOutputs["base"]["list"][number];

export function BaseMenu({
  base,
  onRename,
  onClose,
}: {
  base: BaseWithCount;
  onRename: () => void;
  onClose: () => void;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const utils = api.useUtils();
  const del = api.base.delete.useMutation({
    onSuccess: () => { void utils.base.list.invalidate(); onClose(); },
  });

  return (
    <div className="absolute right-0 top-8 z-30 w-52 rounded-lg bg-white shadow-xl border border-gray-200 py-1.5 text-[13px]">
      <button
        onClick={() => { onRename(); onClose(); }}
        className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-gray-50 text-gray-700"
      >
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
        <button
          onClick={() => setConfirmDelete(true)}
          className="w-full flex items-center gap-2.5 px-3 py-2 hover:bg-red-50 text-red-500"
        >
          <Trash2 size={14} /> Delete
        </button>
      ) : (
        <div className="px-3 py-2">
          <p className="text-gray-500 text-[12px] mb-2">
            Delete &quot;{base.name}&quot;? This can&apos;t be undone.
          </p>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50 text-[12px]"
            >
              Cancel
            </button>
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