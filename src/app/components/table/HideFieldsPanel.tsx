"use client";

import { useState } from "react";
import { Search, Type, Hash } from "lucide-react";
import { type RouterOutputs } from "~/trpc/react";

type TableWithMeta = RouterOutputs["table"]["getById"];
type FieldRow      = TableWithMeta["fields"][number];

interface Props {
  fields:         FieldRow[];
  hiddenFieldIds: Set<string>;
  onToggle:       (fieldId: string) => void;
}

export function HideFieldsPanel({ fields, hiddenFieldIds, onToggle }: Props) {
  const [search, setSearch] = useState("");

  const sorted  = [...fields].sort((a, b) => (a.position ?? 0) - (b.position ?? 0));
  const visible  = search
    ? sorted.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    : sorted;

  const allHidden = sorted.every((f) => hiddenFieldIds.has(f.id));
  const allShown  = sorted.every((f) => !hiddenFieldIds.has(f.id));

  return (
    <div
      data-panel="hidefields"
      className="absolute top-full left-0 mt-1 z-50 w-[280px] bg-white border border-gray-200 rounded-lg shadow-lg py-2"
    >
      {/* Search */}
      <div className="px-3 pb-2">
        <div className="flex items-center gap-2 border border-gray-200 rounded-md px-2 py-1.5">
          <Search size={12} className="text-gray-400 flex-shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Find a field"
            className="flex-1 text-[12px] outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Hide/Show all */}
      <div className="flex gap-2 px-3 pb-2 border-b border-gray-100">
        <button
          onClick={() => sorted.forEach((f) => { if (!hiddenFieldIds.has(f.id)) onToggle(f.id); })}
          disabled={allHidden}
          className="flex-1 text-[11px] text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Hide all
        </button>
        <button
          onClick={() => sorted.forEach((f) => { if (hiddenFieldIds.has(f.id)) onToggle(f.id); })}
          disabled={allShown}
          className="flex-1 text-[11px] text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded px-2 py-1 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Show all
        </button>
      </div>

      {/* Field list */}
      <div className="max-h-[320px] overflow-y-auto py-1">
        {visible.map((field) => {
          const isHidden = hiddenFieldIds.has(field.id);
          return (
            <div
              key={field.id}
              className="flex items-center gap-2.5 px-3 py-1.5 hover:bg-gray-50 cursor-pointer"
              onClick={() => onToggle(field.id)}
            >
              {/* Toggle */}
              <div
                className={`relative w-7 h-4 rounded-full transition-colors flex-shrink-0 ${
                  isHidden ? "bg-gray-200" : "bg-blue-500"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-3 h-3 bg-white rounded-full shadow transition-transform ${
                    isHidden ? "left-0.5" : "left-3.5"
                  }`}
                />
              </div>
              {/* Icon */}
              {field.type === "number"
                ? <Hash size={12} className="text-gray-400 flex-shrink-0" />
                : <Type size={12} className="text-gray-400 flex-shrink-0" />
              }
              {/* Name */}
              <span className={`text-[12px] truncate ${isHidden ? "text-gray-400" : "text-gray-700"}`}>
                {field.name}
              </span>
            </div>
          );
        })}
        {visible.length === 0 && (
          <p className="text-[12px] text-gray-400 text-center py-3">No fields match</p>
        )}
      </div>
    </div>
  );
}
