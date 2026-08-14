import { isRealUrl, siteConfig } from "@/data/site-config";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const iconLinkClasses =
  "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent";

const cvLinkClasses =
  "focus-ring inline-flex h-10 items-center rounded-full px-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent";

export function SocialLinks() {
  const { githubUrl, linkedinUrl, email, resumeUrl, resumeEnabled } = siteConfig;
  const linkedinHref = isRealUrl(linkedinUrl) ? linkedinUrl : null;
  const hasResumeLink = resumeEnabled && Boolean(resumeUrl);

  return (
    <ul className="flex flex-wrap items-center gap-1">
      {githubUrl ? (
        <li>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub profile"
            title="GitHub profile"
            className={iconLinkClasses}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
      {linkedinHref ? (
        <li>
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
            className={iconLinkClasses}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
      {email ? (
        <li>
          <a
            href={`mailto:${email}`}
            aria-label="Send email"
            title="Send email"
            className={iconLinkClasses}
          >
            <MailIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
      {hasResumeLink ? (
        <li>
          <a
            href={resumeUrl as string}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open CV"
            title="CV / Resume"
            className={cvLinkClasses}
          >
            CV
          </a>
        </li>
      ) : null}
    </ul>
  );
}
