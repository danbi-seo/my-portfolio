import { Link2, Github } from "lucide-react";

interface FooterProps {
  demoHref?: string;
  codeHref?: string;
}

export function ProjectModalFooter({ demoHref, codeHref }: FooterProps) {
  if (!demoHref && !codeHref) return null;

  return (
    <div className="flex flex-wrap gap-3 border-t border-white/10 bg-white/2 px-5 py-4">
      {demoHref && (
        <a
          href={demoHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 hover:border-[#D6A26C]/50 hover:bg-[#D6A26C]/10"
        >
          <Link2 className="h-4 w-4" />
          Live
        </a>
      )}

      {codeHref && (
        <a
          href={codeHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm font-semibold text-[#D6A26C] hover:border-[#D6A26C]/50 hover:bg-white/5"
        >
          <Github className="h-4 w-4 text-[#D6A26C]" />
          GitHub
        </a>
      )}
    </div>
  );
}
