import { FocusPage } from "@/components/editorial/focus-page";
import { images } from "@/content/images";
import { womensHealthPage, womensHealthSections } from "@/content/womens-health";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Women's Health",
  description: womensHealthPage.introduction[0],
  path: "/health/womens-health",
});

export default function WomensHealthPage() {
  return (
    <FocusPage
      eyebrow={womensHealthPage.eyebrow}
      title={womensHealthPage.title}
      lede={womensHealthPage.introduction}
      image={images.profile}
      sections={womensHealthSections}
      supportLabel={womensHealthPage.support.label}
      initiative={womensHealthPage.support.initiative}
      sources={womensHealthPage.sources}
      reviewDate={womensHealthPage.reviewDate}
      disclaimer={womensHealthPage.disclaimer}
    />
  );
}
