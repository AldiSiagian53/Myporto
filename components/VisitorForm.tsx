"use client";

import { useState } from "react";

type Purpose = "RECRUITER" | "CLIENT" | "JUST_LOOKING" | "COMPANY";

const purposeOptions = [
  {
    value: "RECRUITER" as Purpose,
    title: "Recruiter",
    description: "Looking for talent",
  },
  {
    value: "CLIENT" as Purpose,
    title: "Client",
    description: "Looking for services",
  },
  {
    value: "JUST_LOOKING" as Purpose,
    title: "Just Looking",
    description: "Just exploring",
  },
  {
    value: "COMPANY" as Purpose,
    title: "Company",
    description: "Business inquiry",
  },
];

export default function VisitorForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState<Purpose | "">("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!purpose) {
      setError("Please select your purpose.");
      return;
    }

    if (!verified) {
      setError("Please confirm that you are not a robot.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/visitor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          purpose,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to record visitor.");
      }

      window.location.href = "/";
    } catch (error) {
      console.error("Visitor submission error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* NAME */}
      <div>
        <label
          htmlFor="visitor-name"
          className="mb-2 block text-sm font-medium text-white/90"
        >
          Nama Lengkap
        </label>

        <input
          id="visitor-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama lengkap Anda"
          required
          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-500/70"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="visitor-email"
          className="mb-2 block text-sm font-medium text-white/90"
        >
          Email
        </label>

        <input
          id="visitor-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan email Anda"
          required
          className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-violet-500/70"
        />
      </div>

      {/* PURPOSE */}
      <div>
        <label className="mb-3 block text-sm font-medium text-white/90">
          Tujuan Mengakses Portfolio
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {purposeOptions.map((option) => {
            const selected = purpose === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setPurpose(option.value)}
                className={`rounded-2xl border p-4 text-left transition ${
                  selected
                    ? "border-violet-500 bg-violet-500/10"
                    : "border-white/10 bg-white/[0.03] hover:border-violet-400/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {option.title}
                  </span>

                  {selected && (
                    <span className="text-violet-400">✓</span>
                  )}
                </div>

                <p className="mt-1 text-xs text-white/40">
                  {option.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* HUMAN VERIFICATION */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <label
          htmlFor="human-verification"
          className="flex cursor-pointer items-center gap-3"
        >
          <input
            id="human-verification"
            type="checkbox"
            checked={verified}
            onChange={(e) => setVerified(e.target.checked)}
            className="h-5 w-5 accent-violet-600"
          />

          <span className="text-sm text-white/70">
            I&apos;m not a robot
          </span>
        </label>
      </div>

      {/* ERROR */}
      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={loading}
        className="h-14 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Saving..." : "Continue to Portfolio →"}
      </button>

      {/* PRIVACY */}
      <p className="text-center text-xs text-white/30">
        🔒 Your information will be kept confidential.
      </p>
    </form>
  );
}