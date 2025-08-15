import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        isScrolled ? "backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : ""
      )}
    >
      <nav className="container-px mx-auto flex h-16 items-center justify-between">
        <a href="#hero" className="font-semibold tracking-tight">
          Jatin Attavania
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary"
            >
              {s.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-b bg-background/95 shadow-sm md:hidden">
          <div className="container-px mx-auto grid gap-2 py-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="py-2 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary"
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 