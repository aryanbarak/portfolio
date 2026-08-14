"use client";

import { useEffect, useState } from "react";
import type { NavItem } from "@/data/site-config";

type NavProps = {
  items: NavItem[];
  orientation: "vertical" | "horizontal";
};

export function Nav({ items, orientation }: NavProps) {
  const [activeHref, setActiveHref] = useState<string>(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // IntersectionObserver callbacks only report entries whose intersection
    // state changed since the last check, not every currently observed
    // element. Keeping the latest entry per section here (instead of
    // deciding from just the current batch) avoids picking a stale/partial
    // view of which sections are actually in view right now.
    const latestEntries = new Map<Element, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          latestEntries.set(entry.target, entry);
        }

        const visible = [...latestEntries.values()]
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  const isVertical = orientation === "vertical";

  return (
    <nav aria-label="Section">
      <ul className={isVertical ? "flex flex-col gap-3" : "flex flex-wrap gap-x-5 gap-y-2"}>
        {items.map((item) => {
          const isActive = activeHref === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`focus-ring group flex items-center gap-3 font-mono text-xs uppercase tracking-widest transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-accent-secondary"
                }`}
              >
                {isVertical ? (
                  <span
                    aria-hidden="true"
                    className={`h-px transition-all ${
                      isActive
                        ? "w-8 bg-accent"
                        : "w-4 bg-muted-dim group-hover:w-6 group-hover:bg-accent-secondary"
                    }`}
                  />
                ) : null}
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
