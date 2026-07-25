import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CyberBackground } from "@/components/layout/CyberBackground";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

/**
 * Single scrolling page — sections are composed here in display order.
 * CyberBackground sits fixed behind everything for the neon cyberpunk look.
 */
export default function Home() {
  return (
    <>
      <CyberBackground />
      <div className="relative z-10 flex min-h-full flex-1 flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
