import { motion } from "framer-motion";
import { User, Award, Heart, Globe } from "lucide-react";
import SectionHeading from "./SectionHeading";

const highlights = [
  { icon: Award, label: "Ingénieure diplômée", desc: "Informatique & systèmes d'information" },
  { icon: Globe, label: "Mastère spécialisé", desc: "Expert Big Data Engineer · UTT" },
  { icon: Heart, label: "Langues", desc: "Français maternel · Anglais intermédiaire" },
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
              {/* Photo réelle */}
              <img
                src="/photo.jpg"
                alt="Photo de profil"
                className="w-full h-full object-cover"
              />
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
              Disponible
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
            Étudiante en <span className="text-foreground font-medium">Mastère Spécialisé Expert Big Data Engineer à l'UTT</span> (Bac+6, titre RNCP niveau 7), je suis diplômée d'un cycle ingénieur en informatique et systèmes d'information. Je recherche un stage de fin d'études de six mois à partir de mars 2027, ainsi qu'une alternance que je peux commencer dès maintenant.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-muted-foreground leading-relaxed"
          >
            Ma formation couvre la data science, le Machine Learning, l'IA générative et l'architecture Big Data. Je souhaite mettre ces compétences au service de projets data dans des secteurs variés, tout en documentant et en partageant mes travaux.
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
