"use client";

import RevealWrapper from "@/components/ui/RevealWrapper";
import { positioningStatements } from "@/lib/data";

export default function PositioningStrip() {
  return (
    <section
      dir="ltr"
      style={{
        borderTop: "1px solid var(--neutral-border)",
        borderBottom: "1px solid var(--neutral-border)",
        backgroundColor: "var(--bg-alt)",
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {positioningStatements.map((s, i) => (
            <RevealWrapper key={s.label} delay={i * 0.08}>
              <div
                className="py-10 px-2 md:px-0"
                style={{
                  borderRight: i < 2 ? "1px solid var(--neutral-border)" : "none",
                  paddingLeft: i > 0 ? "40px" : "0",
                  paddingRight: i < 2 ? "40px" : "0",
                }}
              >
                <div
                  className="text-[10px] font-[600] uppercase mb-3"
                  style={{ color: "var(--accent)", letterSpacing: "0.12em" }}
                >
                  {s.label}
                </div>
                <p
                  className="text-[16px] font-[400] leading-relaxed"
                  style={{ color: "var(--neutral)", letterSpacing: "-0.005em" }}
                >
                  {s.text}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
