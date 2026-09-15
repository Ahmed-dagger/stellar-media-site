import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="02 · What We Do"
          title="Eight disciplines, one accountable agency."
          desc="Everything an institution or brand needs to be seen, believed, and measured, planned and produced without handovers."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cardline rounded-2xl overflow-hidden">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group bg-ink p-8 min-h-[220px] flex flex-col justify-between"
            >
              <span className="font-display text-sm text-magenta">{s.n}</span>
              <div>
                <h3 className="font-display text-lg text-paper mb-2 group-hover:gradient-text transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
