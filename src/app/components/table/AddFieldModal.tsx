"use client";

import { useState } from "react";
import { X, Loader2, Hash, Type } from "lucide-react";
import { api } from "~/trpc/react";
import { type FieldType } from "../../../../generated/prisma";

export function AddFieldModal({
  tableId,
  onClose,
}: {
  tableId: string;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState<FieldType>("text");
  const utils = api.useUtils();

  const create = api.field.create.useMutation({
    onMutate: async (input) => {
      await utils.table.getById.cancel({ id: tableId });
      const previous = utils.table.getById.getData({ id: tableId });
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return {
          ...old,
          fields: [
            ...old.fields,
            { id: `temp-${Date.now()}`, tableId, name: input.name, type: input.type, position: old.fields.length },
          ],
        };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.table.getById.setData({ id: tableId }, context?.previous);
    },
    onSettled: () => {
      void utils.table.getById.invalidate({ id: tableId });
      void utils.record.list.invalidate({ tableId });
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <div className="relative z-10 w-72 rounded-xl bg-white shadow-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900 text-[15px]">Add field</h2>
          <button onClick={onClose} className="p-1 rounded hover:bg-gray-100 text-gray-400">
            <X size={16} />
          </button>
        </div>
        <label className="block text-[12px] font-medium text-gray-600 mb-1">Name</label>
        <input
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && name.trim() && create.mutate({ tableId, name: name.trim(), type })}
          placeholder="Field name"
          className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[13px] focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        <label className="block text-[12px] font-medium text-gray-600 mb-1.5">Type</label>
        <div className="flex gap-2 mb-4">
          {(["text", "number"] as FieldType[]).map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border text-[12px] font-medium transition-colors ${
                type === t
                  ? "border-blue-500 bg-blue-50 text-blue-600"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {t === "text" ? <Type size={13} /> : <Hash size={13} />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-2 justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-[13px] text-gray-600 hover:bg-gray-100 border border-gray-200"
          >
            Cancel
          </button>
          <button
            disabled={!name.trim() || create.isPending}
            onClick={() => create.mutate({ tableId, name: name.trim(), type })}
            className="px-3 py-1.5 rounded-lg text-[13px] font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 flex items-center gap-1.5"
          >
            {create.isPending && <Loader2 size={12} className="animate-spin" />} Add field
          </button>
        </div>
      </div>
    </div>
  );
}