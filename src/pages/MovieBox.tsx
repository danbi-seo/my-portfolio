import { AchievementSection } from "../components/projects/Achievement";
import { Implementation } from "../components/projects/Implementation";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectOverview } from "../components/projects/ProjectOverview";
import { TechStack } from "../components/projects/TechStack";
import { Troubleshooting } from "../components/projects/Troubleshooting";
import { movieBoxData } from "../data/moviebox"; 

export default function MovieBox() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      <ProjectHero {...movieBoxData.info} />
      
      <ProjectOverview
        description={movieBoxData.info.description}
        features={movieBoxData.features}
        accentColor="bg-blue-400"
      />
      
      <TechStack
        techStack={movieBoxData.techStack}
        accentColor="text-blue-400"
      />
      
      <Implementation
        implementations={movieBoxData.implementations}
        accentColor="text-blue-400"
      />
      
      <Troubleshooting troubleshooting={movieBoxData.troubleshooting} />
      
      <AchievementSection />
    </div>
  );
}