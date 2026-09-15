import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { SqueezeCarousel } from "./ui/carousel-squeeze";
import { CASE_STUDIES } from "../data/content";

const slides = CASE_STUDIES.map((c) => ({
  id: c.title,
  title: c.title,
  description: c.desc,
  image: c.image,
  imageAlt: c.imageAlt,
  overlay: (
    <span className="text-sm font-medium tracking-tight text-white">
      {c.tag}
    </span>
  ),
  action: `${c.stats[0].value} ${c.stats[0].label}`,
  href: "#contact",
}));

export default function Work() {
  return (
    <section id="work" className="relative bg-paper text-ink-text py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          light
          eyebrow="03 · The Work"
          title="Case studies with real, attributed results."
          desc="For government institutions, global brands, and national moments, from VOYAH to the UAE Boxing Federation."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-3xl bg-ink p-6 sm:p-8 lg:p-10"
        >
          <SqueezeCarousel
            slides={slides}
            label="Featured work"
            height="clamp(220px, 34cqi, 380px)"
            autoplay
            interval={5500}
            accent="var(--color-magenta)"
            accentForeground="var(--color-paper)"
          />
        </motion.div>

        <div className="mt-16 grid md:grid-cols-2 gap-px bg-hairline rounded-2xl overflow-hidden">
          {CASE_STUDIES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-paper p-9 flex flex-col"
            >
              <span className="text-xs uppercase tracking-widest text-magenta">
                {c.tag}
              </span>
              <h3 className="font-display text-2xl mt-3">{c.title}</h3>
              <p className="text-muted mt-3 leading-relaxed flex-1">{c.desc}</p>
              <div className="mt-6 flex gap-8 border-t border-hairline pt-5">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <Counter
                      value={s.value}
                      className="font-display text-2xl gradient-text"
                    />
                    <div className="text-xs text-muted mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
