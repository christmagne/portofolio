import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="mb-12"
  >
    <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
      {title}
    </h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: 64 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="h-1 rounded-full bg-primary mb-4"
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-muted-foreground max-w-xl"
      >
        {subtitle}
      </motion.p>
    )}
  </motion.div>
);

export default SectionHeading;
