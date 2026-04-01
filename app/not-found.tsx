import { CALENDLY_URL } from "@/lib/data";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 28px" }}>
      <div style={{ textAlign: "center", maxWidth: 480 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>404</div>
        <h1 style={{ fontSize: "clamp(32px,5vw,56px)", fontWeight: 800, color: "var(--neutral)", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>
          Page not found.
        </h1>
        <p style={{ fontSize: 17, fontWeight: 300, color: "var(--neutral-muted)", lineHeight: 1.8, marginBottom: 40 }}>
          The page you&apos;re looking for doesn&apos;t exist. It may have moved, or the link might be incorrect.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/" style={{ fontSize: 14, fontWeight: 600, padding: "13px 28px", borderRadius: 7, background: "var(--accent)", color: "var(--bg)", textDecoration: "none" }}>
            Back to Homepage
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 500, padding: "13px 28px", borderRadius: 7, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", color: "var(--neutral)", textDecoration: "none" }}>
            Book a Call
          </a>
        </div>
      </div>
    </main>
  );
}
