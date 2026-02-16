import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const education = [
  {
    degree: "Formation d'Ingénieur en Informatique et Systèmes d'Information",
    school: "Saint Jean Ingénieur",
    location: "Yaoundé, Cameroun",
    period: "2023 – 2026",
    level: "5ème année",
  },
  {
    degree: "Licence en Système d'Aide à la Décision",
    school: "Université de Douala",
    location: "Douala, Cameroun",
    period: "2020 – 2023",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding bg-card/50">
    <div className="max-w-5xl mx-auto">
      <SectionHeading title="Formation" subtitle="Parcours académique" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30, rotateY: i === 0 ? -5 : 5 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2, type: "spring", stiffness: 80 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/30"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
            />

            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0"
              >
                <GraduationCap size={22} />
              </motion.div>
              <div>
                {edu.level && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 + 0.4, type: "spring" }}
                    className="inline-block text-xs text-primary font-medium px-2 py-0.5 rounded-full bg-primary/10"
                  >
                    {edu.level}
                  </motion.span>
                )}
                <h3 className="font-display font-semibold mt-1">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.school} — {edu.location}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
