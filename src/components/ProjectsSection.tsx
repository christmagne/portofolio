import { motion } from "framer-motion";
import { ExternalLink, Calendar, Code2, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Gestion des Incidents (Université)",
    description:
      "Application de gestion et de prise en charge des incidents liés aux bâtiments universitaires. J'ai assuré le rôle DevOps : mise en place de pipelines CI/CD, automatisation des déploiements, gestion de l'infrastructure cloud, monitoring, sécurité et intégration continue pour garantir la fiabilité et la rapidité des livraisons applicatives.",
    tech: ["NestJS", "React", "Docker", "CI/CD", "Cloud"],
    period: "Fév 2025 – Juin 2025",
    link: "https://preprod.maintenance-iusjc.me/login",
    github: "https://gitlab.com/tutore_ing5/backend/apigateway"
  },
  {
    title: "Gestion & Réservation de Centres Touristiques",
    description:
      "Application web de gestion et réservation de centres d'intérêts pour touristes. J'ai conçu et développé l'ensemble des API REST, géré la documentation, la sécurité, les tests et l'intégration avec le frontend pour garantir la robustesse et la scalabilité du backend.",
    tech: ["Spring Boot", "Angular", "MySQL"],
    period: "Sept 2024 – Jan 2025",
    link: "https://gitlab.com/J.touko/app-gestion-centre-dinteret-g6",
    github: "https://gitlab.com/J.touko/app-gestion-centre-dinteret-g6"
  },
  {
    title: "Application Mobile de Fitness",
    description:
      "Application mobile de fitness avec suivi d'entraînement et programmes personnalisés. Ma tâche principale a été le développement du frontend avec Ionic, création d'une interface utilisateur réactive, intégration du suivi, des notifications et de l'expérience utilisateur.",
    tech: ["Ionic", "Firebase"],
    period: "Sept 2024 – Jan 2025",
    link: "https://gitlab.com/brendakoundjo88/fitnessapp",
    github: "https://gitlab.com/brendakoundjo88/fitnessapp"
  },
  {
    title: "Gestion Administrative et pédagogique d'une école",
    description:
      "Application web pour la gestion des inscriptions et le suivi des absences. J'ai été principalement chargé de la partie backend : conception de la base de données, développement des API REST avec Django, gestion de l'authentification et des rôles pour la sécurité.",
    tech: ["Django", "Angular"],
    period: "Mai 2024 – Août 2024",
    link: "https://gitlab.com/Landry_i3/gesco_stage",
    github: "https://gitlab.com/Landry_i3/gesco_stage"
  },
  {
    title: "Gestion Transport Bus Universitaire",
    description:
      "Système de gestion du transport en bus de l'université. Ma tâche principale était la conception de l'application : analyse des besoins, modélisation des processus, élaboration des diagrammes UML et définition de l'architecture logicielle pour garantir une solution efficace et évolutive.",
    tech: ["Web App"],
    period: "Oct 2023 – Juin 2024",
    link: "https://gitlab.com/brenda.koundjo/appweb-gestion-transport-gp5",
    github: "https://gitlab.com/brenda.koundjo/appweb-gestion-transport-gp5"
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
                <div className="flex items-center gap-2 mt-1">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      aria-label="Voir le dépôt GitHub"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                    aria-label="Voir le projet en ligne"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
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
