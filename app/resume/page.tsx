'use client'
import { experience, education, resumeProjects, certifications } from "@/lib/data/experience";
import { SkillCategory, skills } from "@/lib/data/skills";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 print:pt-0 print:pb-0">
      <div className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
        <div className="flex justify-between items-center print:hidden">
          <Link href="/" className="text-sm text-amber-600 hover:underline print:hidden">← Back</Link>
           <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md hover:bg-zinc-800 transition-colors shadow-sm"
          >
            Print Resume
          </button>
        </div>


        {/* Header */}
        <div>
          <h1 className="text-4xl font-extrabold text-zinc-900">Dwight Mobley</h1>
          <p className="text-zinc-500">Full-Stack Developer · Gainesville, GA</p>
          <p className="hidden print:block text-sm">(470) 768-2068</p>
          <p className="text-zinc-500 print:text-xs">
            dwightscode@gmail.com ·{" "}
            <a href="https://github.com/dwight-mobley" className="hover:underline print:no-underline">github.com/dwight-mobley</a>
            {" "}·{" "}
            <a href="https://linkedin.com/in/dwight-mobley-13825b296" className="hover:underline print:no-underline">linkedin.com/in/dwight-mobley-13825b296</a>
          </p>
        </div>

        {/* Summary */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Summary</h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Full-stack developer with a BS in Computer Information Systems and a Codecademy Full-Stack
            Engineer certification. Built production-grade web applications using TypeScript, React,
            Next.js, Node.js, and PostgreSQL — including a live e-commerce platform with Stripe
            checkout, webhook-driven order fulfillment, JWT authentication, and Playwright E2E tests.
            Eight years of freelance experience delivering custom software for small businesses.
            Seeking a full-time software engineering role.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Projects</h2>
          <div className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
            {resumeProjects.map((p) => (
              <div key={p.id}>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-semibold text-zinc-900">{p.name}</p>
                  <div className="flex gap-3 text-xs text-amber-600 shrink-0">
                    {p.github && <a href={p.github} className="hover:underline">GitHub</a>}
                    {p.live && <a href={p.live} className="hover:underline">Live</a>}
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mb-1 print:text-[10px]">{p.stack.join(" · ")}</p>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-sm text-zinc-600 print:text-xs">
                  {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Experience</h2>
          <div className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
            {experience.map((e) => (
              <div key={e.id}>
                <p className="font-semibold text-zinc-900">{e.position}</p>
                <p className="text-zinc-600 text-sm">{e.company} · {e.location} · {e.period}</p>
                <ul className="mt-1 list-disc list-inside space-y-0.5 text-sm text-zinc-600 print:text-xs">
                  {e.description.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Education</h2>
          <div className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
            {education.map((ed) => (
              <div key={ed.id}>
                <p className="font-semibold text-zinc-900">{ed.degree}</p>
                <p className="text-zinc-600 text-sm">{ed.institution} · {ed.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Certifications</h2>
          <div className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
            {certifications.map((c) => (
              <div key={c.id}>
                <p className="font-semibold text-zinc-900">{c.name}</p>
                <p className="text-zinc-600 text-sm">{c.issuer} · {c.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Skills</h2>
          {skills.map((cat: SkillCategory) => (
            <div key={cat.label} className="max-w-3xl mx-auto px-4 space-y-10 print:space-y-6">
              <span className="font-medium text-zinc-700">{cat.label}: </span>
              <span className="text-zinc-600 text-sm">{cat.items.map((s) => s.name).join(", ")}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}