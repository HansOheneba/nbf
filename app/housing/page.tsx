import { FocusPage } from "@/components/editorial/focus-page";
import { housingPage, housingSections } from "@/content/housing";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Housing",
  description: housingPage.introduction[0],
  path: "/housing",
});

export default function HousingPage() {
  return (
    <FocusPage
      eyebrow={housingPage.eyebrow}
      title={housingPage.title}
      lede={housingPage.introduction}
      image={images.home}
      sections={housingSections}
      supportLabel={housingPage.support.label}
      initiative={housingPage.support.initiative}
    />
  );
}
