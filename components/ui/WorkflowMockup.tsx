"use client";

import { workflowMockupData } from "@/lib/data";

const ownerColors = ["var(--accent)", "#60A5FA", "#4ADE80", "#FBBF24"];

export default function WorkflowMockup() {
  return (
    <div className="mockup-chrome w-full">
      <div className="mockup-topbar">
        <div className="mockup-dot" style={{ background: "#FF5F57" }} />
        <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
        <div className="mockup-dot" style={{ background: "#28C840" }} />
        <span className="flex-1 text-center text-[11px]" style={{ color: "var(--neutral-faint)" }}>
          Workflow Board
        </span>
      </div>

      <div className="grid grid-cols-4 gap-0 p-3" style={{ minHeight: 280 }}>
        {workflowMockupData.columns.map((col, ci) => (
          <div
            key={col.id}
            className="flex flex-col gap-2 px-2"
            style={{ borderRight: ci < workflowMockupData.columns.length - 1 ? "1px solid var(--neutral-border2)" : "none" }}
          >
            {/* Column header */}
            <div className="flex items-center gap-2 pb-2" style={{ borderBottom: "1px solid var(--neutral-border2)" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: col.color }} />
              <span className="text-[10px] font-[600]" style={{ color: "var(--neutral-muted)", letterSpacing: "0.04em" }}>
                {col.label}
              </span>
              <span
                className="ml-auto text-[10px] font-[500] w-4 h-4 rounded flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.06)", color: "var(--neutral-faint)" }}
              >
                {col.items.length}
              </span>
            </div>

            {/* Cards */}
            {col.items.map((item, ii) => (
              <div
                key={item.id}
                className="rounded-md p-2.5 flex flex-col gap-2"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid var(--neutral-border2)",
                }}
              >
                <div className="flex items-start justify-between gap-1">
                  <span className="text-[11px] font-[400] leading-tight" style={{ color: "var(--neutral)" }}>
                    {item.title}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="tag"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--neutral-faint)",
                    }}
                  >
                    {item.tag}
                  </span>
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-[700]"
                    style={{
                      background: "var(--accent-dim)",
                      color: ownerColors[ii % ownerColors.length],
                    }}
                  >
                    {item.owner}
                  </span>
                </div>
                <span className="text-[9px]" style={{ color: "var(--neutral-faint)" }}>
                  {item.id}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
