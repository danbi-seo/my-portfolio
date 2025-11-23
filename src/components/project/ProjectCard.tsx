import { motion } from "framer-motion";
import clsx from "clsx";
import { Link2, Github as GithubIcon } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  tags: string[];
  desc?: string;
  demoHref?: string;
  codeHref?: string;
  thumbnail?: string;
  className?: string;
  onOpen?: () => void;
};

export function ProjectCard({
  title,
  subtitle,
  tags,
  desc,
  demoHref,
  codeHref,
  thumbnail,
  onOpen,
  className = "",
}: Props) {
  return (
    <motion.article
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border p-6",
        "transition-shadow hover:shadow-[0_20px_70px_rgba(196,122,61,0.25)]",
        className
      )}
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {/* 백드롭데쓰 */}
      <div
        className="pointer-events-none absolute -inset-16 -z-10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 0%, rgba(196,122,61,0.18), transparent)",
        }}
      />

      {/* 썸넬 */}
      {thumbnail && (
        <figure className="mb-4 overflow-hidden rounded-xl border border-white/10">
          <img
            src={thumbnail}
            alt=""
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
            loading="lazy"
          />
        </figure>
      )}

      {/* 타이틀 */}
      <header>
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-0.5 text-[13px] leading-tight text-[#D6A26C]/80">
            {subtitle}
          </p>
        )}
      </header>

      {/* 태그 */}
      <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
          >
            {t}
          </span>
        ))}
      </div>

      {desc && (
        <p className="mt-4 text-sm leading-relaxed text-white/70">{desc}</p>
      )}

      {(demoHref || codeHref) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90 
                        transition hover:border-[#D6A26C]/50 hover:bg-[#D6A26C]/10"
            >
              <Link2 className="h-4 w-4 text-white" />
              Live
            </a>
          )}
          {codeHref && (
            <a
              href={codeHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1.5 text-sm font-semibold text-[#D6A26C] 
                        transition hover:bg-white/5 hover:border-[#D6A26C]/50"
            >
              <GithubIcon className="h-4 w-4 text-[#D6A26C]" />
              GitHub
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}
