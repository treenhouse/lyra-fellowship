"use client";

import { useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import {
  User, Users, Bell, Languages, Paintbrush,
  Mail, Zap, Heart, Plug, Wrench, Trash2, LogOut,
  ChevronRight,
} from "lucide-react";

export function ProfilePanel({ onClose, side = "bottom" }: { onClose: () => void; side?: "bottom" | "right" }) {
  const { data: session } = useSession();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  const name  = session?.user?.name  ?? "User";
  const email = session?.user?.email ?? "";

  return (
    <div
      ref={ref}
      className={`absolute z-50 w-[260px] bg-white rounded-xl shadow-2xl border border-gray-200 py-1 text-[13px] ${
        side === "right"
          ? "left-full bottom-0 ml-2"
          : "left-0 top-full mt-1"
      }`}
    >
      {/* User info */}
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="font-semibold text-gray-900 truncate">{name}</p>
        <p className="text-[12px] text-blue-600 truncate mt-0.5">{email}</p>
      </div>

      {/* Section 1 */}
      <div className="py-1 border-b border-gray-100">
        <MenuItem icon={User}      label="Account" />
        <MenuItem icon={Users}     label="Manage groups"         badge="Business" badgeColor="blue" />
        <MenuItem icon={Bell}      label="Notification preferences" chevron />
        <MenuItem icon={Languages} label="Language preferences"   chevron />
        <MenuItem icon={Paintbrush} label="Appearance"            badge="Beta"    badgeColor="yellow" chevron />
      </div>

      {/* Section 2 */}
      <div className="py-1 border-b border-gray-100">
        <MenuItem icon={Mail}  label="Contact sales" />
        <MenuItem icon={Zap}   label="Upgrade" />
        <MenuItem icon={Heart} label="Tell a friend" />
      </div>

      {/* Section 3 */}
      <div className="py-1 border-b border-gray-100">
        <MenuItem icon={Plug}   label="Integrations" />
        <MenuItem icon={Wrench} label="Builder hub" />
      </div>

      {/* Section 4 */}
      <div className="py-1">
        <MenuItem icon={Trash2}  label="Trash" />
        <MenuItem
          icon={LogOut}
          label="Log out"
          onClick={() => { void signOut(); onClose(); }}
        />
      </div>
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  badge,
  badgeColor,
  chevron,
  onClick,
}: {
  icon: React.ElementType;
  label: string;
  badge?: string;
  badgeColor?: "blue" | "yellow";
  chevron?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-2.5 px-4 py-1.5 hover:bg-gray-50 text-left text-gray-700 transition-colors"
    >
      <Icon size={14} className="text-gray-500 flex-shrink-0" />
      <span className="flex-1">{label}</span>
      {badge && (
        <span
          className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
            badgeColor === "blue"
              ? "bg-blue-100 text-blue-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {badge}
        </span>
      )}
      {chevron && <ChevronRight size={12} className="text-gray-400" />}
    </button>
  );
}
