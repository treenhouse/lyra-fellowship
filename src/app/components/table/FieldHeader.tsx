"use client";

import { useState } from "react";
import { ChevronDown, Hash, Type, EyeOff, Edit2, Trash2, Loader2, Check } from "lucide-react";
import { api, type RouterOutputs } from "~/trpc/react";

type TableWithMeta = RouterOutputs["table"]["getById"];
type FieldRow      = TableWithMeta["fields"][number];

export function FieldHeader({ field, tableId }: { field: FieldRow; tableId: string }) {
  const [open, setOpen]           = useState(false);
  const [confirming, setConfirming] = useState(false);
  const utils = api.useUtils();

  const del = api.field.delete.useMutation({
    onMutate: async ({ id }) => {
      await utils.table.getById.cancel({ id: tableId });
      const previous = utils.table.getById.getData({ id: tableId });
      utils.table.getById.setData({ id: tableId }, (old) => {
        if (!old) return old;
        return { ...old, fields: old.fields.filter((f) => f.id !== id) };
      });
      return { previous };
    },
    onError: (_err, _input, context) => {
      utils.table.getById.setData({ id: tableId }, context?.previous);
    },
    onSettled: () => {
      void utils.table.getById.invalidate({ id: tableId });
    },
  });

  return (
    <div
      className="relative flex items-center gap-1.5 px-2 w-full h-full group cursor-pointer hover:bg-gray-100"
      onClick={() => { setOpen((v) => !v); setConfirming(false); }}
    >
      {field.type === "number"
        ? <Hash size={12} className="text-gray-400 flex-shrink-0" />
        : <Type size={12} className="text-gray-500 flex-shrink-0" />
      }
      <span className="text-[12px] font-medium text-gray-700 truncate flex-1 select-none">{field.name}</span>
      <ChevronDown size={11} className="text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0" />

      {open && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={(e) => { e.stopPropagation(); setOpen(false); setConfirming(false); }}
          />
          <div
            className="absolute left-0 top-full z-30 w-44 rounded-lg bg-white shadow-xl border border-gray-200 py-1 text-[12px]"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 text-gray-700">
              <Edit2 size={12} /> Edit field
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 text-gray-700">
              <EyeOff size={12} /> Hide field
            </button>
            <hr className="my-1 border-gray-100" />
            {confirming ? (
              <div className="px-3 py-2">
                <p className="text-gray-500 mb-2">Delete &quot;{field.name}&quot;?</p>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setConfirming(false)}
                    className="flex-1 px-2 py-1 rounded border border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    No
                  </button>
                  <button
                    onClick={() => del.mutate({ id: field.id })}
                    disabled={del.isPending}
                    className="flex-1 px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600 flex items-center justify-center gap-1"
                  >
                    {del.isPending ? <Loader2 size={10} className="animate-spin" /> : <Check size={10} />} Yes
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setConfirming(true)}
                className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-red-50 text-red-500"
              >
                <Trash2 size={12} /> Delete field
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}