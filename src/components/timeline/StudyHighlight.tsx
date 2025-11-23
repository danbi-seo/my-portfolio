import { TOKENS } from "../theme/token";
import { ShineText } from "../typography/ShineText";

type Props = {
  title?: string;
  period: string; // "2025.08.11 ~ 10.01"
  description?: string;
  href?: string;
};

export default function StudyHighlight({
  title = "Study Lead",
  period,
  description = "정규 수업 시간 외 스터디 리드 및 운영. 자료 정리 및 실습 진행.",
  href,
}: Props) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-6"
      style={{
        background: TOKENS.colors.panel,
        borderColor: TOKENS.colors.border,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 blur-3xl"
        style={{
          background: `radial-gradient(40% 40% at 0% 0%, ${TOKENS.colors.goldSoft}, transparent)`,
        }}
      />
      <div className="mb-2 text-2xl font-bold">
        <ShineText text={title} />
      </div>
      <p className="text-sm text-white/70">
        기간: <span className="text-white">{period}</span>
      </p>
      <p className="mt-2 text-sm text-white/80">{description}</p>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm"
          style={{
            background: TOKENS.colors.goldSoft,
            border: `1px solid ${TOKENS.colors.gold}`,
            color: TOKENS.colors.textPrimary,
          }}
        >
          스터디 기록 보기 ↗
        </a>
      )}
    </div>
  );
}
