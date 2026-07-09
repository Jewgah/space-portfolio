"use client";

import { motion } from "motion/react";
import type { SectionId } from "@/lib/journey";
import { scrollToSection, useCurrentSection } from "@/lib/scroll";

/**
 * Mobile-only progress + section-jump rail. The desktop Navbar hides its
 * section links below `lg`, so on phones this vertical dot rail is how you see
 * where you are in the flight and jump between stops. Hidden on `lg+`.
 */
const DOTS: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionDots() {
  const current = useCurrentSection();
  // "launch" is the brief takeoff transition — keep Home lit through it.
  const activeId: SectionId = current === "launch" ? "hero" : current;

  return (
    <motion.nav
      aria-label="Sections"
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-0.5 lg:hidden"
    >
      {DOTS.map((d) => {
        const active = d.id === activeId;
        return (
          <button
            key={d.id}
            type="button"
            onClick={() => scrollToSection(d.id)}
            aria-label={`Go to ${d.label}`}
            aria-current={active ? "step" : undefined}
            className="flex h-11 items-center justify-end gap-2 pl-4 pr-1"
          >
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.2em] text-cyan transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-0"
              }`}
            >
              {d.label}
            </span>
            <span
              className={`block shrink-0 rounded-full transition-all duration-300 ${
                active
                  ? "h-2.5 w-2.5 bg-cyan shadow-[0_0_10px_rgba(76,201,240,0.9)]"
                  : "h-1.5 w-1.5 bg-white/30"
              }`}
            />
          </button>
        );
      })}
    </motion.nav>
  );
}
