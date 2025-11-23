import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import { Mail, Github, PenLine, ExternalLink, Copy } from "lucide-react";
import { ShineText } from "../components/typography/ShineText";
import { GoldParticles } from "../components/hero/GoldParticles";
import { useState } from "react";

function GoldGradientBorder() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(214,162,108,0.16), rgba(196,122,61,0.05))",
        filter: "blur(8px)",
      }}
    />
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "kyeongbok_0627@kakao.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // lint fail
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ background: TOKENS.colors.bg }}
    >
      <GoldParticles />
      <Page maxW="max-w-3xl" className="text-center py-24">
        <h1 className="mt-3 text-5xl font-bold leading-tight sm:text-6xl mb-5 select-none">
          <ShineText text="Contact To Me" />
        </h1>
        <p className="text-white/60 text-lg mb-10">
          작은 기회라도, 좋은 인연이라면 언제든 환영합니다.
        </p>

        <div className="mx-auto w-full max-w-md space-y-5">
          <div className="relative">
            <GoldGradientBorder />
            <a
              href={`mailto:${email}`}
              className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#D6A26C]/60 hover:shadow-[0_0_22px_rgba(214,162,108,0.25)]"
            >
              <Mail className="h-6 w-6 text-[#D6A26C]" />
              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] text-white/90">{email}</span>
                <span className="text-xs text-white/45">
                  가장 빠르게 확인하는 연락 채널입니다!
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  copyEmail();
                }}
                className="group inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1 text-xs text-white/70 hover:text-white/90"
                title="주소 복사"
              >
                <Copy className="h-3.5 w-3.5" />
                {copied ? "복사됨!" : "복사"}
              </button>
            </a>
          </div>

          <div className="relative">
            <GoldGradientBorder />
            <a
              href="https://github.com/KYUNG-BOK"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#D6A26C]/60 hover:shadow-[0_0_22px_rgba(214,162,108,0.25)]"
            >
              <Github className="h-6 w-6 text-[#D6A26C]" />
              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] text-white/90">
                  github.com/KYUNG-BOK
                </span>
                <span className="text-xs text-white/45">
                  Projects & Code Archive
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-white/40" />
            </a>
          </div>

          <div className="relative">
            <GoldGradientBorder />
            <a
              href="https://velog.io/@yoonddubi"
              target="_blank"
              rel="noreferrer"
              className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-[#C47A3D]/60 hover:shadow-[0_0_22px_rgba(214,162,108,0.3)]"
            >
              <PenLine className="h-6 w-6 text-[#D6A26C]" />
              <div className="flex min-w-0 flex-1 flex-col text-left">
                <span className="text-[15px] text-white/90">
                  Velog — 기록 페이지
                </span>
                <span className="text-xs text-white/45">
                  학습 로그 · 트러블슈팅 · 회고
                </span>
              </div>
              <ExternalLink className="h-4 w-4 text-white/40" />
            </a>
          </div>
        </div>
      </Page>
    </div>
  );
}
