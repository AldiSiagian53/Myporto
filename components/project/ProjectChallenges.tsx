import { AlertTriangle, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectChallenges({ project }: { project: Project }) {
  const { challenges } = project;
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02.6 Challenges</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Challenges &amp; Solutions
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {challenges.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-base-800/40 p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-amber-400" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-amber-300">
                      Challenge
                    </span>
                  </div>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-300">
                      Solution
                    </span>
                  </div>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
