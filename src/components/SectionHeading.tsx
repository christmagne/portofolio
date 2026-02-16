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
    <div className="h-1 w-16 rounded-full bg-primary mb-4" />
    {subtitle && <p className="text-muted-foreground max-w-xl">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
