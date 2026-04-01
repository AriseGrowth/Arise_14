"use client";

import { footerLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-alt)",
        borderTop: "1px solid var(--neutral-border)",
      }}
    >
      <div className="container py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14" style={{ borderBottom: "1px solid var(--neutral-border)" }}>
          {/* Brand col */}
          <div className="md:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path
                  d="M14 3 L24 22 L4 22 Z"
                  stroke="#EDA58D"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path d="M9.5 17 L18.5 17" stroke="#EDA58D" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="14" cy="13" r="1.4" fill="#EDA58D" />
              </svg>
              <span className="font-[700] text-[14px]">
                <span style={{ color: "var(--accent)" }}>Arise</span>
                <span style={{ color: "var(--neutral-muted)" }}>Growth</span>
              </span>
            </a>

            {/* Brand statement */}
            <p
              className="text-[13px] font-[300] leading-[1.8] mb-5 max-w-[220px]"
              style={{ color: "var(--neutral-faint)" }}
            >
              Operational systems for businesses that have outgrown manual operations.
            </p>

            {/* Partner badge */}
            <span
              className="inline-block text-[11px] font-[500] px-3 py-1.5 rounded-full"
              style={{
                color: "var(--accent)",
                border: "1px solid rgba(237,165,141,0.22)",
              }}
            >
              Monday.com Certified Partner
            </span>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[11px] font-[600] uppercase tracking-widest mb-5"
              style={{ color: "var(--neutral-muted)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-[300] transition-colors duration-200"
                    style={{ color: "var(--neutral-faint)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neutral)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--neutral-faint)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-[11px] font-[600] uppercase tracking-widest mb-5"
              style={{ color: "var(--neutral-muted)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13.5px] font-[300] transition-colors duration-200"
                    style={{ color: "var(--neutral-faint)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neutral)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--neutral-faint)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="about">
            <h4
              className="text-[11px] font-[600] uppercase tracking-widest mb-5"
              style={{ color: "var(--neutral-muted)" }}
            >
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:david@arisegrowth.com"
                className="text-[13.5px] font-[300] transition-colors duration-200"
                style={{ color: "var(--neutral-faint)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--neutral-faint)")}
              >
                david@arisegrowth.com
              </a>
              <p className="text-[13px] font-[300]" style={{ color: "var(--neutral-faint)" }}>
                Tel Aviv, Israel
              </p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13.5px] font-[300] transition-colors duration-200"
                style={{ color: "var(--neutral-faint)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neutral)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--neutral-faint)")}
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-8">
          <p className="text-[12px] font-[300]" style={{ color: "var(--neutral-faint)" }}>
            © {year} Arise Growth. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-[300] transition-colors duration-200"
                style={{ color: "var(--neutral-faint)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--neutral-muted)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--neutral-faint)")}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
