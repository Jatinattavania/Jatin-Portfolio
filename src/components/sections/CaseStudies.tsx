import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Enterprise Analytics Platform",
    summary:
      "Introduced task-based navigation and a unified component library; reduced time-to-insight by 28%.",
    details:
      "Conducted heuristic evaluation, facilitated 6 stakeholder workshops, ran 12 usability tests, and shipped a scalable design system in Figma with tokenization.",
  },
  {
    title: "E-commerce Checkout Optimization",
    summary: "Reduced cart abandonment with clearer affordances and trust markers.",
    details:
      "Instrumented funnel analytics, A/B tested 3 variations, introduced progress indicator and contextual help, improving conversion by 11%.",
  },
  {
    title: "B2B Onboarding Redesign",
    summary: "Segmented flows and better empty states to reduce activation time.",
    details:
      "Mapped journeys for 3 personas, created north-star prototypes, aligned engineering with clickable specs, and established a component audit.",
  },
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="case-studies" className="section container-px mx-auto py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Case Studies</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Business outcomes driven by research and iterative delivery.
        </p>
      </div>
      <div className="space-y-4">
        {cases.map((c, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="overflow-hidden rounded-2xl border bg-card"
            >
              <button
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div>
                  <h3 className="text-lg font-medium">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.summary}</p>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="border-t p-6 text-sm text-muted-foreground">
                  {c.details}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
} 