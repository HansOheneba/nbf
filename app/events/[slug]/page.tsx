import { Suspense } from "react";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { events, getEvent } from "@/content/events";
import { pageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type EventParams = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: EventParams): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return { title: "Event" };
  if (slug === "sickle-cell-fundraiser") {
    return pageMetadata({
      title: campaign.name,
      description: campaign.hero.copy,
      path: campaign.path,
    });
  }
  return pageMetadata({
    title: event.title,
    description: event.summary,
    path: `/events/${event.slug}`,
  });
}

export default function EventPage({ params }: EventParams) {
  return (
    <Suspense fallback={<div className="min-h-[70vh] border-b border-border" />}>
      <EventContent params={params} />
    </Suspense>
  );
}

async function EventContent({ params }: EventParams) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  if (slug === "sickle-cell-fundraiser") redirect(campaign.path);

  return (
    <article>
      <header className="border-b border-border">
        <Container className="py-16 lg:py-24">
          <time dateTime={event.dateTime} className="eyebrow text-deep">
            {event.dateLabel}
          </time>
          <h1 className="mt-4 max-w-3xl text-h1">{event.title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-ink/80">{event.summary}</p>
        </Container>
      </header>
      <Container className="grid gap-12 py-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <EditorialImage
            image={event.image}
            aspect="aspect-[16/10]"
            sizes="(min-width: 1024px) 54vw, 100vw"
          />
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <ButtonLink href="/events">All events</ButtonLink>
        </div>
      </Container>
    </article>
  );
}
