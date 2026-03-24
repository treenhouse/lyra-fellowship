"use client";

import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 7l9-4 9 4-9 4-9-4z" stroke="#374151" strokeWidth="1.5"/>
            <path d="M3 7v10l9 4 9-4V7" stroke="#374151" strokeWidth="1.5"/>
            <path d="M12 11v10" stroke="#374151" strokeWidth="1.5"/>
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
        <button
          title="Account"
          className="w-[32px] h-[32px] rounded-full bg-gray-700 flex items-center justify-center text-white text-[12px] font-semibold hover:bg-gray-600"
        >
          D
        </button>
      </div>
    </div>
  );
}