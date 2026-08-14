// Central, typed source of truth for all portfolio content.
// Keeping copy and links here (rather than scattered through components)
// makes it easy to update content or add screenshots later without touching JSX.

export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  /**
   * Whether `liveUrl` is a confirmed-working destination to show to
   * visitors right now. Keep `liveUrl` populated even when this is
   * `false` so the link can be turned back on with a single flip once
   * the domain is live — never delete the URL to "disable" a link.
   */
  liveEnabled: boolean;
  /** Reserved for future project screenshots. No asset exists yet. */
  screenshotUrl: string | null;
};

export type ExperienceEntry = {
  period: string;
  title: string;
  org: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

// The production domain for this portfolio itself has not been confirmed.
// Override with NEXT_PUBLIC_SITE_URL at build/deploy time once it is known.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://barakzai.cloud";

// Placeholder value for siteConfig.linkedinUrl until the real profile URL is
// supplied. isRealUrl() below treats anything that isn't an http(s) URL —
// including this placeholder — as "not configured", so consumers hide the
// LinkedIn link rather than rendering a broken href. Replace the config
// value with the real URL and it renders automatically, no other changes.
export const LINKEDIN_URL_PLACEHOLDER = "[PASTE_EXACT_LINKEDIN_URL_HERE]";

export function isRealUrl(value: string | null): value is string {
  return value !== null && /^https?:\/\//i.test(value);
}

export const siteConfig = {
  name: "Aryan Barakzai",
  role: "Software Developer",
  tagline: "I build full-stack and AI-powered applications from idea to production.",
  location: "Ahrensburg / Hamburg area — open to new opportunities",
  email: "aryan@barakzai.cloud",

  // All external URLs live here as `string | null`. Consumers must not
  // render a link when the value is null.
  githubUrl: "https://github.com/aryanbarak" as string | null,
  // TODO: replace with the real LinkedIn profile URL once available. Do not
  // invent one — see LINKEDIN_URL_PLACEHOLDER / isRealUrl() above; consumers
  // hide the LinkedIn link until this is a real https:// URL.
  linkedinUrl: "https://www.linkedin.com/in/aryan-barakzai",  resumeUrl: "/cv-aryan-barakzai.pdf" as string | null,
  resumeEnabled: true,

  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
  ] satisfies NavItem[],

  about: [
    "I’m a software developer focused on building practical, production-oriented web applications with React, TypeScript and AI integrations.",
    "My background combines modern software development with more than 20 years of operational IT experience. I completed my IHK qualification as Fachinformatiker für Anwendungsentwicklung in Germany.",
    "Today I work on projects such as SmartFlow, Smart Academy and Smart Automation, where I combine frontend development, backend architecture, cloud infrastructure and AI-assisted workflows.",
  ],

  projects: [
    {
      id: "smartflow",
      title: "SmartFlow",
      subtitle: "AI Project Operating System",
      description:
        "An AI-powered project operating system for software development, project intelligence and secure, auditable AI-assisted actions.",
      tech: ["React", "TypeScript", "Supabase", "Cloudflare Workers", "AI Integration"],
      githubUrl: "https://github.com/aryanbarak/smartflow",
      // Intended final URL. Domain is not confirmed live yet — set
      // liveEnabled to true once https://flow.barakzai.cloud actually resolves.
      liveUrl: "https://flow.barakzai.cloud",
      liveEnabled: false,
      screenshotUrl: null,
    },
    {
      id: "smart-academy",
      title: "Smart Academy",
      subtitle: "AI Learning Platform for FIAE",
      description:
        "A multilingual learning platform for Fachinformatiker Anwendungsentwicklung with structured lessons, quizzes, flashcards, algorithm visualizations, contextual AI assistance, PWA support and Android packaging.",
      tech: ["React", "TypeScript", "Google Gemini", "PWA", "Capacitor"],
      githubUrl: "https://github.com/aryanbarak/smart-academy",
      liveUrl: "https://academy.barakzai.cloud",
      liveEnabled: true,
      screenshotUrl: null,
    },
    {
      id: "smart-automation",
      title: "Smart Automation",
      subtitle: "AI Automation & Content Platform",
      description:
        "An AI-assisted automation and content workspace focused on intelligent workflows, integrations and multi-channel content production.",
      tech: ["Next.js", "TypeScript", "Supabase", "AI Integration", "Automation"],
      githubUrl: "https://github.com/aryanbarak/ai-automation-agent",
      // Intended final URL. Domain is not confirmed live yet — set
      // liveEnabled to true once https://automation.barakzai.cloud actually resolves.
      liveUrl: "https://automation.barakzai.cloud",
      liveEnabled: false,
      screenshotUrl: null,
    },
  ] satisfies Project[],

  experience: [
    {
      period: "2022 — Present",
      title: "Software Development",
      org: "Fachinformatiker für Anwendungsentwicklung / Independent Projects",
      description:
        "Modern full-stack application development with React, TypeScript, cloud platforms and AI integrations, including SmartFlow, Smart Academy and Smart Automation.",
    },
    {
      period: "2009 — 2012",
      title: "IT Officer",
      org: "British Embassy Kabul",
      description:
        "IT operations, infrastructure, technical support, systems administration and secure technology environments.",
    },
    {
      period: "Earlier",
      title: "IT Management & Infrastructure",
      org: "Government and international organizations",
      description:
        "Technical leadership, infrastructure operations, user support and IT administration across professional environments.",
    },
  ] satisfies ExperienceEntry[],

  skills: [
    { label: "Frontend", items: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS"] },
    { label: "Backend & Data", items: ["Node.js", "Supabase", "PostgreSQL", "REST APIs"] },
    { label: "AI", items: ["AI/LLM Integration", "Google Gemini", "Prompt Engineering"] },
    { label: "Cloud & DevOps", items: ["Cloudflare Workers", "Vercel", "Docker", "GitHub Actions", "Git"] },
  ] satisfies SkillGroup[],

  contact: {
    heading: "Interested in working together?",
  },
};

export type SiteConfig = typeof siteConfig;
