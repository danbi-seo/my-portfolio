import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionTitleProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  iconColor?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  icon: Icon,
  title,
  subtitle,
  iconColor = "text-purple-400",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        {Icon && <Icon className={`w-6 h-6 ${iconColor}`} />}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      {subtitle && <p className="text-white/60">{subtitle}</p>}
    </motion.div>
  );
};
