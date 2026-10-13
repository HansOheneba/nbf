import { FocusPage } from "@/components/editorial/focus-page";
import { images } from "@/content/images";
import { mentalHealthPage, mentalHealthSections } from "@/content/mental-health";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Mental health",
  description: mentalHealthPage.introduction[0],
  path: "/health/mental-health",
});

export default function MentalHealthPage() {
  return (
    <FocusPage
      eyebrow={mentalHealthPage.eyebrow}
      title={mentalHealthPage.title}
      lede={mentalHealthPage.introduction}
      image={images.conversation}
      sections={mentalHealthSections}
      supportLabel={mentalHealthPage.support.label}
      initiative={mentalHealthPage.support.initiative}
      sources={mentalHealthPage.sources}
      reviewDate={mentalHealthPage.reviewDate}
      disclaimer={mentalHealthPage.disclaimer}
    />
  );
}
