import { Mail, Instagram, Linkedin, Palette, Calendar } from "lucide-react";

const links = [
  { href: "mailto:jatinattavania@gmail.com", label: "Email", icon: Mail },
  { href: "https://www.instagram.com/jatinattavania", label: "Instagram", icon: Instagram },
  { href: "https://www.linkedin.com/in/jatin-attavania", label: "LinkedIn", icon: Linkedin },
  { href: "https://www.behance.net/jatinattavania1", label: "Behance", icon: Palette },
  { href: "https://calendly.com/jatinattavania/30min", label: "Calendly", icon: Calendar },
];

export default function Contact() {
  return (
    <section id="contact" className="section container-px mx-auto py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Contact</h2>
        <p className="mt-2 max-w-2xl text-balance text-muted-foreground mx-auto">
          Reach out on email or socials—happy to discuss projects and opportunities.
        </p>
      </div>
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-5">
        {links.map(({ href, label, icon: Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="interactive inline-flex h-12 w-12 items-center justify-center rounded-full border bg-background transition hover:border-primary active:bg-secondary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
} 