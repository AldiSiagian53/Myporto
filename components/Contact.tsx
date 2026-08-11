"use client";

import { useState, FormEvent } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";

const CONTACT_LINKS = [
  {
    label: "Email",
    value: "aldisiagian533@email.com",
    href: "mailto:aldisiagian533@email.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/aldi-alpedo-siagian-016460239/",
    href: "https://www.linkedin.com/in/aldi-alpedo-siagian-016460239/",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "https://github.com/AldiSiagian53",
    href: "https://github.com/AldiSiagian53",
    icon: Github,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Placeholder submit — wire this up to an email API (e.g. Resend, EmailJS) later
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Pesan terkirim:", form);
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 04. Contact</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100">
          contact me
        </h2>
        <p className="mt-3 max-w-xl text-ink-300">
          Have a project, job opportunity, or just want to chat? Send me a message or reach out directly through the channels below.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Quick contact info */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-base-800/40 p-4 hover:border-accent-500/40 transition-colors"
              >
                <span className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-ink-500">
                    {label}
                  </span>
                  <span className="block text-sm text-ink-100">{value}</span>
                </span>
              </a>
            ))}
          </div>

          {/* Message form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-white/10 bg-base-800/40 p-6 sm:p-8 space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-500"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Nama lengkap Anda"
                className="w-full rounded-lg border border-white/10 bg-base-900 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-400 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="email@anda.com"
                className="w-full rounded-lg border border-white/10 bg-base-900 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-400 outline-none transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-500"
              >
                massage
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan tentang proyek atau peluang Anda..."
                className="w-full resize-none rounded-lg border border-white/10 bg-base-900 px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-500 focus:border-accent-400 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 disabled:opacity-60 transition-colors"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" />
                  Sent!
                </>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
