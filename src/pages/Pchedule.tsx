import { AchievementSection } from "../components/projects/Achievement";
import { Implementation } from "../components/projects/Implementation";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectOverview } from "../components/projects/ProjectOverview";
import { TechStack } from "../components/projects/TechStack";
import { Troubleshooting } from "../components/projects/Troubleshooting";
import { PcheduleData } from "../data/pchedule";

export default function Pchedule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      <ProjectHero {...PcheduleData.info} />
      
      <ProjectOverview
        description={PcheduleData.info.description}
        features={PcheduleData.features}
        accentColor="bg-blue-400"
      />
      
      <TechStack
        techStack={PcheduleData.techStack}
        accentColor="text-blue-400"
      />
      
      <Implementation
        implementations={PcheduleData.implementations}
        accentColor="text-blue-400"
      />
      
      <Troubleshooting troubleshooting={PcheduleData.troubleshooting} />
      
      <AchievementSection />
    </div>
  );
}