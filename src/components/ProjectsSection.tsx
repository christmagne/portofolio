import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
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

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Projets" subtitle="Portfolio de mes réalisations" />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors pr-4">
                {project.title}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors shrink-0 mt-1"
                aria-label="Voir le dépôt"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Calendar size={12} /> {project.period}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
