"use client";
import { motion } from "framer-motion";
import HeroMockup from "@/components/ui/HeroMockup";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";
import { CALENDLY_URL } from "@/lib/data";

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } },
  item: { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } },
};

export default function Hero() {
  const { lang, isHE } = useLang();
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[80px] pb-20 px-7">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="hero-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M 52 0 L 0 0 0 52" fill="none" stroke="rgba(237,165,141,0.042)" strokeWidth="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)"/>
      </svg>
      <div className="absolute pointer-events-none" style={{ top: "40%", left: "50%", transform: "translate(-50%, -55%)", width: "900px", height: "640px", background: "radial-gradient(ellipse at center, rgba(237,165,141,0.07) 0%, transparent 65%)" }}/>

      <motion.div className="relative z-10 flex flex-col items-center text-center w-full" variants={stagger.container} initial="hidden" animate="show">
        <motion.div variants={stagger.item}>
          <span className="inline-flex items-center gap-2 text-[11px] font-[500] uppercase px-4 py-1.5 rounded-full mb-9" style={{ color: "var(--accent)", border: "1px solid rgba(237,165,141,0.22)", letterSpacing: "0.1em" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)", animation: "pulse 2.5s ease-in-out infinite" }}/>
            {tr(t.hero.badge, lang)}
          </span>
        </motion.div>

        <motion.h1 variants={stagger.item} className="font-[800] max-w-[820px] mb-6" style={{ color: "var(--neutral)", letterSpacing: isHE ? "-0.01em" : "-0.03em", lineHeight: "1.05", fontSize: "clamp(38px,6.5vw,80px)" }}>
          {tr(t.hero.headline1, lang)}<br />
          <span style={{ color: isHE ? "var(--neutral)" : "var(--neutral)" }}>{tr(t.hero.headline2, lang)}</span>
          {!isHE && <> <span style={{ color: "var(--accent)" }}>{t.hero.highlight.en}</span></>}
        </motion.h1>

        <motion.p variants={stagger.item} className="max-w-[560px] mb-4 font-[300]" style={{ color: "var(--neutral-muted)", lineHeight: "1.8", fontSize: "clamp(16px,2vw,20px)" }}>
          {tr(t.hero.sub, lang)}
        </motion.p>

        <motion.p variants={stagger.item} className="text-[16px] font-[700] mb-12" style={{ color: "var(--accent)", opacity: 0.75, letterSpacing: isHE ? "0.02em" : "-0.01em" }}>
          {tr(t.hero.tagline, lang)}
        </motion.p>

        <motion.div variants={stagger.item} className="flex items-center gap-4 flex-wrap justify-center mb-20">
          <a href="#systems" className="text-[14px] font-[500] px-7 py-3.5 rounded-[7px] transition-all duration-200" style={{ color: "var(--neutral)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
            {tr(t.hero.cta2, lang)} →
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] font-[600] px-7 py-3.5 rounded-[7px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 36px rgba(237,165,141,0.22)" }}>
            {tr(t.hero.cta1, lang)}
          </a>
        </motion.div>

        <HeroMockup />
      </motion.div>
    </section>
  );
}
