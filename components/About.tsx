"use client";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";
import { CALENDLY_URL } from "@/lib/data";
import RevealWrapper from "@/components/ui/RevealWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollRevealText from "@/components/ui/ScrollRevealText";

export default function About() {
  const { lang, isHE } = useLang();

  return (
    <section className="py-[140px]" id="about" style={{ backgroundColor: "var(--bg)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Photo + credentials */}
          <RevealWrapper>
            <div className="flex flex-col gap-6">
              <div className="relative w-full rounded-card overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <img
                  src="/david.jpg"
                  alt="David Suissa — Arise Growth"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={e => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.style.display = "none";
                    const parent = el.parentElement;
                    if (parent) {
                      const fallback = document.createElement("div");
                      fallback.style.cssText = "width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-surface);font-size:48px;font-weight:800;color:var(--accent);letter-spacing:-0.02em;";
                      fallback.textContent = "DS";
                      parent.insertBefore(fallback, el);
                    }
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,13,12,0.6) 0%, transparent 60%)" }}/>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[13px] font-[600]" style={{ color: "var(--neutral)" }}>דוד סויסא — David Suissa</p>
                  <p className="text-[11px] font-[400]" style={{ color: "var(--neutral-muted)" }}>{isHE ? "מייסד ומנכ״ל, Arise Growth" : "Founder & CEO, Arise Growth"}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {t.about.credentials.map((c, i) => (
                  <div key={i} className="rounded-card p-4" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)" }}>
                    <div className="text-[9px] font-[600] uppercase tracking-widest mb-1" style={{ color: "var(--neutral-faint)" }}>{tr(c.label, lang)}</div>
                    <div className="text-[13px] font-[500]" style={{ color: "var(--neutral)" }}>{tr(c.value, lang)}</div>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { num: "1,500+", label: isHE ? "משתמשים הוטמעו" : "users onboarded" },
                  { num: "10,000+", label: isHE ? "שעות הטמעה" : "hours implemented" },
                  { num: "1,000+", label: isHE ? "שעות טיפול" : "therapy hours" },
                ].map((s, i) => (
                  <div key={i} className="rounded-card p-4 text-center" style={{ background: "var(--accent-dim)", border: "1px solid var(--accent-border)" }}>
                    <div className="text-[20px] font-[800] mb-0.5" style={{ color: "var(--accent)", letterSpacing: "-0.02em" }}>{s.num}</div>
                    <div className="text-[10px] font-[400] leading-tight" style={{ color: "var(--neutral-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Story */}
          <RevealWrapper delay={0.12}>
            <SectionLabel>{tr(t.about.sectionLabel, lang)}</SectionLabel>
            <h2 className="text-display-md font-[700] mt-2 mb-8" style={{ color: "var(--neutral)", letterSpacing: isHE ? "-0.01em" : "-0.022em", whiteSpace: "pre-line" }}>
              {tr(t.about.headline, lang)}
            </h2>

            {/* Story blocks */}
            {[
              { icon: "🏠", color: "#F87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.2)", text: t.about.intro },
              { icon: "💙", color: "#60A5FA", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.2)", text: t.about.social },
              { icon: "⚡", color: "var(--accent)", bg: "var(--accent-dim)", border: "var(--accent-border)", text: t.about.military },
            ].map((block, i) => (
              <div key={i} className="flex gap-4 mb-5 rounded-card p-5" style={{ background: block.bg, border: `1px solid ${block.border}` }}>
                <span className="text-[20px] flex-shrink-0 mt-0.5">{block.icon}</span>
                <ScrollRevealText
                  text={tr(block.text, lang)}
                  as="p"
                  className="text-[14.5px] font-[300] leading-[1.85]"
                  dimColor="rgba(107,99,96,0.45)"
                  brightColor="#E9E6E3"
                  startOffset={0.88}
                  endOffset={0.05}
                />
              </div>
            ))}

            <ScrollRevealText
              text={tr(t.about.conclusion, lang)}
              as="p"
              className="text-[15px] font-[300] leading-[1.85] mb-8"
              dimColor="rgba(107,99,96,0.4)"
              brightColor="#B0A89F"
              startOffset={0.88}
              endOffset={0.05}
            />

            {/* Quote */}
            <div className="p-6 mb-8" style={{ background: "var(--bg-surface)", borderInlineStart: "3px solid var(--accent)", borderRadius: "0 12px 12px 0" }}>
              <ScrollRevealText
                text={`"${tr(t.about.quote, lang)}"`}
                as="p"
                className="text-[18px] font-[700] leading-snug"
                style={{ letterSpacing: "-0.01em" }}
                dimColor="rgba(237,165,141,0.35)"
                brightColor="#EDA58D"
                startOffset={0.88}
                endOffset={0.1}
              />
            </div>

            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block text-[14px] font-[600] px-7 py-3.5 rounded-[7px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 28px rgba(237,165,141,0.2)" }}>
              {tr(t.about.cta, lang)} →
            </a>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
