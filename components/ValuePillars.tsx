"use client";

import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { valuePillars } from "@/lib/data";

export default function ValuePillars() {
  return (
    <section className="py-[140px]" id="systems">
      <div className="container">
        <RevealWrapper className="mb-20">
          <SectionLabel>Core Value</SectionLabel>
          <h2
            className="text-display-md font-[700] mt-2 max-w-[480px]"
            style={{ color: "var(--neutral)", letterSpacing: "-0.02em" }}
          >
            Three things every
            <br />
            operational system needs.
          </h2>
        </RevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {valuePillars.map((pillar, i) => (
            <RevealWrapper key={pillar.number} delay={i * 0.1}>
              <div
                className="h-full rounded-card p-9 flex flex-col gap-6 group transition-all duration-300 cursor-default"
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
                {/* Number */}
                <span
                  className="text-[12px] font-[700] font-mono"
                  style={{ color: "var(--accent)", opacity: 0.6 }}
                >
                  {pillar.number}
                </span>

                {/* Title */}
                <h3
                  className="text-[20px] font-[600] leading-snug"
                  style={{ color: "var(--neutral)", letterSpacing: "-0.015em" }}
                >
                  {pillar.title}
                </h3>

                {/* Body */}
                <p
                  className="text-[14.5px] font-[300] leading-relaxed flex-1"
                  style={{ color: "var(--neutral-muted)" }}
                >
                  {pillar.body}
                </p>

                {/* Detail tag */}
                <div
                  className="text-[11px] font-[500] pt-4"
                  style={{
                    color: "var(--neutral-faint)",
                    borderTop: "1px solid var(--neutral-border)",
                    lineHeight: 1.7,
                  }}
                >
                  {pillar.detail}
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
