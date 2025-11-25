import { motion } from 'framer-motion';

interface TechStackProps {
  techStack: Record<string, string[]>;
  accentColor?: string;
}

export const TechStack: React.FC<TechStackProps> = ({
  techStack,
  accentColor = 'text-blue-400'
}) => {
  return (
    <section className="py-12 px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8">기술 스택</h2>
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(Object.keys(techStack).length, 5)} gap-6`}>
            {Object.entries(techStack).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <h3 className={`text-lg font-semibold mb-4 ${accentColor}`}>{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-sm text-white/80 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};