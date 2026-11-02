import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Data Analyst",
    company: "Business Intelligence Agency (BIA)",
    location: "Yaoundé, Cameroun",
    period: "Mars – Août 2026 · 6 mois",
    tasks: [
      "Conception d'un système de détection de fraudes transactionnelles pour BIAPAY : modélisation des flux, exploration et nettoyage des données, repérage des comportements anormaux.",
      "Création de tableaux de bord de pilotage sous Power BI et audit des notes de frais en contexte bancaire : contrôle de cohérence et détection d'anomalies et de fraudes.",
      "Environnement : Python, SQL, Power BI et Knime Analytics.",
    ],
  },
  {
    role: "Développeuse back-end (stage)",
    company: "BE IT AFRICA",
    location: "Yaoundé, Cameroun",
    period: "Mai 2025 - Août 2025",
    tasks: [
      "Développement du back-end et de la base de données d'une application de gestion scolaire avec Django (Python), Docker et CI/CD.",
      "Animation de formations en bureautique (Word, Excel) et programmation web.",
    ],
  },
  {
    role: "Stagiaire DSI",
    company: "Institut Universitaire Saint Jean",
    location: "Eyang, Cameroun",
    period: "Juin – Août 2023 · 3 mois",
    tasks: [
      "Maintenance et gestion des équipements informatiques",
      "Formation en développement web Frontend",
    ],
  },
  {
    role: "Stagiaire DSI",
    company: "CTI (Churchill Training Institut)",
    location: "Douala, Cameroun",
    period: "Été 2021 et été 2022",
    tasks: [
      "Conception d'une application de gestion du centre de formation avec Laravel (2021), puis alimentation et maintenance de l'application (2022).",
      "Inventaire et gestion du parc informatique ; formation d'élèves à la bureautique et à la programmation web.",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding max-w-5xl mx-auto">
    <SectionHeading title="Expérience" subtitle="Mon parcours professionnel" />

    <div className="relative">
      {/* Animated timeline line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[19px] top-2 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-[23px]"
      />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 80 }}
            className="relative pl-12 md:pl-14"
          >
            {/* Animated dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 + 0.3, type: "spring", stiffness: 300 }}
              className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-primary bg-background md:left-3.5 md:w-5 md:h-5"
            >
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                className="absolute inset-0 rounded-full bg-primary/30"
              />
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-xl border border-border bg-card/50 p-5 hover:border-primary/30 transition-colors"
            >
              <span className="text-xs text-primary font-medium uppercase tracking-wider">
                {exp.period}
              </span>
              <h3 className="font-display text-lg font-semibold mt-1">{exp.role}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <Briefcase size={13} /> {exp.company} — {exp.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {exp.tasks.map((t, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + j * 0.1 + 0.4 }}
                    className="text-sm text-secondary-foreground flex gap-2"
                  >
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    {t}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
