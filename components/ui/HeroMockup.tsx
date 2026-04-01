"use client";

import { motion } from "framer-motion";

const sidebarItems = [
  { icon: "grid", label: "Overview", active: true },
  { icon: "inbox", label: "Intake Queue" },
  { icon: "workflow", label: "Workflows" },
  { icon: "zap", label: "Automations" },
  { icon: "chart", label: "Reports" },
];

const approvalRows = [
  { id: "A-091", title: "Q2 budget approval", owner: "DS", status: "pending", priority: "high" },
  { id: "A-092", title: "New vendor contract", owner: "MT", status: "in review", priority: "high" },
  { id: "A-093", title: "HR policy update", owner: "RK", status: "approved", priority: "medium" },
  { id: "A-094", title: "Client proposal — Acme", owner: "DS", status: "pending", priority: "medium" },
];

const kpis = [
  { label: "Active workflows", value: "34" },
  { label: "Pending approvals", value: "7" },
  { label: "Automations / week", value: "142" },
  { label: "Overdue items", value: "3" },
];

const statusColors: Record<string, string> = {
  pending: "#EDA58D",
  "in review": "#FBBF24",
  approved: "#4ADE80",
};

const priorityColors: Record<string, string> = {
  high: "rgba(248,113,113,0.15)",
  medium: "rgba(251,191,36,0.12)",
  low: "rgba(233,230,227,0.07)",
};
const priorityText: Record<string, string> = {
  high: "#F87171",
  medium: "#FBBF24",
  low: "#A09890",
};

export default function HeroMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[920px] mx-auto"
    >
      <div className="mockup-chrome">
        {/* Top bar */}
        <div className="mockup-topbar">
          <div className="mockup-dot" style={{ background: "#FF5F57" }} />
          <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
          <div className="mockup-dot" style={{ background: "#28C840" }} />
          <span
            className="flex-1 text-center text-[11px]"
            style={{ color: "var(--neutral-faint)" }}
          >
            Arise Growth — Operating System
          </span>
        </div>

        {/* Body */}
        <div className="flex" style={{ minHeight: 320 }}>
          {/* Sidebar */}
          <div
            className="flex flex-col gap-0.5 py-3 px-2.5 w-[160px] flex-shrink-0"
            style={{ borderRight: "1px solid var(--neutral-border2)" }}
          >
            <div
              className="text-[9px] font-[600] uppercase tracking-widest px-2 pb-2"
              style={{ color: "var(--neutral-faint)" }}
            >
              Workspace
            </div>
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-2 py-1.5 rounded-md cursor-default"
                style={{
                  background: item.active ? "var(--accent-dim)" : "transparent",
                  color: item.active ? "var(--accent)" : "var(--neutral-faint)",
                  fontSize: "12px",
                  fontWeight: item.active ? 500 : 400,
                }}
              >
                <SidebarIcon name={item.icon} active={item.active} />
                {item.label}
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* KPI bar */}
            <div
              className="grid grid-cols-4 gap-0"
              style={{ borderBottom: "1px solid var(--neutral-border2)" }}
            >
              {kpis.map((kpi, i) => (
                <div
                  key={kpi.label}
                  className="flex flex-col gap-0.5 px-5 py-3"
                  style={{
                    borderRight: i < 3 ? "1px solid var(--neutral-border2)" : "none",
                  }}
                >
                  <span className="text-[9px] font-[500]" style={{ color: "var(--neutral-faint)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {kpi.label}
                  </span>
                  <span className="text-[22px] font-[700] leading-none" style={{ color: i === 2 ? "var(--neutral)" : i === 3 ? "#F87171" : "var(--accent)" }}>
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Approvals table */}
            <div className="flex-1 p-4">
              <div
                className="text-[11px] font-[600] mb-3"
                style={{ color: "var(--neutral-muted)" }}
              >
                Approvals Queue
              </div>
              <div className="flex flex-col gap-1.5">
                {approvalRows.map((row) => (
                  <div
                    key={row.id}
                    className="flex items-center gap-3 px-3 py-2 rounded-md"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid var(--neutral-border2)",
                    }}
                  >
                    <span className="text-[10px] font-[500] w-12 flex-shrink-0" style={{ color: "var(--neutral-faint)" }}>
                      {row.id}
                    </span>
                    <span className="text-[12px] font-[400] flex-1" style={{ color: "var(--neutral)" }}>
                      {row.title}
                    </span>
                    {/* Avatar */}
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-[600] flex-shrink-0"
                      style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                    >
                      {row.owner}
                    </span>
                    {/* Priority */}
                    <span
                      className="text-[9px] font-[600] px-2 py-0.5 rounded"
                      style={{
                        background: priorityColors[row.priority],
                        color: priorityText[row.priority],
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      {row.priority}
                    </span>
                    {/* Status */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <div
                        className="status-dot"
                        style={{ background: statusColors[row.status] }}
                      />
                      <span className="text-[10px]" style={{ color: "var(--neutral-muted)" }}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SidebarIcon({ name, active }: { name: string; active?: boolean }) {
  const color = active ? "var(--accent)" : "var(--neutral-faint)";
  const size = 13;
  const icons: Record<string, React.ReactElement> = {
    grid: (
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.4">
        <rect x="1" y="1" width="5" height="5" rx="1" />
        <rect x="8" y="1" width="5" height="5" rx="1" />
        <rect x="1" y="8" width="5" height="5" rx="1" />
        <rect x="8" y="8" width="5" height="5" rx="1" />
      </svg>
    ),
    inbox: (
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.4">
        <path d="M1 9h3l1.5 2h3L10 9h3V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v6z" />
      </svg>
    ),
    workflow: (
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
        <circle cx="3" cy="3" r="1.5" />
        <circle cx="11" cy="7" r="1.5" />
        <circle cx="3" cy="11" r="1.5" />
        <path d="M4.5 3h3a2 2 0 0 1 2 2v1" />
        <path d="M4.5 11h3a2 2 0 0 0 2-2V9" />
      </svg>
    ),
    zap: (
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 1L3 8h4l-1 5 5-7H7L8 1z" />
      </svg>
    ),
    chart: (
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
        <path d="M1 12 L4 8 L7 10 L10 5 L13 7" />
      </svg>
    ),
  };
  return icons[name] || null;
}
