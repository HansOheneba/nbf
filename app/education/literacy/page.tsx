import { FocusPage } from "@/components/editorial/focus-page";
import { literacyPage, literacySections } from "@/content/education";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Literacy",
  description: literacyPage.introduction[0],
  path: "/education/literacy",
});

export default function LiteracyPage() {
  return (
    <FocusPage
      eyebrow={literacyPage.eyebrow}
      title={literacyPage.title}
      lede={literacyPage.introduction}
      image={images.library}
      sections={literacySections}
      supportLabel={literacyPage.support.label}
      initiative={literacyPage.support.initiative}
    />
  );
}
