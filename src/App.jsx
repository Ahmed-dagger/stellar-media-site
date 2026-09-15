import Header from "./components/Header";
import Hero from "./components/Hero";
import Agency from "./components/Agency";
import Services from "./components/Services";
import Work from "./components/Work";
import ClientsAndTestimonials from "./components/ClientsAndTestimonials";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import { StartProjectProvider } from "./components/StartProjectModal";

export default function App() {
  return (
    <StartProjectProvider>
      <div className="bg-ink">
        <Header />
        <Hero />
        <Agency />
        <Services />
        <Work />
        <ClientsAndTestimonials />
        <Contact />
        <WhatsAppButton />
      </div>
    </StartProjectProvider>
  );
}
