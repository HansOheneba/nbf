import { FocusPage } from "@/components/editorial/focus-page";
import { educationPage, educationSections } from "@/content/education";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Education",
  description: educationPage.introduction[0],
  path: "/education",
});

export default function EducationPage() {
  return (
    <FocusPage
      eyebrow={educationPage.eyebrow}
      title={educationPage.title}
      lede={educationPage.introduction}
      image={images.library}
      sections={educationSections}
      supportLabel={educationPage.support.label}
      initiative={educationPage.support.initiative}
    />
  );
}
