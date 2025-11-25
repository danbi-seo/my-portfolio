import { motion } from 'framer-motion';
import type { Category } from '../../types/explore.types';
import { ProjectCard } from './ProjectCard';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{category.title}</h2>
              <p className="text-white/60">{category.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              categoryColor={category.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};