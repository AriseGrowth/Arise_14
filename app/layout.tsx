import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arise Growth — Operational Systems for Growing Businesses",
  description:
    "Arise Growth helps small and mid-sized businesses replace fragmented operations with a connected, scalable business operating system. Monday.com Certified Partner.",
  keywords: [
    "operational consulting",
    "business systems",
    "monday.com",
    "workflow automation",
    "operational infrastructure",
    "make.com automations",
    "business process design",
    "Israel",
  ],
  authors: [{ name: "Arise Growth" }],
  openGraph: {
    title: "Arise Growth — Operational Systems for Growing Businesses",
    description:
      "Replace scattered operations with a connected business operating system.",
    siteName: "Arise Growth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
