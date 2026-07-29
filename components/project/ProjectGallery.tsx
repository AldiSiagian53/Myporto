import Image from "next/image";
import { Images } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectGallery({ project }: { project: Project }) {
  const { gallery, title } = project;
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <Images className="h-4 w-4 text-accent-400" />
          <p className="code-label">// 02.3 Gallery</p>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          Image Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {gallery.map((src, i) => (
            <div
              key={src + i}
              className="group relative h-56 sm:h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-base-700"
            >
              <Image
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base-950/60 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
