import { DonationLink } from "@/components/campaign/donation-link";
import { ShareCampaign } from "@/components/campaign/share-campaign";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Motif } from "@/components/motion/motif";
import { Reveal } from "@/components/motion/reveal";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fundraiserCampaign, type FoundationEvent } from "@/content/events";

export function FundraiserCampaign({ event }: { event: FoundationEvent }) {
  const campaign = fundraiserCampaign;
  const facts = [
    { label: "Date", value: event.dateLabel },
    ...(event.startTime ? [{ label: "Time", value: event.startTime }] : []),
    ...(event.venue ? [{ label: "Venue", value: event.venue }] : []),
  ];

  return (
    <>
      <section className="overflow-hidden border-b border-border">
        <Container className="grid items-end gap-12 py-12 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-deep">{campaign.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-display">{campaign.heroTitle}</h1>
            <p className="mt-8 max-w-xl text-body-lg text-ink/80">{campaign.heroCopy}</p>
            <time dateTime={event.dateTime} className="mt-8 block font-display text-h2">
              {event.dateLabel}
            </time>
            <p className="mt-2 text-small text-muted-foreground">{campaign.supportLabel}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DonationLink>{campaign.donateLabel}</DonationLink>
              <ButtonLink href="#evening" variant="secondary">
                {campaign.exploreLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <Motif className="-top-10 -left-8 z-0" />
            <div className="relative z-10">
              <EditorialImage
                image={event.image}
                priority
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <Reveal className="lg:col-span-6">
            <EditorialImage
              image={campaign.why.image}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-5 lg:col-start-8">
            <h2 className="text-h1">{campaign.why.title}</h2>
            <div className="mt-6 space-y-4 border-l-2 border-foundation pl-5">
              {campaign.why.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="surface-deep relative overflow-hidden bg-deep text-white">
        <Motif tone="foundation" className="-top-8 right-0 opacity-40" />
        <Container className="relative grid gap-10 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Logo variant="icon" className="h-16 w-16" />
            <h2 className="mt-8 text-h1">{campaign.purpose.title}</h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            {campaign.purpose.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-body-lg text-paper">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section id="evening" className="scroll-mt-20 border-b border-border">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-28">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-deep">The evening</p>
            <h2 className="mt-3 text-h1">{campaign.evening.title}</h2>
            <div className="mt-6 space-y-4">
              {campaign.evening.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            {facts.length > 1 ? (
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="eyebrow text-deep">{fact.label}</dt>
                    <dd className="mt-2 text-body">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            <div className="mt-8">
              <ButtonLink href={campaign.evening.href}>{campaign.evening.cta}</ButtonLink>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <EditorialImage
              image={campaign.evening.image}
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </Reveal>
        </Container>
      </section>

      <section id="support" className="scroll-mt-20 border-b border-border">
        <Container className="grid gap-6 py-16 lg:grid-cols-12 lg:py-28">
          <div className="surface-deep flex flex-col justify-between bg-deep p-8 text-white lg:col-span-5 lg:p-10">
            <div>
              <p className="eyebrow text-paper/80">01</p>
              <h2 className="mt-4 text-h2">Donate to the Cause</h2>
              <p className="mt-4 text-body-lg text-paper">
                Contribute towards medical facilities and treatment for children in Africa
                living with sickle cell.
              </p>
            </div>
            <div className="mt-8">
              <DonationLink variant="inverse">{campaign.donateLabel}</DonationLink>
            </div>
          </div>
          <div className="grid gap-6 bg-white p-8 lg:col-span-7 lg:grid-cols-2 lg:p-10">
            <EditorialImage
              image={campaign.attend.image}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 24vw, 100vw"
            />
            <div className="flex flex-col justify-end">
              <p className="eyebrow text-deep">02</p>
              <h2 className="mt-4 text-h3">{campaign.attend.title}</h2>
              <p className="mt-4 text-body text-ink/80">{campaign.attend.text}</p>
              <div className="mt-6">
                <ButtonLink href={campaign.attend.href} variant="secondary">
                  {campaign.attend.cta}
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8 border border-border p-8 sm:flex-row sm:items-end lg:col-span-12 lg:p-10">
            <div className="max-w-xl">
              <p className="eyebrow text-deep">03</p>
              <h2 className="mt-4 text-h2">{campaign.share.title}</h2>
              <p className="mt-4 text-body-lg text-ink/80">{campaign.share.text}</p>
            </div>
            <ShareCampaign
              path={campaign.path}
              title={campaign.heroTitle}
              text={campaign.heroCopy}
              label={campaign.share.cta}
            />
          </div>
        </Container>
      </section>

      <section className="surface-foundation bg-foundation text-white">
        <Container className="grid items-end gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Logo variant="icon" className="mb-8 h-16 w-16" />
            <h2 className="max-w-3xl text-display">{campaign.close.title}</h2>
            <p className="mt-6 max-w-xl text-body-lg">{campaign.close.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <DonationLink variant="inverse">{campaign.close.contribute}</DonationLink>
              <ShareCampaign
                path={campaign.path}
                title={campaign.heroTitle}
                text={campaign.heroCopy}
                label={campaign.close.share}
                variant="on-dark"
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              image={campaign.close.image}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
              captionClassName="text-white/80"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
