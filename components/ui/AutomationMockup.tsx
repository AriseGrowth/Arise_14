"use client";

import { automationMockupData } from "@/lib/data";

export default function AutomationMockup() {
  return (
    <div className="mockup-chrome w-full">
      <div className="mockup-topbar">
        <div className="mockup-dot" style={{ background: "#FF5F57" }} />
        <div className="mockup-dot" style={{ background: "#FEBC2E" }} />
        <div className="mockup-dot" style={{ background: "#28C840" }} />
        <span className="flex-1 text-center text-[11px]" style={{ color: "var(--neutral-faint)" }}>
          {automationMockupData.title}
        </span>
      </div>

      <div className="flex flex-col">
        {automationMockupData.events.map((event, i) => (
          <div
            key={i}
            className="flex items-start gap-4 px-4 py-3"
            style={{ borderBottom: i < automationMockupData.events.length - 1 ? "1px solid var(--neutral-border2)" : "none" }}
          >
            {/* Timeline indicator */}
            <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.2)" }}
              >
                <ZapIcon />
              </div>
              {i < automationMockupData.events.length - 1 && (
                <div className="w-px flex-1 mt-1" style={{ background: "var(--neutral-border2)", minHeight: 12 }} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <span className="text-[10px] font-[500] uppercase tracking-wider" style={{ color: "var(--neutral-faint)" }}>
                    Trigger →{" "}
                  </span>
                  <span className="text-[11px] font-[500]" style={{ color: "var(--neutral-muted)" }}>
                    {event.trigger}
                  </span>
                </div>
                <span className="text-[10px] flex-shrink-0" style={{ color: "var(--neutral-faint)" }}>
                  {event.time}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px]" style={{ color: "var(--accent)" }}>→</span>
                <span className="text-[12px] font-[400]" style={{ color: "var(--neutral)" }}>
                  {event.action}
                </span>
                <span
                  className="tag ml-auto"
                  style={{
                    background: "rgba(74,222,128,0.12)",
                    color: "#4ADE80",
                  }}
                >
                  ✓ Success
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ZapIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="#4ADE80" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 1L3 8h4l-1 5 5-7H7L8 1z" />
    </svg>
  );
}
