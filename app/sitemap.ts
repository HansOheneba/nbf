import { articles } from "@/content/articles";
import { site, sitemapPaths } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];

  const paths = [
    ...sitemapPaths,
    ...articles.map((article) => `/stories/${article.slug}`),
  ];

  return paths.map((path) => ({
    url: new URL(path, site.url).toString(),
    lastModified: "2026-10-12",
  }));
}
