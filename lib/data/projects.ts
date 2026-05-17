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
  longDescription: "A production-ready platform built for a real local business, handling the full commerce lifecycle from product discovery to Stripe checkout, webhook-driven order fulfillment, and transactional email. A separate admin dashboard and in-person POS system share the same live inventory, so online and walk-in sales are always in sync. Built with strict TypeScript throughout, Playwright E2E tests, GitHub Actions CI/CD, and Sentry error monitoring in both the frontend and API.",
  tech: ["Next.js", "TypeScript", "Express", "Postgres", "Prisma", "Stripe", "Resend", "Tailwind CSS", "Zustand", "Vitest", "Playwright", "Sentry", "PostHog", "Cloudinary"],
  github: "https://github.com/dwight-mobley/holysmokesengraving",
  liveLink: "https://holysmokesengraving.com",
  featured: true,
  caseStudy: {
    problem: "The business had no online presence and managed all sales manually, leading to missed revenue and inefficient workflows. Walk-in customers were rung up with a basic cash register disconnected from any inventory system, and there was no way to take orders or payments outside of business hours.",
    solution: "Built a full-stack e-commerce site paired with an in-store POS system so the owner can sell online and ring up walk-in customers from a single inventory source. The monorepo contains a Next.js storefront, a standalone Express REST API, and a shared package of Zod schemas and utilities used by both. All order paths — Stripe webhook and POS direct create — write through the same API, keeping inventory accurate regardless of the sales channel.",
    architecture: "Monorepo with three packages: apps/web (Next.js 16 App Router storefront and admin UI), apps/api (Express 5 REST API), and packages/shared (Zod schemas and utility functions consumed by both). The Next.js frontend fetches from the Express API — server components use SSG/ISR for the product catalog and client components handle interactive UI like the cart and POS. The API connects to a Supabase-hosted Postgres database via Prisma using the pg connection pool adapter. The Stripe checkout flow runs: Next.js → Express POST /stripe/checkout creates a hosted session → customer completes payment on Stripe → Stripe webhook fires → Express validates the signature, creates the order, decrements inventory, and sends two emails via Resend (customer confirmation and admin alert). The POS bypasses Stripe and creates orders directly via POST /admin/pos/orders, but uses the same inventory transaction logic.",
    features: [
      "Product catalog with Cloudinary image upload and category management",
      "Stripe-powered checkout with webhook-driven order creation and confirmation email",
      "In-store POS with customer lookup, tax calculation, and printable invoice",
      "Admin dashboard for product CRUD, order management, and status updates",
      "Customer accounts with JWT auth, order history, and post-checkout registration prompt",
      "Shipping notification email triggered when admin marks an order as shipped",
      "Custom engraving request flow with file upload support",
      "Playwright E2E tests covering checkout, admin order flow, and POS"
    ],
    technicalDecisions: "Separate Express API over Next.js Route Handlers: the POS and storefront needed one shared API surface that could be deployed and scaled independently. Keeping business logic in a standalone service also makes it testable without the Next.js runtime. Prisma with the PrismaPg adapter over raw SQL: type-safe queries, migration tracking, and the pg adapter supports Supabase's connection pooler — important for a serverless-adjacent deployment where connection limits matter. Stripe hosted Checkout over a custom payment form: handles PCI compliance, card validation, and 3D Secure automatically. Webhook idempotency via a database unique constraint on stripeSessionId rather than a separate event-tracking table: Stripe guarantees at-least-once delivery, so the unique constraint makes duplicate order creation structurally impossible even under a race condition. Custom JWT auth over NextAuth: role-based access (customer vs. admin) was needed across both the API and frontend with a single token. Custom JWT gave full control over the payload shape without NextAuth's opinionated session model. Zustand over Redux for cart state: the cart is a simple array with quantities and a few derived values. Zustand handles this in ~30 lines with built-in localStorage persistence — Redux would have added significant boilerplate for no benefit.",
    challenges: "Preventing duplicate orders from Stripe webhook retries: Stripe retries delivery if it does not receive a 200 response quickly enough, so the same event can arrive twice. The handler queries for an existing order with the matching stripeSessionId before doing any work and returns early if one is found. The unique database constraint provides a second layer — even a race condition between two simultaneous deliveries fails at the database level rather than creating a duplicate record. Shared inventory between the online store and POS: both order paths use a Prisma transaction that reads current stock, validates availability, creates the order, and decrements inventory atomically. Neither path can commit without the inventory check succeeding, preventing overselling regardless of which channel the sale comes through. JWT authentication across server and client components in Next.js App Router: server components read the auth token from HTTP-only cookies via next/headers, while client components receive pre-fetched data as props rather than making authenticated requests themselves. Route protection middleware handles redirects at the edge before rendering begins, keeping auth logic out of individual components.",
    outcome: "Enabled online sales from day one, reduced checkout time in-store, and gave the owner full visibility into inventory and revenue from one dashboard. The platform handles real transactions in production with automated order confirmation emails, inventory tracking, and a CI/CD pipeline that deploys on every push to main.",
    improvements: "Replace the manual Stripe payment link in the POS with Stripe Terminal for true card-present transactions and automatic receipt generation. Add real-time inventory sync between the POS and storefront using Server-Sent Events — currently a POS sale does not reflect on the storefront until the next ISR revalidation cycle. Add a refund flow to the admin dashboard — currently refunds require logging into Stripe directly. Consider migrating to Next.js Server Actions for mutations to reduce the deployment surface from two services to one.",
  },
}

];
