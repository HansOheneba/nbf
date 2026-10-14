import Image from "next/image";
import Link from "next/link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { SplitFeature } from "@/components/editorial/split-feature";
import { CtaBand } from "@/components/editorial/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { DonationLink } from "@/components/campaign/donation-link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fundraiserCampaign } from "@/content/events";
import { homePage } from "@/content/home";
import { images } from "@/content/images";
import { programmes } from "@/content/programmes";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: site.name,
  description:
    "Every person deserves the opportunity to learn, live with dignity, access essential care and build a better future.",
  path: "/",
  absolute: true,
});

export default function Home() {
  const [education, health, housing, women] = programmes;

  return (
    <>
      <section className="home-hero relative flex min-h-[calc(100svh-var(--header-h))] flex-col overflow-x-clip border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] lg:object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,23,23,0.84)_0%,rgba(23,23,23,0.62)_28%,rgba(23,23,23,0.22)_58%,rgba(23,23,23,0.34)_100%)] lg:bg-[linear-gradient(180deg,rgba(23,23,23,0.2)_0%,rgba(23,23,23,0.08)_38%,rgba(23,23,23,0.78)_100%)]"
          />
        </div>
        <div className="home-hero-space relative z-10 flex min-h-0 flex-1 flex-col justify-center xl:justify-end">
          <Container className="home-hero-copy w-full py-6 sm:py-8 lg:py-12">
            <div className="max-w-4xl">
              <h1 className="hero-rise max-w-[11em] text-[clamp(2.75rem,12.5vw,3.25rem)] leading-[0.96] tracking-[-0.04em] text-balance text-white lg:max-w-4xl lg:text-display lg:leading-[0.86] lg:tracking-[-0.045em]">
                {homePage.hero.title}
              </h1>
              <div className="hero-rise hero-rise-2 mt-4 max-w-xl space-y-3 sm:mt-6 lg:mt-8 lg:space-y-4">
                {homePage.hero.paragraphs.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "home-hero-lead text-[1.0625rem] leading-[1.45] text-white/92 sm:text-body-lg"
                        : "hidden text-body-lg text-white/88 lg:block"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="hero-rise hero-rise-3 mt-4 flex flex-row flex-wrap items-center gap-2 sm:mt-8 sm:gap-3">
                <ButtonLink href={homePage.hero.primary.href} className="min-h-11 px-4 sm:min-h-12 sm:px-5">
                  {homePage.hero.primary.label}
                </ButtonLink>
                <ButtonLink
                  href={homePage.hero.secondary.href}
                  variant="on-dark"
                  className="min-h-11 px-4 sm:min-h-12 sm:px-5"
                >
                  {homePage.hero.secondary.label}
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <SplitFeature
        eyebrow={homePage.intro.eyebrow}
        title={homePage.intro.title}
        text={homePage.intro.paragraphs}
        href={homePage.intro.cta.href}
        hrefLabel={homePage.intro.cta.label}
        image={images.opp}
        reverse
      />

      <section className="border-b border-border bg-sage/40">
        <Container className="py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow text-deep">{homePage.focus.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-h1">{homePage.focus.title}</h2>
            <p className="mt-5 max-w-2xl text-body-lg text-ink/80">{homePage.focus.introduction}</p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-7">
            <EditorialImage
              image={education.image}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 54vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5">
            <p className="font-display text-h2 text-forest">01</p>
            <p className="eyebrow mt-4 text-deep">{education.eyebrow}</p>
            <h2 className="mt-3 text-h1">{education.headline}</h2>
            <p className="mt-5 text-body-lg text-ink/80">{education.summary}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {education.areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DonationLink initiative={education.initiative}>{education.donateLabel}</DonationLink>
              <ButtonLink href={education.href} variant="secondary">
                {education.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="overflow-x-clip border-b border-border bg-deep text-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5 lg:col-start-8">
            <p className="font-display text-h2 text-sage">02</p>
            <p className="eyebrow mt-4 text-sage">{health.eyebrow}</p>
            <h2 className="mt-3 text-h1">{health.headline}</h2>
            <p className="mt-5 text-body-lg text-paper/90">{health.summary}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {health.areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-small font-medium text-sage underline decoration-sage/40 underline-offset-4"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DonationLink initiative={health.initiative} variant="inverse">
                {health.donateLabel}
              </DonationLink>
              <ButtonLink href={health.href} variant="on-dark">
                {health.cta}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <EditorialImage
              image={health.image}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-white">
        <Container className="grid items-end gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-h2 text-forest">03</p>
            <p className="eyebrow mt-4 text-deep">{housing.eyebrow}</p>
            <h2 className="mt-3 text-h1">{housing.headline}</h2>
            <p className="mt-5 text-body-lg text-ink/80">{housing.summary}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {housing.areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DonationLink initiative={housing.initiative}>{housing.donateLabel}</DonationLink>
              <ButtonLink href={housing.href} variant="secondary">
                {housing.cta}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-6 lg:col-start-7">
            <EditorialImage
              image={housing.image}
              position="object-bottom"
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-sage/40">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
            <EditorialImage
              image={women.image}
              aspect="aspect-[16/10]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <p className="font-display text-h2 text-forest">04</p>
            <p className="eyebrow mt-4 text-deep">{women.eyebrow}</p>
            <h2 className="mt-3 text-h1">{women.headline}</h2>
            <p className="mt-5 text-body-lg text-ink/80">{women.summary}</p>
            <ul className="mt-6 flex flex-col gap-2">
              {women.areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="text-small font-medium text-deep underline decoration-deep/30 underline-offset-4"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DonationLink initiative={women.initiative}>{women.donateLabel}</DonationLink>
              <ButtonLink href={women.href} variant="secondary">
                {women.cta}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      <section data-theme="campaign" className="border-b border-border bg-paper">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-deep">{fundraiserCampaign.eyebrow}</p>
            <h2 className="mt-3 text-h1">{fundraiserCampaign.heroTitle}</h2>
            <p className="mt-5 max-w-xl text-body-lg text-ink/85">{fundraiserCampaign.homeCopy}</p>
            <p className="mt-4 text-small text-muted-foreground">
              A raffle will form part of the evening.
            </p>
            <time dateTime="2026-12-19" className="mt-6 block font-display text-h3 text-deep">
              19 December 2026
            </time>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DonationLink initiative="fundraiser">{fundraiserCampaign.donateLabel}</DonationLink>
              <ButtonLink href={fundraiserCampaign.path} variant="secondary">
                {fundraiserCampaign.exploreLabel}
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={images.campaign}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="py-16 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-deep">{homePage.participate.eyebrow}</p>
            <h2 className="mt-3 text-h1">{homePage.participate.title}</h2>
            <div className="mt-5 space-y-4">
              {homePage.participate.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
          <ul className="mt-12 border-t border-border">
            {homePage.participate.routes.map((route, index) => (
              <li key={route.href} className="border-b border-border">
                <a
                  href={route.href}
                  className="grid gap-2 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-h3 text-forest sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-h3 sm:col-span-4">{route.label}</span>
                  <span className="text-body text-ink/75 sm:col-span-7">{route.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={homePage.close.title}
        text={homePage.close.text}
        href={homePage.close.cta.href}
        label={homePage.close.cta.label}
      />
    </>
  );
}
