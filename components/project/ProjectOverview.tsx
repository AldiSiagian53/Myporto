import { Target, Info } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectOverview({ project }: { project: Project }) {
  const { longDescription, goals, info } = project;

  if (!longDescription && !goals && !info) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02.2 About</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          About This Project
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* About + Goals */}
          <div className="lg:col-span-3 space-y-10">
            {longDescription && (
              <div className="space-y-4">
                {longDescription.map((paragraph, i) => (
                  <p key={i} className="text-ink-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {goals && goals.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="h-4 w-4 text-accent-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
                    Project Goals
                  </span>
                </div>
                <ul className="space-y-3">
                  {goals.map((goal, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-ink-300 leading-relaxed"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Project Information card */}
          {info && (
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-white/10 bg-base-800/40 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Info className="h-4 w-4 text-accent-400" />
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
                    Project Information
                  </span>
                </div>
                <dl className="space-y-5">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <dt className="text-sm text-ink-500">Role</dt>
                    <dd className="text-sm text-ink-100">{info.role}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <dt className="text-sm text-ink-500">Duration</dt>
                    <dd className="text-sm text-ink-100">{info.duration}</dd>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <dt className="text-sm text-ink-500">Team</dt>
                    <dd className="text-sm text-ink-100">{info.team}</dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-ink-500">Year</dt>
                    <dd className="text-sm text-ink-100">{info.year}</dd>
                  </div>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
