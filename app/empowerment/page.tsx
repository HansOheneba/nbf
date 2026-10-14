import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/section-heading";
import { empowermentPage } from "@/content/empowerment";
import { housingPage } from "@/content/housing";
import { images } from "@/content/images";
import { programmes } from "@/content/programmes";
import { pageMetadata } from "@/lib/metadata";

const women = programmes.find((item) => item.slug === "women-empowerment");
const housing = programmes.find((item) => item.slug === "housing");

export const metadata = pageMetadata({
  title: "Empowerment",
  description: empowermentPage.introduction[0],
  path: "/empowerment",
});

export default function EmpowermentPage() {
  return (
    <>
      <PageIntro
        eyebrow={empowermentPage.eyebrow}
        title={empowermentPage.title}
        lede={empowermentPage.introduction}
      />

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <EditorialImage
              image={images.portrait}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-deep">Women&apos;s Empowerment</p>
            <h2 className="mt-3 text-h1">{women?.headline}</h2>
            <p className="mt-5 text-body-lg text-ink/85">{women?.summary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/women-empowerment">Explore Women&apos;s Empowerment</ButtonLink>
              <DonationLink initiative="women-empowerment" variant="secondary">
                Donate to Women&apos;s Empowerment
              </DonationLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-sage/50">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow text-deep">Housing</p>
            <h2 className="mt-3 text-h1">{housingPage.title}</h2>
            <div className="mt-5 space-y-4">
              {housingPage.introduction.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/empowerment/housing">{housing?.cta ?? "Explore Housing"}</ButtonLink>
              <DonationLink initiative="housing" variant="secondary">
                Donate to Housing
              </DonationLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={images.home}
              aspect="aspect-[4/5]"
              position="object-bottom"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-deep text-white">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <p className="max-w-xl text-body-lg text-paper/90">
            Donate to empowerment, including women&apos;s economic opportunity and housing.
          </p>
          <DonationLink initiative={empowermentPage.support.initiative} variant="inverse">
            {empowermentPage.support.label}
          </DonationLink>
        </Container>
      </section>
    </>
  );
}
