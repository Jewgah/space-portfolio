import type { Metadata } from "next";
import Home from "@/components/Home";
import SeoContent from "@/components/dom/SeoContent";
import { localeMetadata } from "@/lib/i18n";

export const metadata: Metadata = localeMetadata("fr");

export default function Page() {
  return (
    <>
      <Home locale="fr" />
      <SeoContent locale="fr" />
    </>
  );
}
