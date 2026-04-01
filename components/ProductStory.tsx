"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWrapper from "@/components/ui/RevealWrapper";
import IntakeMockup from "@/components/ui/IntakeMockup";
import WorkflowMockup from "@/components/ui/WorkflowMockup";
import AutomationMockup from "@/components/ui/AutomationMockup";
import DashboardMockup from "@/components/ui/DashboardMockup";
import type { productStories } from "@/lib/data";

type Story = (typeof productStories)[number];

interface ProductStoryProps {
  story: Story;
  alt?: boolean;
}

const mockupMap: Record<string, React.ReactNode> = {
  intake: <IntakeMockup />,
  workflow: <WorkflowMockup />,
  automation: <AutomationMockup />,
  dashboard: <DashboardMockup />,
};

export default function ProductStory({ story, alt = false }: ProductStoryProps) {
  const isFull = story.layout === "full";

  if (isFull) {
    return (
      <section
        className="py-[140px]"
        id={story.id}
        style={{ backgroundColor: alt ? "var(--bg-alt)" : "var(--bg)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <RevealWrapper>
              <SectionLabel>{story.sectionLabel}</SectionLabel>
              <h2
                className="text-display-md font-[700] mt-2 mb-6 whitespace-pre-line"
                style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}
              >
                {story.headline}
              </h2>
              <p
                className="text-[16px] font-[300] leading-[1.85] mb-8"
                style={{ color: "var(--neutral-muted)" }}
              >
                {story.body}
              </p>
              <BulletList items={story.bullets} />
            </RevealWrapper>

            <RevealWrapper delay={0.12}>
              <OutcomeMetrics />
            </RevealWrapper>
          </div>

          {/* Full-width mockup */}
          <RevealWrapper delay={0.18}>
            <div className="w-full">
              {mockupMap[story.mockup]}
            </div>
          </RevealWrapper>
        </div>
      </section>
    );
  }

  const isRight = story.layout === "right";

  return (
    <section
      className="py-[140px] overflow-hidden"
      id={story.id}
      style={{ backgroundColor: alt ? "var(--bg-alt)" : "var(--bg)" }}
    >
      <div className="container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
            !isRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          {/* Copy block */}
          <RevealWrapper delay={isRight ? 0 : 0.1}>
            <div>
              <SectionLabel>{story.sectionLabel}</SectionLabel>
              <h2
                className="text-display-md font-[700] mt-2 mb-6 whitespace-pre-line"
                style={{ color: "var(--neutral)", letterSpacing: "-0.022em" }}
              >
                {story.headline}
              </h2>
              <p
                className="text-[16px] font-[300] leading-[1.85] mb-8"
                style={{ color: "var(--neutral-muted)" }}
              >
                {story.body}
              </p>
              <BulletList items={story.bullets} />
            </div>
          </RevealWrapper>

          {/* Mockup block */}
          <RevealWrapper delay={isRight ? 0.14 : 0} y={32}>
            <div className="w-full">
              {mockupMap[story.mockup]}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{
              background: "var(--accent-dim)",
              border: "1px solid var(--accent-border)",
            }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5l2.5 2.5L8 3"
                stroke="#EDA58D"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            className="text-[14.5px] font-[300] leading-relaxed"
            style={{ color: "var(--neutral-muted)" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Mini outcome metrics for the dashboard section
function OutcomeMetrics() {
  const metrics = [
    { value: "60%", label: "less coordination time" },
    { value: "3 hrs", label: "saved per manager / week" },
    { value: "5→1", label: "days to onboard a hire" },
    { value: "142", label: "automations run per week" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((m, i) => (
        <div
          key={i}
          className="rounded-card p-6 flex flex-col gap-2"
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--neutral-border)",
          }}
        >
          <span
            className="text-[32px] font-[800] leading-none"
            style={{ color: "var(--accent)", letterSpacing: "-0.025em" }}
          >
            {m.value}
          </span>
          <span
            className="text-[12.5px] font-[300]"
            style={{ color: "var(--neutral-muted)" }}
          >
            {m.label}
          </span>
        </div>
      ))}
    </div>
  );
}
