import { PROJECTS } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="project" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02. Project</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100">
          Projects
        </h2>
        <p className="mt-3 max-w-xl text-ink-300">
          Some projects that represent my thinking process and the way I solve problems through code.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
