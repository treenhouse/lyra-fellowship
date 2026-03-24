"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type BaseWithCount = RouterOutputs["base"]["list"][number];

export function RenameModal({ base, onClose }: { base: BaseWithCount; onClose: () => void }) {
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
          onKeyDown={(e) =>
            e.key === "Enter" && name.trim() && update.mutate({ id: base.id, name: name.trim() })
          }
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-2 justify-end mt-4">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200"
          >
            Cancel
          </button>
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