import { Github, Linkedin, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-mono text-xs text-ink-500">
            © {year} Aldi Alpedo Siagian. Seluruh hak cipta dilindungi.
          </p>

          <nav className="flex items-center gap-6">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-300 hover:text-accent-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/AldiSiagian53"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-white/10 p-2 text-ink-300 hover:text-accent-400 hover:border-accent-400/40 transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/aldi-alpedo-siagian-016460239/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/10 p-2 text-ink-300 hover:text-accent-400 hover:border-accent-400/40 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:aldisiagian533@email.com"
              aria-label="Email"
              className="rounded-lg border border-white/10 p-2 text-ink-300 hover:text-accent-400 hover:border-accent-400/40 transition-colors"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
