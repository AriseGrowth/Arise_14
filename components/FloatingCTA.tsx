"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL, CALENDLY_URL } from "@/lib/data";

export default function FloatingCTA() {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 700);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-24 right-5 z-50 w-13 h-13 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 md:bottom-6"
        style={{ background: "#25D366", width: 52, height: 52 }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2C7.373 2 2 7.373 2 14c0 2.09.54 4.054 1.486 5.764L2 26l6.395-1.467A11.94 11.94 0 0 0 14 26c6.627 0 12-5.373 12-12S20.627 2 14 2zm0 21.6a9.56 9.56 0 0 1-4.873-1.332l-.35-.208-3.616.829.861-3.518-.228-.36A9.567 9.567 0 0 1 4.4 14C4.4 8.699 8.699 4.4 14 4.4S23.6 8.699 23.6 14 19.301 23.6 14 23.6zm5.25-7.145c-.288-.144-1.703-.84-1.967-.936-.263-.096-.455-.144-.647.144-.192.288-.743.936-.91 1.128-.167.192-.335.216-.623.072-.288-.144-1.216-.448-2.316-1.428-.856-.762-1.433-1.703-1.601-1.991-.167-.288-.018-.444.126-.587.128-.13.288-.335.432-.503.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.647-1.56-.886-2.136-.233-.561-.47-.485-.647-.494l-.55-.01c-.192 0-.503.072-.767.36-.263.288-1.007.984-1.007 2.4 0 1.416 1.031 2.784 1.175 2.976.144.192 2.03 3.1 4.918 4.347.687.297 1.223.474 1.64.607.689.219 1.316.188 1.812.114.553-.082 1.703-.696 1.943-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
        </svg>
      </a>

      {/* Mobile sticky CTA bar */}
      <AnimatePresence>
        {showSticky && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
            style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--neutral-border)", padding: "12px 20px 28px" }}
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center text-[14px] font-[600] py-3.5 rounded-[7px] transition-opacity duration-200"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              Book a Free 30-Min Call →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
