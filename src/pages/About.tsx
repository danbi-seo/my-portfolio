import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import { ShineText } from "../components/typography/ShineText";
import { GoldParticles } from "../components/hero/GoldParticles";

export default function About() {
  return (
    <div
      className="min-h-screen relative"
      style={{ background: TOKENS.colors.bg }}
    >
      <GoldParticles />

      <Page maxW="max-w-4xl" className="py-24">
        <h1 className="mt-3 text-5xl font-bold leading-tight sm:text-6xl mb-10 text-center select-none">
          <ShineText text="About Me" />
        </h1>

        <p className="text-center text-white/70 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          <strong className="text-white">
            “한 개를 더 보더라도, 불량은 절대 유출되지 않게 한다.”
          </strong>
          <br />
          반도체 제조 현장에서 익힌 철저한 품질 사고를 프론트엔드에 그대로
          적용하고자 합니다
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#D6A26C] mb-4">
            <ShineText text="From Quality to Frontend" />
          </h2>
          <p className="text-white/70 leading-relaxed text-[15.5px]">
            반도체 장비 한 대에는
            <strong className="text-white ml-1">700여 개의 검사 항목</strong>이
            존재합니다.
            <br /> 하나라도 놓치면 품질 사고로 이어질 수 있었기에, 저는 데이터를
            근거로 문제를 추적하고 사전에 리스크를 차단하는 데 집중했습니다.
            <br />그 과정에서 저는 깨달았습니다.
            <strong className="text-white ml-1">
              “품질은 사후에 처리하는 것이 아니라, 설계 및 제작 단계에서
              결정된다.”
            </strong>
            <br />
            지금 저는 그 철학을 사용자 경험(UX)과 인터페이스(UI)에 적용하고
            있습니다.
          </p>
          <div className="mt-6 text-white/70 text-[15.5px] leading-relaxed">
            “품질을 지킨다”는 말도
            <strong className="text-white ml-1">숫자로 증명</strong>할 수 있어야
            한다고 생각합니다.
            <br />
            실제로 품질관리자로서
            <strong className="text-white ml-1">
              전장 결선도를 도식화하여 배포
            </strong>
            했고, 그 결과 장비당 평균
            <strong className="text-white ml-1">
              결선 오류가 10건 → 0.5건
            </strong>
            으로 대폭 감소했습니다.
            <br />
            지금 현재도 현장에서 사용되고 있을 만큼,
            <strong className="text-white ml-1">효과가 입증된 개선</strong>
            이었습니다.
            <br />
            저는 그 경험을 개발에서도
            <strong className="text-white ml-1">
              사전에 오류를 차단하는 UI를 설계
            </strong>
            하고자 노력하고 있습니다.
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-[#D6A26C] mb-4">
            <ShineText text="My Development Philosophy" />
          </h2>
          <ul className="text-white/70 space-y-3 leading-relaxed text-[15.5px]">
            <li>
              🔹 기능은 단순히{" "}
              <strong className="text-white">“동작하는 것”</strong>만으로는
              충분하지 않습니다.
            </li>
            <li>
              🔹 어떤 상황에서도{" "}
              <strong className="text-white">잘못되지 않게</strong> 만들고
              싶습니다.
            </li>
            <li>
              🔹 사용자가 실수할 수 있는 여지를{" "}
              <strong className="text-white">UI에서 선제적으로 제거</strong>
              하는게 목표입니다!
            </li>
            <li>
              🔹 코드 품질은 결국{" "}
              <strong className="text-white">서비스의 신뢰</strong>로
              이어집니다.
            </li>
          </ul>

          <div className="mt-6 py-4 px-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur text-center">
            <p className="text-[15px] text-white/80 font-medium">
              프론트엔드는 제품의 첫 신뢰를 결정합니다.
              <br />
              저는 그 신뢰를 지키고자 하는 개발자가 되고 싶습니다.
            </p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-2xl font-semibold text-[#D6A26C] mb-4">
            <ShineText text="Vision" />
          </h2>
          <p className="text-white/70 leading-relaxed text-[15.5px]">
            저는 프론트엔드 개발을 통해
            <strong className="text-white ml-1">
              사용자 친화적인 인터페이스
            </strong>
            를 만드는 데 집중하고 있습니다.
            <br />
            반도체 현장에서의 '사전 예방' 사고 방식으로,
            <strong className="text-white ml-1">
              사용자가 실수하지 않도록 돕는 UI 설계
            </strong>
            를 지속적으로 고민합니다.
            <br />
            작은 오류 하나도 놓치지 않는 태도로,
            <strong className="text-white ml-1">
              신뢰를 만드는 프론트엔드 개발자
            </strong>
            가 되겠습니다.
          </p>
        </section>
      </Page>
    </div>
  );
}
