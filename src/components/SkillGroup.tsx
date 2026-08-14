import type { SkillGroup as SkillGroupType } from "@/data/site-config";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div>
      <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{group.label}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <li key={item} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
