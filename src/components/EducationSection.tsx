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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                {edu.level && (
                  <span className="text-xs text-primary font-medium">{edu.level}</span>
                )}
                <h3 className="font-display font-semibold mt-0.5">{edu.degree}</h3>
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
