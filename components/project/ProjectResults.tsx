import { TrendingUp } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectResults({ project }: { project: Project }) {
  const { results } = project;
  if (!results || results.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="h-4 w-4 text-accent-400" />
          <p className="code-label">// 02.8 Results</p>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Project Results
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl border border-white/10 bg-base-800/40 p-6 text-center hover:border-accent-500/40 transition-colors"
            >
              <p className="font-display font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-accent-400 to-accent-glow bg-clip-text text-transparent">
                {result.value}
              </p>
              <p className="mt-2 text-sm text-ink-300">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
