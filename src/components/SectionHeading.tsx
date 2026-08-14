export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent" aria-hidden="true">
        {index}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-border" aria-hidden="true" />
    </div>
  );
}
