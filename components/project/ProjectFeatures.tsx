import { Sparkles } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectFeatures({ project }: { project: Project }) {
  const { features } = project;
  if (!features || features.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02.4 Features</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Core Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-base-800/40 p-6 hover:border-accent-500/40 transition-colors"
            >
              <span className="inline-flex rounded-lg bg-accent-500/10 p-2.5 text-accent-400">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display font-bold text-lg text-ink-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
