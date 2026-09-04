import type { MetadataRoute } from "next";
import { artikler } from "@/lib/artikler";
import { JURIDISK_OPPDATERT } from "@/lib/juridisk";

import { selskap } from "@/lib/selskap";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${selskap.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${selskap.url}/blogg`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${selskap.url}/vilkar`,
      lastModified: new Date(JURIDISK_OPPDATERT),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${selskap.url}/personvern`,
      lastModified: new Date(JURIDISK_OPPDATERT),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    ...artikler.map((a) => ({
      url: `${selskap.url}/blogg/${a.slug}`,
      lastModified: new Date(a.publisert),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
