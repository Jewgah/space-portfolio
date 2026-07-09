"use client";

import { useEffect, useRef } from "react";
import { scrollState, stepScroll } from "@/lib/scroll";

/**
 * Mobile game-pad. Scroll is disabled on phones (it fought the URL bar and made
 * the scene flicker), so this drives the journey instead: the left rocker steps
 * forward/back through the flight (one content beat per tap, hold to repeat),
 * the right rocker glances the camera left/right. Hidden on `lg+` (desktop uses
 * scroll + keyboard).
 */
function Chevron({ dir }: { dir: "up" | "down" | "left" | "right" }) {
  const rot = { up: "0", right: "90", down: "180", left: "270" }[dir];
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: `rotate(${rot}deg)` }}
      aria-hidden
    >
      <path d="M6 15l6-6 6 6" />
    </svg>
  );
}

const BTN =
  "pointer-events-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-hud/30 bg-space/50 text-cyan backdrop-blur-md transition-colors active:border-cyan active:bg-cyan/15";

export default function MobileControls() {
  const hold = useRef<number | null>(null);
  const stopStep = () => {
    if (hold.current) {
      clearInterval(hold.current);
      hold.current = null;
    }
  };
  useEffect(() => stopStep, []);

  const startStep = (forward: boolean) => {
    stepScroll(forward);
    stopStep();
    hold.current = window.setInterval(() => stepScroll(forward), 650);
  };
  const look = (x: number) => {
    scrollState.lookX = x;
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex items-end justify-between px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden">
      {/* left rocker — move through the flight */}
      <div className="flex flex-col items-center gap-1.5">
        <button
          type="button"
          className={BTN}
          aria-label="Move forward"
          onPointerDown={() => startStep(true)}
          onPointerUp={stopStep}
          onPointerLeave={stopStep}
          onPointerCancel={stopStep}
        >
          <Chevron dir="up" />
        </button>
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
          Move
        </span>
        <button
          type="button"
          className={BTN}
          aria-label="Move back"
          onPointerDown={() => startStep(false)}
          onPointerUp={stopStep}
          onPointerLeave={stopStep}
          onPointerCancel={stopStep}
        >
          <Chevron dir="down" />
        </button>
      </div>

      {/* right rocker — glance around */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
          Look
        </span>
        <div className="flex gap-1.5">
          <button
            type="button"
            className={BTN}
            aria-label="Look left"
            onPointerDown={() => look(-0.9)}
            onPointerUp={() => look(0)}
            onPointerLeave={() => look(0)}
            onPointerCancel={() => look(0)}
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            className={BTN}
            aria-label="Look right"
            onPointerDown={() => look(0.9)}
            onPointerUp={() => look(0)}
            onPointerLeave={() => look(0)}
            onPointerCancel={() => look(0)}
          >
            <Chevron dir="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
