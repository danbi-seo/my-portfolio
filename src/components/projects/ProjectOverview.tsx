import { motion } from 'framer-motion';

interface ProjectOverviewProps {
  description: string;
  features: string[];
  accentColor?: string;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  description,
  features,
  accentColor = 'bg-blue-400'
}) => {
  return (
    <section className="py-12 px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">프로젝트 개요</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            {description}
          </p>
          
          <h3 className="text-xl font-semibold mb-4">주요 기능</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
              >
                <div className={`w-2 h-2 rounded-full ${accentColor} mt-2`} />
                <span className="text-white/80">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};