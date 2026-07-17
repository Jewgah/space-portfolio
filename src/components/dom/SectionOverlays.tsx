"use client";

import { useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ARCHIVE_URL } from "@/lib/data";
import { useI18n } from "@/lib/locale";
import { useScrollRaf } from "@/lib/scroll";
import { useUIStore } from "@/lib/store";

/* ------------------------------------------------------------------ */
/* Scroll envelope helpers                                             */
/* ------------------------------------------------------------------ */

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

/** alpha ramps in over [a0,a1] and back out over [b0,b1]. */
function envelope(
  p: number,
  a0: number,
  a1: number,
  b0: number,
  b1: number
): number {
  return smoothstep(a0, a1, p) * (1 - smoothstep(b0, b1, p));
}

function applyPanel(
  el: HTMLDivElement | null,
  last: { current: number },
  alpha: number,
  transform: (a: number) => string
) {
  if (!el) return;
  if (Math.abs(alpha - last.current) < 0.0008) return;
  last.current = alpha;
  el.style.opacity = alpha.toFixed(4);
  el.style.transform = transform(alpha);
  el.style.visibility = alpha < 0.02 ? "hidden" : "visible";
}

const HIDDEN: CSSProperties = {
  opacity: 0,
  visibility: "hidden",
  willChange: "opacity, transform",
};

/* ------------------------------------------------------------------ */
/* Small shared bits                                                   */
/* ------------------------------------------------------------------ */

function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-hud text-hud uppercase">
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */

export default function SectionOverlays() {
  const { profile, experience, projects, ui } = useI18n();
  const panelsHidden = useUIStore((s) => s.panelsHidden);
  const setPanelsHidden = useUIStore((s) => s.setPanelsHidden);
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const lastAbout = useRef(-1);
  const lastExperience = useRef(-1);
  const lastSkills = useRef(-1);
  const lastProjects = useRef(-1);
  const lastContact = useRef(-1);

  useScrollRaf((p) => {
    // Read non-reactively so the rAF loop always sees the latest flag without
    // re-subscribing. When hidden, force alpha 0 → applyPanel writes opacity 0 +
    // visibility:hidden, so panels vanish AND stop catching touches (the canvas
    // behind gets them → free-look on the planet). Unhiding restores the envelope.
    const hidden = useUIStore.getState().panelsHidden;
    applyPanel(
      aboutRef.current,
      lastAbout,
      hidden ? 0 : envelope(p, 0.205, 0.235, 0.315, 0.34),
      (a) => `translateX(${(-40 * (1 - a)).toFixed(2)}px)`
    );
    applyPanel(
      experienceRef.current,
      lastExperience,
      hidden ? 0 : envelope(p, 0.355, 0.39, 0.475, 0.5),
      (a) => `translateX(${(40 * (1 - a)).toFixed(2)}px)`
    );
    applyPanel(
      skillsRef.current,
      lastSkills,
      hidden ? 0 : envelope(p, 0.51, 0.54, 0.595, 0.62),
      (a) => `translateY(${(-18 * (1 - a)).toFixed(2)}px)`
    );
    applyPanel(
      projectsRef.current,
      lastProjects,
      hidden ? 0 : envelope(p, 0.635, 0.665, 0.775, 0.8),
      (a) => `translateX(${(-28 * (1 - a)).toFixed(2)}px)`
    );
    applyPanel(
      contactRef.current,
      lastContact,
      hidden ? 0 : smoothstep(0.82, 0.875, p),
      (a) => `translateX(${(40 * (1 - a)).toFixed(2)}px)`
    );
  });

  /* ---------------- experience tabs ---------------- */
  const [activeJob, setActiveJob] = useState(0);
  const job = experience[activeJob];

  /* ---------------- projects hover chip ---------------- */
  const hoveredId = useUIStore((s) => s.hoveredProject);
  const hovered = hoveredId
    ? (projects.find((pr) => pr.id === hoveredId) ?? null)
    : null;

  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      {/* ============ 01 // ABOUT ============ */}
      <div className="absolute inset-y-0 left-0 flex items-start pt-24 lg:items-center lg:pt-0">
        <div
          ref={aboutRef}
          onWheel={(e) => e.stopPropagation()}
          style={{
            ...HIDDEN,
            background:
              "linear-gradient(150deg, rgba(14,20,42,0.94), rgba(6,8,20,0.94))",
            boxShadow:
              "0 0 40px rgba(5,8,20,0.7), 0 0 24px rgba(76,201,240,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
          className="hud-corners panel-scroll pointer-events-auto ml-4 max-h-[calc(100svh-16rem)] lg:max-h-[80vh] w-[470px] max-w-[calc(100vw-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-hud/25 p-5 sm:p-8 lg:ml-16"
        >
          <Kicker>{ui.about.kicker}</Kicker>
          <h2 className="mt-3 font-display text-[28px] font-bold leading-[1.08] text-star sm:text-[40px] sm:leading-[1.05]">
            {ui.about.h[0]}
            <span className="text-cyan">{ui.about.h[1]}</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85">
            {profile.about.lead}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {profile.about.p2}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {profile.about.p3}
          </p>
          <div className="hud-line mt-6" />
          <ul className="mt-5 space-y-2">
            {profile.about.credentials.map((cred) => (
              <li
                key={cred}
                className="font-mono text-xs uppercase tracking-wide text-star/85"
              >
                <span className="text-cyan">▹</span> {cred}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============ 02 // EXPERIENCE ============ */}
      <div className="absolute inset-y-0 right-0 flex items-start pt-24 lg:items-center lg:pt-0">
        <div
          ref={experienceRef}
          onWheel={(e) => e.stopPropagation()}
          style={{
            ...HIDDEN,
            background:
              "linear-gradient(150deg, rgba(14,20,42,0.94), rgba(6,8,20,0.94))",
            boxShadow:
              "0 0 40px rgba(5,8,20,0.7), 0 0 24px rgba(76,201,240,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
          className="hud-corners panel-scroll pointer-events-auto mr-14 max-h-[calc(100svh-16rem)] lg:max-h-[80vh] w-[560px] max-w-[calc(100vw-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-hud/25 p-5 sm:p-8 lg:mr-24"
        >
          <Kicker>{ui.experience.kicker}</Kicker>

          <div className="mt-4 flex gap-3">
            {experience.map((j, i) => (
              <button
                key={j.company}
                type="button"
                data-cursor="hover"
                onClick={() => setActiveJob(i)}
                className={`rounded-full border px-5 py-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
                  i === activeJob
                    ? "border-cyan bg-cyan/15 text-cyan-bright shadow-[0_0_14px_rgba(76,201,240,0.25)]"
                    : "border-white/20 text-star/70 hover:border-white/40 hover:text-star"
                }`}
              >
                {j.company.split(" ")[0]}
              </button>
            ))}
          </div>

          <h3 className="mt-5 font-display text-[18px] font-bold leading-snug text-white sm:text-[22px]">
            {job.title} <span className="text-cyan">@ {job.company}</span>
          </h3>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-hud/90">
            {job.range} · {job.location}
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-white/85">
            {job.blurb}
          </p>

          <div className="hud-line mt-4" />

          {/* One scroll region per panel: the list flows inside the outer
              panel's scroll (which is overscroll-contained) instead of a nested
              scroller that was desktop-only (sm:) and clipped on mobile. */}
          <ul key={activeJob} className="mt-4 space-y-3">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed text-white/80"
              >
                <span className="mt-0.5 shrink-0 text-cyan">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ============ SKILLS ============ */}
      <div className="absolute inset-x-0 top-28 flex justify-center">
        <div ref={skillsRef} style={HIDDEN} className="px-6 text-center">
          <Kicker>{ui.skills.kicker}</Kicker>
          <h2
            className="mt-2 font-display text-[28px] font-bold text-star"
            style={{
              textShadow:
                "0 0 24px rgba(76,201,240,0.45), 0 0 64px rgba(124,58,237,0.35)",
            }}
          >
            {ui.skills.title}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
            {ui.skills.hint}
          </p>
        </div>
      </div>

      {/* ============ 03 // PROJECTS ============ */}
      <div className="absolute left-8 top-28 lg:left-16">
        <div ref={projectsRef} style={HIDDEN}>
          <Kicker>{ui.projects.kicker}</Kicker>
          <h2
            className="mt-2 font-display text-[34px] font-bold text-star"
            style={{ textShadow: "0 0 28px rgba(124,58,237,0.4)" }}
          >
            {ui.projects.title}
          </h2>
          <p className="mt-3 animate-blink font-mono text-xs uppercase tracking-[0.2em] text-hud">
            {ui.projects.hint}
          </p>
          <a
            href={ARCHIVE_URL}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="pointer-events-auto mt-3 inline-block font-mono text-xs text-star/60 underline-offset-4 transition-colors hover:text-cyan hover:underline"
          >
            {ui.projects.archive}
          </a>
        </div>
      </div>

      {/* target-locked hint chip */}
      <div className="absolute bottom-8 right-8">
        <AnimatePresence mode="wait">
          {hovered && (
            <motion.div
              key={hovered.id}
              initial={{ opacity: 0, y: 12, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.96 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="glass flex items-center gap-2.5 rounded-full px-4 py-2"
            >
              <span className="block h-1.5 w-1.5 rotate-45 animate-blink bg-cyan shadow-[0_0_8px_rgba(76,201,240,0.9)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-hud">
                {`${ui.projects.targetLocked} // ${hovered.title.toUpperCase()}`}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ============ 04 // CONTACT ============ */}
      <div className="absolute inset-y-0 right-0 flex items-start pt-24 lg:items-center lg:pt-0">
        <div
          ref={contactRef}
          onWheel={(e) => e.stopPropagation()}
          style={{
            ...HIDDEN,
            background:
              "linear-gradient(150deg, rgba(14,20,42,0.94), rgba(6,8,20,0.94))",
            boxShadow:
              "0 0 40px rgba(5,8,20,0.7), 0 0 24px rgba(76,201,240,0.1), inset 0 1px 0 rgba(255,255,255,0.08)",
            backdropFilter: "blur(18px)",
          }}
          className="hud-corners panel-scroll pointer-events-auto mr-14 max-h-[calc(100svh-16rem)] lg:max-h-[80vh] w-[460px] max-w-[calc(100vw-5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-hud/25 p-5 sm:p-8 lg:mr-24"
        >
          <Kicker>{ui.contact.kicker}</Kicker>
          <h2 className="mt-2 font-display text-[26px] font-bold leading-[1.1] text-star sm:text-[34px] sm:leading-[1.08]">
            {ui.contact.h[0]}
            <span className="text-cyan">{ui.contact.h[1]}</span>
            {ui.contact.h[2]}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/80">
            {ui.contact.copy}
          </p>

          <a
            href="https://jordanperez.dev/#contact"
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="mt-7 block w-full rounded-full bg-gradient-to-r from-cyan to-nebula py-3.5 text-center font-display text-lg font-semibold tracking-wide text-space transition hover:brightness-110 active:scale-[0.98]"
          >
            {ui.contact.cta}
          </a>
          <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            {ui.contact.note}
          </p>

          <div className="hud-line mt-6" />

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                data-cursor="hover"
                className="text-white/50 transition-colors hover:text-cyan"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                data-cursor="hover"
                className="text-white/50 transition-colors hover:text-cyan"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
                </svg>
              </a>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
              GitHub · LinkedIn
            </span>
          </div>

          <p className="mt-5 font-mono text-[10px] tracking-[0.14em] text-white/25">
            © 2026 {profile.name.toUpperCase()} — BUILT WITH NEXT.JS + R3F
          </p>
        </div>
      </div>

      {/* Mobile: fade the text panels out to admire the planet behind them.
          Lives outside the panels (applyPanel never touches it) so it stays
          tappable while everything else is hidden. */}
      <button
        type="button"
        aria-label={panelsHidden ? ui.panels.show : ui.panels.hide}
        onClick={() => setPanelsHidden(!panelsHidden)}
        className="pointer-events-auto absolute right-4 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-hud/25 bg-space/70 text-star/80 backdrop-blur-md transition-colors hover:text-cyan lg:hidden"
      >
        {panelsHidden ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8" />
            <path d="M9.4 5.2A9.3 9.3 0 0112 5c5 0 9 4.5 9 7-.3.9-1 1.9-2 2.9M6.1 6.1C3.9 7.4 2.3 9.6 2 12c0 2.5 4 7 10 7a9.7 9.7 0 004-.8" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </button>
    </div>
  );
}
