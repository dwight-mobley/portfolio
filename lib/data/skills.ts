export type SkillCategory = {
  label: string;
  items: { name: string; iconUrl?: string }[];
};

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: [
      { name: "TypeScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "SQL" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Zustand" },
      { name: "React Hook Form" },
      { name: "Zod" },
      { name: "Storybook", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" },
      { name: "Bootstrap", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Prisma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
      { name: "Stripe" },
      { name: "Resend" },
      { name: "JWT" },
      { name: "REST APIs" },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "PostgreSQL", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Supabase", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    label: "Testing",
    items: [
      { name: "Vitest" },
      { name: "Jest", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Playwright" },
      { name: "Testing Library" },
    ],
  },
  {
    label: "Tools & Infrastructure",
    items: [
      { name: "Git", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub Actions", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Sentry" },
      { name: "ESLint", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" },
    ],
  },
];