import { motion } from 'framer-motion';
import { HighlightCard } from '../components/explore/HighlightCard'; 
import { CategorySection } from '../components/explore/CategorySection'; 
import { exploreData, highlights } from '../data/explore';

export default function Explore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#121212] to-[#0a0a0a] text-white overflow-y-auto">
      <section className="pt-20 pb-12 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">둘러보기</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              다양한 프로젝트를 통해 성장해온 저의 과정을 확인해보세요!
            </p>
          </motion.div>
        </div>
      </section>

      {/* 주요 성과 */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6"
          >
            주요 성과
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <HighlightCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리별 프로젝트 */}
      {exploreData.map((category) => (
        <CategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}