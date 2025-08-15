import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Unicorn SPA",
    description: "Modern single-page experience with delightful micro-interactions.",
    tags: ["Web", "SPA", "UI"],
    link: "https://www.behance.net/gallery/222670175/User-Interface",
    image: "./images/projects/image.png",
  },
  {
    title: "Krypton Global Investment",
    description: "Brand-consistent interface and a crisp information hierarchy.",
    tags: ["Finance", "UI", "Design"],
    link: "https://www.behance.net/gallery/222672791/User-Interface-design",
    image: "./images/projects/image.png",
  },
  {
    title: "Asas Capital",
    description: "Executive-level clarity with a polished visual language.",
    tags: ["Corporate", "UX", "Strategy"],
    link: "https://www.behance.net/gallery/223582733/UX-Strategy-Interface-Design",
    image: "./images/projects/image.png",
  },
  {
    title: "FitFix",
    description: "A digital fitness journey with high-fidelity visuals.",
    tags: ["Health", "Visual", "Prototype"],
    link: "https://www.behance.net/gallery/223600517/Digital-Fitness-Journey-%28Hifi-Mockup%29",
    image: "./images/projects/image.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section container-px mx-auto py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h2>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground mx-auto">
          Selected work across industries.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link ?? "#"}
            target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={p.image || "/images/projects/image.png"}
                alt={p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-2xl bg-[conic-gradient(at_50%_-10%,theme(colors.amber.500/.12),theme(colors.orange.500/.1),theme(colors.violet.500/.12))]" />
              </div>
            </div>

            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                <span className="text-xs text-muted-foreground">View</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Badge key={t} className="bg-secondary text-secondary-foreground">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
} 