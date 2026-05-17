import { skills } from "@/lib/data/skills";
import Image from "next/image";
import SectionHeading from "../ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading>Technical Skills </SectionHeading>
        <div className="space-y-10">
          {skills.map((category) => (
            <div key={category.label}>
              <h3 className="text-lg font-semibold text-zinc-700 mb-4">{category.label}</h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 bg-white rounded-xl p-4 shadow-sm w-24 text-center">
                    {skill.iconUrl ? <Image src={skill.iconUrl} alt={skill.name} width={40} height={40} className="object-contain" /> : <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">{skill.name.slice(0, 2)}</div>}
                    <span className="text-xs font-medium text-zinc-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
