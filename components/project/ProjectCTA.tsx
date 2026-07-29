import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ProjectCTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-base-800/40 px-6 py-16 sm:px-16 text-center">
          <div
            className="pointer-events-none absolute inset-0 bg-glow-radial"
            style={{ ["--x" as string]: "50%", ["--y" as string]: "0%" }}
          />
          <div className="relative">
            <p className="code-label mb-3">// 03. Contact</p>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100">
              Tertarik Berkolaborasi?
            </h2>
            <p className="mt-3 max-w-xl mx-auto text-ink-300">
              Punya proyek serupa atau ide yang ingin diwujudkan? Mari
              diskusikan bagaimana saya bisa membantu.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/20"
              >
                <Mail className="h-4 w-4" />
                Hubungi Saya
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/#project"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-ink-100 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
              >
                Lihat Proyek Lain
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
