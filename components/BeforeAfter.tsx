"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { beforeAfterItems } from "@/lib/data";

export default function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section ref={ref} className="py-[140px]" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="mb-16 text-center">
          <SectionLabel align="center">Before & After</SectionLabel>
          <h2 className="text-display-md font-[700] mt-2" style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}>
            What actually changes.
          </h2>
        </motion.div>

        {/* Column headers */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 px-6">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#F87171" }} />
            <span className="text-[12px] font-[600] uppercase tracking-widest" style={{ color: "#F87171" }}>Before</span>
          </div>
          <div className="flex items-center gap-2 px-6">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#4ADE80" }} />
            <span className="text-[12px] font-[600] uppercase tracking-widest" style={{ color: "#4ADE80" }}>After Arise Growth</span>
          </div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-3">
          {beforeAfterItems.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: 0.06 * i }} className="grid grid-cols-2 gap-4">
              {/* Before */}
              <div className="flex items-start gap-3 rounded-card px-5 py-4" style={{ background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.15)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#F87171" }} />
                <p className="text-[14px] font-[300] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>{item.before}</p>
              </div>
              {/* After */}
              <div className="flex items-start gap-3 rounded-card px-5 py-4" style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: "#4ADE80" }} />
                <p className="text-[14px] font-[300] leading-relaxed" style={{ color: "var(--neutral)" }}>{item.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
