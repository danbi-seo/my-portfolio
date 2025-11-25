import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

export interface ImplementationItem {
  title: string;
  icon: LucideIcon;
  color: string;
  details: string[];
}

interface ImplementationProps {
  implementations: ImplementationItem[];
  accentColor?: string;
}

export const Implementation: React.FC<ImplementationProps> = ({
  implementations,
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
          <h2 className="text-3xl font-bold mb-8">주요 구현 내용</h2>
          <div className="space-y-6">
            {implementations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70">
                          <span className={`${accentColor} mt-1`}>•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};