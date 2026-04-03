"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";

export default function OutcomeStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const { lang } = useLang();

  const outcomes = t.outcomes;

  return (
    <section ref={ref} className="py-[120px]" style={{ backgroundColor: "var(--bg-alt)", borderTop: "1px solid var(--neutral-border)", borderBottom: "1px solid var(--neutral-border)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 text-center">
          <span className="text-[11px] font-[600] uppercase tracking-widest" style={{ color: "var(--accent)" }}>
            {lang === "he" ? "תוצאות" : "Outcomes"}
          </span>
          <p className="mt-4 font-[700] max-w-[480px] mx-auto" style={{ color: "var(--neutral)", letterSpacing: "-0.018em", fontSize: "clamp(24px,3.5vw,36px)" }}>
            {lang === "he" ? "מה מחליף את הכאוס." : "What replaces the chaos."}
          </p>
        </motion.div>

        <div className="flex flex-col">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07 }}
              className="group flex items-baseline gap-8 py-7 transition-all duration-300 cursor-default"
              style={{ borderBottom: i < outcomes.length - 1 ? "1px solid var(--neutral-border)" : "none" }}
            >
              <span className="text-[12px] font-[600] font-mono w-6 flex-shrink-0" style={{ color: "var(--neutral-faint)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-[700] flex-shrink-0 transition-colors duration-200" style={{ color: "var(--neutral)", letterSpacing: "-0.02em", fontSize: "clamp(24px,3.5vw,40px)", minWidth: "clamp(200px, 32vw, 360px)" }}>
                {tr(outcome.metric, lang)}
              </span>
              <div className="w-1 h-1 rounded-full flex-shrink-0 opacity-40" style={{ background: "var(--accent)" }}/>
              <p className="text-[15px] font-[300] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>
                {tr(outcome.detail, lang)}
              </p>
              <span className="ms-auto text-[18px] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--accent)" }}>→</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
