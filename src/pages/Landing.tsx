import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { Projects } from "@/components/home/Projects";
import { Services } from "@/components/home/Services";

export default function Landing() {
  return (
    <div className="overflow-x-clip bg-[#0C0C0C] font-sans text-[#D7E2EA] antialiased">
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
