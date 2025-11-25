import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { pokemonData } from '../../data/pokemon';

export const AchievementSection = () => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="w-8 h-8 text-yellow-400" />
            <h2 className="text-3xl font-bold">주요 성과</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pokemonData.achievements.map((achievement: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/20"
              >
                <span className="text-white/80">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};