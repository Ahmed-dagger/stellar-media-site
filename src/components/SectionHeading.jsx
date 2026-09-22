import { motion } from "framer-motion";
import QuadStar from "./ui/QuadStar";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  align = "left",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}
    >
      <span
        className={`flex items-center gap-2 font-body text-xs tracking-[0.3em] uppercase text-magenta mb-4 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <QuadStar />
        {eyebrow}
      </span>
      <h2
        className={`font-display font-semibold text-4xl sm:text-5xl leading-tight tracking-tight ${
          light ? "text-ink-text" : "text-paper"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-muted" : "text-faint"
          } ${align === "center" ? "mx-auto" : "max-w-xl"}`}
        >
          {desc}
        </p>
      )}
    </motion.div>
  );
}
