"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { t, tr } from "@/lib/translations";
import { CALENDLY_URL } from "@/lib/data";

export default function ChaosNarrative() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const { lang, isHE } = useLang();

  const messages = isHE
    ? ["📱 47 הודעות בוואטסאפ", "🔴 3 דחופות — אבל אי אפשר לדעת אילו", "📋 סטטוס הפרויקט? לא ברור", "📄 מישהו שכח להעביר מסמך", "⏰ שעתיים נוספות בסוף היום"]
    : ["📱 47 WhatsApp messages", "🔴 3 urgent — but which ones?", "📋 Project status? Unclear", "📄 Someone forgot to pass a document", "⏰ Two extra hours at end of day"];

  return (
    <section ref={ref} className="py-[140px]" style={{ backgroundColor: "var(--bg-alt)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — narrative */}
          <motion.div initial={{ opacity: 0, x: isHE ? 24 : -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65 }}>
            <span className="inline-block text-[11px] font-[600] uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full" style={{ color: "#F87171", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)" }}>
              {tr(t.chaos.label, lang)}
            </span>
            <h2 className="font-[700] mb-8" style={{ color: "var(--neutral)", letterSpacing: isHE ? "-0.01em" : "-0.022em", lineHeight: "1.1", fontSize: "clamp(28px,4vw,48px)", whiteSpace: "pre-line" }}>
              {tr(t.chaos.headline, lang)}
            </h2>
            <p className="text-[16px] font-[300] leading-[1.9] mb-8" style={{ color: "var(--neutral-muted)" }}>
              {tr(t.chaos.story, lang)}
            </p>
            <div className="rounded-card p-5 mb-8" style={{ background: "rgba(237,165,141,0.07)", border: "1px solid var(--accent-border)" }}>
              <p className="text-[17px] font-[600]" style={{ color: "var(--accent)" }}>
                {tr(t.chaos.conclusion, lang)}
              </p>
            </div>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block text-[14px] font-[600] px-7 py-3.5 rounded-[7px]" style={{ background: "var(--accent)", color: "var(--bg)" }}>
              {isHE ? "קבע שיחה — 30 דקות, ללא מחויבות" : "Book a Call — 30 min, no commitment"}
            </a>
          </motion.div>

          {/* Right — visual: phone/chaos */}
          <motion.div initial={{ opacity: 0, x: isHE ? -24 : 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="rounded-card p-6" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)" }}>
              <div className="flex items-center gap-3 mb-5 pb-4" style={{ borderBottom: "1px solid var(--neutral-border)" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: "rgba(248,113,113,0.15)" }}>📱</div>
                <div>
                  <p className="text-[13px] font-[600]" style={{ color: "var(--neutral)" }}>{isHE ? "הבוקר שלך, 08:47" : "Your morning, 08:47"}</p>
                  <p className="text-[11px]" style={{ color: "var(--neutral-faint)" }}>{isHE ? "לפני Arise Growth" : "Before Arise Growth"}</p>
                </div>
                <div className="ms-auto text-[10px] font-[600] px-2 py-1 rounded-full" style={{ background: "rgba(248,113,113,0.15)", color: "#F87171" }}>
                  {isHE ? "כאוס" : "Chaos"}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }} className="flex items-start gap-3 rounded-lg p-3" style={{ background: "rgba(248,113,113,0.05)", border: "1px solid rgba(248,113,113,0.1)" }}>
                    <p className="text-[13px] font-[300]" style={{ color: "var(--neutral)" }}>{msg}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--neutral-border)" }}>
                <span className="text-[12px]" style={{ color: "var(--neutral-faint)" }}>{isHE ? "ואז מחר — מחדש" : "And tomorrow — again"}</span>
                <span className="text-[20px]">🔄</span>
              </div>
            </div>

            {/* After card */}
            <div className="rounded-card p-5 mt-4" style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.2)" }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[16px]">✅</span>
                <p className="text-[13px] font-[600]" style={{ color: "#4ADE80" }}>{isHE ? "אחרי Arise Growth" : "After Arise Growth"}</p>
              </div>
              <p className="text-[13px] font-[300] leading-relaxed" style={{ color: "var(--neutral-muted)" }}>
                {isHE ? "המערכת עוקבת, מסלימה, מנתבת. אתה מתעורר עם ראות מלאה — לא עם 47 הודעות ושאלות פתוחות." : "The system tracks, escalates, routes. You wake up with full visibility — not with 47 messages and open questions."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
