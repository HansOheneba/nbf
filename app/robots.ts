import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: site.url ? new URL("/sitemap.xml", site.url).toString() : undefined,
  };
}
