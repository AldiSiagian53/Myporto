import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/projects";
import BackButton from "@/components/BackButton";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      {/* Ambient glow, consistent with the homepage Hero */}
      <div
        className="pointer-events-none absolute inset-0 bg-glow-radial"
        style={{ ["--x" as string]: "80%", ["--y" as string]: "0%" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-5">// 02.1 Project Detail</p>

        <BackButton />

        <div className="mt-8 flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-accent-400">
            {project.category}
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-ink-100">
            {project.title}
          </h1>
          <p className="max-w-2xl text-ink-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Large project preview */}
        <div className="relative mt-10 h-64 sm:h-96 lg:h-[28rem] w-full overflow-hidden rounded-2xl border border-white/10 bg-base-700">
          <Image
            src={project.image}
            alt={`Preview ${project.title}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1152px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent" />
        </div>

        {/* Tech stack badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent-500/30 bg-accent-500/5 px-3.5 py-1.5 text-sm text-ink-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-600 transition-all shadow-lg shadow-accent-500/20"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-ink-100 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
}
