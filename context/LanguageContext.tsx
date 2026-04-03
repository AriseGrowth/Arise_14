"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "he" | "en";
interface LangCtx { lang: Lang; toggle: () => void; isHE: boolean; }
const LanguageContext = createContext<LangCtx>({ lang: "he", toggle: () => {}, isHE: true });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("he");
  const toggle = () => setLang(l => l === "he" ? "en" : "he");

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    document.body.style.fontFamily = lang === "he"
      ? "'Heebo', sans-serif"
      : "'Poppins', sans-serif";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggle, isHE: lang === "he" }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
