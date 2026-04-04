"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";
import { CALENDLY_URL } from "@/lib/data";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const { lang, isHE } = useLang();

  return (
    <section ref={ref} id="contact" className="py-[140px] relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 50%, rgba(237,165,141,0.055) 0%, transparent 70%)" }}/>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="cta-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M 52 0 L 0 0 0 52" fill="none" stroke="rgba(237,165,141,0.04)" strokeWidth="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)"/>
      </svg>
      <div className="container-sm relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="GB inline-block text-[11px] font-[600] uppercase tracking-widest mb-8" style={{ color: "var(--accent)" }}>{tr(t.finalCta.badge, lang)}</span>
          <h2 className="font-[800] mb-6" style={{ color: "var(--neutral)", letterSpacing: isHE ? "-0.01em" : "-0.028em", lineHeight: "1.06", fontSize: "clamp(32px,5vw,64px)" }}>
            {tr(t.finalCta.headline1, lang)}<br />
            {tr(t.finalCta.headline2, lang)}{" "}
            <span style={{ color: "var(--accent)" }}>{tr(t.finalCta.highlight, lang)}</span>
          </h2>
          <ScrollRevealText
            text={tr(t.finalCta.sub, lang)}
            as="p"
            className="font-[300] leading-[1.85] mb-4 max-w-[480px] mx-auto"
            style={{ fontSize: 17 }}
            dimColor="rgba(107,99,96,0.45)"
            brightColor="#B0A89F"
            startOffset={0.9}
            endOffset={0.1}
          />
          <p className="text-[16px] font-[700] mb-14" style={{ color: "var(--accent)", opacity: 0.65 }}>שקט תעשייתי</p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] font-[600] px-8 py-4 rounded-[7px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 48px rgba(237,165,141,0.24)" }}>
              {tr(t.finalCta.cta1, lang)}
            </a>
            <a href="#method" className="text-[14px] font-[500] px-8 py-4 rounded-[7px] transition-all duration-200" style={{ color: "var(--neutral)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}>
              {tr(t.finalCta.cta2, lang)}
            </a>
          </div>
          <p className="mt-10 text-[12px] font-[300]" style={{ color: "var(--neutral-faint)" }}>{tr(t.finalCta.fine, lang)}</p>
        </motion.div>
      </div>
    </section>
  );
}
