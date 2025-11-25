import { AchievementSection } from "../components/projects/Achievement";
import { Implementation } from "../components/projects/Implementation";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectOverview } from "../components/projects/ProjectOverview";
import { TechStack } from "../components/projects/TechStack";
import { Troubleshooting } from "../components/projects/Troubleshooting";
import { pokemonData } from "../data/pokemon";


export default function Pokemon() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      <ProjectHero {...pokemonData.info} />
      
      <ProjectOverview
        description={pokemonData.info.description}
        features={pokemonData.features}
        accentColor="bg-blue-400"
      />
      
      <TechStack
        techStack={pokemonData.techStack}
        accentColor="text-blue-400"
      />
      
      <Implementation
        implementations={pokemonData.implementations}
        accentColor="text-blue-400"
      />
      
      <Troubleshooting troubleshooting={pokemonData.troubleshooting} />
      
      <AchievementSection />
    </div>
  );
}