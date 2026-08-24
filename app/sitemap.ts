import type { MetadataRoute } from "next";
import { artikler } from "@/lib/artikler";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://stavesoftware.no/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://stavesoftware.no/blogg",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...artikler.map((a) => ({
      url: `https://stavesoftware.no/blogg/${a.slug}`,
      lastModified: new Date(a.publisert),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
