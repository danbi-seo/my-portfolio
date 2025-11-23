import { Page } from "../components/Page";
import { TOKENS } from "../components/theme/token";
import BootcampTimeline from "../components/timeline/BootcampTimeline";
import GlassCard from "../components/timeline/GlassCard";
import { ShineText } from "../components/typography/ShineText";
import { BOOTCAMP_STEPS, BOOTCAMP_BANDS } from "../data/bootcampTimeline";
import StudyHighlight from "../components/timeline/StudyHighlight";

export default function BootcampHistoryPage() {
  return (
    <div className="min-h-screen" style={{ background: TOKENS.colors.bg }}>
      <Page maxW="max-w-4xl" className="py-24">
        <h1 className="mb-8 text-center text-5xl font-bold leading-tight sm:text-6xl select-none">
          <ShineText text="Bootcamp Timeline" />
        </h1>

        <div className="mb-6">
          <StudyHighlight
            period="2025.08.11 ~ 10.01"
            href="https://bristle-eel-2c9.notion.site/24939597f3db8025a79fca0029c39a9e?v=24939597f3db8006bb36000ccf9eac07"
          />
        </div>

        <GlassCard>
          <BootcampTimeline
            steps={BOOTCAMP_STEPS}
            bands={BOOTCAMP_BANDS}
            bandsPlacement="gutter"
          />
        </GlassCard>
      </Page>
    </div>
  );
}
