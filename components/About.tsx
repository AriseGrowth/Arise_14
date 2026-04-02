"use client";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { CALENDLY_URL } from "@/lib/data";

export default function About() {
  return (
    <section className="py-[140px]" id="about" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: photo + credentials */}
          <RevealWrapper>
            <div className="flex flex-col gap-6">
              {/* Photo placeholder — replace with <img src="/david.jpg"> */}
              <div className="relative w-full rounded-card overflow-hidden" style={{ aspectRatio: "4/3", background: "var(--bg-surface)", border: "1px solid var(--neutral-border)" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-[28px] font-[800]" style={{ background: "var(--accent-dim)", color: "var(--accent)" }}>DS</div>
                  <span className="text-[12px]" style={{ color: "var(--neutral-faint)" }}>Add your photo here</span>
                  <span className="text-[11px]" style={{ color: "var(--neutral-faint)" }}>Replace this div with: &lt;img src=&quot;/david.jpg&quot; /&gt;</span>
                </div>
              </div>
              {/* Credentials */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Military", value: "Intelligence Officer" },
                  { label: "Clinical", value: "Social Worker B.Sc." },
                  { label: "Certified", value: "Monday.com Partner" },
                  { label: "Based in", value: "Tel Aviv, Israel" },
                ].map((c, i) => (
                  <div key={i} className="rounded-card p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)" }}>
                    <div className="text-[9px] font-[600] uppercase tracking-widest mb-1" style={{ color: "var(--neutral-faint)" }}>{c.label}</div>
                    <div className="text-[13px] font-[500]" style={{ color: "var(--neutral)" }}>{c.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Right: story */}
          <RevealWrapper delay={0.12}>
            <SectionLabel>About David</SectionLabel>
            <h2 className="text-display-md font-[700] mt-2 mb-6" style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}>
              Two careers.<br />One operating system.
            </h2>
            <p className="text-[16px] font-[300] leading-[1.85] mb-5" style={{ color: "var(--neutral-muted)" }}>
              Before Arise Growth, David Suissa served as an Intelligence Officer in the Israeli military — building operational systems where precision, visibility, and zero tolerance for information loss were non-negotiable.
            </p>
            <p className="text-[16px] font-[300] leading-[1.85] mb-5" style={{ color: "var(--neutral-muted)" }}>
              Later, as a clinical social worker, he learned something most system designers miss: the best-designed process fails if nobody follows it. Adoption is a human problem, not a technical one.
            </p>
            <p className="text-[16px] font-[300] leading-[1.85] mb-8" style={{ color: "var(--neutral-muted)" }}>
              Arise Growth sits at the intersection of both disciplines — operational precision built around human behavior. Every system we design is tested not just for logic, but for adoption.
            </p>
            <div className="rounded-[0_12px_12px_0] p-6 mb-8" style={{ background: "var(--bg-surface)", borderLeft: "3px solid var(--accent)", border: "1px solid var(--neutral-border)", borderLeftColor: "var(--accent)", borderRadius: "0 12px 12px 0" }}>
              <p className="text-[18px] font-[600] leading-snug" style={{ color: "var(--neutral)", letterSpacing: "-0.01em" }}>
                &ldquo;Systems fall on people, not on code.&rdquo;
              </p>
            </div>

            {/* Video placeholder */}
            <div className="rounded-card overflow-hidden relative cursor-pointer group" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)", aspectRatio: "16/9" }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110" style={{ background: "var(--accent)", color: "var(--bg)" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"><path d="M7 5l10 5-10 5V5z"/></svg>
                </div>
                <span className="text-[13px] font-[500]" style={{ color: "var(--neutral-muted)" }}>Watch: How Arise Growth works (90 sec)</span>
                <span className="text-[11px]" style={{ color: "var(--neutral-faint)" }}>Replace with your Loom or YouTube embed</span>
              </div>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 text-[14px] font-[600] px-7 py-3.5 rounded-[7px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 28px rgba(237,165,141,0.2)" }}>
              Book a Call with David →
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
