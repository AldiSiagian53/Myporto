import { Clock } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectTimeline({ project }: { project: Project }) {
  const { timeline } = project;
  if (!timeline || timeline.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="h-4 w-4 text-accent-400" />
          <p className="code-label">// 02.5 Timeline</p>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Development Timeline
        </h2>

        <ol className="relative border-l border-white/10 pl-8 space-y-10">
          {timeline.map((step, i) => (
            <li key={step.phase} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-accent-400 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-accent-400">
                {step.period}
              </span>
              <h3 className="mt-1 font-display font-bold text-lg text-ink-100">
                {step.phase}
              </h3>
              <p className="mt-1.5 text-sm text-ink-300 leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
