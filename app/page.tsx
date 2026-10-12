import { EditorialImage } from "@/components/editorial/editorial-image";
import { ResourceIndex } from "@/components/editorial/resource-index";
import { SplitFeature } from "@/components/editorial/split-feature";
import { CtaBand } from "@/components/editorial/cta-band";
import { InitiativeFeature } from "@/components/initiatives/initiative-feature";
import { Motif } from "@/components/motion/motif";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { articles } from "@/content/articles";
import { images } from "@/content/images";
import { featuredInitiative } from "@/content/initiatives";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: site.name,
  description:
    "Awareness is where change begins. Nana Boatemah Foundation focuses on education and understanding, beginning with sickle cell.",
  path: "/",
  absolute: true,
});

export default function Home() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="grid items-end gap-12 py-12 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-deep">Nana Boatemah Foundation</p>
            <h1 className="mt-5 max-w-4xl text-display">
              Awareness is where <span className="text-foundation">change begins.</span>
            </h1>
            <p className="mt-8 max-w-xl text-body-lg text-ink/80">
              A more informed world is a more compassionate one. We believe that knowledge
              can challenge misconceptions, open conversations and bring people closer to
              meaningful change.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/initiatives">Explore Our Work</ButtonLink>
              <ButtonLink href="/get-involved" variant="secondary">
                Get Involved
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <Motif className="-top-8 -left-8 z-0" />
            <div className="relative z-10">
              <EditorialImage
                image={images.portrait}
                priority
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <SplitFeature
        eyebrow="Why we exist"
        title="Beyond awareness. Towards understanding."
        text={[
          "Some of the most important changes begin with a conversation. A question asked. A misconception challenged. A person choosing to learn instead of judge.",
          "At Nana Boatemah Foundation, we want to help create space for those moments — bringing attention to important issues, making knowledge easier to access and encouraging people to become part of positive change.",
        ]}
        href="/about"
        hrefLabel="About the foundation"
        image={images.conversation}
        reverse
      />

      <section className="surface-ink bg-ink text-paper">
        <Container className="relative py-20 lg:py-32">
          <Motif tone="foundation" className="-top-6 right-0 opacity-30" />
          <Reveal>
            <p className="relative max-w-4xl font-display text-h1 text-paper">
              A question asked. A misconception challenged. A person choosing to learn
              instead of judge.
            </p>
          </Reveal>
        </Container>
      </section>

      <InitiativeFeature
        initiative={featuredInitiative}
        eyebrow="Featured initiative"
        title="Sickle cell awareness matters."
        text="Understanding sickle cell disease starts with knowing the facts. Through awareness and education, we can encourage informed conversations, challenge stigma and help more people understand the importance of knowing their sickle cell status."
        ctaLabel="Learn About Sickle Cell"
      />

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-deep">Take part</p>
            <h2 className="mt-3 text-h1">Change doesn&apos;t happen in isolation.</h2>
            <p className="mt-5 max-w-xl text-body-lg text-ink/80">
              Every informed conversation, shared resource and meaningful connection can
              help an important issue reach someone new.
            </p>
            <div className="mt-8">
              <ButtonLink href="/get-involved">Find Out How to Get Involved</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={images.gathering}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Resources"
              title="Knowledge is worth sharing."
              lede="Three educational articles introduce sickle cell disease, the difference between trait and disease, and why a blood test is how a person knows their status."
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <ResourceIndex items={articles} />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="The next conversation could make a difference."
        text="Start by learning. Share what matters. Help create room for greater understanding."
        href="/stories"
        label="Explore Our Resources"
      />
    </>
  );
}
