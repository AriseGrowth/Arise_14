import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Arise Growth | מערכות תפעוליות · שותף Monday.com · ישראל",
  description: "Arise Growth בונה מערכות הפעלה עסקיות לעסקים ישראליים — הטמעת Monday.com, אוטומציות Make.com, דשבורדי Control Tower. החלף תפעול מפוזר במערכת אחת מחוברת.",
  keywords: ["ייעוץ תפעולי ישראל", "שותף monday.com", "מערכות עסקיות", "אוטומציות make.com", "operational consulting Israel"],
  authors: [{ name: "David Suissa — Arise Growth" }],
  openGraph: {
    title: "Arise Growth | מערכת הפעלה אחת לכל התפעול שלך",
    description: "החלף כלים מפוזרים ופולו-אפ ידני במערכת תפעולית מחוברת, גלויה וניתנת לצמיחה.",
    siteName: "Arise Growth",
    type: "website",
    url: "https://arisegrowth.io",
    images: [{ url: "https://arisegrowth.io/og-image.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["https://arisegrowth.io/og-image.png"] },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://arisegrowth.io" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Arise Growth",
  "description": "Operational consulting firm building connected business operating systems for Israeli SMBs.",
  "url": "https://arisegrowth.io",
  "email": "david@arisegrowth.io",
  "telephone": "+972528982780",
  "address": { "@type": "PostalAddress", "addressLocality": "Tel Aviv", "addressCountry": "IL" },
  "founder": { "@type": "Person", "name": "David Suissa" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
