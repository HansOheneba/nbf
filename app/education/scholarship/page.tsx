import { FocusPage } from "@/components/editorial/focus-page";
import { scholarshipPage, scholarshipSections } from "@/content/education";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Scholarships",
  description: scholarshipPage.introduction[0],
  path: "/education/scholarship",
});

export default function ScholarshipPage() {
  return (
    <FocusPage
      eyebrow={scholarshipPage.eyebrow}
      title={scholarshipPage.title}
      lede={scholarshipPage.introduction}
      image={images.learning}
      sections={scholarshipSections}
      supportLabel={scholarshipPage.support.label}
      initiative={scholarshipPage.support.initiative}
    />
  );
}
