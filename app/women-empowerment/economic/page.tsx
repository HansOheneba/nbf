import { FocusPage } from "@/components/editorial/focus-page";
import { economicPage, economicSections } from "@/content/empowerment";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Economic Empowerment",
  description: economicPage.introduction[0],
  path: "/women-empowerment/economic",
});

export default function EconomicEmpowermentPage() {
  return (
    <FocusPage
      eyebrow={economicPage.eyebrow}
      title={economicPage.title}
      lede={economicPage.introduction}
      image={images.portrait}
      sections={economicSections}
      supportLabel={economicPage.support.label}
      initiative={economicPage.support.initiative}
    />
  );
}
