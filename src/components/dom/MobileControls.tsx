"use client";

import { useEffect, useRef } from "react";
import { scrollState, stepScroll } from "@/lib/scroll";

/**
 * Mobile controls. Scroll is disabled on phones (it fought the URL bar and made
 * the scene flicker), so instead: the bottom-left rocker steps forward/back
 * through the flight (one content beat per tap, hold to repeat), and dragging
 * anywhere on the scene free-looks the camera FPS-style (yaw/pitch fed to the
 * CameraRig). Hidden on `lg+` (desktop uses scroll + keyboard + mouse).
 */
function Chevron({ dir }: { dir: "up" | "down" }) {
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
      style={{ transform: dir === "down" ? "rotate(180deg)" : undefined }}
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

  // Free-look: drag on the canvas rotates the view like a game. Buttons and
  // panels aren't affected (drag only starts when the touch lands on canvas).
  useEffect(() => {
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (!isCoarse) return stopStep;

    const onDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement)?.tagName !== "CANVAS") return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      // ponytail: clamp yaw to a half-turn each way, pitch to comfortable range
      scrollState.lookYaw = Math.max(
        -Math.PI,
        Math.min(Math.PI, scrollState.lookYaw + dx * 0.005)
      );
      scrollState.lookPitch = Math.max(
        -1.1,
        Math.min(1.1, scrollState.lookPitch + dy * 0.004)
      );
    };
    const onUp = () => {
      dragging = false;
    };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      stopStep();
    };
  }, []);

  const startStep = (forward: boolean) => {
    stepScroll(forward);
    stopStep();
    hold.current = window.setInterval(() => stepScroll(forward), 650);
  };

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 z-40 flex items-end px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] lg:hidden">
      {/* move rocker — step through the flight */}
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
          Move · drag to look
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
    </div>
  );
}
