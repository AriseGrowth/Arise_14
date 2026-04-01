"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CALENDLY_URL } from "@/lib/data";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });

  return (
    <section ref={ref} id="contact" className="py-[140px] relative overflow-hidden" style={{ backgroundColor: "var(--bg)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 900px 500px at 50% 50%, rgba(237,165,141,0.055) 0%, transparent 70%)" }}/>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs><pattern id="cta-grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M 52 0 L 0 0 0 52" fill="none" stroke="rgba(237,165,141,0.04)" strokeWidth="1"/></pattern></defs>
        <rect width="100%" height="100%" fill="url(#cta-grid)"/>
      </svg>

      <div className="container-sm relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}>
          <span className="inline-block text-[11px] font-[600] uppercase tracking-widest mb-8" style={{ color: "var(--accent)" }}>Ready to start</span>
          <h2 className="font-[800] mb-6" style={{ color: "var(--neutral)", letterSpacing: "-0.028em", lineHeight: "1.06", fontSize: "clamp(32px,5vw,64px)" }}>
            Build the operating system<br />your business is{" "}
            <span style={{ color: "var(--accent)" }}>missing.</span>
          </h2>
          <p className="font-[300] leading-[1.85] mb-3 max-w-[480px] mx-auto" style={{ color: "var(--neutral-muted)", fontSize: 17 }}>
            Replace scattered tools and manual coordination with a connected, visible, and scalable operational layer.
          </p>
          <p className="text-[14px] font-[600] mb-14" dir="rtl" style={{ color: "var(--accent)", opacity: 0.55 }}>שקט תעשייתי</p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[14px] font-[600] px-8 py-4 rounded-[7px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", boxShadow: "0 0 48px rgba(237,165,141,0.24)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>
              Book a Free Intro Call
            </a>
            <a href="#method" className="text-[14px] font-[500] px-8 py-4 rounded-[7px] transition-all duration-200" style={{ color: "var(--neutral)", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}>
              See the Method →
            </a>
          </div>
          <p className="mt-10 text-[12px] font-[300]" style={{ color: "var(--neutral-faint)" }}>
            30-minute Intro Call. No pitch deck. No pressure. Just operational clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
