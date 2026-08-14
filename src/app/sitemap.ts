import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/site-config";

// /impressum is intentionally omitted: it's unlinked and noindex until its
// legal content (name/address/contact) is filled in — see src/components/Footer.tsx.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
