import { motion } from "framer-motion";

const skills = [
  "Figma",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Adobe Premiere Pro",
  "Adobe Photoshop.",
  "Canva",
  "Adobe Audition",
  "Adobe Lightroom",
];

export default function Skills() {
  return (
    <section id="skills" className="section container-px mx-auto py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Tools & Craft</h2>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground mx-auto">
          A toolkit spanning design, prototyping, motion, and content.
        </p>
      </div>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.25, delay: i * 0.03 }}
            className="rounded-full border bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-violet-500/10 px-2 py-2 text-center text-sm"
          >
            {name}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 