"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

export function CreateBaseModal({ onClose }: { onClose: () => void }) {
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
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
            <X size={18} />
          </button>
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
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-[13px] font-medium text-gray-700 hover:bg-gray-100 border border-gray-200"
          >
            Cancel
          </button>
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