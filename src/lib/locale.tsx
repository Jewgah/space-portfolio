"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { getContent, type Content, type Locale } from "./i18n";

const LocaleContext = createContext<Locale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  // ponytail: one root layout can't vary <html lang/dir> per route — patch it
  // client-side; crawlers get the language via hreflang metadata instead.
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "he" ? "rtl" : "ltr";
  }, [locale]);

  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

export function useI18n(): Content {
  return getContent(useContext(LocaleContext));
}
