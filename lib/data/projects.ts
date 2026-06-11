export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  github?: string;
  liveLink?: string;
  inDevelopment?: boolean;
  featured?: boolean;
  image?: string;
  videos?: string[];
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: string;
    features: string[];
    technicalDecisions: string;
    challenges: string;
    outcome: string;
    improvements: string;
  };
};

export const projects: Project[] = [
  {
    slug: "holy-smokes-engraving",
    title: "Holy Smokes Engraving",
    description: "Full-stack e-commerce platform and point-of-sale system for a laser engraving business.",
    longDescription:
      "A production-ready platform built for a real local business, handling the full commerce lifecycle from product discovery to Stripe checkout, webhook-driven order fulfillment, and transactional email. A separate admin dashboard and in-person POS system share the same live inventory, so online and walk-in sales are always in sync. Built with strict TypeScript throughout, Playwright E2E tests, GitHub Actions CI/CD, and Sentry error monitoring in both the frontend and API.",
    tech: ["Next.js", "TypeScript", "Express", "Postgres", "Prisma", "Stripe", "Resend", "Tailwind CSS", "Zustand", "Vitest", "Playwright", "Sentry", "PostHog", "Cloudinary"],
    github: "https://github.com/dwight-mobley/holysmokesengraving",
    liveLink: "https://holysmokesengraving.com",
    featured: true,
    videos: ["/videos/Holy Smokes Engraving Checkout.mp4", "/videos/Holy Smokes Engraving.mp4"],
    caseStudy: {
      problem:
        "The business had no online presence and managed all sales manually, leading to missed revenue and inefficient workflows. Walk-in customers were rung up with a basic cash register disconnected from any inventory system, and there was no way to take orders or payments outside of business hours.",
      solution:
        "Built a full-stack e-commerce site paired with an in-store POS system so the owner can sell online and ring up walk-in customers from a single inventory source. The monorepo contains a Next.js storefront, a standalone Express REST API, and a shared package of Zod schemas and utilities used by both. All order paths — Stripe webhook and POS direct create — write through the same API, keeping inventory accurate regardless of the sales channel.",
      architecture:
        "Monorepo with three packages: apps/web (Next.js 16 App Router storefront and admin UI), apps/api (Express 5 REST API), and packages/shared (Zod schemas and utility functions consumed by both). The Next.js frontend fetches from the Express API — server components use SSG/ISR for the product catalog and client components handle interactive UI like the cart and POS. The API connects to a Supabase-hosted Postgres database via Prisma using the pg connection pool adapter. The Stripe checkout flow runs: Next.js → Express POST /stripe/checkout creates a hosted session → customer completes payment on Stripe → Stripe webhook fires → Express validates the signature, creates the order, decrements inventory, and sends two emails via Resend (customer confirmation and admin alert). The POS bypasses Stripe and creates orders directly via POST /admin/pos/orders, but uses the same inventory transaction logic.",
      features: [
        "Product catalog with Cloudinary image upload and category management",
        "Stripe-powered checkout with webhook-driven order creation and confirmation email",
        "In-store POS with customer lookup, tax calculation, and printable invoice",
        "Admin dashboard for product CRUD, order management, and status updates",
        "Customer accounts with JWT auth, order history, and post-checkout registration prompt",
        "Shipping notification email triggered when admin marks an order as shipped",
        "Custom engraving request flow with file upload support",
        "Playwright E2E tests covering checkout, admin order flow, and POS",
      ],
      technicalDecisions:
        "Separate Express API over Next.js Route Handlers: the POS and storefront needed one shared API surface that could be deployed and scaled independently. Keeping business logic in a standalone service also makes it testable without the Next.js runtime. Prisma with the PrismaPg adapter over raw SQL: type-safe queries, migration tracking, and the pg adapter supports Supabase's connection pooler — important for a serverless-adjacent deployment where connection limits matter. Stripe hosted Checkout over a custom payment form: handles PCI compliance, card validation, and 3D Secure automatically. Webhook idempotency via a database unique constraint on stripeSessionId rather than a separate event-tracking table: Stripe guarantees at-least-once delivery, so the unique constraint makes duplicate order creation structurally impossible even under a race condition. Custom JWT auth over NextAuth: role-based access (customer vs. admin) was needed across both the API and frontend with a single token. Custom JWT gave full control over the payload shape without NextAuth's opinionated session model. Zustand over Redux for cart state: the cart is a simple array with quantities and a few derived values. Zustand handles this in ~30 lines with built-in localStorage persistence — Redux would have added significant boilerplate for no benefit.",
      challenges:
        "Preventing duplicate orders from Stripe webhook retries: Stripe retries delivery if it does not receive a 200 response quickly enough, so the same event can arrive twice. The handler queries for an existing order with the matching stripeSessionId before doing any work and returns early if one is found. The unique database constraint provides a second layer — even a race condition between two simultaneous deliveries fails at the database level rather than creating a duplicate record. Shared inventory between the online store and POS: both order paths use a Prisma transaction that reads current stock, validates availability, creates the order, and decrements inventory atomically. Neither path can commit without the inventory check succeeding, preventing overselling regardless of which channel the sale comes through. JWT authentication across server and client components in Next.js App Router: server components read the auth token from HTTP-only cookies via next/headers, while client components receive pre-fetched data as props rather than making authenticated requests themselves. Route protection middleware handles redirects at the edge before rendering begins, keeping auth logic out of individual components.",
      outcome:
        "Enabled online sales from day one, reduced checkout time in-store, and gave the owner full visibility into inventory and revenue from one dashboard. The platform handles real transactions in production with automated order confirmation emails, inventory tracking, and a CI/CD pipeline that deploys on every push to main.",
      improvements:
        "Replace the manual Stripe payment link in the POS with Stripe Terminal for true card-present transactions and automatic receipt generation. Add real-time inventory sync between the POS and storefront using Server-Sent Events — currently a POS sale does not reflect on the storefront until the next ISR revalidation cycle. Add a refund flow to the admin dashboard — currently refunds require logging into Stripe directly. Consider migrating to Next.js Server Actions for mutations to reduce the deployment surface from two services to one.",
    },
  },
  {
    slug: "vet-trax",
    title: "VetTrax",
    description: "A web application designed to track pet profiles, medical records, and set reminders.",
    longDescription:
      "VetTrax helps you track your pets' health records, upcoming appointments, and allows you to set reminders for your pets' various needs — all in one simple dashboard. Built with a Next.js 16 architecture leveraging proxy request handling, it features robust server-side authentication utilizing Supabase Auth and JWTs. The platform automates pet care by using Vercel cron jobs to poll a Supabase database for upcoming due dates, triggering targeted email notifications via the Resend API. The entire interface is styled utilizing the CSS-first configuration and theme directives of Tailwind CSS v4.",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Supabase", "Vercel Cron Jobs", "Resend API"],
    github: "https://github.com/dwight-mobley/vet-trax",
    featured: true,
    inDevelopment: true,
    caseStudy: {
      problem: "Managing a pet's health often involves scattered notes, calendars, and manual tracking to remember upcoming vet appointments and daily or monthly medication schedules, leading to missed doses or delayed checkups.",
      solution: "Developed a centralized dashboard that consolidates pet profiles and medical records with an automated notification pipeline. The system actively monitors due dates and dispatches reminders to the user, completely automating the schedule-tracking aspect of pet care.",
      architecture:
        "The application is built on Next.js 16, notably utilizing its newer proxy functionality for request handling over the traditional middleware pattern. Server-side authentication and session management are handled via Supabase Auth and custom JWTs. The backend relies on a Supabase-hosted PostgreSQL database, specifically utilizing a 'reminders' table with a due date column. Vercel cron jobs run scheduled tasks against this database, identifying due items and invoking the Resend email API to dispatch notifications to users.",
      features: [
        "Comprehensive dashboard for tracking pet profiles and medical history",
        "Automated appointment and medication notifications via Resend API",
        "Server-side authentication and authorization using Supabase Auth (JWT)",
        "Scheduled database polling using Vercel cron jobs",
        "Modern, CSS-first UI design using Tailwind CSS v4",
      ],

      technicalDecisions:
        "Adopted Next.js 16 and its proxy request handling for streamlined routing and server-side logic. Chose Supabase to handle both the PostgreSQL database and the authentication layer, allowing for tight integration between user sessions (JWT) and their associated data. Opted for Tailwind CSS v4 to take advantage of its CSS-first configuration and theme directives for cleaner styling. Decoupled the notification system by shifting the polling logic to Vercel cron jobs, ensuring reliable, automated dispatch via the Resend API without relying on active client sessions.",
      challenges:
        "Creating a reliable, automated notification pipeline required coordinating scheduled Vercel cron jobs with the Supabase database. The system had to accurately query the reminders table for upcoming due dates and seamlessly interface with the Resend API for dispatching, all while ensuring user data was strictly partitioned and secured behind server-side JWT authentication within the Next.js 16 proxy flow.",
      outcome: "Delivered a streamlined, all-in-one management tool that simplifies pet health tracking. The automated notification system reliably alerts users about critical medication and appointment due dates, ensuring pets stay on track with their care plans.",
      improvements:
        "Future enhancements could include implementing SMS text notifications alongside the current email alerts, integrating external veterinary clinic APIs to auto-sync official medical records, and adding multi-user support to allow family members to share access to a pet's profile.",
    },
  },
];
