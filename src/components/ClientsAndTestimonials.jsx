import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { CLIENTS, TESTIMONIALS } from "../data/content";

const logos = import.meta.glob("../assets/clients/*.png", {
  eager: true,
  import: "default",
});

function logoSrc(file) {
  return logos[`../assets/clients/${file}.png`];
}

export default function ClientsAndTestimonials() {
  const loop = [...CLIENTS, ...CLIENTS];

  return (
    <section className="relative bg-ink py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="04 · The People"
          title="Stars of our galaxy."
          desc="Eight years of work for national institutions and global brands, delivered to public sector standards."
        />
      </div>

      <div className="mt-14 relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent z-10" />
        <motion.div
          className="flex items-center gap-14 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((c, i) => (
            <img
              key={i}
              src={logoSrc(c.file)}
              alt={c.name}
              className="h-8 sm:h-9 w-auto shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-24 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-cardline p-8 flex flex-col"
          >
            <blockquote className="text-paper/90 text-sm leading-relaxed flex-1">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-6 border-t border-cardline pt-4">
              <div className="font-display text-sm text-paper">{t.name}</div>
              <div className="text-xs text-muted mt-1">{t.role}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
