import { FocusPage } from "@/components/editorial/focus-page";
import { images } from "@/content/images";
import { menstrualHealthPage, menstrualHealthSections } from "@/content/menstrual-health";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Menstrual Health",
  description: menstrualHealthPage.introduction[0],
  path: "/health/menstrual-health",
});

export default function MenstrualHealthPage() {
  return (
    <FocusPage
      eyebrow={menstrualHealthPage.eyebrow}
      title={menstrualHealthPage.title}
      lede={menstrualHealthPage.introduction}
      image={images.profile}
      sections={menstrualHealthSections}
      supportLabel={menstrualHealthPage.support.label}
      initiative={menstrualHealthPage.support.initiative}
      sources={menstrualHealthPage.sources}
      reviewDate={menstrualHealthPage.reviewDate}
      disclaimer={menstrualHealthPage.disclaimer}
    />
  );
}
