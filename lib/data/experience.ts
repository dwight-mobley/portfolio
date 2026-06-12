export type ExperienceEntry = {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export type EducationEntry = {
  id: number;
  degree: string;
  institution: string;
  location: string;
  year: string;
};

export const experience: ExperienceEntry[] = [
  {
    id: 1,
    position: "Freelance Software Developer",
    company: "Self-employed",
    location: "Gillsville, GA",
    period: "06/2017 – Present",
    description: [
      "Built a full-stack e-commerce platform and in-person POS system (Next.js, Express, Postgres, Stripe) processing real payments with webhook-driven order fulfillment and automated transactional email.",
      "Designed and implemented RESTful APIs with TypeScript, Zod validation, JWT authentication, and Prisma ORM across multiple client projects.",
      "Delivered inventory systems, multi-vendor sales platforms, and static marketing sites for local small businesses.",
      "Maintained CI/CD pipelines (GitHub Actions), wrote E2E tests with Playwright, and integrated error monitoring with Sentry.",
    ],
  },
  {
    id: 2,
    position: "Event Coordinator / Internal Tools Developer",
    company: "Hall County Government",
    location: "Gainesville, GA",
    period: "03/2019 – Present",
    description: [
      "Built a work order management and inventory tracking system adopted by the department and recognized by the county MIS team for quality and usefulness.",
      "Developed an internal billing system to streamline invoicing and payment tracking for county events.",
      "Managed end-to-end logistics for county events, coordinating schedules, vendors, and cross-functional teams.",
    ],
  },
  {
    id: 3,
    position: "19D Cavalry Scout",
    company: "Army National Guard",
    location: "Griffin, GA",
    period: "05/2004 – 05/2012",
    description: [
      "Deployed in support of OEF; conducted route reconnaissance, data collection, and risk assessments to support troop movements.",
      "Awarded Army Commendation Medal, Good Conduct Medal, Afghan Campaign Medal, and multiple battalion coins.",
    ],
  },
];

export const education: EducationEntry[] = [
  {
    id: 1,
    degree: "BS Computer Information Systems",
    institution: "Florida Institute of Technology",
    location: "Melbourne, FL",
    year: "2017",
  },
];

export type ResumeProject = {
  id: string;
  name: string;
  stack: string[];
  github?: string;
  live?: string;
  bullets: string[];
};

export const resumeProjects: ResumeProject[] = [
  {
    id: "holy-smokes-engraving",
    name: "Holy Smokes Engraving — E-Commerce & POS",
    stack: ["Next.js 15", "TypeScript", "Express", "PostgreSQL", "Prisma", "Stripe", "Resend", "Zustand", "Vitest", "Playwright", "Sentry", "GitHub Actions"],
    github: "https://github.com/dwight-mobley/holysmokesengraving",
    live: "https://holysmokesengraving.com",
    bullets: [
      "Built a production-ready monorepo with a Next.js 15 App Router storefront and a standalone Express REST API sharing a single Postgres database via Prisma.",
      "Implemented Stripe Checkout with webhook-driven order creation, inventory decrement, and idempotency guard via a unique database constraint — preventing duplicate orders under Stripe retry conditions.",
      "Built an in-store POS system that writes through the same API and inventory transaction logic as the online store, keeping stock accurate across both sales channels.",
      "Added JWT-based auth with customer vs. admin role separation, edge middleware route protection, and a customer dashboard with order history.",
      "Configured GitHub Actions CI/CD, Playwright E2E tests for checkout and admin flows, and Sentry error monitoring on both frontend and API.",
    ],
  },
  {
    id: "vet-trax",
    name: "VetTrax — Pet Health Tracker",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Vercel Cron Jobs", "Resend"],
    github: "https://github.com/dwight-mobley/vet-trax",
    bullets: [
      "Building a pet health tracking app with automated appointment and medication reminders via Vercel Cron Jobs and the Resend API.",
      "Server-side auth via Supabase Auth and custom JWTs; data strictly partitioned per user.",
    ],
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
};

export const certifications: Certification[] = [
  {
    id: "codecademy-fse",
    name: "Full-Stack Engineer — Professional Certification",
    issuer: "Codecademy",
    date: "May 2025",
  },
];