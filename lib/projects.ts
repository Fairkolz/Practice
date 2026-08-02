export type ProjectCategory =
  | "Fintech"
  | "Lifestyle"
  | "E-commerce"
  | "SaaS"
  | "Luxury E-Commerce"
  | "Environmental Tech";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  image: string;
  summary: string;
  overview: string[];
  metrics: { value: string; label: string }[];
  services: string[];
}

const neuraflow: Project = {
  slug: "neuraflow",
  name: "NeuraFlow Platform",
  category: "Fintech",
  image: "/images/work-neuraflow.jpg",
  summary:
    "Revolutionizing automated wealth management for the next generation of investors.",
  overview: [
    "NeuraFlow came to us with a bold mission: make sophisticated automated wealth management feel as effortless as checking a phone. Our discovery phase mapped the full investor journey, uncovering that trust — not features — was the missing ingredient in most digital advisory tools.",
    "We designed and engineered a platform that translates complex portfolio mechanics into clear, human language. Real-time dashboards, guided onboarding, and transparent reporting were delivered as a cohesive system, built on a scalable architecture ready for regulatory growth.",
  ],
  metrics: [
    { value: "+40%", label: "Active user growth" },
    { value: "2.1M", label: "Assets onboarded" },
    { value: "99.99%", label: "Platform uptime" },
  ],
  services: ["Product Strategy", "Full-Stack Engineering", "Branding"],
};

const auraCouture: Project = {
  slug: "aura-couture",
  name: "Aura Couture",
  category: "Luxury E-Commerce",
  image: "/images/work-aura-couture.jpg",
  summary:
    "A boutique luxury e-commerce experience pairing editorial storytelling with a flawless checkout flow.",
  overview: [
    "Luxury retail demands restraint. Aura Couture's previous storefront treated every product as a data row, eroding the exclusivity its clientele expected. We rebuilt the experience around narrative — each collection presented like an editorial feature.",
    "The result is a high-touch digital flagship with buttery product interactions, editorial photography-first layouts, and a one-tap checkout that consistently outperforms industry conversion benchmarks.",
  ],
  metrics: [
    { value: "3.2x", label: "Conversion rate lift" },
    { value: "28%", label: "Bounce rate reduction" },
    { value: "4.8/5", label: "Client satisfaction" },
  ],
  services: ["Identity & Branding", "Web Design & Strategy", "Digital Marketing"],
};

const synergyAi: Project = {
  slug: "synergy-ai",
  name: "Synergy AI",
  category: "SaaS",
  image: "/images/work-synergy-ai.jpg",
  summary:
    "An intelligent collaboration suite unifying teams, tools, and workflows in a single view.",
  overview: [
    "Synergy AI was born from a crowded productivity market, and our challenge was differentiation. Through deep user research we found teams were drowning in context switching — so we designed a workspace that intelligently surfaces what matters when it matters.",
    "We delivered a SaaS platform with a modular interface, real-time collaboration features, and an AI-assisted command layer. The product shipped two weeks ahead of schedule without compromising a single feature.",
  ],
  metrics: [
    { value: "12%", label: "Faster onboarding" },
    { value: "50K+", label: "Active workspaces" },
    { value: "2 wks", label: "Ahead of schedule" },
  ],
  services: ["Product Strategy", "Full-Stack Engineering", "UI/UX Design"],
};

const terrascan: Project = {
  slug: "terrascan",
  name: "TerraScan Interactive",
  category: "Environmental Tech",
  image: "/images/work-terrascan.jpg",
  summary:
    "Interactive environmental monitoring platform bringing satellite data to the enterprise.",
  overview: [
    "TerraScan sits on petabytes of satellite data that few teams could interpret. Our mandate was to make complex earth observation accessible to scientists, regulators, and executives alike.",
    "We built an interactive visualization platform with geospatial map overlays, configurable data layers, and drill-down analytics. Accessibility was a first-class requirement — every view is keyboard navigable and screen-reader friendly.",
  ],
  metrics: [
    { value: "60%", label: "Analysis time saved" },
    { value: "1.2B", label: "Data points visualized" },
    { value: "AA", label: "Accessibility rating" },
  ],
  services: ["UI/UX Design", "Full-Stack Engineering", "Data Visualization"],
};

const auraLiving: Project = {
  slug: "aura-living",
  name: "Aura Living",
  category: "Lifestyle",
  image: "/images/portfolio-aura-living.jpg",
  summary:
    "A smart-home lifestyle brand connecting everyday comfort with beautifully simple controls.",
  overview: [
    "Aura Living wanted to move beyond smart devices to a genuine lifestyle brand. We aligned the digital experience with the calm, warm aesthetic of their physical products.",
    "Our design system and e-commerce experience make the connected home feel approachable, with ambient onboarding, scene-based controls, and a shopping flow that rewards exploration.",
  ],
  metrics: [
    { value: "45%", label: "Mobile session growth" },
    { value: "9/10", label: "Usability score" },
    { value: "18", label: "New markets launched" },
  ],
  services: ["Branding", "Web Design & Strategy", "Digital Marketing"],
};

const vertexAnalytics: Project = {
  slug: "vertex-analytics",
  name: "Vertex Analytics",
  category: "Fintech",
  image: "/images/portfolio-vertex.jpg",
  summary:
    "An enterprise analytics platform turning fragmented financial data into one trusted source of truth.",
  overview: [
    "Vertex's finance teams were drowning in disconnected spreadsheets and dashboards. We consolidated their data architecture into a single, governable analytics hub.",
    "The platform features role-based views, customizable reporting, and a narrative-driven dashboard language that turns numbers into decisions. The engineering team relied on our design system to ship features independently.",
  ],
  metrics: [
    { value: "3 hrs", label: "Saved per analyst, daily" },
    { value: "100%", label: "Single source of truth" },
    { value: "40+", label: "Data integrations" },
  ],
  services: ["Data Strategy", "Full-Stack Engineering", "UI/UX Design"],
};

const nexusCommerce: Project = {
  slug: "nexus-commerce",
  name: "Nexus Commerce",
  category: "E-commerce",
  image: "/images/portfolio-nexus.jpg",
  summary:
    "A headless commerce platform built for brands that need speed, scale, and total creative control.",
  overview: [
    "Nexus needed to leave behind a rigid legacy storefront that throttled their growth. We architected a headless commerce solution decoupling the storefront from the backend.",
    "The result is a blazing-fast, composable shopping experience. Marketing teams now launch campaigns in days, not months, while the engineering team ships through a clean API surface.",
  ],
  metrics: [
    { value: "68%", label: "Faster page loads" },
    { value: "5 days", label: "Campaign launch time" },
    { value: "+31%", label: "Repeat purchase rate" },
  ],
  services: ["Full-Stack Engineering", "Web Design & Strategy"],
};

const orbitDashboard: Project = {
  slug: "orbit-dashboard",
  name: "Orbit Dashboard",
  category: "SaaS",
  image: "/images/portfolio-orbit.jpg",
  summary:
    "A mission-control dashboard that gives operators a single, calm view of complex systems.",
  overview: [
    "Operators at scale face alert fatigue from dozens of disconnected tools. Orbit consolidates health, metrics, and incidents into one coherent control surface.",
    "We designed around calm technology — progressive disclosure, smart alert grouping, and pattern-based incident triage that respects the operator's attention.",
  ],
  metrics: [
    { value: "-55%", label: "Alert noise" },
    { value: "7 min", label: "Mean time to respond" },
    { value: "24/7", label: "Operational coverage" },
  ],
  services: ["UI/UX Design", "Product Strategy", "Full-Stack Engineering"],
};

const meridianHealth: Project = {
  slug: "meridian-health",
  name: "Meridian Health",
  category: "Lifestyle",
  image: "/images/portfolio-meridian.jpg",
  summary:
    "A patient-first health companion making everyday wellness tracking effortless and motivating.",
  overview: [
    "Meridian Health wanted to make wellness tracking feel like a reward, not a chore. We humanized clinical data into an encouraging, beautifully rendered companion.",
    "The app blends biometric tracking with gentle habit design, featuring accessible typography, calming motion, and a supportive community layer that drives long-term engagement.",
  ],
  metrics: [
    { value: "4.9★", label: "App store rating" },
    { value: "+62%", label: "30-day retention" },
    { value: "1M+", label: "Downloads" },
  ],
  services: ["Mobile App Development", "Branding", "Digital Marketing"],
};

const cryptoflow: Project = {
  slug: "cryptoflow",
  name: "CryptoFlow",
  category: "Fintech",
  image: "/images/portfolio-cryptoflow.jpg",
  summary:
    "A secure crypto payments platform focused on clarity, speed, and trust in a chaotic market.",
  overview: [
    "Crypto is intimidating by default. CryptoFlow set out to build a payments product that treats every transaction with institutional rigor while feeling refreshingly simple.",
    "We delivered a wallet and exchange experience with hardware-grade security baked in, transparent fee breakdowns, and instant settlement — designed to earn trust at every step.",
  ],
  metrics: [
    { value: "$500M", label: "Transaction volume" },
    { value: "<2s", label: "Settlement time" },
    { value: "0", label: "Security incidents" },
  ],
  services: ["Full-Stack Engineering", "Product Strategy", "Branding"],
};

export const latestWork: Project[] = [neuraflow, auraCouture, synergyAi, terrascan];

export const portfolioProjects: Project[] = [
  auraLiving,
  vertexAnalytics,
  nexusCommerce,
  orbitDashboard,
  meridianHealth,
  cryptoflow,
];

export const allProjects: Project[] = [...latestWork, ...portfolioProjects];

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
