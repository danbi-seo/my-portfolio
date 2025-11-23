import { TOKENS } from "../theme/token";
import { pctOf, parseKst } from "../../utils/timeline";
import type { Band, TimelineTheme } from "../../types/timeline";

type BandsProps = {
  bands: Array<Band & { href?: string }>;
  firstISO: string;
  lastISO: string;
  theme: TimelineTheme;
  placement?: "gutter" | "overlay";
};

export default function TimelineBands({
  bands,
  firstISO,
  lastISO,
  theme,
  placement = "gutter",
}: BandsProps) {
  const first = parseKst(firstISO);
  const last = parseKst(lastISO);

  return (
    <>
      {bands.map((b) => {
        const top = pctOf(b.start, first, last);
        const bottom = pctOf(b.end, first, last);
        const height = Math.max(bottom - top, 6);

        if (placement === "gutter") {
          return (
            <div
              key={b.key}
              className="absolute inset-x-0"
              style={{ top: `${top}%`, height: `${height}%` }}
            >
              <div
                className="absolute rounded-full"
                style={{
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: TOKENS.colors.gold,
                  boxShadow: `0 0 12px ${TOKENS.colors.goldSoft}`,
                }}
              />
              <div className="absolute -left-2" style={{ top: -8 }}>
                {b.href ? (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full px-5 py-0.5 text-[11px] font-medium"
                    style={{
                      background: theme.badgeBg,
                      border: `1px solid ${theme.badgeBorder}`,
                      color: theme.badgeText,
                      boxShadow: `0 0 10px ${theme.bandGlow}`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {b.label} ↗
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                    style={{
                      background: theme.badgeBg,
                      border: `1px solid ${theme.badgeBorder}`,
                      color: theme.badgeText,
                      boxShadow: `0 0 10px ${theme.bandGlow}`,
                      transform: "translateX(-100%)",
                    }}
                  >
                    {b.label}
                  </span>
                )}
              </div>
            </div>
          );
        }

        return (
          <div
            key={b.key}
            className="absolute left-8 right-4 rounded-lg z-0"
            style={{
              top: `${top}%`,
              height: `${height}%`,
              background: TOKENS.colors.panel,
              border: `1px solid ${theme.badgeBorder}`,
              boxShadow: `0 0 12px ${theme.bandGlow}`,
              backdropFilter: "blur(2px)",
              maskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {b.href && (
              <a
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="sticky top-2 m-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
                style={{
                  background: theme.badgeBg,
                  border: `1px solid ${theme.badgeBorder}`,
                  color: theme.badgeText,
                }}
              >
                {b.label} ↗
              </a>
            )}
          </div>
        );
      })}
    </>
  );
}
