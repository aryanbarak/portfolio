import type { ExperienceEntry } from "@/data/site-config";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <li className="grid gap-1 border-b border-border py-6 first:pt-0 last:border-b-0 sm:grid-cols-[140px_1fr] sm:gap-6">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-dim">{entry.period}</p>
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">{entry.title}</h3>
        <p className="mt-0.5 text-sm text-muted">{entry.org}</p>
        <p className="mt-3 max-w-2xl text-muted">{entry.description}</p>
      </div>
    </li>
  );
}
