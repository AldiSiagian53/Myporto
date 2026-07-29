import { Code2 } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectTechStack({ project }: { project: Project }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02.7 Stack</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Tech Stack
        </h2>

        <div className="rounded-2xl border border-white/10 bg-base-800/40 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="h-4 w-4 text-accent-400" />
            <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
              Technologies used in this project
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-accent-500/30 bg-accent-500/5 px-3.5 py-1.5 text-sm text-ink-100 hover:border-accent-400/60 hover:bg-accent-500/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
