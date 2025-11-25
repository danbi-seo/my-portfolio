import { AchievementSection } from "../components/projects/Achievement";
import { Implementation } from "../components/projects/Implementation";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectOverview } from "../components/projects/ProjectOverview";
import { TechStack } from "../components/projects/TechStack";
import { Troubleshooting } from "../components/projects/Troubleshooting";
import { studyhubData } from "../data/studyhub";

export default function Pchedule() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      <ProjectHero {...studyhubData.info} />
      
      <ProjectOverview
        description={studyhubData.info.description}
        features={studyhubData.features}
        accentColor="bg-blue-400"
      />
      
      <TechStack
        techStack={studyhubData.techStack}
        accentColor="text-blue-400"
      />
      
      <Implementation
        implementations={studyhubData.implementations}
        accentColor="text-blue-400"
      />
      
      <Troubleshooting troubleshooting={studyhubData.troubleshooting} />
      
      <AchievementSection />
    </div>
  );
}