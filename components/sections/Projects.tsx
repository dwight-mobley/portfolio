import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

export function Projects() {
  const sorted = [...projects].sort((a) => (a.featured ? -1 : 1));
  return (
    <section id="projects" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading >Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}