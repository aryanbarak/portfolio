import { siteConfig } from "@/data/site-config";
import { Nav } from "./Nav";
import { SocialLinks } from "./SocialLinks";

export function Sidebar() {
  return (
    <header className="border-b border-border pb-10 pt-16 lg:sticky lg:top-0 lg:w-[340px] lg:shrink-0 lg:border-b-0 lg:py-16">
      {/* Plain img, not next/image: this is the only image on the site, and
          next/image would require Cloudflare's image-optimization binding
          for a single local static asset. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/aryan-barakzai.png"
        alt="Aryan Barakzai, Software Developer"
        width={120}
        height={120}
        className="mb-6 h-24 w-24 rounded-2xl border border-border bg-surface object-cover lg:h-[120px] lg:w-[120px]"
      />
      <h1 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mt-3 font-display text-lg text-foreground/80 sm:text-xl">{siteConfig.role}</p>
      <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">{siteConfig.tagline}</p>
      <p className="mt-4 max-w-xs font-mono text-xs uppercase tracking-widest text-muted-dim">
        {siteConfig.location}
      </p>

      <div className="mt-8 lg:hidden">
        <Nav items={siteConfig.nav} orientation="horizontal" />
      </div>
      <div className="mt-10 hidden lg:block">
        <Nav items={siteConfig.nav} orientation="vertical" />
      </div>

      <div className="mt-8 lg:mt-10">
        <SocialLinks />
      </div>
    </header>
  );
}
