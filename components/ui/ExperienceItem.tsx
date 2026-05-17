import type { ExperienceEntry } from "@/lib/data/experience";

export default function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="relative pl-8 border-l-2 border-amber-400">
      <div className="absolute -left-2.5 top-1.5 w-4 h-4 rounded-full bg-amber-400" />
      <div className="mb-1">
        <span className="font-semibold text-zinc-900">{entry.position}</span>
        {" · "}
        <span className="text-zinc-600">{entry.company}</span>
        {" · "}
        <span className="text-zinc-500 text-sm">{entry.location}</span>
      </div>
      <p className="text-sm text-amber-700 font-medium mb-2">{entry.period}</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-zinc-600">
        {entry.description.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}