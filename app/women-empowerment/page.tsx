import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { economicPage, womenPage } from "@/content/empowerment";
import { images } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Women's Empowerment",
  description: womenPage.introduction[0],
  path: "/women-empowerment",
});

export default function WomenEmpowermentPage() {
  return (
    <>
      <PageIntro eyebrow={womenPage.eyebrow} title={womenPage.title} lede={womenPage.introduction} />

      <section className="bg-sage/40">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <EditorialImage
              image={images.gathering}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-deep">Economic Empowerment</p>
            <h2 className="mt-3 text-h1">{economicPage.title}</h2>
            <div className="mt-5 space-y-4">
              {economicPage.introduction.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/women-empowerment/economic">Explore Economic Empowerment</ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <p className="max-w-xl text-body-lg text-ink/80">
            Donate to women&apos;s empowerment, including economic empowerment.
          </p>
          <DonationLink initiative={womenPage.support.initiative}>{womenPage.support.label}</DonationLink>
        </Container>
      </section>
    </>
  );
}
