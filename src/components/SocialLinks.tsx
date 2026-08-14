import { siteConfig } from "@/data/site-config";
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const linkClasses =
  "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-accent";

export function SocialLinks() {
  const { githubUrl, linkedinUrl, email, resumeUrl, resumeEnabled } = siteConfig;
  const hasResumeLink = resumeEnabled && Boolean(resumeUrl);

  return (
    <ul className="flex items-center gap-1">
      {githubUrl ? (
        <li>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Aryan Barakzai on GitHub (opens in a new tab)"
            className={linkClasses}
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
      {linkedinUrl ? (
        <li>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Aryan Barakzai on LinkedIn (opens in a new tab)"
            className={linkClasses}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
      {email ? (
        <li>
          <a href={`mailto:${email}`} aria-label={`Email ${email}`} className={linkClasses}>
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
            aria-label="Download CV as PDF (opens in a new tab)"
            className={linkClasses}
          >
            <FileIcon className="h-5 w-5" />
          </a>
        </li>
      ) : null}
    </ul>
  );
}
