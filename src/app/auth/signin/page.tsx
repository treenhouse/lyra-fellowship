"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function SignInForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const [email, setEmail] = useState("");

  return (
    <div
      className="flex min-h-screen justify-center bg-white px-80"
      style={{ fontFamily: '"HaasText", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif' }}
    >
      {/* Left panel — vertically centered */}
      <div className="flex flex-1 flex-col items-start justify-center">
        {/* Logo */}
        <div className="mb-8">
          <svg width="50" height="40" viewBox="0 0 96 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Yellow — r=4 */}
            <path d="
              M 44.4,6.8  Q 48,5    51.6,6.8
              L 76.4,19.2 Q 80,21   76.4,22.8
              L 51.6,35.2 Q 48,37   44.4,35.2
              L 19.6,22.8 Q 16,21   19.6,19.2 Z"
              fill="#FCB400"/>

            {/* Blue — r=4 */}
            <path d="
              M 78.4,25.8 Q 82,24   82,28
              L 82,52     Q 82,56   78.3,57.6
              L 53.7,68.4 Q 50,70   50,66
              L 50,44     Q 50,40   53.6,38.2 Z"
              fill="#18BFFF"/>

            {/* Red — r=3, right vertex moved to (46,40) for consistent (-2,+3) gap from yellow */}
            <path d="
              M 16.7,25.3 Q 14,24   14,27
              L 14,49     Q 14,52   16.8,51
              L 43.2,41.1 Q 46,40   43.3,38.7 Z"
              fill="#F82B60"/>

            {/* Inner darker red — right vertex (46,40), 1/3 point → (35.3,44) */}
            <path d="
              M 15.5,25.3 Q 14,24   15.8,24.9
              L 44.2,39.1 Q 46,40   44.1,40.7
              L 37.2,43.3 Q 35.3,44 33.8,42.6 Z"
              fill="#B01030"/>
          </svg>
        </div>

        {/* Form */}
        <div className="w-full max-w-[500px] flex-col">
          <h1 className="mt-3 mb-6 text-[30px] font-semibold text-gray-900">Sign in to Airtable</h1>

          {/* Email field */}
          <div className="mb-3 py-3">
            <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Continue button */}
          <button
            type="button"
            disabled={email.trim() === ""}
            className={`mb-4 h-[40px] w-full rounded-md py-2 text-sm text-white transition-colors ${
              email.trim() === ""
                ? "cursor-not-allowed bg-[#a8c4ef]"
                : "bg-[#1b61c9] hover:bg-[#1653b0]"
            }`}
          >
            Continue
          </button>

          {/* Divider */}
          <div className="mb-4 flex justify-center py-2">
            <span className="text-sm text-gray-400">or</span>
          </div>

          {/* SSO button */}
          <button
            type="button"
            className="mb-3 w-full rounded-lg border border-gray-200 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Sign in with <span className="font-bold">Single Sign On</span>
          </button>

          {/* Google button */}
          <button
            type="button"
            onClick={() => signIn("google", { callbackUrl })}
            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg width="16" height="16" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
              <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
            </svg>
            Continue with <span className="font-bold">Google</span>
          </button>

          {/* Apple button */}
          <button
            type="button"
            className="mb-7 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg width="15" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z"/>
            </svg>
            Continue with <span className="font-bold">Apple ID</span>
          </button>

          {/* Footer links */}
          <p className="mb-1.5 text-xs text-gray-500 pt-6">
            New to Airtable?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create an account
            </a>{" "}
            instead
          </p>
          <p className="text-xs text-gray-500 pt-2">
            Manage your cookie preferences{" "}
            <a href="#" className="font-medium text-blue-500 hover:underline">
              here
            </a>
          </p>
        </div>
      </div>

      {/* Right panel — vertically centered */}
      <div className="hidden lg:flex w-[480px] items-center justify-center px-10">
        <div className="w-full rounded-2xl bg-[#2d1b4e] p-8 text-white">
          <h2 className="mb-5 text-[28px] font-bold leading-tight">
            Meet Omni, your AI collaborator for building custom apps.
          </h2>
          <button className="mb-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100">
            Start building
          </button>

          {/* Grid of cards */}
          <div className="grid grid-cols-3 gap-2">
            {/* Card 1 - dark with rounded shape */}
            <div className="aspect-square rounded-xl bg-[#3a3a4a] overflow-hidden flex items-end justify-center relative pb-4">
              <div className="w-14 h-14 rounded-full bg-[#5a5a6a]" />
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>
            {/* Card 2 - pink with dots */}
            <div className="aspect-square rounded-xl bg-[#e8608a] overflow-hidden flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-2">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-[#c03060] opacity-90" />
                ))}
              </div>
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>
            {/* Card 3 - salmon/red */}
            <div className="aspect-square rounded-xl bg-[#f08070] overflow-hidden flex flex-col p-2.5 relative">
              <div className="text-[8px] font-semibold text-white/90 mb-1.5">Campaign concept ins</div>
              <div className="flex-1 bg-[#e87060] rounded-md" />
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>

            {/* Card 4 - yellow */}
            <div className="aspect-square rounded-xl bg-[#f5d060] overflow-hidden flex flex-col p-2.5 relative">
              <div className="text-[8px] font-semibold text-gray-700 mb-1.5">$912K · 408 closed</div>
              <div className="flex-1 bg-[#e8c050] rounded-md" />
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>
            {/* Card 5 - mint/green */}
            <div className="aspect-square rounded-xl bg-[#e8f5f0] overflow-hidden flex flex-col p-2.5 relative">
              <div className="space-y-1">
                <div className="text-[7px] font-semibold text-gray-700">Raleigh, NC</div>
                <div className="text-[7px] font-medium text-gray-600">Boise, ID · Spokane</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <div className="text-[6px] text-gray-500">Searching the web...</div>
                </div>
                <div className="text-[7px] font-medium text-gray-600">Tampa, FL</div>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                  <div className="text-[6px] text-gray-500">Searching the web...</div>
                </div>
              </div>
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>
            {/* Card 6 - dark with dot grid */}
            <div className="aspect-square rounded-xl bg-[#3a3a4a] overflow-hidden flex items-center justify-center relative">
              <div className="grid grid-cols-3 gap-2.5">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${i === 7 ? "bg-amber-400" : "bg-[#6a6a7a]"}`}
                  />
                ))}
              </div>
              <div className="absolute bottom-2 right-2 w-5 h-5 rounded-full border-2 border-dashed border-orange-400 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense>
      <SignInForm />
    </Suspense>
  );
}
