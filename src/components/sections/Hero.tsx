import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="section container-px relative mx-auto flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden pt-20 bg-[url('/images/hero-section-light.jpg')] dark:bg-[url('/images/hero-section-dark.jpg')] bg-cover bg-center bg-no-repeat after:absolute after:inset-0 after:bg-background/60"
    >
      {/* Bottom fade for smooth blend into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance text-5xl font-extrabold tracking-tight sm:text-6xl"
        >
          <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-violet-500 bg-clip-text text-transparent">
            Jatin Attavania
          </span>
          <br />
          UI/UX Designer crafting delightful products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg text-muted-foreground"
        >
          I blend research, interactive design, and visual storytelling to design
          interfaces that are beautiful, usable, and accessible.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild>
            <a href="#projects" className="no-link">View Projects</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://calendly.com/jatinattavania/30min" target="_blank" rel="noopener noreferrer">Let's talk</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 