import Link from "next/link";
import { AttendRequest } from "@/components/campaign/attend-request";
import { CountdownTiles } from "@/components/campaign/countdown";
import { ShareCampaign } from "@/components/campaign/share-campaign";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Reveal } from "@/components/motion/reveal";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";

export function CampaignPage() {
  const open = campaign.attend.requestsOpen;

  return (
    <article>
      {/* Hero: name, when and where, the countdown, and the two things to do. */}
      <section className="overflow-hidden bg-campaign-deep text-white">
        <Container className="grid items-center gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <Logo variant="lockup-light" priority className="h-12 w-auto" />
            <p className="eyebrow mt-8 text-campaign-ball">{campaign.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-display uppercase">{campaign.name}</h1>
            <p className="mt-4 font-display text-h2 text-campaign-ball">{campaign.tagline}</p>
            <p className="mt-6 max-w-xl text-body-lg text-white/85">{campaign.hero.copy}</p>
            <ul className="mt-6 flex flex-wrap gap-2 text-small">
              <li className="border border-white/25 px-3 py-1.5">
                <time dateTime={campaign.dateTime}>{campaign.dateLabel}</time>
              </li>
              <li className="border border-white/25 px-3 py-1.5">From {campaign.arrival}</li>
              <li className="border border-white/25 px-3 py-1.5">{campaign.venue}</li>
            </ul>
            <CountdownTiles className="mt-8" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {open ? (
                <ButtonLink href="#attend" variant="inverse">
                  {campaign.rsvpLabel}
                </ButtonLink>
              ) : null}
              <ButtonLink href={campaign.donateHref} variant={open ? "on-dark" : "inverse"}>
                {campaign.donateLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <EditorialImage
              image={campaign.images.hero}
              priority
              aspect="aspect-[3/4]"
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </Container>
      </section>

      {/* Why red: three big lines and one sentence about the condition. */}
      <section className="border-b border-border" aria-labelledby="why-title">
        <Container className="grid items-end gap-12 py-16 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <p id="why-title" className="eyebrow text-deep">
              {campaign.why.eyebrow}
            </p>
            <ul className="mt-6">
              {campaign.why.lines.map((line, index) => {
                const [first, ...rest] = line.split(" ");
                return (
                  <li key={line} className="border-t border-border py-3 last:border-b">
                    <Reveal delay={index * 90}>
                      <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] uppercase">
                        <span className="text-campaign">{first}</span> {rest.join(" ")}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <EditorialImage
              image={campaign.images.wide}
              aspect="aspect-[4/3]"
              sizes="(min-width: 1024px) 30vw, 100vw"
            />
            <p className="mt-6 text-body text-ink/85">{campaign.why.text}</p>
            <p className="mt-4 text-caption text-muted-foreground">
              {campaign.why.review}{" "}
              <Link href="/health/sickle-cell" className="font-medium text-deep underline underline-offset-4">
                Sickle cell facts and sources
              </Link>
            </p>
          </div>
        </Container>
      </section>

      {/* The afternoon as a running order. */}
      <section id="afternoon" className="scroll-mt-24 border-b border-border bg-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <p className="eyebrow text-deep">{campaign.afternoon.eyebrow}</p>
              <h2 className="mt-3 text-h1">{campaign.afternoon.title}</h2>
              <p className="mt-5 max-w-md text-body-lg text-ink/80">{campaign.afternoon.lede}</p>
              <div className="mt-8 hidden lg:block">
                <EditorialImage
                  image={campaign.images.event}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 34vw, 100vw"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="relative">
              {/* The court line the times sit on. */}
              <span aria-hidden className="absolute top-3 bottom-3 left-[0.6875rem] w-0.5 bg-campaign/20" />
              {campaign.afternoon.runOfShow.map((slot, index) => (
                <li key={slot.time} className="relative grid grid-cols-[1.5rem_1fr] gap-x-5 pb-9 last:pb-0">
                  <span
                    aria-hidden
                    className="relative z-10 mt-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-campaign bg-white"
                  >
                    <span className={index === 2 ? "h-2.5 w-2.5 rounded-full bg-campaign-ball ring-2 ring-campaign" : "h-2 w-2 rounded-full bg-campaign"} />
                  </span>
                  <Reveal delay={index * 60}>
                    <p className="font-display text-h3 text-campaign">{slot.time}</p>
                    <h3 className="mt-1 text-h3">{slot.title}</h3>
                    <p className="mt-1 text-body text-ink/75">{slot.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-border pt-5 text-small text-ink/70">{campaign.afternoon.note}</p>
          </div>
        </Container>
      </section>

      {/* Join us. */}
      <section id="attend" className="scroll-mt-24 bg-campaign-deep text-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-campaign-ball">{campaign.dateLabel}</p>
            <h2 className="mt-3 text-h1 uppercase">
              {open ? campaign.attend.title : "Thank you."}
            </h2>
            <p className="mt-5 max-w-md text-body-lg text-white/85">
              {open ? campaign.attend.text : "There are still plenty of ways to be part of the day."}
            </p>
          </div>
          <div className="bg-paper p-5 text-ink sm:p-8 lg:col-span-6 lg:col-start-7">
            <AttendRequest />
          </div>
        </Container>
      </section>

      {/* Four ways in. */}
      <section className="border-b border-border">
        <Container className="py-16 lg:py-24">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-h1">{campaign.ways.title}</h2>
            <p className="max-w-sm text-body text-ink/75">{campaign.ways.intro}</p>
          </div>
          <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {campaign.ways.items.map((item, index) => (
              <li key={item.title} className="bg-paper">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col p-6 transition-colors hover:bg-campaign-deep hover:text-white sm:p-8"
                >
                  <span className="font-display text-h3 text-campaign group-hover:text-campaign-ball">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-6 font-display text-h3">{item.title}</span>
                  <span className="mt-2 flex-1 text-body text-ink/75 group-hover:text-white/80">{item.text}</span>
                  <span aria-hidden className="mt-6 text-h4 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Where the money goes, with the full detail one tap away. */}
      <section className="border-b border-border bg-white" aria-labelledby="money-title">
        <Container className="grid gap-8 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-5">
            <h2 id="money-title" className="text-h1">
              {campaign.money.title}
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-body-lg text-ink/85">{campaign.money.lede}</p>
            <details className="group mt-8 border-y border-border">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 font-display text-h4 [&::-webkit-details-marker]:hidden">
                {campaign.money.detailsLabel}
                <span aria-hidden className="text-h3 text-campaign transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="space-y-6 pb-6 text-body text-ink/80">
                <div className="grid gap-6 sm:grid-cols-2">
                  {campaign.money.priorities.map((priority) => (
                    <div key={priority.label}>
                      <h3 className="text-h4 text-ink">{priority.label}</h3>
                      <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-campaign">
                        {priority.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p>{campaign.money.clinical}</p>
                <p>{campaign.money.raised}</p>
                <div>
                  <h3 className="text-h4 text-ink">{campaign.money.separateLabel}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-campaign">
                    {campaign.money.separate.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <p>{campaign.money.report}</p>
              </div>
            </details>
          </div>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid items-end gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <h2 className="max-w-3xl text-h1">{campaign.close.title}</h2>
            <p className="mt-6 max-w-xl text-body-lg text-ink/80">{campaign.close.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={campaign.donateHref}>{campaign.donateLabel}</ButtonLink>
              <ShareCampaign
                path={campaign.path}
                title={`${campaign.name}. ${campaign.tagline}`}
                text={campaign.notice.description}
                label="Share the Campaign"
              />
            </div>
          </div>
          <p className="text-caption text-ink/60 lg:col-span-4 lg:col-start-9">
            Photographs illustrate the campaign. They are not pictures of guests, partners, or
            children the campaign hopes to support.
          </p>
        </Container>
      </section>
    </article>
  );
}
