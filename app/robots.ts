import type { MetadataRoute } from "next";

import { selskap } from "@/lib/selskap";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${selskap.url}/sitemap.xml`,
  };
}
