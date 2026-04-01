"use client";

import { intakeMockupData } from "@/lib/data";

const sourceColors: Record<string, { bg: string; text: string }> = {
  Email: { bg: "rgba(96,165,250,0.12)", text: "#60A5FA" },
  CRM: { bg: "rgba(74,222,128,0.12)", text: "#4ADE80" },
  WhatsApp: { bg: "rgba(74,222,128,0.15)", text: "#4ADE80" },
  Internal: { bg: "rgba(233,230,227,0.08)", text: "#A09890" },
};

const statusColors: Record<string, string> = {
  new: "#EDA58D",
  routing: "#FBBF24",
  unassigned: "#F87171",
  "in review": "#FBBF24",
  "in progress": "#EDA58D",
  pending: "#A09890",
};

const priorityDot: Record<string, string> = {
  high: "#F87171",
  medium: "#FBBF24",
  low: "#4ADE80",
};

export default function IntakeMockup() {
  return (
    <div className="mockup-chrome w-full">
      <div className="mockup-topbar">
        <div className="mockup-dot" style={{ background: "#FF5F57" }} />
        <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
        <div className="mockup-dot" style={{ background: "#28C840" }} />
        <span className="flex-1 text-center text-[11px]" style={{ color: "var(--neutral-faint)" }}>
          {intakeMockupData.title}
        </span>
      </div>

      {/* Header row */}
      <div
        className="grid items-center px-4 py-2"
        style={{
          gridTemplateColumns: "80px 1fr 36px 80px 90px",
          gap: "12px",
          borderBottom: "1px solid var(--neutral-border2)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        {["Source", "Title", "Owner", "Priority", "Status"].map((h) => (
          <span key={h} className="text-[9px] font-[600] uppercase" style={{ color: "var(--neutral-faint)", letterSpacing: "0.08em" }}>
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {intakeMockupData.items.map((item, i) => (
        <div
          key={i}
          className="grid items-center px-4 py-2.5"
          style={{
            gridTemplateColumns: "80px 1fr 36px 80px 90px",
            gap: "12px",
            borderBottom: i < intakeMockupData.items.length - 1 ? "1px solid var(--neutral-border2)" : "none",
            background: i % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent",
          }}
        >
          {/* Source */}
          <span
            className="tag"
            style={{
              background: sourceColors[item.source]?.bg || "rgba(233,230,227,0.08)",
              color: sourceColors[item.source]?.text || "#A09890",
            }}
          >
            {item.source}
          </span>

          {/* Title */}
          <span className="text-[12px] truncate" style={{ color: "var(--neutral)" }}>
            {item.title}
          </span>

          {/* Owner avatar */}
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-[600]"
            style={{
              background: item.owner === "—" ? "rgba(255,255,255,0.05)" : "var(--accent-dim)",
              color: item.owner === "—" ? "var(--neutral-faint)" : "var(--accent)",
              fontSize: "9px",
            }}
          >
            {item.owner}
          </span>

          {/* Priority */}
          <div className="flex items-center gap-1.5">
            <div className="status-dot" style={{ background: priorityDot[item.priority] }} />
            <span className="text-[10px] capitalize" style={{ color: "var(--neutral-muted)" }}>
              {item.priority}
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1.5">
            <div
              className="status-dot"
              style={{ background: statusColors[item.status] || "#A09890" }}
            />
            <span className="text-[10px] capitalize" style={{ color: "var(--neutral-muted)" }}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
