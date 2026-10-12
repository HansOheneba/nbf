import type { Metadata } from "next";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const canonical = site.url ? new URL(path, site.url).toString() : undefined;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: canonical ? { canonical } : undefined,
    openGraph: {
      title: absolute ? title : `${title} · ${site.name}`,
      description,
      siteName: site.name,
      type: "website",
      url: canonical,
    },
    twitter: {
      card: "summary_large_image",
      title: absolute ? title : `${title} · ${site.name}`,
      description,
    },
  };
}
