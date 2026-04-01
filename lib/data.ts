// ============================================================
// ARISE GROWTH — DATA LAYER
// All content, labels, copy, and mockup data lives here.
// ============================================================

// ── NAV ──────────────────────────────────────────────────────
export const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// ── POSITIONING STRIP ────────────────────────────────────────
export const positioningStatements = [
  {
    label: "Who it's for",
    text: "Built for businesses that have outgrown manual operations.",
  },
  {
    label: "What it solves",
    text: "Fragmented tools. Invisible workflows. Endless follow-up.",
  },
  {
    label: "What it delivers",
    text: "One connected system. Clear ownership. Confident decisions.",
  },
];

// ── VALUE PILLARS ─────────────────────────────────────────────
export const valuePillars = [
  {
    number: "01",
    title: "Clarity across the business",
    body: "Every team, process, and decision point connected to a single operational layer — so nothing important moves without visibility.",
    detail: "Status signals, ownership maps, bottleneck alerts.",
  },
  {
    number: "02",
    title: "Connected workflows",
    body: "Replace disconnected tools with structured, automated workflows that move work forward without manual coordination.",
    detail: "Approvals, handoffs, triggers, routing logic.",
  },
  {
    number: "03",
    title: "Scalable infrastructure",
    body: "Systems designed to grow with the business — not to be rebuilt every time the team or processes change.",
    detail: "Modular boards, automation layers, integration architecture.",
  },
];

// ── PRODUCT STORIES ───────────────────────────────────────────
export const productStories = [
  {
    id: "centralize",
    sectionLabel: "Centralize",
    headline: "Everything comes in.\nNothing gets lost.",
    body: "Client requests, documents, internal tasks, and follow-ups arrive from every direction. Arise Growth builds a structured intake layer that captures, routes, and assigns everything — before it falls through the cracks.",
    bullets: [
      "Unified intake from email, CRM, and messaging",
      "Automatic routing by type, owner, and urgency",
      "Full audit trail from request to resolution",
    ],
    mockup: "intake",
    layout: "right" as const,
  },
  {
    id: "structure",
    sectionLabel: "Structure",
    headline: "Structure the work.\nOwn the outcome.",
    body: "Operational chaos comes from unclear ownership and invisible dependencies. We design workflow architectures that make every handoff explicit, every responsibility visible, and every bottleneck impossible to ignore.",
    bullets: [
      "Ownership mapped to every task and process",
      "Status flows that move without manual pushing",
      "Dependencies and blockers visible at a glance",
    ],
    mockup: "workflow",
    layout: "left" as const,
  },
  {
    id: "automate",
    sectionLabel: "Automate",
    headline: "Let the system\ndo the follow-up.",
    body: "Repetitive coordination drains the team. Trigger-based automations replace manual reminders, status updates, and recurring routines — so your people focus on decisions, not administration.",
    bullets: [
      "Trigger-based notifications and escalations",
      "Automated document generation and approvals",
      "CRM, finance, and operations handoffs on autopilot",
    ],
    mockup: "automation",
    layout: "right" as const,
  },
  {
    id: "visibility",
    sectionLabel: "Visibility",
    headline: "Decisions made on\nvisibility, not memory.",
    body: "Leadership needs a live view of what matters — not spreadsheet reports assembled on Friday. The Arise Growth Control Tower gives executives real-time operational health across every function.",
    bullets: [
      "Live dashboard across all operational layers",
      "Stuck items, overdue actions, and team load",
      "Weekly snapshots and process health signals",
    ],
    mockup: "dashboard",
    layout: "full" as const,
  },
];

// ── OUTCOMES ──────────────────────────────────────────────────
export const outcomes = [
  { metric: "Less follow-up", detail: "The system tracks, escalates, and closes the loop." },
  { metric: "Less guesswork", detail: "Every decision is backed by visible operational data." },
  { metric: "Fewer bottlenecks", detail: "Handoffs move on triggers, not on memory." },
  { metric: "Stronger accountability", detail: "Ownership is built into every process layer." },
  { metric: "Scalable execution", detail: "Systems grow with the team, not against it." },
];

// ── METHOD PHASES ─────────────────────────────────────────────
export const methodPhases = [
  {
    number: "01",
    phase: "Diagnose",
    summary: "Map the operational reality",
    detail:
      "We begin with a deep operational audit — mapping every workflow, tool, bottleneck, and gap between how the business runs and how it should run.",
  },
  {
    number: "02",
    phase: "Architect",
    summary: "Design the operating system",
    detail:
      "Based on the diagnosis, we architect a connected operational layer: board structures, ownership models, automation logic, and integration points.",
  },
  {
    number: "03",
    phase: "Build",
    summary: "Implement with precision",
    detail:
      "We build every component of the system — Monday.com boards, Make.com automations, dashboards, and the Control Tower — tested and ready to run.",
  },
  {
    number: "04",
    phase: "Integrate",
    summary: "Connect the full stack",
    detail:
      "We connect the operating system to your existing tools: CRM, finance, communication, HR, and project platforms — eliminating duplicate entry and fragmented visibility.",
  },
  {
    number: "05",
    phase: "Optimize",
    summary: "Evolve as the business grows",
    detail:
      "After go-live, we monitor, refine, and adapt the system to meet new operational challenges — so the infrastructure scales alongside the business.",
  },
];

// ── TESTIMONIALS / RESULTS ────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Before Arise Growth, we had four different systems and nobody knew what the status of anything was. Now our entire operations run through one place. The clarity is remarkable.",
    name: "Ronen A.",
    role: "CEO, Facility Services Company",
    metric: "60%",
    metricLabel: "reduction in coordination time",
  },
  {
    quote:
      "The automation layer alone saved us three hours of manual work per manager per week. More importantly, nothing falls through the cracks anymore.",
    name: "Shira M.",
    role: "Operations Director, Logistics Company",
    metric: "3 hrs",
    metricLabel: "saved per manager, per week",
  },
  {
    quote:
      "We went from onboarding a new hire in five days of scattered handoffs to one automated day. The system just runs it.",
    name: "Tal B.",
    role: "Head of People, Staffing Agency",
    metric: "5→1",
    metricLabel: "days to onboard a new hire",
  },
  {
    quote:
      "Our leadership team now has a live view of the entire operation every morning. We make better decisions faster. It's the infrastructure we should have built two years ago.",
    name: "Amir D.",
    role: "COO, Technology Services Company",
    metric: "1 view",
    metricLabel: "of the entire operation, live",
  },
];

// ── FOOTER LINKS ──────────────────────────────────────────────
export const footerLinks = {
  services: [
    { label: "Systems Design", href: "#systems" },
    { label: "Workflow Architecture", href: "#systems" },
    { label: "Automation Build", href: "#systems" },
    { label: "Control Tower", href: "#systems" },
    { label: "Monday.com Implementation", href: "#systems" },
  ],
  company: [
    { label: "Method", href: "#method" },
    { label: "Results", href: "#results" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

// ── MOCKUP DATA ───────────────────────────────────────────────

export const intakeMockupData = {
  title: "Intake Queue",
  items: [
    { source: "Email", title: "Contract renewal — Supplier A", owner: "DS", status: "new", age: "2m ago", priority: "high" },
    { source: "CRM", title: "New client onboarding request", owner: "MT", status: "routing", age: "14m ago", priority: "high" },
    { source: "WhatsApp", title: "Invoice dispute — Client B", owner: "—", status: "unassigned", age: "1h ago", priority: "medium" },
    { source: "Email", title: "Quarterly report approval", owner: "RK", status: "in review", age: "2h ago", priority: "medium" },
    { source: "Internal", title: "HR onboarding — new hire", owner: "DS", status: "in progress", age: "3h ago", priority: "low" },
    { source: "CRM", title: "Proposal follow-up — Prospect C", owner: "MT", status: "pending", age: "5h ago", priority: "low" },
  ],
};

export const workflowMockupData = {
  columns: [
    {
      id: "intake",
      label: "Intake",
      color: "var(--status-blue)",
      items: [
        { id: "W-041", title: "Client proposal review", owner: "DS", tag: "Urgent" },
        { id: "W-042", title: "Supplier terms update", owner: "MT", tag: "Finance" },
      ],
    },
    {
      id: "review",
      label: "In Review",
      color: "var(--status-amber)",
      items: [
        { id: "W-038", title: "Onboarding checklist sign-off", owner: "RK", tag: "HR" },
        { id: "W-039", title: "Q2 operations report", owner: "DS", tag: "Leadership" },
      ],
    },
    {
      id: "pending",
      label: "Pending",
      color: "var(--accent)",
      items: [
        { id: "W-035", title: "Invoice batch approval", owner: "MT", tag: "Finance" },
      ],
    },
    {
      id: "done",
      label: "Done",
      color: "var(--status-green)",
      items: [
        { id: "W-032", title: "SLA policy update", owner: "RK", tag: "Ops" },
        { id: "W-031", title: "March performance review", owner: "DS", tag: "Leadership" },
      ],
    },
  ],
};

export const automationMockupData = {
  title: "Automation Activity",
  events: [
    {
      trigger: "Status changed → Approved",
      action: "Send contract to client via email",
      time: "Just now",
      status: "success",
    },
    {
      trigger: "Due date passed → Overdue",
      action: "Escalate to Operations Director",
      time: "4 min ago",
      status: "success",
    },
    {
      trigger: "New intake → High priority",
      action: "Assign to David S. + notify via Slack",
      time: "18 min ago",
      status: "success",
    },
    {
      trigger: "Invoice approved → Finance",
      action: "Create record in accounting system",
      time: "1h ago",
      status: "success",
    },
    {
      trigger: "Onboarding started",
      action: "Generate onboarding checklist document",
      time: "2h ago",
      status: "success",
    },
    {
      trigger: "Weekly pulse → Monday 08:00",
      action: "Send operations summary to leadership",
      time: "Yesterday",
      status: "success",
    },
  ],
};

export const dashboardMockupData = {
  kpis: [
    { label: "Active processes", value: "34", trend: "+3", direction: "up" as const },
    { label: "Awaiting approval", value: "7", trend: "-2", direction: "down" as const },
    { label: "Overdue items", value: "3", trend: "+1", direction: "up" as const },
    { label: "Automation runs / wk", value: "142", trend: "+18", direction: "up" as const },
  ],
  stuckItems: [
    { id: "W-039", title: "Q2 operations report", owner: "DS", age: "3 days", priority: "high" },
    { id: "W-041", title: "Client proposal review", owner: "MT", age: "2 days", priority: "high" },
    { id: "W-037", title: "Procurement sign-off", owner: "RK", age: "1 day", priority: "medium" },
  ],
  healthBars: [
    { label: "Intake & Routing", score: 92 },
    { label: "Approvals", score: 78 },
    { label: "Automations", score: 97 },
    { label: "Reporting", score: 84 },
    { label: "Onboarding", score: 91 },
  ],
};
