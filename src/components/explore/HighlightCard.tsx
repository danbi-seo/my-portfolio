import { motion } from 'framer-motion';
import type { Highlight } from '../../types/explore.types'; 

interface HighlightCardProps {
  item: Highlight;
  index: number;
}

export const HighlightCard: React.FC<HighlightCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/10 hover:border-white/30 transition-all group cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
          <item.icon className="w-5 h-5 text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
          <p className="text-white/50 text-xs mb-2">{item.desc}</p>
          <span className="text-xs text-purple-400">{item.project}</span>
        </div>
      </div>
    </motion.div>
  );
};
