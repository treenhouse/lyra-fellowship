"use client";

import { useState, useEffect, useRef } from "react";
import { type FieldType } from "../../../../generated/prisma";

export function EditableCell({
  recordId,
  fieldId,
  fieldType,
  value,
  isSelected,
  isEditing,
  onSelect,
  onEdit,
  onCommit,
  onKeyNav,
}: {
  recordId: string;
  fieldId: string;
  fieldType: FieldType;
  value: string;
  isSelected: boolean;
  isEditing: boolean;
  onSelect: () => void;
  onEdit: () => void;
  onCommit: (v: string) => void;
  onKeyNav: (e: React.KeyboardEvent) => void;
}) {
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setDraft(value); }, [value]);
  useEffect(() => {
    if (isEditing) { inputRef.current?.focus(); inputRef.current?.select(); }
  }, [isEditing]);

  return (
    <div
      className={`relative flex items-center w-full h-full overflow-hidden ${
        isSelected ? "ring-2 ring-inset ring-blue-500 z-10" : ""
      }`}
      onClick={onSelect}
      onDoubleClick={onEdit}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => onCommit(draft)}
          onKeyDown={(e) => {
            if (e.key === "Escape") { setDraft(value); onCommit(value); }
            else if (e.key === "Enter" || e.key === "Tab") { e.preventDefault(); onCommit(draft); onKeyNav(e); }
          }}
          type={fieldType === "number" ? "number" : "text"}
          className="w-full h-full px-2 text-[13px] outline-none bg-white border-none"
        />
      ) : (
        <span className="px-2 text-[13px] text-gray-800 truncate w-full select-none">{value}</span>
      )}
    </div>
  );
}