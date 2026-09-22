import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import CaseStudyModal from "./CaseStudyModal";
import ScrollCaseStudies from "./ui/ScrollCaseStudies";
import { CASE_STUDIES } from "../data/content";

export default function Work() {
  const [activeStudy, setActiveStudy] = useState(null);

  return (
    <section id="work" className="relative bg-ink text-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="03 · The Work"
          title="Case studies with real, attributed results."
          desc="For government institutions, global brands, and national moments, from the National Festival of Tolerance to the UAE Boxing Federation."
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 px-4 sm:px-6 lg:px-10"
      >
        <ScrollCaseStudies studies={CASE_STUDIES} onExplore={setActiveStudy} />
      </motion.div>

      <CaseStudyModal study={activeStudy} onClose={() => setActiveStudy(null)} />
    </section>
  );
}
