import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import { STATS } from "../data/content";

export default function Agency() {
  return (
    <section id="about" className="relative bg-paper text-ink-text py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <SectionHeading
            light
            eyebrow="01 · The Agency"
            title="One agency, seen, believed, and measured."
            desc="For the institutions shaping the region's future, Digital Stellar Media is an AI pioneer in creative and performance: cinematic content, a full-funnel approach, and an omnipresence strategy in one accountable team."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                k: "Established",
                v: "2018 · Abu Dhabi",
                d: "Eight years of work for federal and emirate-level institutions and global brands.",
              },
              {
                k: "Approach",
                v: "AI pioneer",
                d: "Generative production woven through strategy, creative, and delivery, directed by human craft.",
              },
              {
                k: "Clients",
                v: "Government & brands",
                d: "From national institutions to Versace, Cavalli, VOYAH, and Tony Robbins UPW.",
              },
              {
                k: "Method",
                v: "Full-funnel",
                d: "One audience, present on every platform it lives on, prospecting to conversion.",
              },
            ].map((c) => (
              <div
                key={c.k}
                className="border-t border-hairline pt-5"
              >
                <span className="text-xs uppercase tracking-widest text-muted">
                  {c.k}
                </span>
                <div className="font-display text-xl mt-2">{c.v}</div>
                <p className="text-sm text-muted mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 rounded-3xl bg-ink text-paper p-10 lg:p-14 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] gradient-bar" />
          <p className="font-display text-2xl sm:text-3xl max-w-3xl leading-snug">
            One billion impressions, measured honestly.
          </p>
          <p className="text-faint mt-3 max-w-2xl">
            Eight years of paid media for governments, cultures and brands.
            Every figure below is a real, attributed result from a named
            campaign.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Counter
                  value={s.value}
                  className="font-display text-3xl sm:text-4xl gradient-text"
                />
                <div className="text-xs text-muted mt-2">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
