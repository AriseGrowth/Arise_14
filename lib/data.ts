export const CALENDLY_URL = "https://calendly.com/arisegrowth";
export const WHATSAPP_URL = "https://wa.me/972528982780";
export const LINKEDIN_URL = "https://linkedin.com/in/david-suissa";
export const FORMSPREE_ID = "xreolwva";

export const navLinks = [
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const positioningStatements = [
  { label: "Who it's for", text: "Built for businesses that have outgrown manual operations." },
  { label: "What it solves", text: "Fragmented tools. Invisible workflows. Endless follow-up." },
  { label: "What it delivers", text: "One connected system. Clear ownership. Confident decisions." },
];

export const valuePillars = [
  { number: "01", title: "Clarity across the business", body: "Every team, process, and decision point connected to a single operational layer — so nothing important moves without visibility.", detail: "Status signals, ownership maps, bottleneck alerts." },
  { number: "02", title: "Connected workflows", body: "Replace disconnected tools with structured, automated workflows that move work forward without manual coordination.", detail: "Approvals, handoffs, triggers, routing logic." },
  { number: "03", title: "Scalable infrastructure", body: "Systems designed to grow with the business — not to be rebuilt every time the team or processes change.", detail: "Modular boards, automation layers, integration architecture." },
];

export const productStories = [
  { id: "centralize", sectionLabel: "Centralize", headline: "Everything comes in.\nNothing gets lost.", body: "Client requests, documents, internal tasks, and follow-ups arrive from every direction. Arise Growth builds a structured intake layer that captures, routes, and assigns everything — before it falls through the cracks.", bullets: ["Unified intake from email, CRM, and messaging", "Automatic routing by type, owner, and urgency", "Full audit trail from request to resolution"], mockup: "intake", layout: "right" as const },
  { id: "structure", sectionLabel: "Structure", headline: "Structure the work.\nOwn the outcome.", body: "Operational chaos comes from unclear ownership and invisible dependencies. We design workflow architectures that make every handoff explicit, every responsibility visible, and every bottleneck impossible to ignore.", bullets: ["Ownership mapped to every task and process", "Status flows that move without manual pushing", "Dependencies and blockers visible at a glance"], mockup: "workflow", layout: "left" as const },
  { id: "automate", sectionLabel: "Automate", headline: "Let the system\ndo the follow-up.", body: "Repetitive coordination drains the team. Trigger-based automations replace manual reminders, status updates, and recurring routines — so your people focus on decisions, not administration.", bullets: ["Trigger-based notifications and escalations", "Automated document generation and approvals", "CRM, finance, and operations handoffs on autopilot"], mockup: "automation", layout: "right" as const },
  { id: "visibility", sectionLabel: "Visibility", headline: "Decisions made on\nvisibility, not memory.", body: "Leadership needs a live view of what matters — not spreadsheet reports assembled on Friday. The Arise Growth Control Tower gives executives real-time operational health across every function.", bullets: ["Live dashboard across all operational layers", "Stuck items, overdue actions, and team load", "Weekly snapshots and process health signals"], mockup: "dashboard", layout: "full" as const },
];

export const outcomes = [
  { metric: "Less follow-up", detail: "The system tracks, escalates, and closes the loop." },
  { metric: "Less guesswork", detail: "Every decision is backed by visible operational data." },
  { metric: "Fewer bottlenecks", detail: "Handoffs move on triggers, not on memory." },
  { metric: "Stronger accountability", detail: "Ownership is built into every process layer." },
  { metric: "Scalable execution", detail: "Systems grow with the team, not against it." },
];

export const methodPhases = [
  { number: "01", phase: "Diagnose", summary: "Map the operational reality", detail: "We begin with a deep operational audit — mapping every workflow, tool, bottleneck, and gap between how the business runs and how it should run." },
  { number: "02", phase: "Architect", summary: "Design the operating system", detail: "Based on the diagnosis, we architect a connected operational layer: board structures, ownership models, automation logic, and integration points." },
  { number: "03", phase: "Build", summary: "Implement with precision", detail: "We build every component of the system — Monday.com boards, Make.com automations, dashboards, and the Control Tower — tested and ready to run." },
  { number: "04", phase: "Integrate", summary: "Connect the full stack", detail: "We connect the operating system to your existing tools: CRM, finance, communication, HR, and project platforms — eliminating duplicate entry and fragmented visibility." },
  { number: "05", phase: "Optimize", summary: "Evolve as the business grows", detail: "After go-live, we monitor, refine, and adapt the system to meet new operational challenges — so the infrastructure scales alongside the business." },
];

export const testimonials = [
  {
    before: "Running a carpentry and manufacturing operation with no real system — orders, production status, and supplier coordination all managed through WhatsApp and verbal handoffs.",
    quote: "We always knew things were falling through the cracks, but we didn't realize how much until we saw it mapped out. Arise Growth built us a system that finally gives us control over what's happening on the floor and with clients — at the same time.",
    name: "David B.",
    role: "CEO",
    company: "Manufacturing Company, Herzliya",
    metric: "One system",
    metricLabel: "for production, clients, and suppliers",
  },
  {
    before: "A growing aluminum systems contractor with projects running in parallel — each one managed differently, no unified view, no way to track status without calling someone.",
    quote: "When you're running multiple projects across different sites, you need visibility. We didn't have it before. Now our entire operation goes through one place — who owns what, what's stuck, what's next. It changed how we manage the business.",
    name: "Ben G.",
    role: "CEO",
    company: "Aluminum Systems Contractor, Tel Aviv",
    metric: "Full visibility",
    metricLabel: "across all active projects, in real time",
  },
  {
    before: "Scheduling and dispatch were done manually — calls, texts, and a shared whiteboard that nobody kept updated.",
    quote: "The system Arise Growth built replaced three hours of daily coordination work. Our field teams know exactly where to be and what to do without anyone having to chase them.",
    name: "Tal B.",
    role: "Operations Director",
    company: "Field Service Company, Israel",
    metric: "3 hrs",
    metricLabel: "saved in daily coordination, per manager",
  },
  {
    before: "Onboarding new employees was inconsistent — every manager did it differently, nothing was documented, and new hires were left to figure things out alone.",
    quote: "What used to take a week of scattered handoffs now runs on its own. Every new hire goes through the same structured process from day one. It is one of the things I am most proud of in how we run the business now.",
    name: "Michal R.",
    role: "COO",
    company: "Staffing & Workforce Company, Israel",
    metric: "5→1",
    metricLabel: "days to fully onboard a new hire",
  },
];

export const faqItems = [
  { question: "What size company is Arise Growth right for?", answer: "We work with businesses between 10 and 150 employees — typically founder-led or owner-operated companies that have grown past the point where manual coordination works, but haven't yet built a structured operational layer. If your team runs on WhatsApp threads and spreadsheets, this is built for you." },
  { question: "How is the Intro Call different from the Characterization session?", answer: "The Intro Call is free — 30 minutes where we understand your situation and confirm we're the right fit. The Characterization session is a paid deep-dive (typically 2-3 hours) where we map your entire operation in detail. It produces the exact blueprint for everything we build. No Characterization session, no guessing." },
  { question: "Do we need technical knowledge to use these systems?", answer: "None. We handle the full setup and configure everything for your team's actual technical level. Training is included in every engagement. Our goal is that your least technical team member can navigate the system confidently by go-live." },
  { question: "How long does implementation take?", answer: "Quick Win engagements take 2 weeks. Operations Sprint projects take 4-6 weeks. Control Tower builds are scoped individually in the Characterization session. You receive a clear delivery timeline before any work begins — and we hold to it." },
  { question: "Will my team actually adopt this system?", answer: "This is the most important question, and it's exactly why our background matters. We are trained in human behavior and change management. Every system we design is built around how your people actually work — not how a manual says they should. Adoption is a design problem, not a training problem." },
  { question: "What happens after the project ends?", answer: "Control Tower engagements include structured monthly support. Quick Win and Operations Sprint clients can add optional retainer packages. You are never handed a system and left to manage it alone." },
  { question: "How much does it cost?", answer: "Quick Win engagements start from 2,500 ILS. Operations Sprint projects start from 6,500 ILS. Control Tower builds typically range from 15,000 to 40,000 ILS depending on complexity. Every engagement begins with a free Intro Call." },
  { question: "Do you work with companies outside Israel?", answer: "Our primary focus is Israeli SMBs, and we conduct all work in Hebrew or English. We can work remotely with international clients if the operational challenge is the right fit." },
];

export const isThisForYou = {
  yes: [
    "You have between 10 and 150 employees",
    "Operations still run on WhatsApp and spreadsheets",
    "You've tried to fix this internally and it didn't stick",
    "You want a system that runs without constant management",
    "Leadership has limited visibility across the business",
    "Follow-up is still done manually by people",
  ],
  no: [
    "You're a solo operator with no team",
    "You already have a structured operational system running",
    "You're looking for general business strategy consulting",
    "You want someone to manage your operations permanently",
  ],
};

export const deliverables = [
  {
    tierHE: "אפיון ומיפוי",
    tier: "Paid Discovery",
    price: "₪1,000",
    timeline: "3–5 hours",
    featured: false,
    items: [
      "Deep operational audit with leadership",
      "Current workflow + bottleneck mapping",
      "System architecture blueprint",
      "Strategic recommendations report",
      "Roadmap for implementation",
    ],
    itemsHE: [
      "אודיט תפעולי עמוק עם ההנהלה",
      "מיפוי תהליכים קיימים וצווארי בקבוק",
      "אפיון ארכיטקטורת המערכת",
      "דוח המלצות אסטרטגיות",
      "רודמאפ להטמעה",
    ],
  },
  {
    tierHE: "הקמה והטמעה",
    tier: "System Setup",
    price: "₪20,000",
    timeline: "14 working days",
    featured: true,
    items: [
      "Everything in Paid Discovery",
      "Full Monday.com implementation (unlimited boards)",
      "Up to 5 Make.com automation flows",
      "Control Tower executive dashboard",
      "2 team training sessions",
      "Go-live support week",
      "30-day post-launch check-in",
    ],
    itemsHE: [
      "כל מה שבאפיון ומיפוי",
      "הטמעת Monday.com מלאה (לוחות ללא הגבלה)",
      "עד 5 אוטומציות Make.com",
      "דשבורד Control Tower להנהלה",
      "2 סשני הדרכה לצוות",
      "תמיכה בשבוע ה-go-live",
      "צ׳ק-אין 30 יום לאחר השקה",
    ],
  },
  {
    tierHE: "ליווי שוטף",
    tier: "Fractional CTO",
    price: "₪2,500/month",
    timeline: "Ongoing",
    featured: false,
    items: [
      "Everything in System Setup",
      "Monthly system optimization session",
      "Unlimited WhatsApp support",
      "New automations as needed",
      "Quarterly strategic review",
      "Priority response within 4 hours",
    ],
    itemsHE: [
      "כל מה שבהקמה והטמעה",
      "סשן אופטימיזציה חודשי",
      "תמיכה בוואטסאפ ללא הגבלה",
      "אוטומציות חדשות לפי צורך",
      "סקירה אסטרטגית רבעונית",
      "מענה עדיפות תוך 4 שעות",
    ],
  },
];

export const beforeAfterItems = [
  { before: "Operations run on WhatsApp and shared spreadsheets", after: "One connected system with live status on every task" },
  { before: "Manual follow-up to move every handoff forward", after: "Automated triggers handle routing, escalation, and reminders" },
  { before: "No visibility — status updates require a meeting", after: "Executive dashboard updated in real time, always available" },
  { before: "Knowledge locked in people, not systems", after: "Every process documented, structured, and repeatable" },
  { before: "Onboarding takes days and varies every time", after: "Automated onboarding board, consistent and fast every time" },
  { before: "Scaling the team makes the chaos worse", after: "Systems designed to handle growth without rebuilding" },
];

export const clientLogos = [
  { name: "Client 1", abbr: "C1" },
  { name: "Client 2", abbr: "C2" },
  { name: "Client 3", abbr: "C3" },
  { name: "Client 4", abbr: "C4" },
  { name: "Client 5", abbr: "C5" },
];

export const insights = [
  { tag: "Operations", title: "Why most Monday.com implementations fail in 90 days", excerpt: "The boards are built. The team is trained. Six weeks later, nobody's using them. Here's what actually goes wrong — and how to prevent it.", readTime: "5 min read" },
  { tag: "Systems", title: "The 5 signs your operations have outgrown WhatsApp", excerpt: "WhatsApp is a messaging app, not an operating system. There's a specific point where it stops being a shortcut and starts being a liability.", readTime: "4 min read" },
  { tag: "Leadership", title: "What a Control Tower actually does for an SMB", excerpt: "Not a dashboard. Not a report. A live operational view that replaces Friday status meetings with real-time decision-ready visibility.", readTime: "6 min read" },
];

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
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export const intakeMockupData = { title: "Intake Queue", items: [{ source: "Email", title: "Contract renewal — Supplier A", owner: "DS", status: "new", age: "2m ago", priority: "high" }, { source: "CRM", title: "New client onboarding request", owner: "MT", status: "routing", age: "14m ago", priority: "high" }, { source: "WhatsApp", title: "Invoice dispute — Client B", owner: "—", status: "unassigned", age: "1h ago", priority: "medium" }, { source: "Email", title: "Quarterly report approval", owner: "RK", status: "in review", age: "2h ago", priority: "medium" }, { source: "Internal", title: "HR onboarding — new hire", owner: "DS", status: "in progress", age: "3h ago", priority: "low" }, { source: "CRM", title: "Proposal follow-up — Prospect C", owner: "MT", status: "pending", age: "5h ago", priority: "low" }] };
export const workflowMockupData = { columns: [{ id: "intake", label: "Intake", color: "var(--status-blue)", items: [{ id: "W-041", title: "Client proposal review", owner: "DS", tag: "Urgent" }, { id: "W-042", title: "Supplier terms update", owner: "MT", tag: "Finance" }] }, { id: "review", label: "In Review", color: "var(--status-amber)", items: [{ id: "W-038", title: "Onboarding checklist sign-off", owner: "RK", tag: "HR" }, { id: "W-039", title: "Q2 operations report", owner: "DS", tag: "Leadership" }] }, { id: "pending", label: "Pending", color: "var(--accent)", items: [{ id: "W-035", title: "Invoice batch approval", owner: "MT", tag: "Finance" }] }, { id: "done", label: "Done", color: "var(--status-green)", items: [{ id: "W-032", title: "SLA policy update", owner: "RK", tag: "Ops" }, { id: "W-031", title: "March performance review", owner: "DS", tag: "Leadership" }] }] };
export const automationMockupData = { title: "Automation Activity", events: [{ trigger: "Status changed → Approved", action: "Send contract to client via email", time: "Just now", status: "success" }, { trigger: "Due date passed → Overdue", action: "Escalate to Operations Director", time: "4 min ago", status: "success" }, { trigger: "New intake → High priority", action: "Assign to David S. + notify via Slack", time: "18 min ago", status: "success" }, { trigger: "Invoice approved → Finance", action: "Create record in accounting system", time: "1h ago", status: "success" }, { trigger: "Onboarding started", action: "Generate onboarding checklist document", time: "2h ago", status: "success" }, { trigger: "Weekly pulse → Monday 08:00", action: "Send operations summary to leadership", time: "Yesterday", status: "success" }] };
export const dashboardMockupData = { kpis: [{ label: "Active processes", value: "34", trend: "+3", direction: "up" as const }, { label: "Awaiting approval", value: "7", trend: "-2", direction: "down" as const }, { label: "Overdue items", value: "3", trend: "+1", direction: "up" as const }, { label: "Automation runs / wk", value: "142", trend: "+18", direction: "up" as const }], stuckItems: [{ id: "W-039", title: "Q2 operations report", owner: "DS", age: "3 days", priority: "high" }, { id: "W-041", title: "Client proposal review", owner: "MT", age: "2 days", priority: "high" }, { id: "W-037", title: "Procurement sign-off", owner: "RK", age: "1 day", priority: "medium" }], healthBars: [{ label: "Intake & Routing", score: 92 }, { label: "Approvals", score: 78 }, { label: "Automations", score: 97 }, { label: "Reporting", score: 84 }, { label: "Onboarding", score: 91 }] };
