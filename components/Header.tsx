"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download, TerminalSquare } from "lucide-react";

// Nav items in the exact order requested: Home, Project, About Me, Contact
const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#project" },
  { label: "About Me", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle background/blur once the user scrolls past the hero top
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever a link is tapped
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base-950/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / brand mark styled like a terminal prompt */}
          <a
            href="#home"
            className="flex items-center gap-2 font-mono text-sm text-ink-100 hover:text-accent-400 transition-colors"
          >
            <TerminalSquare className="h-5 w-5 text-accent-400" strokeWidth={1.75} />
            <span>
              ~/nama<span className="text-accent-400">.dev</span>
            </span>
          </a>

          {/* Desktop nav — centered/left cluster */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-300 hover:text-ink-100 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Download CV — top-right corner, links to /cv.pdf in /public */}
          <div className="hidden md:block">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-sm font-medium text-accent-400 hover:bg-accent-500/20 hover:border-accent-400 transition-colors"
            >
              <Download className="h-4 w-4" strokeWidth={2} />
              Download CV
            </a>
          </div>

          {/* Mobile burger toggle */}
          <button
            className="md:hidden text-ink-100 p-2"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 bg-base-900/95 backdrop-blur-md border-b border-white/5 px-6 py-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="py-2.5 text-sm text-ink-300 hover:text-accent-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            onClick={handleLinkClick}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-accent-500/40 bg-accent-500/10 px-4 py-2.5 text-sm font-medium text-accent-400"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
