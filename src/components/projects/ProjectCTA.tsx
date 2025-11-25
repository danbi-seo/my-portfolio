import { motion } from 'framer-motion';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface ProjectCTAProps {
  demo?: string;
  github?: string;
  portfolio?: string;
  demoGradient?: string;
  portfolioGradient?: string;
}

export const ProjectCTA: React.FC<ProjectCTAProps> = ({
  demo,
  github,
  portfolio,
  demoGradient = 'from-blue-600 to-cyan-600',
  portfolioGradient = 'from-purple-600 to-pink-600'
}) => {
  return (
    <section className="py-16 px-8 border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {demo || portfolio ? '프로젝트 체험하기' : '프로젝트 코드 보기'}
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {demo || portfolio 
              ? '실제 동작하는 프로젝트를 확인하고 코드를 살펴보세요'
              : 'GitHub에서 전체 코드와 커밋 히스토리를 확인하세요'
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {demo && (
              <a 
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-5 rounded-full bg-gradient-to-r ${demoGradient} text-white font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center gap-3`}
              >
                <ExternalLink size={24} />
                <span>Live Demo 보기</span>
              </a>
            )}
            {portfolio && (
              <a 
                href={portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-5 rounded-full bg-gradient-to-r ${portfolioGradient} text-white font-bold text-lg hover:shadow-lg transition-all hover:scale-105 flex items-center gap-3`}
              >
                <Globe size={24} />
                <span>Portfolio Site</span>
              </a>
            )}
            {github && (
              <a 
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 rounded-full border-2 border-white/20 text-white font-bold text-lg hover:border-white/40 hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <Github size={24} />
                <span>GitHub 보기</span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};