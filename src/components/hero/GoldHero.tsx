import { GoldParticles } from "./GoldParticles";
import { GoldButton, GhostButton } from "../cta/GoldButton";
import { ShineText } from "../typography/ShineText";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { KPI } from "./KPI";
import { Github } from "lucide-react";

export function GoldHero() {
  return (
    <section
      className="relative mx-auto mt-8 overflow-hidden w-full rounded-3xl border p-8 sm:p-10"
      style={{
        borderColor: "rgba(255,255,255,0.12)",
        background:
          "radial-gradient(1200px 500px at 10% -10%, rgba(196,122,61,0.1), transparent), " +
          "radial-gradient(1200px 500px at 90% -10%, rgba(196,122,61,0.08), transparent), " +
          "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
      }}
    >
      <GoldParticles />
      <div className="relative z-10 text-white">
        <p className="text-xs font-semibold tracking-wider text-white/70">
          FRONTEND • REACT • TYPESCRIPT • UI/UX
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl select-none">
          Kyung Bok — <ShineText text="Frontend Developer" />
        </h1>
        <p className="mt-3 max-w-2xl text-white/70">
          현장에서 직접 느낀 비효율을, 기술로 해결하고 싶은 마음에서
          시작했습니다.
          <br /> 저는 “사용자 경험이 곧, 바로 제품의 완성도”라고 믿습니다.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <NavLink to="/projects">
            <GoldButton className="cursor-pointer">프로젝트 보기</GoldButton>
          </NavLink>
          <a
            href="https://github.com/kyung-bok"
            target="_blank"
            rel="noreferrer"
          >
            <GhostButton className="cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </GhostButton>
          </a>
          {/* <a
            href="https://github.com/KYUNG-BOK/popol"
            target="_blank"
            rel="noreferrer"
          >
            <GoldButton className="cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              레포지토리
            </GoldButton>
          </a> */}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/60 select-none">
          <Badge>React 19 • TypeScript</Badge>
          <Badge>Framer Motion</Badge>
          <Badge>ag-Grid</Badge>
          <Badge>TanStack Query</Badge>
          <Badge>Vite • Vercel</Badge>
        </div>

        <motion.div
          className="mt-8 grid gap-3 sm:grid-cols-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        >
          <KPI title="실무형 UI" value="OZ Shop & StudyHub Admin" />
          <KPI title="데이터 중심 UX" value="ag-Grid" />
          <KPI title="성능/품질" value="코드 스플리팅 & 타입 안정성" />
        </motion.div>
      </div>
    </section>
  );
}
