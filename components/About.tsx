import Image from "next/image";
import { Code2 } from "lucide-react";

// Tech stack shown as badges — adjust to match your real skills
const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "mysql",
  "php",
  "Git & GitHub",
  "python",
  "css",
  "html",
  "c++",
  "iot",
  "computer vision",
  "arduino",
  "ESP32",
  "mqqt broker",
  "laravel",
  "three.js",
  "mvc laravel",
  "bootstrap",

];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="code-label mb-3">// 03. About Me</p>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-ink-100 mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <div className="relative h-64 w-64 sm:h-72 sm:w-72 animate-float">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-accent-500/30 to-accent-glow/20 blur-xl" />
              <div className="relative h-full w-full rounded-3xl border border-white/10 overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Profile picture of the developer"
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bio + tech stack */}
          <div className="lg:col-span-3">
            <p className="text-ink-300 leading-relaxed">
              I'm a developer with a big interest in building web products end to end — from designing intuitive interfaces, setting up solid backend architecture, to making sure the app's performance stays optimal. I believe good code is code that's easy to read, test, and grow by future teams.
            </p>
            <p className="mt-4 text-ink-300 leading-relaxed">
              Outside of coding, I enjoy exploring the latest UI/UX design trends and contributing to open-source projects.
            </p>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-4 w-4 text-accent-400" />
                <span className="font-mono text-xs uppercase tracking-wider text-ink-300">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((tech) => (
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
        </div>
      </div>
    </section>
  );
}
