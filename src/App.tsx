import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import CaseStudies from "@/components/sections/CaseStudies";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <CaseStudies /> */}
        <Contact />
      </main>
      <footer className="container-px mx-auto border-t py-8 text-xs text-muted-foreground">
        <div className="flex items-center justify-center">
          <p>© {new Date().getFullYear()} Jatin Attavania. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 