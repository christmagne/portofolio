import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Linkedin, ChevronDown } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/30 via-background to-background"
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${40 + i * 30}px`,
              height: `${40 + i * 30}px`,
              left: `${5 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              background: `hsl(174 72% 40% / ${0.04 + i * 0.01})`,
            }}
            animate={{
              x: [0, 40 * (i % 2 === 0 ? 1 : -1), 0],
              y: [0, 30 * (i % 2 === 0 ? -1 : 1), 0],
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 10 + i * 3,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          />
        ))}
        {/* Decorative lines */}
        <motion.div
          className="absolute top-1/4 right-0 w-64 h-px bg-gradient-to-l from-transparent via-primary/20 to-transparent"
          animate={{ x: [-100, 100, -100], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-48 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          animate={{ x: [100, -100, 100], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
        />
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
            ✨ Stage PFE de 6 mois dès mars 2027 · Alternance dès maintenant
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
            Christ Laure{" "}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-gradient"
          >
            MAGNE DASSI
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          Mastère Spécialisé Expert Big Data Engineer · UTT
        </motion.p>

        <motion.div variants={fadeUp} className="mb-8 h-8">
          <span className="text-foreground font-medium text-lg md:text-xl">
            <Typewriter
              texts={[
                "Data Science",
                "IA générative & Big Data",
                "Machine Learning & Deep Learning",
                "Détection de fraude",
              ]}
              speed={70}
              deleteSpeed={35}
              pauseTime={2500}
            />
          </span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8"
        >
          {[
            { icon: Mail, text: "christmagne0310@gmail.com" },
            { icon: Phone, text: "07 66 14 99 27" },
            { icon: MapPin, text: "Mobile sur toute la France" },
          ].map((item, i) => (
            <motion.span
              key={i}
              className="flex items-center gap-1.5"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <item.icon size={14} className="text-primary" />
              {item.text}
            </motion.span>
          ))}
          <motion.a
            href="https://www.linkedin.com/in/christ-magne-b0aba327b"
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
