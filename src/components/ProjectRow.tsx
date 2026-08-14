import type { Project } from "@/data/site-config";
import { ExternalLinkIcon, GitHubIcon } from "./icons";

export function ProjectRow({ project }: { project: Project }) {
  const { title, subtitle, description, tech, githubUrl, liveUrl, liveEnabled } = project;
  const hasLiveLink = liveEnabled && Boolean(liveUrl);
  const primaryHref = hasLiveLink ? liveUrl : githubUrl;

  return (
    <li className="group border-b border-border py-8 first:pt-0 last:border-b-0">
      <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring inline-flex items-center gap-1.5 transition-colors group-hover:text-accent"
          >
            {title}
            <ExternalLinkIcon className="h-4 w-4 text-muted-dim transition-colors group-hover:text-accent" />
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-dim">{subtitle}</p>

      <p className="mt-4 max-w-2xl text-muted">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted-dim">
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-5 text-sm">
        {githubUrl ? (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View source code for ${title} on GitHub (opens in a new tab)`}
            className="focus-ring inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            Code
          </a>
        ) : null}
        {hasLiveLink ? (
          <a
            href={liveUrl as string}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View live site for ${title} (opens in a new tab)`}
            className="focus-ring inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
          >
            Live site
            <ExternalLinkIcon className="h-3.5 w-3.5" />
          </a>
        ) : null}
      </div>
    </li>
  );
}
