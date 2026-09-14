import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Agency from "@/components/Agency";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Filmography from "@/components/Filmography";
import Performance from "@/components/Performance";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Agency />
        <Stats />
        <Services />
        <Work />
        <Filmography />
        <Performance />
        <Clients />
        <Testimonials />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
