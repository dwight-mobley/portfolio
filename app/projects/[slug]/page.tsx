import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";


export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();

  const { caseStudy } = project;
  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 space-y-10">
        <Link href="/#projects" className="text-sm text-amber-600 hover:underline">
          ← Back to Projects
        </Link>

        <h1 className="text-4xl font-extrabold text-zinc-900">{project.title}</h1>
        <p className="text-zinc-600 text-lg">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-sm bg-zinc-200 text-zinc-700 px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <section>
          <SectionHeading>The Problem</SectionHeading>
          <p className="text-zinc-600">{caseStudy.problem}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-2">The Solution</h2>
          <p className="text-zinc-600">{caseStudy.solution}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Key Features</h2>
          <ul className="list-disc list-inside space-y-1 text-zinc-600">
            {caseStudy.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-2">Outcome</h2>
          <p className="text-zinc-600">{caseStudy.outcome}</p>
        </section>

        <div className="flex gap-4 pt-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors">
              View on GitHub
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full text-sm font-bold hover:bg-amber-400 transition-colors">
              Live Site
            </a>
          )}
        </div>
      </div>
    </main>
  );
}