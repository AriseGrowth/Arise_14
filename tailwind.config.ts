import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0F0D0C",
          surface: "#24211F",
          alt: "#1A1714",
          elevated: "#2E2B28",
        },
        accent: {
          DEFAULT: "#EDA58D",
          dim: "rgba(237,165,141,0.12)",
          border: "rgba(237,165,141,0.20)",
          glow: "rgba(237,165,141,0.25)",
        },
        neutral: {
          DEFAULT: "#E9E6E3",
          muted: "#A09890",
          faint: "#6B6360",
          border: "rgba(233,230,227,0.08)",
          border2: "rgba(233,230,227,0.05)",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(48px,6.5vw,88px)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(36px,4.5vw,64px)", { lineHeight: "1.07", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(28px,3.5vw,48px)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(22px,2.5vw,36px)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-lg": ["18px", { lineHeight: "1.8", letterSpacing: "-0.005em" }],
        "body-md": ["16px", { lineHeight: "1.85", letterSpacing: "-0.003em" }],
        "body-sm": ["14px", { lineHeight: "1.75" }],
        "label": ["11px", { lineHeight: "1.4", letterSpacing: "0.12em" }],
      },
      spacing: {
        section: "140px",
        "section-sm": "100px",
        "section-xs": "72px",
      },
      maxWidth: {
        container: "1120px",
        "container-sm": "720px",
        "container-xs": "560px",
      },
      borderRadius: {
        card: "12px",
        pill: "100px",
      },
      boxShadow: {
        "card-hover": "0 0 0 1px rgba(237,165,141,0.20), 0 8px 32px rgba(0,0,0,0.4)",
        "cta-glow": "0 0 40px rgba(237,165,141,0.22)",
        "mockup": "0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(233,230,227,0.06)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "blink": "blink 1.4s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
