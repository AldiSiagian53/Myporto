import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton({
  href = "/#project",
  label = "back to projects",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-base-800/40 px-4 py-2 text-sm font-medium text-ink-300 hover:border-accent-400/60 hover:text-accent-400 transition-colors"
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
