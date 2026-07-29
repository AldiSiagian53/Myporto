import { ArrowRight, Mail, Circle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center pt-16 overflow-hidden"
    >
      {/* Ambient glow behind hero content */}
      <div
        className="pointer-events-none absolute inset-0 bg-glow-radial"
        style={{ ["--x" as string]: "20%", ["--y" as string]: "10%" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8 w-full">
        <p className="code-label mb-5 animate-fade-up">// 01. Home</p>

        {/* Status tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 animate-fade-up">
          <Circle className="h-2 w-2 fill-emerald-400 text-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-emerald-300">
            Open for Opportunities
          </span>
        </div>

        <h1
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-ink-100 animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Hai...
          saya{" Aldi Alpedo Siagian "}
          <span className="bg-gradient-to-r from-accent-400 to-accent-glow bg-clip-text text-transparent">
            
          </span>
        </h1>

        <p
          className="mt-3 font-mono text-lg sm:text-xl text-ink-300 animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          <span className="text-accent-400">const</span> role ={" "}
          <span className="text-emerald-300">&quot;Full-Stack Developer&quot;</span>
          <span className="inline-block w-2 h-5 bg-accent-400 ml-1 align-middle animate-blink" />
        </p>

        <p
          className="mt-6 max-w-xl text-ink-300 leading-relaxed animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Saya membangun aplikasi web yang cepat, rapi, dan mudah digunakan —
          dari perancangan antarmuka hingga logika di balik layar. Fokus saya
          adalah menghadirkan produk digital yang solid secara teknis dan
          menyenangkan untuk dipakai.
        </p>

        {/* Call to action buttons */}
        <div
          className="mt-9 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          <a
            href="#project"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/20"
          >
            Lihat Proyek
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-ink-100 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  );
}
