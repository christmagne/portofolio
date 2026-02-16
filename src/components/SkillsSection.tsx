import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    title: "Langages",
    skills: ["Python", "Java", "C", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    title: "Frameworks & Web",
    skills: ["Spring Boot", "Django", "Angular", "Node.js", "Ionic", "Bootstrap", "jQuery"],
  },
  {
    title: "Outils & DevOps",
    skills: ["Docker", "Git", "Prometheus", "Grafana", "Terraform"],
  },
  {
    title: "Bases de données",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    title: "Design & CMS",
    skills: ["Figma", "Adobe XD", "WordPress", "Zola"],
  },
  {
    title: "ERP & Autre",
    skills: ["ODOO", "UML", "Méthodologie Agile"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="section-padding max-w-6xl mx-auto">
    <SectionHeading title="Compétences" subtitle="Technologies et outils maîtrisés" />

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-xl border border-border bg-card p-5"
        >
          <h3 className="font-display text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
