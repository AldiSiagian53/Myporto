"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  async function trackProjectAccess() {
    try {
      await fetch("/api/visitor/project-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId: project.id,
        }),
      });
    } catch (error) {
      console.error("Failed to track project access:", error);
    }
  }

  return (
    <article className="group relative rounded-2xl border border-white/10 bg-base-800/40 overflow-hidden hover:border-accent-500/40 transition-colors">
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden bg-base-700">
        <Image
          src={project.image}
          alt={`Thumbnail ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent" />

        {/* Live demo / GitHub quick links */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo ${project.title}`}
            className="rounded-full bg-base-950/80 p-2 text-ink-100 hover:text-accent-400 backdrop-blur-sm"
          >
            <ExternalLink className="h-4 w-4" />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source code ${project.title}`}
            className="rounded-full bg-base-950/80 p-2 text-ink-100 hover:text-accent-400 backdrop-blur-sm"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-accent-400">
          {project.category}
        </span>

        <h3 className="mt-1.5 font-display font-bold text-lg text-ink-100">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-ink-300 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Detail button */}
        <Link
          href={`/project/${project.id}`}
          onClick={trackProjectAccess}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-glow transition-colors"
        >
          Detail Project
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}