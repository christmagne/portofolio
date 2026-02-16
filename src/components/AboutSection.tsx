import { motion } from "framer-motion";
import { User, Award, Heart, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Award, label: "5ème année", desc: "Ingénierie Informatique" },
  { icon: Globe, label: "3 langues", desc: "Français, Anglais, Allemand" },
  { icon: Heart, label: "Passionnée", desc: "Tech & Innovation" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="À propos" subtitle="Qui suis-je ?" />

      <div className="grid md:grid-cols-5 gap-10 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute -inset-6 rounded-full border border-dashed border-primary/10"
            />

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10"
            >
              {/* Placeholder avatar - replace with actual photo */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent to-primary/10 flex items-center justify-center">
                <User size={80} className="text-primary/40" />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              animate={{ y: [0, -5, 0] }}
              className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
            >
              Disponible 🚀
            </motion.div>
          </div>
        </motion.div>

        {/* Text & highlights */}
        <div className="md:col-span-3 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-muted-foreground leading-relaxed"
          >
            Étudiante en 5ème année d'ingénierie en Informatique et Systèmes d'Information
            à <span className="text-foreground font-medium">Saint Jean Ingénieur</span>, je suis 
            passionnée par le développement logiciel, la gestion des systèmes d'information et 
            les nouvelles technologies. Je recherche un stage de fin d'études pour mettre en 
            pratique mes compétences techniques et contribuer à des projets innovants.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground leading-relaxed"
          >
            Mon parcours m'a permis de développer des compétences variées allant du développement 
            web full-stack avec <span className="text-foreground font-medium">Spring Boot, Django et Angular</span> à 
            la gestion de bases de données et l'administration système.
          </motion.p>

          <div className="grid grid-cols-3 gap-3 pt-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 120 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="text-center p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.15 }}
                  className="inline-flex p-2 rounded-lg bg-primary/10 text-primary mb-2"
                >
                  <item.icon size={18} />
                </motion.div>
                <p className="text-sm font-semibold font-display">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
