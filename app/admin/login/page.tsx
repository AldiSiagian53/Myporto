"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#050716] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 border border-white/10 rounded-3xl overflow-hidden bg-[#080b1d]/80 backdrop-blur-xl shadow-2xl">

          {/* LEFT SIDE */}
          <section className="hidden lg:flex flex-col justify-center px-12 xl:px-16 py-16 border-r border-white/10 relative">
            <div className="absolute top-20 left-16 h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_20px_5px_rgba(168,85,247,0.5)]" />

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 mb-8">
              <span className="text-purple-300">✦</span>
              Admin Portal
            </div>

            <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
              Welcome Back
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Administrator
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
              Secure access to manage your portfolio, visitors, projects,
              messages, and analytics.
            </p>

            <div className="mt-10 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-purple-300">
                  ◈
                </div>

                <div>
                  <h3 className="font-semibold">Secure Administration</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Protected access for portfolio management.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-purple-300">
                  ◇
                </div>

                <div>
                  <h3 className="font-semibold">Manage Everything</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Visitors, messages, projects, and analytics.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-purple-300">
                  ◉
                </div>

                <div>
                  <h3 className="font-semibold">Private Dashboard</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Only authorized administrators can continue.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <section className="flex items-center justify-center px-6 sm:px-10 xl:px-16 py-12">
            <div className="w-full max-w-md">

              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 text-purple-300 text-2xl">
                ♙
              </div>

              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">
                  Admin Login
                </h2>

                <p className="mt-2 text-gray-500">
                  Sign in to access your dashboard
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter admin email"
                    autoComplete="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-purple-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-gray-600 outline-none transition focus:border-purple-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-purple-500/10"
                  />
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition hover:scale-[1.01] hover:from-purple-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Continue to Dashboard →"}
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-gray-600">
                Authorized administrators only
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}