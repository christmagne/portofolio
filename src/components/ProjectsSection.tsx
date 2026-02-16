import { motion } from "framer-motion";
import { ExternalLink, Calendar, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Gestion & Réservation de Centres Touristiques",
    description:
      "Application web de gestion et réservation de centres d'intérêts pour touristes.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    period: "Sept 2024 – Jan 2025",
    link: "#",
  },
  {
    title: "Application Mobile de Fitness",
    description:
      "Application mobile de fitness avec suivi d'entraînement et programmes personnalisés.",
    tech: ["Ionic", "Firebase"],
    period: "Sept 2024 – Jan 2025",
    link: "#",
  },
  {
    title: "Gestion Inscriptions & Absences Étudiants",
    description:
      "Application web pour la gestion des inscriptions et le suivi des absences.",
    tech: ["Spring Boot", "Angular"],
    period: "Nov 2024 – Déc 2024",
    link: "#",
  },
  {
    title: "Gestion Transport Bus Universitaire",
    description:
      "Système de gestion du transport en bus de l'université.",
    tech: ["Web App"],
    period: "Oct 2023 – Juin 2024",
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projets" subtitle="Portfolio de mes réalisations" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-1.5 rounded-md bg-primary/10 text-primary"
                  >
                    <Code2 size={16} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
                  aria-label="Voir le dépôt"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={18} />
                </motion.a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, j) => (
                  <motion.span
                    key={t}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 + 0.3 }}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar size={12} /> {project.period}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
