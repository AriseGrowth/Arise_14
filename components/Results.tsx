"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data";

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });

  return (
    <section
      ref={ref}
      className="py-[140px]"
      id="results"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <SectionLabel>Results</SectionLabel>
          <h2
            className="text-display-md font-[700] mt-2"
            style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}
          >
            Operational clarity,
            <br />
            measured.
          </h2>
        </motion.div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.65,
                delay: 0.08 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-card p-8 flex flex-col gap-6 group transition-all duration-300 cursor-default"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--neutral-border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--neutral-border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Metric */}
              <div
                className="inline-flex items-baseline gap-3 pb-5"
                style={{ borderBottom: "1px solid var(--neutral-border)" }}
              >
                <span
                  className="text-[44px] font-[800] leading-none"
                  style={{ color: "var(--accent)", letterSpacing: "-0.025em" }}
                >
                  {t.metric}
                </span>
                <span
                  className="text-[13px] font-[300]"
                  style={{ color: "var(--neutral-muted)" }}
                >
                  {t.metricLabel}
                </span>
              </div>

              {/* Quote */}
              <blockquote
                className="text-[15.5px] font-[300] leading-[1.85] flex-1"
                style={{ color: "var(--neutral)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-[600] flex-shrink-0"
                  style={{
                    background: "var(--accent-dim)",
                    color: "var(--accent)",
                    border: "1px solid var(--accent-border)",
                  }}
                >
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <p
                    className="text-[13px] font-[500]"
                    style={{ color: "var(--neutral)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[12px] font-[300]"
                    style={{ color: "var(--neutral-muted)" }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-6 flex-wrap"
        >
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "var(--neutral-border)" }}
          />
          <span
            className="text-[12px] font-[400]"
            style={{ color: "var(--neutral-faint)" }}
          >
            Monday.com Certified Partner · Israel
          </span>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "var(--neutral-border)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
