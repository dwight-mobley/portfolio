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
    longDescription: "",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Postgres", "Prisma"],
    featured: true,
    caseStudy: {
      problem: "The business had no online presence and managed all sales manually, leading to missed revenue and inefficient workflows.",
      solution: "Built a full-stack e-commerce site paired with an in-store POS system so the owner can sell online and ring up walk-in customers from a single inventory source.",
      architecture: "",
      features: ["Product catalog with image upload and category management", "Stripe-powered checkout with order history", "In-store POS with cash and card support", "Admin dashboard for inventory, orders, and reporting", "Custom product personalisation flow (engraving text/image upload)"],
      technicalDecisions: "",
      challenges: "",
      outcome: "Enabled online sales from day one, reduced checkout time in-store, and gave the owner full visibility into inventory and revenue from one dashboard.",
      improvements: "",
    },
  },
];
