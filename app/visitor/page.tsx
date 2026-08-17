import VisitorForm from "@/components/VisitorForm";

export default function VisitorPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND GRADIENTS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[600px] rounded-full bg-purple-600/10 blur-[140px]" />
      </div>

      {/* GRID BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* DECORATIVE GLOW */}
      <div className="pointer-events-none absolute left-[5%] top-[35%] h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_25px_8px_rgba(139,92,246,0.4)]" />

      <div className="pointer-events-none absolute right-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_20px_6px_rgba(59,130,246,0.4)]" />

      {/* MAIN */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <section className="max-w-xl">
            {/* BADGE */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200 backdrop-blur-xl">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-500/20">
                ✦
              </span>

              Welcome to My Portfolio
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Let&apos;s Connect
              <br />
              Before You{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Explore
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-lg text-base leading-7 text-white/55 sm:text-lg">
              To keep this portfolio secure and understand my visitors
              better, please fill in the information below.
            </p>

            {/* DIVIDER */}
            <div className="mt-7 h-[2px] w-24 bg-gradient-to-r from-violet-500 to-blue-500" />

            {/* FEATURES */}
            <div className="mt-8 space-y-5">
              <Feature
                icon="shield"
                title="Secure & Safe"
                description="Your information is protected and will not be shared."
              />

              <Feature
                icon="chart"
                title="Helps Me Improve"
                description="Your input helps me improve my projects and portfolio."
              />

              <Feature
                icon="users"
                title="Let's Build Opportunities"
                description="Thank you for visiting. Let's connect and grow together!"
              />
            </div>

            {/* QUOTE */}
            <div className="mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
              <div className="flex gap-4">
                <div className="text-3xl leading-none text-violet-400">
                  “
                </div>

                <div>
                  <p className="text-sm leading-6 text-white/60">
                    Every great connection starts with a simple introduction.
                    I&apos;m glad you&apos;re here!
                  </p>

                  <p className="mt-3 text-sm font-medium text-blue-400">
                    — Aldi Alpedo Siagian
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT FORM */}
          <section className="relative">
            {/* GLOW */}
            <div className="absolute -inset-5 rounded-[32px] bg-gradient-to-r from-violet-600/10 to-blue-600/10 blur-2xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-[#0b1020]/80 p-6 shadow-2xl backdrop-blur-2xl sm:p-8 lg:p-10">
              {/* TOP BORDER GLOW */}
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

              {/* ICON */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 shadow-[0_0_35px_rgba(139,92,246,0.15)]">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21a8 8 0 0 1 16 0" />
                  </svg>
                </div>
              </div>

              {/* FORM TITLE */}
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Visitor Information
                </h2>

                <p className="mt-2 text-sm text-white/40">
                  Please fill out the form below to continue
                </p>
              </div>

              <VisitorForm />
            </div>
          </section>
        </div>

        {/* FOOTER */}
        <footer className="pt-10 text-center text-xs text-white/30">
          © 2026 Aldi Alpedo Siagian. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

/* FEATURE COMPONENT */

function Feature({
  icon,
  title,
  description,
}: {
  icon: "shield" | "chart" | "users";
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-violet-300">
        {icon === "shield" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 3 4.5 6v5.5c0 4.7 3.2 8 7.5 9.5 4.3-1.5 7.5-4.8 7.5-9.5V6L12 3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        )}

        {icon === "chart" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M4 19V5" />
            <path d="M4 19h16" />
            <path d="m7 15 4-4 3 2 5-6" />
          </svg>
        )}

        {icon === "users" && (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="9" cy="8" r="3" />
            <path d="M3 20a6 6 0 0 1 12 0" />
            <path d="M16 11a3 3 0 1 0 0-6" />
            <path d="M18 14a5 5 0 0 1 3 4.5" />
          </svg>
        )}
      </div>

      <div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-white/40">
          {description}
        </p>
      </div>
    </div>
  );
}