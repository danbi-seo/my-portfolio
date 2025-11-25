import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Github, Globe, Users } from 'lucide-react';

interface ProjectHeroProps {
  title: string;
  subtitle: string;
  type: string;
  period: string;
  image: string;
  github?: string;
  demo?: string;
  portfolio?: string;
  accentColor?: string;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({
  title,
  subtitle,
  type,
  period,
  image,
  github,
  demo,
  portfolio,
  accentColor = 'bg-blue-600'
}) => {
  const isTeamProject = type === '팀프로젝트';

  return (
    <section className="relative h-[400px] overflow-hidden">
      <img 
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full ${accentColor} text-white text-sm font-semibold flex items-center gap-2`}>
                {isTeamProject && <Users size={14} />}
                {type}
              </span>
              <span className="text-white/60 text-sm flex items-center gap-2">
                <Calendar size={16} />
                {period}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-white/80 mb-6 max-w-3xl">{subtitle}</p>
            
            <div className="flex gap-4">
              {demo && (
                <a 
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all hover:scale-105"
                >
                  <ExternalLink size={20} />
                  <span>Live Demo</span>
                </a>
              )}
              {github && (
                <a 
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/20 text-white font-semibold hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
              )}
              {portfolio && (
                <a 
                  href={portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-purple-500/30 text-purple-400 font-semibold hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                >
                  <Globe size={20} />
                  <span>Portfolio Site</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};