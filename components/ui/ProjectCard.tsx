import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-zinc-900">{project.title}</h3>
          {project.inDevelopment && (
            <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full shrink-0">
              In Development
            </span>
          )}
        </div>
        <p className="text-zinc-600 text-sm mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 text-sm font-medium">
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-amber-600 hover:text-amber-500 transition-colors"
            >
              Case Study →
            </Link>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors">
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 transition-colors">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}