import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arise Growth | Business Operating Systems · Monday.com Partner · Israel",
  description: "Arise Growth builds connected business operating systems for Israeli SMBs — Monday.com implementation, Make.com automations, Control Tower dashboards. Replace scattered operations with one structured system.",
  keywords: ["operational consulting Israel", "monday.com partner Israel", "business operating system", "workflow automation SMB", "operational infrastructure", "make.com automations", "מערכות תפעוליות", "יישום monday", "ייעוץ תפעולי"],
  authors: [{ name: "David Suissa — Arise Growth" }],
  openGraph: {
    title: "Arise Growth | One Connected System for Your Entire Operation",
    description: "Replace scattered tools and manual follow-up with a connected, visible, and scalable business operating system. Monday.com Certified Partner — Israel.",
    siteName: "Arise Growth",
    type: "website",
    url: "https://arisegrowth.io",
    images: [{ url: "https://arisegrowth.io/og-image.png", width: 1200, height: 630, alt: "Arise Growth — Operational Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arise Growth | Business Operating Systems",
    description: "Replace scattered operations with one connected system. Monday.com Partner — Israel.",
    images: ["https://arisegrowth.io/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://arisegrowth.io" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Arise Growth",
  "description": "Operational consulting firm building connected business operating systems for Israeli SMBs.",
  "url": "https://arisegrowth.io",
  "email": "david@arisegrowth.com",
  "address": { "@type": "PostalAddress", "addressLocality": "Tel Aviv", "addressCountry": "IL" },
  "areaServed": "IL",
  "serviceType": ["Business Operations Consulting", "Monday.com Implementation", "Workflow Automation", "Business Process Design"],
  "founder": { "@type": "Person", "name": "David Suissa" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
