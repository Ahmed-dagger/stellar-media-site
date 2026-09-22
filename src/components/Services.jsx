import SectionHeading from "./SectionHeading";
import Starfield from "./ui/Starfield";
import ServiceOrbit from "./ui/ServiceOrbit";
import { SERVICES } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="relative bg-ink py-28 lg:py-36 overflow-hidden">
      <Starfield className="opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="02 · What We Do"
          title="Eight disciplines, one accountable agency."
          desc="Everything an institution or brand needs to be seen, believed, and measured, planned and produced without handovers. Move your cursor across the globe."
        />

        <div className="mt-20 sm:mt-24">
          <ServiceOrbit services={SERVICES} />
        </div>
      </div>
    </section>
  );
}
