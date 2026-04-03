"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { deliverables, CALENDLY_URL } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const { lang, isHE } = useLang();

  return (
    <section ref={ref} className="py-[140px]" id="deliverables" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <SectionLabel>{tr(t.deliverables.sectionLabel, lang)}</SectionLabel>
          <h2 className="text-display-md font-[700] mt-2 max-w-[520px]" style={{ color: "var(--neutral)", letterSpacing: "-0.022em", whiteSpace: "pre-line" }}>
            {tr(t.deliverables.headline, lang)}
          </h2>
          <p className="text-[16px] font-[300] mt-4 max-w-[440px] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>
            {tr(t.deliverables.sub, lang)}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {deliverables.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 + i * 0.1 }}
              className="rounded-card p-8 flex flex-col relative"
              style={{
                background: "var(--bg-surface)",
                border: tier.featured ? "2px solid var(--accent)" : "1px solid var(--neutral-border)",
                boxShadow: tier.featured ? "0 0 40px rgba(237,165,141,0.08)" : "none",
              }}
            >
              {tier.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[11px] font-[700] px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  {tr(t.deliverables.popular, lang)}
                </div>
              )}
              <div className="mb-6">
                {/* Hebrew tier name prominent */}
                <div className="text-[13px] font-[700] mb-0.5" style={{ color: "var(--accent)" }}>{tier.tierHE}</div>
                <div className="text-[11px] font-[400] mb-3" style={{ color: "var(--neutral-faint)" }}>{tier.tier}</div>
                <div className="text-[38px] font-[800] leading-none mb-1" style={{ color: "var(--neutral)", letterSpacing: "-0.025em" }}>{tier.price}</div>
                <div className="text-[12px] font-[400]" style={{ color: "var(--neutral-faint)" }}>{tier.timeline}</div>
              </div>
              <div className="h-px mb-6" style={{ background: "var(--neutral-border)" }} />
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {(isHE ? tier.itemsHE : tier.items).map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-border)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2L6.5 2" stroke="#EDA58D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-[13.5px] font-[300] leading-relaxed" style={{ color: "var(--neutral)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center text-[13px] font-[600] py-3 rounded-[6px] transition-all duration-200"
                style={{
                  background: tier.featured ? "var(--accent)" : "transparent",
                  color: tier.featured ? "var(--bg)" : "var(--accent)",
                  border: tier.featured ? "none" : "1px solid var(--accent-border)",
                }}
              >
                {tier.featured ? tr(t.deliverables.cta, lang) : tr(t.deliverables.ctaCustom, lang)} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
