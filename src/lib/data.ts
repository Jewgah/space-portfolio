/** Canonical origin for the space portfolio. */
export const SITE_URL = "https://space.jordanperez.dev";

export const PROFILE = {
  name: "Jordan Perez",
  firstName: "Jordan",
  role: "Full Stack Engineer",
  status: "Full Stack Engineer · shipping AI products from Israel",
  taglines: [
    "ship AI products end to end.",
    "build systems that run themselves.",
    "turn manual workflows into automation.",
    "architect it, ship it, make it scale.",
    "20+ apps from concept to production.",
  ],
  bio: "I'm a full stack engineer with 5+ years building AI products and production systems across fintech and SaaS — 20+ apps shipped from concept to production, from payment infrastructure spanning 20+ African markets to AI platforms for hospitality, construction, and sales. I run a high-intensity, AI-augmented workflow: multiple parallel projects with AI agents as an extension of the team.",
  about: {
    lead: "I work across the entire stack to cut dependencies and move faster — designing APIs, building frontends, and shipping mobile so products go out without bottlenecks.",
    p2: "At JD Solutions I own client projects end to end, from architecture through deployment; through my studio, Hakolkal, I've shipped 20+ custom web and mobile platforms across fintech, SaaS, marketplace, and NGO — wiring conversational AI, semantic search, and automation into real products.",
    p3: "I build simple, fast, and maintainable systems — designed for actual usage, not just clean implementations. BSc in Mathematics & Computer Science, IDF Cyber veteran, trilingual.",
    credentials: [
      "BSc Mathematics & Computer Science — Ariel University",
      "Aerospace Engineering — Technion, Haifa",
      "IDF Cyber Department veteran",
      "Trilingual — English · French · Hebrew",
    ],
  },
  email: "jordanlloydperez@gmail.com",
  location: "Israel",
  resume: "/cv.pdf",
  siteUrl: `${SITE_URL}/`,
  socials: {
    github: "https://github.com/Jewgah",
    linkedin: "https://linkedin.com/in/jordanperez",
  },
};

export type Job = {
  company: string;
  title: string;
  range: string;
  location: string;
  blurb: string;
  points: string[];
};

export const EXPERIENCE: Job[] = [
  {
    company: "JD Solutions",
    title: "Full Stack Engineer",
    range: "2024 — Present",
    location: "Remote · Israel",
    blurb:
      "Owning client projects end to end — architecture through deployment — on an AI-augmented stack that runs several products in parallel.",
    points: [
      "Own client projects end to end, from architecture through deployment, translating complex requirements into scalable features",
      "Build AI-powered internal tools and CRM features with Node.js, TypeScript, React, and PHP",
      "Automate business workflows and integrate LLM APIs across client management systems",
      "Run multiple parallel projects with AI agents extending engineering throughput",
    ],
  },
  {
    company: "Hakolkal — Development Studio",
    title: "Founder & Full Stack Engineer",
    range: "2021 — Present",
    location: "Freelance · alongside full-time roles",
    blurb:
      "My own studio — 20+ custom web and mobile platforms shipped across fintech, SaaS, marketplace, and NGO.",
    points: [
      "Shipped 20+ custom web and mobile platforms for clients across fintech, SaaS, marketplace, and NGO",
      "Built conversational AI agents, semantic search, identity verification, and process automation into client products",
      "Developed Adencer — an influencer-marketing platform with campaign management, creator discovery, and Stripe payments",
      "Built Destins de Femmes — an NGO site awarded the Prix Edgar Faure 2024",
      "Own the full lifecycle: scoping, architecture, development, deployment, and client relationships",
    ],
  },
  {
    company: "DPO — Direct Pay Online",
    title: "Full Stack Developer",
    range: "2022 — 2024",
    location: "Remote",
    blurb:
      "Payment infrastructure for Africa's largest gateway — 20+ countries, PCI DSS Level 1.",
    points: [
      "Built and maintained payment infrastructure for Africa's largest payment gateway (20+ countries, PCI DSS Level 1)",
      "Developed multi-currency transaction flows integrating Visa, Mastercard, Amex, and mobile money",
      "Implemented secure REST APIs and audit logging for PCI-compliant payment processing",
      "Refactored legacy codebase to improve reliability and scalability",
    ],
  },
];

export type Skill = {
  /** HUD module number, "01".."06" */
  num: string;
  name: string;
  items: string;
};

export const SKILLS: Skill[] = [
  { num: "01", name: "Frontend", items: "React · Next.js · React Native · Tailwind" },
  { num: "02", name: "Backend", items: "Node.js · Express · REST APIs · Serverless" },
  { num: "03", name: "AI & Automation", items: "LLMs (OpenAI, Claude) · AI Agents · Semantic Search" },
  { num: "04", name: "Cloud & Infra", items: "Firebase · GCP · AWS · Docker · CI/CD" },
  { num: "05", name: "Languages", items: "TypeScript · JavaScript · SQL · PHP" },
  { num: "06", name: "Data", items: "MongoDB · PostgreSQL · Firestore · Redis" },
];

export type Project = {
  id: string;
  title: string;
  meta: string;
  tagline: string;
  description: string;
  tags: string[];
  /** Gradient endpoints used to generate the orbiting card artwork. */
  colorA: string;
  colorB: string;
  /** External link (live / GitHub). Null = no public link. */
  link: string | null;
  linkLabel?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "fashnable",
    title: "Fashnable",
    meta: "2025 · Founder · AI SaaS",
    tagline: "Flat garment photo → AI model wearing it, on video",
    description:
      "AI virtual try-on SaaS: turns a flat garment photo into a realistic video of an AI model wearing it — selectable model gender, age, body type, ethnicity, and background. Full product: invite-only auth, a credit ledger, async generation via Cloud Tasks, and Lemon Squeezy billing.",
    tags: ["Python", "FASHN API", "Firebase", "Cloud Run", "Lemon Squeezy"],
    colorA: "#ec4899",
    colorB: "#8b5cf6",
    link: "https://fashnable.app",
    linkLabel: "Visit Fashnable",
    featured: true,
  },
  {
    id: "fixhos",
    title: "Fixhos",
    meta: "2025 · Co-Founder · AI",
    tagline: "AI ticketing for hospitality",
    description:
      "Auto-triages guest requests from WhatsApp, email, and booking platforms (Airbnb, Booking.com) with AI classification, SLA-based escalation, voice call routing, and a vetted technician marketplace.",
    tags: ["Next.js", "Node.js", "OpenAI API", "WhatsApp API", "Firebase"],
    colorA: "#0ea5e9",
    colorB: "#6366f1",
    link: "https://fixhos.com",
    linkLabel: "Visit Fixhos",
  },
  {
    id: "kaplapp",
    title: "Kaplapp",
    meta: "2024 · Co-Founder · Platform",
    tagline: "AI construction-management platform",
    description:
      "AI-driven insights on project budgets and timelines, interactive Gantt charts, and financial visualizations for construction teams.",
    tags: ["React", "TypeScript", "Recharts", "Firebase"],
    colorA: "#f59e0b",
    colorB: "#f97316",
    link: "https://kaplapp.com",
    linkLabel: "Visit Kaplapp",
  },
  {
    id: "finterest",
    title: "Finterest",
    meta: "2024 · AI · Sales",
    tagline: "AI prospecting & outreach platform",
    description:
      "AI-generated outreach sequences, lead-qualification scoring, CRM synchronization, and real-time campaign analytics for sales teams.",
    tags: ["Next.js", "React", "Node.js", "Firebase"],
    colorA: "#06b6d4",
    colorB: "#3b82f6",
    link: "https://gofinterest.com",
    linkLabel: "Visit Finterest",
  },
  {
    id: "infinify",
    title: "Infinify.ai",
    meta: "2024 · Co-Founder · AI",
    tagline: "Strategy to production in 6 weeks",
    description:
      "AI consulting studio that takes clients from strategy to production in six weeks — predictive analytics, workflow automation, and conversational AI assistants shipped end to end.",
    tags: ["Next.js", "Node.js", "OpenAI API", "Firebase"],
    colorA: "#14b8a6",
    colorB: "#6366f1",
    link: "https://infinify.ai",
    linkLabel: "Visit Infinify",
  },
  {
    id: "shippost",
    title: "shippost",
    meta: "2026 · Open source · AI",
    tagline: "Git activity → ranked LinkedIn drafts",
    description:
      "Local-first tool that mines git activity and drafts ranked LinkedIn posts via a multi-pass Claude Code engine, with a Next.js review app.",
    tags: ["Next.js", "TypeScript", "Claude Code"],
    colorA: "#0a66c2",
    colorB: "#7c3aed",
    link: "https://github.com/Jewgah/shippost",
    linkLabel: "View on GitHub",
  },
  {
    id: "claude-code-skills",
    title: "claude-code-skills",
    meta: "2026 · Open source · AI",
    tagline: "Multi-agent dev workflows for shipping safely",
    description:
      "Battle-tested Claude Code skills: a multi-agent code review that fans out specialized reviewers and adversarially verifies findings, a pre-implementation plan reviewer, and a stack-aware agent-team scaffolder.",
    tags: ["Claude Code", "Multi-agent systems", "Prompt engineering", "Bash"],
    colorA: "#d97757",
    colorB: "#7c3aed",
    link: "https://github.com/Jewgah/claude-code-skills",
    linkLabel: "View on GitHub",
  },
];

export const ARCHIVE_URL = "https://github.com/Jewgah";
