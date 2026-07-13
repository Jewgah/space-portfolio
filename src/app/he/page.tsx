import type { Metadata } from "next";
import Home from "@/components/Home";
import SeoContent from "@/components/dom/SeoContent";
import { localeMetadata } from "@/lib/i18n";

export const metadata: Metadata = localeMetadata("he");

export default function Page() {
  return (
    <>
      <Home locale="he" />
      <SeoContent locale="he" />
    </>
  );
}
