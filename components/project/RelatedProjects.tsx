import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default function RelatedProjects({
  projects,
}: {
  projects: Project[];
}) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 02.9 More Work</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100">
          Related Projects
        </h2>
        <p className="mt-3 max-w-xl text-ink-300">
          Some other projects that might interest you.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
