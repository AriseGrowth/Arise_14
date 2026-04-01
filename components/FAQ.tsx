"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqItems, CALENDLY_URL } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section ref={ref} className="py-[140px]" id="faq" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left sticky header */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="lg:sticky lg:top-24">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-display-md font-[700] mt-2 mb-6" style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}>
                Questions before the call.
              </h2>
              <p className="text-[15px] font-[300] leading-relaxed mb-8" style={{ color: "var(--neutral-muted)" }}>
                If you don&apos;t see your question here, ask it on the Intro Call — it&apos;s free and there&apos;s no pitch.
              </p>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block text-[13px] font-[600] px-5 py-2.5 rounded-[6px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)" }}>
                Book Free Intro Call
              </a>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-2">
            {faqItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.05 + i * 0.05 }} style={{ borderBottom: "1px solid var(--neutral-border)" }}>
                <button
                  className="w-full flex items-start justify-between gap-6 py-5 text-left cursor-pointer"
                  style={{ background: "none", border: "none" }}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[11px] font-[700] font-mono mt-0.5 flex-shrink-0" style={{ color: "var(--accent)", opacity: 0.6 }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[15px] font-[500] leading-snug" style={{ color: "var(--neutral)" }}>{item.question}</span>
                  </div>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.22 }} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)", fontSize: 20, lineHeight: 1 }}>+</motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: "hidden" }}>
                      <p className="text-[14.5px] font-[300] leading-[1.85] pb-5 pl-9" style={{ color: "var(--neutral-muted)" }}>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
