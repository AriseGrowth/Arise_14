"use client";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { clientLogos } from "@/lib/data";

export default function LogosStrip() {
  return (
    <section dir="ltr" style={{ borderBottom: "1px solid var(--neutral-border)", backgroundColor: "var(--bg-surface)" }}>
      <div className="container py-8">
        <RevealWrapper>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <span className="text-[11px] font-[500] uppercase tracking-widest flex-shrink-0" style={{ color: "var(--neutral-faint)" }}>
              Trusted by
            </span>
            {clientLogos.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2.5 opacity-50 hover:opacity-80 transition-opacity duration-200"
                title={logo.name}
              >
                <div
                  className="w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-[700] flex-shrink-0"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}
                >
                  {logo.abbr.slice(0, 2)}
                </div>
                <span className="text-[12px] font-[500] hidden sm:block" style={{ color: "var(--neutral-muted)" }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
