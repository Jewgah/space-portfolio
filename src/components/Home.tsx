"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { TOTAL_PAGES } from "@/lib/journey";
import { initSmoothScroll, useKeyboardScroll } from "@/lib/scroll";
import type { Locale } from "@/lib/i18n";
import { LocaleProvider } from "@/lib/locale";
import Loader from "@/components/dom/Loader";
import Navbar from "@/components/dom/Navbar";
import HeroOverlay from "@/components/dom/HeroOverlay";
import SectionOverlays from "@/components/dom/SectionOverlays";
import ProjectModal from "@/components/dom/ProjectModal";
import HUDRail from "@/components/dom/HUDRail";
import SocialRail from "@/components/dom/SocialRail";
import SectionDots from "@/components/dom/SectionDots";
import MobileControls from "@/components/dom/MobileControls";
import ImpactFlash from "@/components/dom/ImpactFlash";
import CustomCursor from "@/components/dom/CustomCursor";

const Experience = dynamic(() => import("@/components/canvas/Experience"), {
  ssr: false,
});

export default function Home({ locale = "en" }: { locale?: Locale }) {
  const [fontsReady, setFontsReady] = useState(false);
  useKeyboardScroll();

  useEffect(() => {
    const cleanup = initSmoothScroll();
    let alive = true;
    document.fonts.ready.then(() => alive && setFontsReady(true));
    return () => {
      alive = false;
      cleanup();
    };
  }, []);

  return (
    <LocaleProvider locale={locale}>
      <main className="relative">
        {/* Scroll runway — the journey lives in this scroll distance */}
        <div style={{ height: `${TOTAL_PAGES * 100}vh` }} />

        {/* 3D scene (fixed, behind everything). The r3f reconciler doesn't
            forward React context, so the locale rides in as a prop. */}
        {fontsReady && <Experience locale={locale} />}

        {/* DOM overlay */}
        <Navbar />
        <HeroOverlay />
        <SectionOverlays />
        <HUDRail />
        <SocialRail />
        <SectionDots />
        <MobileControls />
        <ProjectModal />
        <ImpactFlash />
        <CustomCursor />
        <Loader />
      </main>
    </LocaleProvider>
  );
}
