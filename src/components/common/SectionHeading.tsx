import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-3">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-primary-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
