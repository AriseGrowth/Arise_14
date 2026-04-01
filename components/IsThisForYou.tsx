"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { isThisForYou, CALENDLY_URL } from "@/lib/data";

export default function IsThisForYou() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section ref={ref} className="py-[140px]" id="isthisforyou" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="mb-16">
          <SectionLabel>Fit Check</SectionLabel>
          <h2 className="text-display-md font-[700] mt-2 max-w-[480px]" style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}>
            Is Arise Growth right for you?
          </h2>
          <p className="text-[16px] font-[300] mt-4 max-w-[440px] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>
            We work with a specific type of business. Read this before booking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yes */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-card p-8" style={{ background: "rgba(74,222,128,0.05)", border: "1px solid rgba(74,222,128,0.2)" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80" }} />
              <span className="text-[12px] font-[600] uppercase tracking-widest" style={{ color: "#4ADE80" }}>This is for you if...</span>
            </div>
            <ul className="flex flex-col gap-4">
              {isThisForYou.yes.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <span className="text-[14.5px] font-[300] leading-relaxed" style={{ color: "var(--neutral)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* No */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.18 }} className="rounded-card p-8" style={{ background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.15)" }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full" style={{ background: "#F87171" }} />
              <span className="text-[12px] font-[600] uppercase tracking-widest" style={{ color: "#F87171" }}>Not the right fit if...</span>
            </div>
            <ul className="flex flex-col gap-4">
              {isThisForYou.no.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)" }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 3l4 4M7 3l-4 4" stroke="#F87171" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  </div>
                  <span className="text-[14.5px] font-[300] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(248,113,113,0.12)" }}>
              <p className="text-[13px] font-[300] leading-relaxed" style={{ color: "var(--neutral-faint)" }}>
                Not sure? Book the free Intro Call anyway — we&apos;ll tell you honestly within 15 minutes whether it&apos;s a fit.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[13px] font-[600] px-5 py-2.5 rounded-[6px]" style={{ background: "var(--accent)", color: "var(--bg)" }}>
                Book Free Intro Call →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
