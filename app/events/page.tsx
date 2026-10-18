import Link from "next/link";
import { DonationLink } from "@/components/campaign/donation-link";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Motif } from "@/components/motion/motif";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { eventsPage, pastEvents, upcomingEvents } from "@/content/events";
import { pageMetadata } from "@/lib/metadata";
import { connection } from "next/server";
import { Suspense } from "react";

export const metadata = pageMetadata({
  title: "Events",
  description: eventsPage.description,
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <header className="overflow-hidden border-b border-border">
        <Container className="relative py-16 lg:py-24">
          <Motif className="top-8 right-0 opacity-80" />
          <div className="relative max-w-3xl">
            <p className="eyebrow text-deep">{eventsPage.eyebrow}</p>
            <h1 className="mt-4 text-display">{eventsPage.title}</h1>
            <p className="mt-6 max-w-2xl text-body-lg text-ink/80">{eventsPage.description}</p>
          </div>
        </Container>
      </header>

      <Suspense fallback={null}>
        <EventCatalogue />
      </Suspense>
    </>
  );
}

async function EventCatalogue() {
  await connection();
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = upcomingEvents(today);
  const past = pastEvents(today);
  const [featured, ...rest] = upcoming;

  return (
    <>
      {featured ? (
        <section data-theme="campaign" className="border-b border-border">
          <Container className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
            <Reveal className="lg:col-span-7">
              <EditorialImage
                image={featured.image}
                priority
                aspect="aspect-[4/5] lg:aspect-[5/4]"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5">
              <p className="eyebrow text-deep">Featured event</p>
              <time dateTime={featured.dateTime} className="mt-4 block font-display text-h3 text-deep">
                {featured.dateLabel}
              </time>
              <h2 className="mt-3 text-h1">{featured.title}</h2>
              <p className="mt-5 text-body-lg text-ink/80">{featured.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={featured.path}>{campaign.exploreLabel}</ButtonLink>
                <DonationLink initiative="fundraiser" variant="secondary">
                  {campaign.donateLabel}
                </DonationLink>
              </div>
              <div className="mt-6">
                <TextLink href={campaign.donateHref}>Support the cause without attending</TextLink>
              </div>
            </Reveal>
          </Container>
        </section>
      ) : (
        <Container className="border-b border-border py-16">
          <p className="max-w-xl text-body-lg text-ink/80">
            The next gathering will be announced on this page.
          </p>
        </Container>
      )}

      {rest.length > 0 ? (
        <Container className="border-b border-border py-16">
          <h2 className="text-h2">Also ahead</h2>
          <ul className="mt-8 border-t border-border">
            {rest.map((event) => (
              <li key={event.slug} className="border-b border-border">
                <Link
                  href={event.path}
                  className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline"
                >
                  <time dateTime={event.dateTime} className="text-small font-medium text-deep sm:col-span-3">
                    {event.dateLabel}
                  </time>
                  <span className="font-display text-h3 sm:col-span-9">{event.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ) : null}

      {past.length > 0 ? (
        <section className="bg-white">
          <Container className="py-16 lg:py-24">
            <h2 className="text-h2">Earlier gatherings</h2>
            <ul className="mt-8 border-t border-border">
              {past.map((event) => (
                <li key={event.slug} className="border-b border-border">
                  <Link
                  href={event.path}
                  className="grid gap-3 py-8 sm:grid-cols-12 sm:items-baseline"
                >
                    <time dateTime={event.dateTime} className="text-small text-muted-foreground sm:col-span-3">
                      {event.dateLabel}
                    </time>
                    <span className="sm:col-span-9">
                      <span className="block font-display text-h3">{event.title}</span>
                      <span className="mt-2 block max-w-2xl text-body text-ink/75">{event.summary}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}
