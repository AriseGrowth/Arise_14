"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, CALENDLY_URL } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.header initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center px-7" style={{ backgroundColor: scrolled ? "rgba(15,13,12,0.92)" : "rgba(15,13,12,0.60)", backdropFilter: scrolled ? "blur(16px)" : "blur(4px)", WebkitBackdropFilter: scrolled ? "blur(16px)" : "blur(4px)", borderBottom: scrolled ? "1px solid rgba(233,230,227,0.07)" : "1px solid transparent", transition: "background-color 0.35s ease, border-color 0.35s ease" }}>
        <div className="w-full max-w-[1120px] mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3 L24 22 L4 22 Z" stroke="#EDA58D" strokeWidth="1.6" strokeLinejoin="round" fill="none"/><path d="M9.5 17 L18.5 17" stroke="#EDA58D" strokeWidth="1.4" strokeLinecap="round"/><circle cx="14" cy="13" r="1.4" fill="#EDA58D"/></svg>
            <span className="font-bold text-[15px] tracking-tight"><span style={{ color: "var(--accent)" }}>Arise</span><span style={{ color: "var(--neutral-muted)" }}>Growth</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-[13.5px] font-[400] transition-colors duration-200" style={{ color: "var(--neutral-muted)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--neutral)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-muted)")}>{link.label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <span className="text-[11px] font-[500] px-3 py-1.5 rounded-full" style={{ color: "var(--accent)", border: "1px solid rgba(237,165,141,0.25)" }}>Monday.com Partner</span>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[13px] font-[600] px-5 py-2 rounded-[6px] transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.88"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}>Book a Call</a>
          </div>

          <button className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer" onClick={() => setMobileOpen(v => !v)} aria-label="Menu">
            <motion.span className="block w-5 h-[2px] rounded-full" style={{ background: "var(--accent)" }} animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}/>
            <motion.span className="block w-5 h-[2px] rounded-full" style={{ background: "var(--accent)" }} animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.25 }}/>
            <motion.span className="block w-5 h-[2px] rounded-full" style={{ background: "var(--accent)" }} animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }}/>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="fixed top-[60px] left-0 right-0 z-40 flex flex-col gap-5 px-7 py-6" style={{ background: "var(--bg-surface)", borderBottom: "1px solid var(--neutral-border)" }}>
            {navLinks.map(link => (<a key={link.label} href={link.href} className="text-[15px] font-[500]" style={{ color: "var(--neutral)" }} onClick={() => setMobileOpen(false)}>{link.label}</a>))}
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block self-start text-[14px] font-[600] px-5 py-2.5 rounded-[6px] mt-2" style={{ background: "var(--accent)", color: "var(--bg)" }} onClick={() => setMobileOpen(false)}>Book a Call</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
