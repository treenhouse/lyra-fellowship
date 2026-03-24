"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";

export function AddTableModal({
  baseId,
  onClose,
  onCreated,
}: {
  baseId: string;
  onClose: () => void;
  onCreated: (id: string) => void;
}) {
  const [name, setName] = useState("");
  const utils = api.useUtils();
  const create = api.table.create.useMutation({
    onSuccess: (t) => {
      void utils.base.getById.invalidate({ id: baseId });
      onCreated(t.id);
      onClose();
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-80 rounded-xl bg-white shadow-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 text-[15px]">Add table</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
            <X size={16} />
          </button>
        </div>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && create.mutate({ baseId, name: name.trim() })}
          placeholder="Table name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200"
          >
            Cancel
          </button>
          <button
            disabled={!name.trim() || create.isPending}
            onClick={() => create.mutate({ baseId, name: name.trim() })}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1.5"
          >
            {create.isPending && <Loader2 size={12} className="animate-spin" />} Add table
          </button>
        </div>
      </div>
    </div>
  );
}