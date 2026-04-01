"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export default function SectionLabel({
  children,
  className = "",
  align = "left",
}: SectionLabelProps) {
  return (
    <span
      className={`
        inline-block text-label font-semibold uppercase tracking-widest
        text-accent mb-4 ${align === "center" ? "text-center" : ""} ${className}
      `}
      style={{ color: "var(--accent)", fontSize: "11px", letterSpacing: "0.12em" }}
    >
      {children}
    </span>
  );
}
