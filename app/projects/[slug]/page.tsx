import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project || !project.caseStudy) notFound();

  const { caseStudy } = project;

  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 space-y-12">

        {/* Back link */}
        <Link href="/#projects" className="text-sm text-amber-600 hover:underline">
          ← Back to Projects
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-zinc-900">{project.title}</h1>
          <p className="text-zinc-500 text-base">{project.description}</p>
          {project.longDescription && (
            <p className="text-zinc-700 text-lg leading-relaxed">{project.longDescription}</p>
          )}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span key={t} className="text-sm bg-zinc-200 text-zinc-700 px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full text-sm font-bold hover:bg-amber-400 transition-colors"
            >
              Live Site
            </a>
          )}
        </div>

        <hr className="border-zinc-200" />

        {/* Problem */}
        <Section title="The Problem">
          <p className="text-zinc-600 leading-relaxed">{caseStudy.problem}</p>
        </Section>

        {/* Solution */}
        <Section title="The Solution">
          <p className="text-zinc-600 leading-relaxed">{caseStudy.solution}</p>
        </Section>

        {/* Architecture */}
        {caseStudy.architecture && (
          <Section title="Architecture">
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
              {caseStudy.architecture}
            </p>
          </Section>
        )}

        {/* Features */}
        <Section title="Key Features">
          <ul className="space-y-2">
            {caseStudy.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-zinc-600">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                {f}
              </li>
            ))}
          </ul>
        </Section>

        {/* Technical Decisions */}
        {caseStudy.technicalDecisions && (
          <Section title="Technical Decisions">
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
              {caseStudy.technicalDecisions}
            </p>
          </Section>
        )}

        {/* Challenges */}
        {caseStudy.challenges && (
          <Section title="Challenges & Solutions">
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
              {caseStudy.challenges}
            </p>
          </Section>
        )}

        {/* Outcome */}
        <Section title="Outcome">
          <p className="text-zinc-600 leading-relaxed">{caseStudy.outcome}</p>
        </Section>

        {/* Improvements */}
        {caseStudy.improvements && (
          <Section title="What I'd Do Differently">
            <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
              {caseStudy.improvements}
            </p>
          </Section>
        )}

        {/* Bottom links */}
        <div className="flex gap-4 pt-4 border-t border-zinc-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              View on GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full text-sm font-bold hover:bg-amber-400 transition-colors"
            >
              Live Site
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <SectionHeading >{title}</SectionHeading>
      {children}
    </section>
  );
}