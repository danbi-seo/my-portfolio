import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export interface TroubleshootingItem {
  title: string;
  problem: string;
  cause: string;
  solution: string;
}

interface TroubleshootingProps {
  troubleshooting: TroubleshootingItem[];
}

export const Troubleshooting: React.FC<TroubleshootingProps> = ({
  troubleshooting
}) => {
  return (
    <section className="py-12 px-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold">트러블 슈팅</h2>
          </div>
          
          <div className="space-y-6">
            {troubleshooting.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-600/10 to-orange-600/10 backdrop-blur-lg rounded-xl p-6 border border-red-500/20"
              >
                <h3 className="text-xl font-bold mb-4 text-red-400">{item.title}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white/50 mb-2">문제 상황</h4>
                    <p className="text-white/80">{item.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white/50 mb-2">원인</h4>
                    <p className="text-white/80">{item.cause}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white/50 mb-2">해결 방법</h4>
                    <p className="text-white/80">{item.solution}</p>
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