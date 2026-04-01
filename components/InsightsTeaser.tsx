"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { insights } from "@/lib/data";

export default function InsightsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section ref={ref} className="py-[140px]" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }}>
            <SectionLabel>Insights</SectionLabel>
            <h2 className="text-display-md font-[700] mt-2" style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}>
              Operational thinking,<br />published.
            </h2>
          </motion.div>
          <motion.a initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} href="#" className="text-[13px] font-[500] transition-colors duration-200" style={{ color: "var(--neutral-muted)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-muted)")}>
            View all articles →
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {insights.map((article, i) => (
            <motion.a key={i} href="#" initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.08 + i * 0.1 }} className="group rounded-card p-7 flex flex-col gap-5 transition-all duration-300" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)", textDecoration: "none" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--neutral-border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              <span className="text-[10px] font-[600] uppercase tracking-widest px-2.5 py-1 rounded self-start" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>{article.tag}</span>
              <h3 className="text-[17px] font-[600] leading-snug" style={{ color: "var(--neutral)", letterSpacing: "-0.01em" }}>{article.title}</h3>
              <p className="text-[13.5px] font-[300] leading-relaxed flex-1" style={{ color: "var(--neutral-muted)" }}>{article.excerpt}</p>
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--neutral-border)" }}>
                <span className="text-[11px] font-[400]" style={{ color: "var(--neutral-faint)" }}>{article.readTime}</span>
                <span className="text-[13px] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }}>→</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
