import { ExperienceItem } from "@/components/ExperienceItem";
import { Footer } from "@/components/Footer";
import { ProjectRow } from "@/components/ProjectRow";
import { SectionHeading } from "@/components/SectionHeading";
import { Sidebar } from "@/components/Sidebar";
import { SkillGroup } from "@/components/SkillGroup";
import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site-config";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:flex lg:items-start lg:gap-16 lg:pl-8 lg:pr-16">
      <Sidebar />

      <main className="lg:min-w-0 lg:flex-1 lg:pt-8 lg:pb-16">
        {/*
          Sections intentionally carry no scroll-margin-top. There's no fixed
          header to reserve space for, and sections sit flush against each
          other (no bottom padding/margin) — so any positive scroll-margin
          just re-exposes that many pixels of the previous section's tail
          once you land on the anchor. pt-8 alone gives breathing room, and
          it's safely inside the new section's own box, not borrowed from
          the one before it.
        */}
        <section id="about" className="pt-8">
          <SectionHeading index="01" title="About" />
          <div className="max-w-2xl space-y-4 text-muted">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section id="projects" className="pt-8">
          <SectionHeading index="02" title="Projects" />
          <ul>
            {siteConfig.projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </ul>
        </section>

        <section id="experience" className="pt-8">
          <SectionHeading index="03" title="Experience" />
          <ul>
            {siteConfig.experience.map((entry) => (
              <ExperienceItem key={`${entry.period}-${entry.title}`} entry={entry} />
            ))}
          </ul>
        </section>

        <section id="skills" className="pt-8">
          <SectionHeading index="04" title="Skills" />
          <div className="grid gap-8 sm:grid-cols-2">
            {siteConfig.skills.map((group) => (
              <SkillGroup key={group.label} group={group} />
            ))}
          </div>
        </section>

        {/*
          Contact is the last section, and the remaining content below it
          (just this section + the footer) is shorter than a typical
          viewport — without this, the page can't scroll far enough for
          Contact to land near the top when navigated to. min-h-screen
          guarantees enough scroll runway at any viewport height (the
          shortfall scales 1:1 with viewport height, so anything less than
          100vh would eventually fall short again on a taller screen);
          block layout puts the resulting slack after the footer, not
          inside Contact's own box.
        */}
        <div className="min-h-screen">
          {/*
            Contact has no nav entry, so this extra top padding (larger than
            the pt-8 every other section uses) is purely editorial breathing
            room after Skills — it doesn't interact with the anchor-scroll
            fix above, since nothing ever scrolls to #contact via the
            scrollspy.
          */}
          <section id="contact" className="pt-14 lg:pt-16">
            <SectionHeading index="05" title="Contact" />
            <p className="max-w-md text-muted">{siteConfig.contact.heading}</p>
            {siteConfig.email ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring mt-4 inline-block font-mono text-sm text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                {siteConfig.email}
              </a>
            ) : null}
            <div className="mt-8">
              <SocialLinks />
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
