"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Grid3X3, Loader2, ArrowRight } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName]   = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email: email.trim(),
      name:  name.trim(),
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email. Please try again.");
    } else {
      router.push("/");
      router.refresh(); 
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-[#2d7ff9] flex items-center justify-center">
            <Grid3X3 size={18} className="text-white" />
          </div>
          <span className="text-[22px] font-bold text-gray-900 tracking-tight">Airtable</span>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <h1 className="text-[20px] font-semibold text-gray-900 mb-1">Sign in</h1>
          <p className="text-[13px] text-gray-500 mb-6">
            Enter your email to continue. A new account will be created if you don&apos;t have one.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2d7ff9] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-[13px] font-medium text-gray-700 mb-1.5">
                Name <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-[14px] focus:outline-none focus:ring-2 focus:ring-[#2d7ff9] focus:border-transparent"
              />
            </div>

            {error && (
              <p className="text-[13px] text-red-500 bg-red-50 px-3 py-2 rounded-lg">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!email.trim() || loading}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#2d7ff9] text-white text-[14px] font-medium hover:bg-[#1a6fe8] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading
                ? <><Loader2 size={15} className="animate-spin" /> Signing in...</>
                : <><ArrowRight size={15} /> Continue</>}
            </button>
          </form>
        </div>

        <p className="text-center text-[12px] text-gray-400 mt-5">
          No password required · Demo mode
        </p>
      </div>
    </div>
  );
}