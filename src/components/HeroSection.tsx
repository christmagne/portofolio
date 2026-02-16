import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Typewriter from "./Typewriter";

const floatingVariants = {
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 blur-xl"
            style={{
              width: `${60 + i * 40}px`,
              height: `${60 + i * 40}px`,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 20 * (i % 2 === 0 ? -1 : 1), 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + i * 2,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp}>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Disponible dès le 23 Février 2026
          </motion.div>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Magne Dassi{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gradient"
          >
            Christ Laure
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          Ingénieure en Informatique & Systèmes d'Information
        </motion.p>

        <motion.div variants={fadeUp} className="mb-8">
          <span className="text-foreground font-medium text-lg md:text-xl">
            <Typewriter
              texts={[
                "Management des SI",
                "Développement Web & Mobile",
                "Data & Intelligence Artificielle",
                "DevOps & Cloud",
              ]}
              speed={70}
              deleteSpeed={35}
              pauseTime={2500}
            />
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          {[
            { icon: Mail, text: "christ.magne@saintjeaningenieur.org" },
            { icon: Phone, text: "+237 696147745" },
            { icon: MapPin, text: "Cameroun" },
          ].map((item, i) => (
            <motion.span
              key={i}
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05, color: "hsl(174 72% 50%)" }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <item.icon size={14} className="text-primary" />
              {item.text}
            </motion.span>
          ))}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={14} className="text-primary" />
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={28} className="text-primary/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
