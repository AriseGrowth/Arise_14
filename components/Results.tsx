"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const { lang } = useLang();

  return (
    <section ref={ref} className="py-[140px]" id="results" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-20"
        >
          <SectionLabel>{tr(t.results.sectionLabel, lang)}</SectionLabel>
          <h2 className="text-display-md font-[700] mt-2" style={{ color: "var(--neutral)", letterSpacing: "-0.022em", whiteSpace: "pre-line" }}>
            {tr(t.results.headline, lang)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 + i * 0.1 }}
              className="rounded-card p-8 flex flex-col gap-0 transition-all duration-300 cursor-default"
              style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)" }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--neutral-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Metric */}
              <div className="flex items-baseline gap-3 pb-5 mb-5" style={{ borderBottom: "1px solid var(--neutral-border)" }}>
                <span className="font-[800] leading-none" style={{ color: "var(--accent)", letterSpacing: "-0.025em", fontSize: "clamp(32px,4vw,44px)" }}>{testimonial.metric}</span>
                <span className="text-[13px] font-[300]" style={{ color: "var(--neutral-muted)" }}>{testimonial.metricLabel}</span>
              </div>
              {/* Before narrative */}
              <p className="text-[12.5px] font-[400] leading-relaxed mb-4 px-3 py-2.5 rounded-md" style={{ color: "var(--neutral-faint)", background: "rgba(255,255,255,0.02)", border: "1px solid var(--neutral-border2)", fontStyle: "italic" }}>
                {lang === "he" ? "לפני:" : "Before:"} {testimonial.before}
              </p>
              {/* Quote */}
              <blockquote className="text-[15px] font-[300] leading-[1.85] flex-1 mb-5" style={{ color: "var(--neutral)" }}>
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-[600] flex-shrink-0"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}
                >
                  {testimonial.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <p className="text-[13px] font-[500]" style={{ color: "var(--neutral)" }}>{testimonial.name} · {testimonial.role}</p>
                  <p className="text-[12px] font-[300]" style={{ color: "var(--neutral-muted)" }}>{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "var(--neutral-border)" }}/>
          <span className="text-[12px] font-[400]" style={{ color: "var(--neutral-faint)" }}>{tr(t.results.certifiedBadge, lang)}</span>
          <div className="h-px flex-1 max-w-[120px]" style={{ background: "var(--neutral-border)" }}/>
        </motion.div>
      </div>
    </section>
  );
}
