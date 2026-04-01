"use client";

import { dashboardMockupData } from "@/lib/data";

const kpiAccents = [
  "var(--accent)",
  "#4ADE80",
  "#F87171",
  "var(--accent)",
];

const priorityColor: Record<string, string> = {
  high: "#F87171",
  medium: "#FBBF24",
  low: "#4ADE80",
};

export default function DashboardMockup() {
  return (
    <div className="mockup-chrome w-full">
      <div className="mockup-topbar">
        <div className="mockup-dot" style={{ background: "#FF5F57" }} />
        <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
        <div className="mockup-dot" style={{ background: "#28C840" }} />
        <span className="flex-1 text-center text-[11px]" style={{ color: "var(--neutral-faint)" }}>
          Control Tower — Operations Dashboard
        </span>
      </div>

      {/* KPI row */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid var(--neutral-border2)",
        }}
      >
        {dashboardMockupData.kpis.map((kpi, i) => (
          <div
            key={kpi.label}
            className="flex flex-col gap-1 px-6 py-4"
            style={{
              borderRight: i < dashboardMockupData.kpis.length - 1 ? "1px solid var(--neutral-border2)" : "none",
            }}
          >
            <span
              className="text-[9px] font-[600] uppercase"
              style={{ color: "var(--neutral-faint)", letterSpacing: "0.08em" }}
            >
              {kpi.label}
            </span>
            <div className="flex items-baseline gap-2">
              <span
                className="text-[28px] font-[700] leading-none"
                style={{ color: kpiAccents[i], letterSpacing: "-0.02em" }}
              >
                {kpi.value}
              </span>
              <span
                className="text-[11px] font-[500]"
                style={{
                  color: kpi.direction === "up" && i !== 2 ? "#4ADE80"
                    : kpi.direction === "down" || i === 2 ? "#F87171"
                    : "#A09890",
                }}
              >
                {kpi.direction === "up" ? "↑" : "↓"} {kpi.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-column body */}
      <div className="grid grid-cols-2" style={{ minHeight: 220 }}>
        {/* Stuck items */}
        <div
          className="p-5"
          style={{ borderRight: "1px solid var(--neutral-border2)" }}
        >
          <div
            className="text-[11px] font-[600] mb-4 flex items-center gap-2"
            style={{ color: "var(--neutral-muted)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#F87171" }} />
            Stuck Items
          </div>
          <div className="flex flex-col gap-2">
            {dashboardMockupData.stuckItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 px-3 py-2 rounded-md"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid var(--neutral-border2)",
                }}
              >
                <span className="text-[10px] font-[500] w-10 flex-shrink-0" style={{ color: "var(--neutral-faint)" }}>
                  {item.id}
                </span>
                <span className="text-[12px] flex-1" style={{ color: "var(--neutral)" }}>
                  {item.title}
                </span>
                <span
                  className="text-[9px] font-[600] px-1.5 py-0.5 rounded"
                  style={{
                    background: "rgba(248,113,113,0.12)",
                    color: priorityColor[item.priority],
                  }}
                >
                  {item.age}
                </span>
                <span
                  className="w-5 h-5 rounded-full text-[8px] font-[700] flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-dim)", color: "var(--accent)" }}
                >
                  {item.owner}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Health bars */}
        <div className="p-5">
          <div
            className="text-[11px] font-[600] mb-4 flex items-center gap-2"
            style={{ color: "var(--neutral-muted)" }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ADE80" }} />
            Process Health
          </div>
          <div className="flex flex-col gap-3">
            {dashboardMockupData.healthBars.map((bar) => (
              <div key={bar.label} className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px]" style={{ color: "var(--neutral-muted)" }}>
                    {bar.label}
                  </span>
                  <span
                    className="text-[11px] font-[600]"
                    style={{
                      color: bar.score >= 90 ? "#4ADE80" : bar.score >= 75 ? "#FBBF24" : "#F87171",
                    }}
                  >
                    {bar.score}%
                  </span>
                </div>
                <div
                  className="w-full h-1 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${bar.score}%`,
                      background: bar.score >= 90 ? "#4ADE80" : bar.score >= 75 ? "#FBBF24" : "#F87171",
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
