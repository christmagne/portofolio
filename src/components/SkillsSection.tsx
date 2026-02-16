import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  { title: "Langages", skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS"] },
  { title: "Frameworks & Web", skills: ["Spring Boot", "Django", "Angular", "Node.js", "Ionic", "Bootstrap", "jQuery"] },
  { title: "Outils & DevOps", skills: ["Docker", "Git", "Prometheus", "Grafana", "Terraform"] },
  { title: "Bases de données", skills: ["MySQL", "PostgreSQL"] },
  { title: "Design & CMS", skills: ["Figma", "Adobe XD", "WordPress", "Zola"] },
  { title: "ERP & Autre", skills: ["ODOO", "UML", "Méthodologie Agile"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Compétences" subtitle="Technologies et outils maîtrisés" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -5, borderColor: "hsl(174 72% 50% / 0.4)" }}
          className="rounded-xl border border-border bg-card p-5 transition-all duration-300"
        >
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.2 }}
            className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wider"
          >
            {group.title}
          </motion.h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill, j) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1 + j * 0.05 + 0.3,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1, backgroundColor: "hsl(174 72% 50% / 0.2)" }}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
