import { experience, education } from "@/lib/data/experience";
import ExperienceItem from "@/components/ui/ExperienceItem";
import SectionHeading from "../ui/SectionHeading";

export function Experiences() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading >Experience</SectionHeading>
        <div className="space-y-10 mb-16">
          {experience.map((e) => (
            <ExperienceItem key={e.id} entry={e} />
          ))}
        </div>

        <SectionHeading>Education</SectionHeading>
        <div className="space-y-6">
          {education.map((ed) => (
            <div key={ed.id} className="relative pl-8 border-l-2 border-amber-400">
              <div className="absolute -left-2.5 top-1.5 w-4 h-4 rounded-full bg-amber-400" />
              <p className="font-semibold text-zinc-900">{ed.degree}</p>
              <p className="text-zinc-600">{ed.institution} · {ed.location}</p>
              <p className="text-sm text-amber-700 font-medium">{ed.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}