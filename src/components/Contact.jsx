import { motion } from "framer-motion";
import Skyline from "./Skyline";
import Starfield from "./ui/Starfield";
import QuadStar from "./ui/QuadStar";
import { CONTACT } from "../data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-ink-deep pt-28 lg:pt-36 pb-10 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bar" />
      <Starfield className="opacity-60" />
      <Skyline
        className="absolute bottom-16 left-0 w-full h-[35%] text-faint/40"
        opacity={0.5}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-magenta mb-6">
            <QuadStar />
            Let's talk
          </span>
          <h2 className="font-display font-semibold text-5xl sm:text-7xl text-paper leading-[0.98] tracking-tight max-w-3xl">
            Beyond the stars.
          </h2>
          <p dir="rtl" className="mt-5 font-display text-2xl gradient-text">
            {CONTACT.motto}
          </p>
          <p className="mt-6 max-w-lg text-faint leading-relaxed">
            One agency for content, production, and performance. Let's build
            something worth measuring.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full px-7 py-3.5 text-sm font-medium text-ink bg-paper hover:opacity-90 transition-opacity"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="rounded-full px-7 py-3.5 text-sm font-medium text-paper border border-cardline hover:border-faint transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-cardline flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted">
          <div>
            <span className="text-paper font-semibold">Stellar</span>
            <span className="gradient-text mx-1">·</span>
            <span>Media</span>
            <span className="ml-3">
              Digital Stellar Media · Abu Dhabi · Established 2018
            </span>
          </div>
          <div className="flex gap-6">
            <span>{CONTACT.web}</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
