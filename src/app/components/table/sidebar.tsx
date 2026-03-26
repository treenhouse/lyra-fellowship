"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { ProfilePanel } from "../home/ProfilePanel";

export default function Sidebar() {
  const router = useRouter();
    const { data: session } = useSession();
    const userInitial = (session?.user?.name ?? session?.user?.email ?? "U")[0]?.toUpperCase() ?? "U";
  
    const [profileOpen,       setProfileOpen]       = useState(false);

  return (
    <div className="fixed left-0 top-0 w-[56px] h-screen bg-white border-r border-gray-200 flex flex-col items-center z-50">
      
      {/* Top section */}
      <div className="flex flex-col items-center gap-2 pt-2">
        
        {/* Home / Box icon */}
        <button
          onClick={() => router.push("/")}
          className="w-[36px] h-[36px] rounded-lg flex items-center justify-center hover:bg-gray-100"
          title="Home"
        >
          {/* 3D box icon */}
          <svg width="30" height="24" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yellow — r=4 */}
            <path d="
              M 44.4,6.8  Q 48,5    51.6,6.8
              L 76.4,19.2 Q 80,21   76.4,22.8
              L 51.6,35.2 Q 48,37   44.4,35.2
              L 19.6,22.8 Q 16,21   19.6,19.2 Z"
              fill="#333333"/>

            {/* Blue — r=4 */}
            <path d="
              M 78.4,25.8 Q 82,24   82,28
              L 82,52     Q 82,56   78.3,57.6
              L 53.7,68.4 Q 50,70   50,66
              L 50,44     Q 50,40   53.6,38.2 Z"
              fill="#333333"/>

            {/* Red — r=3, right vertex moved to (46,40) for consistent (-2,+3) gap from yellow */}
            <path d="
              M 16.7,25.3 Q 14,24   14,27
              L 14,49     Q 14,52   16.8,51
              L 43.2,41.1 Q 46,40   43.3,38.7 Z"
              fill="#333333"/>
          </svg>
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom section */}
      <div className="flex flex-col items-center gap-1 pb-2">
        
        {/* Help */}
        <button
          title="Help"
          className="w-[36px] h-[36px] rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M9.5 9a2.5 2.5 0 115 0c0 1.5-2 2-2 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="17" r="1" fill="currentColor"/>
          </svg>
        </button>

        {/* Notifications */}
        <button
          title="Notifications"
          className="w-[36px] h-[36px] rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M6 8a6 6 0 1112 0v4l1.5 2h-15L6 12V8z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 18a2 2 0 004 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Avatar */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen((v) => !v)}
            title="Account"
            className="w-[32px] h-[32px] rounded-full bg-gray-700 flex items-center justify-center text-white text-[12px] font-semibold hover:bg-gray-600"
          >
            {userInitial}
          </button>
          {profileOpen && <ProfilePanel onClose={() => setProfileOpen(false)} side="right" />}
        </div>
      </div>
    </div>
  );
}