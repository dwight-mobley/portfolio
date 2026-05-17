
import { experience, education } from "@/lib/data/experience";
import { skills } from "@/lib/data/skills";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16 print:pt-0 print:pb-0">
      <div className="max-w-3xl mx-auto px-4 space-y-10">
        <Link href="/" className="text-sm text-amber-600 hover:underline print:hidden">← Back</Link>

        <div>
          <h1 className="text-4xl font-extrabold text-zinc-900">Dwight Mobley</h1>
          <p className="text-zinc-500">Full-Stack Developer · Gainesville, GA</p>
          <p className="text-zinc-500">dwightscode@gmail.com · github.com/dwight-mobley</p>
        </div>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Experience</h2>
          <div className="space-y-8">
            {experience.map((e) => (
              <div key={e.id}>
                <p className="font-semibold text-zinc-900">{e.position}</p>
                <p className="text-zinc-600 text-sm">{e.company} · {e.location} · {e.period}</p>
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-zinc-600">
                  {e.description.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Education</h2>
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.id}>
                <p className="font-semibold text-zinc-900">{ed.degree}</p>
                <p className="text-zinc-600 text-sm">{ed.institution} · {ed.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 border-b pb-2 mb-4">Skills</h2>
          {skills.map((cat: Cat) => (
            <div key={cat.label} className="mb-3">
              <span className="font-medium text-zinc-700">{cat.label}: </span>
              <span className="text-zinc-600 text-sm">{cat.items.map((s) => s.name).join(", ")}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}