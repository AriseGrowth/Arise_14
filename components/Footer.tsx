"use client";
import { useState } from "react";
import { footerLinks, CALENDLY_URL, LINKEDIN_URL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const [formState, setFormState] = useState({ name: "", company: "", challenge: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("https://formspree.io/f/xreolwva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  return (
    <footer style={{ backgroundColor: "var(--bg-alt)", borderTop: "1px solid var(--neutral-border)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-14" style={{ borderBottom: "1px solid var(--neutral-border)" }}>

          {/* Brand col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M14 3 L24 22 L4 22 Z" stroke="#EDA58D" strokeWidth="1.6" strokeLinejoin="round" fill="none"/><path d="M9.5 17 L18.5 17" stroke="#EDA58D" strokeWidth="1.4" strokeLinecap="round"/><circle cx="14" cy="13" r="1.4" fill="#EDA58D"/></svg>
              <span className="font-[700] text-[14px]"><span style={{ color: "var(--accent)" }}>Arise</span><span style={{ color: "var(--neutral-muted)" }}>Growth</span></span>
            </a>
            <p className="text-[13px] font-[300] leading-[1.8] mb-5 max-w-[240px]" style={{ color: "var(--neutral-faint)" }}>
              Operational systems for businesses that have outgrown manual operations.
            </p>
            <span className="inline-block text-[11px] font-[500] px-3 py-1.5 rounded-full mb-6" style={{ color: "var(--accent)", border: "1px solid rgba(237,165,141,0.22)" }}>Monday.com Certified Partner</span>

            {/* Contact form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <p className="text-[11px] font-[600] uppercase tracking-widest mb-1" style={{ color: "var(--neutral-muted)" }}>Quick Contact</p>
                <input type="text" placeholder="Your name" required value={formState.name} onChange={e => setFormState(s => ({ ...s, name: e.target.value }))} className="text-[13px] font-[300] px-3 py-2.5 rounded-md w-full outline-none transition-colors duration-200" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)", color: "var(--neutral)" }} onFocus={e => (e.currentTarget.style.borderColor = "var(--accent-border)")} onBlur={e => (e.currentTarget.style.borderColor = "var(--neutral-border)")}/>
                <input type="text" placeholder="Company name" value={formState.company} onChange={e => setFormState(s => ({ ...s, company: e.target.value }))} className="text-[13px] font-[300] px-3 py-2.5 rounded-md w-full outline-none transition-colors duration-200" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)", color: "var(--neutral)" }} onFocus={e => (e.currentTarget.style.borderColor = "var(--accent-border)")} onBlur={e => (e.currentTarget.style.borderColor = "var(--neutral-border)")}/>
                <textarea placeholder="Your biggest operational challenge..." required rows={3} value={formState.challenge} onChange={e => setFormState(s => ({ ...s, challenge: e.target.value }))} className="text-[13px] font-[300] px-3 py-2.5 rounded-md w-full outline-none resize-none transition-colors duration-200" style={{ background: "var(--bg-surface)", border: "1px solid var(--neutral-border)", color: "var(--neutral)" }} onFocus={e => (e.currentTarget.style.borderColor = "var(--accent-border)")} onBlur={e => (e.currentTarget.style.borderColor = "var(--neutral-border)")}/>
                <button type="submit" disabled={submitting} className="text-[13px] font-[600] py-2.5 rounded-md transition-all duration-200" style={{ background: "var(--accent)", color: "var(--bg)", opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
              </form>
            ) : (
              <div className="rounded-md p-4 text-center" style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}>
                <p className="text-[14px] font-[500]" style={{ color: "#4ADE80" }}>Message received ✓</p>
                <p className="text-[12px] font-[300] mt-1" style={{ color: "var(--neutral-muted)" }}>We&apos;ll be in touch within 24 hours.</p>
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[11px] font-[600] uppercase tracking-widest mb-5" style={{ color: "var(--neutral-muted)" }}>Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map(link => (<li key={link.label}><a href={link.href} className="text-[13.5px] font-[300] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--neutral)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-faint)")}>{link.label}</a></li>))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[11px] font-[600] uppercase tracking-widest mb-5" style={{ color: "var(--neutral-muted)" }}>Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map(link => (<li key={link.label}><a href={link.href} className="text-[13.5px] font-[300] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--neutral)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-faint)")}>{link.label}</a></li>))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact-info">
            <h4 className="text-[11px] font-[600] uppercase tracking-widest mb-5" style={{ color: "var(--neutral-muted)" }}>Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:david@arisegrowth.io" className="text-[13.5px] font-[300] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-faint)")}>david@arisegrowth.io</a>
              <p className="text-[13px] font-[300]" style={{ color: "var(--neutral-faint)" }}>Tel Aviv, Israel</p>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-[13.5px] font-[300] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--neutral)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-faint)")}>LinkedIn →</a>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block text-[13px] font-[600] px-4 py-2 rounded-[6px] mt-2 transition-opacity duration-200 hover:opacity-88" style={{ background: "var(--accent)", color: "var(--bg)" }}>Book a Call</a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-8">
          <p className="text-[12px] font-[300]" style={{ color: "var(--neutral-faint)" }}>© 2025–{year} Arise Growth. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map(link => (<a key={link.label} href={link.href} className="text-[12px] font-[300] transition-colors duration-200" style={{ color: "var(--neutral-faint)" }} onMouseEnter={e => (e.currentTarget.style.color = "var(--neutral-muted)")} onMouseLeave={e => (e.currentTarget.style.color = "var(--neutral-faint)")}>{link.label}</a>))}
          </div>
        </div>
      </div>
    </footer>
  );
}
