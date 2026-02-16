import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ContactSection = () => (
  <section id="contact" className="section-padding max-w-4xl mx-auto text-center">
    <SectionHeading title="Contact" subtitle="N'hésitez pas à me contacter" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto"
    >
      {[
        { icon: Mail, label: "Email", value: "christ.magne@saintjeaningenieur.org", href: "mailto:christ.magne@saintjeaningenieur.org" },
        { icon: Phone, label: "Téléphone", value: "+237 696147745", href: "tel:+237696147745" },
        { icon: Linkedin, label: "LinkedIn", value: "Christ Magne", href: "https://linkedin.com" },
        { icon: MapPin, label: "Localisation", value: "Cameroun" },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
          whileHover={{ y: -4, scale: 1.03 }}
          className="rounded-xl border border-border bg-card p-5 flex items-center gap-4 text-left hover:border-primary/30 transition-colors cursor-default"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="p-2 rounded-lg bg-primary/10 text-primary shrink-0"
          >
            <item.icon size={18} />
          </motion.div>
          <div>
            <p className="text-xs text-muted-foreground">{item.label}</p>
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                {item.value}
              </a>
            ) : (
              <p className="text-sm font-medium">{item.value}</p>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default ContactSection;
