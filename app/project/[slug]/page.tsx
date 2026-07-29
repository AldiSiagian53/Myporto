import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectTimeline from "@/components/project/ProjectTimeline";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import ProjectResults from "@/components/project/ProjectResults";
import RelatedProjects from "@/components/project/RelatedProjects";
import ProjectCTA from "@/components/project/ProjectCTA";

import { PROJECTS, getProjectById, getRelatedProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: { slug: string };
};

// Pre-render a static page for every project defined in lib/projects.ts
export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.id }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectById(params.slug);

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: `${project.title} — Detail Proyek`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.id, 3);

  return (
    <>
      <Header />
      <main>
        <ProjectHero project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectOverview project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectGallery project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectFeatures project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectTimeline project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectChallenges project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectTechStack project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectResults project={project} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <RelatedProjects projects={relatedProjects} />

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="divider-glow" />
        </div>
        <ProjectCTA />
      </main>
      <Footer />
    </>
  );
}
