import { motion } from 'framer-motion';
import { Code2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { Project } from '../../types/explore.types'; 

interface ProjectCardProps {
  project: Project;
  categoryColor: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, categoryColor, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(project.path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={handleClick}
      className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all cursor-pointer"
    >
      {/* 이미지 */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Highlight Badge */}
        <div className="absolute top-3 right-3">
          <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColor} text-white text-xs font-semibold backdrop-blur-sm`}>
            {project.highlight}
          </div>
        </div>
      </div>

      {/* 내용 */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        <p className="text-white/60 text-sm mb-3">{project.subtitle}</p>
        
        <div className="flex items-center gap-2 mb-4">
          <Code2 className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-white/70">{project.tech}</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 rounded-md bg-white/5 text-white/70 text-xs border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 더보기 */}
        <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/btn">
          <span>자세히 보기</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};