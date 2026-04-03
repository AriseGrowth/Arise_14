"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { methodPhases } from "@/lib/data";

export default function Method() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section
      ref={ref}
      className="py-[140px]"
      id="method"
      dir="ltr"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <SectionLabel>Method</SectionLabel>
          <h2
            className="text-display-md font-[700] mt-2 max-w-[520px]"
            style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}
          >
            Five phases.
            <br />
            One operating system.
          </h2>
          <p
            className="text-[16px] font-[300] mt-5 max-w-[440px] leading-relaxed"
            style={{ color: "var(--neutral-muted)" }}
          >
            Every Arise Growth engagement follows a structured delivery process
            — from diagnosing the operational reality to optimizing the live system.
          </p>
        </motion.div>

        {/* Phase stepper — desktop horizontal */}
        <div className="hidden lg:block">
          {/* Step numbers row */}
          <div className="relative flex items-start mb-12">
            {/* Connecting line */}
            <div
              className="absolute top-[27px] left-[28px] right-[28px] h-px"
              style={{ background: "var(--neutral-border)" }}
            />
            {/* Progress line */}
            <motion.div
              className="absolute top-[27px] left-[28px] h-px"
              style={{ background: "var(--accent)", opacity: 0.6 }}
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${(active / (methodPhases.length - 1)) * 100}%` } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {methodPhases.map((phase, i) => (
              <motion.button
                key={phase.phase}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="flex-1 flex flex-col items-center gap-3 cursor-pointer relative"
                onClick={() => setActive(i)}
              >
                {/* Circle */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-300"
                  style={{
                    background: active === i ? "var(--accent)" : "var(--bg-surface)",
                    border: active === i
                      ? "1px solid var(--accent)"
                      : i < active
                      ? "1px solid rgba(237,165,141,0.35)"
                      : "1px solid var(--neutral-border)",
                    boxShadow: active === i ? "0 0 28px rgba(237,165,141,0.22)" : "none",
                  }}
                >
                  <span
                    className="text-[14px] font-[700]"
                    style={{
                      color: active === i ? "var(--bg)" : i < active ? "var(--accent)" : "var(--neutral-faint)",
                    }}
                  >
                    {phase.number}
                  </span>
                </div>
                {/* Phase name */}
                <span
                  className="text-[13px] font-[500] transition-colors duration-200"
                  style={{
                    color: active === i ? "var(--neutral)" : "var(--neutral-muted)",
                  }}
                >
                  {phase.phase}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Active phase detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-card p-10"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--neutral-border)",
              }}
            >
              <div className="grid grid-cols-3 gap-12">
                <div className="col-span-1">
                  <div
                    className="text-[11px] font-[600] uppercase tracking-widest mb-3"
                    style={{ color: "var(--accent)" }}
                  >
                    Phase {methodPhases[active].number}
                  </div>
                  <h3
                    className="text-[28px] font-[700] mb-2"
                    style={{ color: "var(--neutral)", letterSpacing: "-0.018em" }}
                  >
                    {methodPhases[active].phase}
                  </h3>
                  <p
                    className="text-[14px] font-[500]"
                    style={{ color: "var(--neutral-muted)" }}
                  >
                    {methodPhases[active].summary}
                  </p>
                </div>
                <div className="col-span-2 flex items-center">
                  <p
                    className="text-[16px] font-[300] leading-[1.85]"
                    style={{ color: "var(--neutral-muted)" }}
                  >
                    {methodPhases[active].detail}
                  </p>
                </div>
              </div>

              {/* Prev / Next nav */}
              <div className="flex items-center justify-between mt-8 pt-6"
                style={{ borderTop: "1px solid var(--neutral-border)" }}
              >
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  className="text-[13px] font-[500] transition-colors duration-200"
                  style={{
                    color: active > 0 ? "var(--neutral-muted)" : "var(--neutral-faint)",
                    cursor: active > 0 ? "pointer" : "default",
                  }}
                  disabled={active === 0}
                >
                  ← Previous
                </button>
                <div className="flex gap-1.5">
                  {methodPhases.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className="transition-all duration-200"
                      style={{
                        width: active === i ? "20px" : "6px",
                        height: "6px",
                        borderRadius: "3px",
                        background: active === i ? "var(--accent)" : "var(--neutral-border)",
                      }}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setActive(Math.min(methodPhases.length - 1, active + 1))}
                  className="text-[13px] font-[500] transition-colors duration-200"
                  style={{
                    color: active < methodPhases.length - 1 ? "var(--neutral-muted)" : "var(--neutral-faint)",
                    cursor: active < methodPhases.length - 1 ? "pointer" : "default",
                  }}
                  disabled={active === methodPhases.length - 1}
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile — stacked phases */}
        <div className="flex flex-col gap-4 lg:hidden">
          {methodPhases.map((phase, i) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-card p-6"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--neutral-border)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--accent-dim)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  <span className="text-[13px] font-[700]" style={{ color: "var(--accent)" }}>
                    {phase.number}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-[18px] font-[600] mb-1"
                    style={{ color: "var(--neutral)" }}
                  >
                    {phase.phase}
                  </h3>
                  <p className="text-[13px] font-[500] mb-3" style={{ color: "var(--accent)" }}>
                    {phase.summary}
                  </p>
                  <p
                    className="text-[14px] font-[300] leading-relaxed"
                    style={{ color: "var(--neutral-muted)" }}
                  >
                    {phase.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
