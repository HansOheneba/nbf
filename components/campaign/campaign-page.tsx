import Link from "next/link";
import { CampaignEnquiryForm } from "@/components/campaign/campaign-enquiry-form";
import { DonationForm } from "@/components/campaign/donation-form";
import { ShareCampaign } from "@/components/campaign/share-campaign";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Logo } from "@/components/site/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { campaignPaymentConfig } from "@/lib/campaign-payment";

export function CampaignPage() {
  const payments = campaignPaymentConfig();

  return (
    <article>
      <section className="overflow-hidden bg-campaign-deep text-white">
        <Container className="grid items-end gap-10 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <Logo variant="lockup-light" priority className="h-12 w-auto" />
            <p className="eyebrow mt-8 text-campaign-ball">{campaign.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-display uppercase">{campaign.name}</h1>
            <p className="mt-4 font-display text-h2 text-campaign-ball">{campaign.tagline}</p>
            <p className="mt-6 max-w-xl text-body-lg text-white/85">{campaign.hero.copy}</p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              <div>
                <dt className="eyebrow text-white/60">Date</dt>
                <dd className="mt-2 font-display text-h4">
                  <time dateTime={campaign.dateTime}>{campaign.dateLabel}</time>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-white/60">From</dt>
                <dd className="mt-2 font-display text-h4">{campaign.arrival}</dd>
              </div>
              <div>
                <dt className="eyebrow text-white/60">Venue</dt>
                <dd className="mt-2 font-display text-h4">{campaign.venue}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={campaign.donateHref} variant="inverse">
                {campaign.donateLabel}
              </ButtonLink>
              <ButtonLink href="#attend" variant="on-dark">
                {campaign.rsvpLabel}
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
            <p className="mt-3 text-caption text-white/60">{campaign.images.hero.caption}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border" aria-labelledby="cause-title">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <EditorialImage
              image={campaign.images.wide}
              aspect="aspect-[3/2]"
              sizes="(min-width: 1024px) 46vw, 100vw"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-deep">The cause</p>
            <h2 id="cause-title" className="mt-3 text-h1">
              {campaign.cause.title}
            </h2>
            <div className="mt-6 space-y-4 border-l-2 border-campaign pl-5">
              {campaign.cause.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
            <p className="mt-6 text-small text-ink/75">{campaign.cause.review}</p>
            <p className="mt-3 text-caption text-muted-foreground">
              Reviewed for this website on {campaign.reviewDate}.{" "}
              <Link href="/health/sickle-cell" className="font-medium text-deep underline underline-offset-4">
                Read the sickle cell facts and sources
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-white">
        <Container className="grid gap-8 py-16 md:grid-cols-3 lg:py-24">
          {campaign.nameReasons.map((item) => (
            <div key={item.title} className="border-t-4 border-campaign pt-5">
              <h2 className="text-h3">{item.title}</h2>
              <p className="mt-3 text-body text-ink/80">{item.text}</p>
            </div>
          ))}
        </Container>
      </section>

      <section id="afternoon" className="scroll-mt-24 border-b border-border">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="eyebrow text-deep">{campaign.event.eyebrow}</p>
            <h2 className="mt-3 text-h1">{campaign.event.title}</h2>
            <div className="mt-6 space-y-4">
              {campaign.event.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <EditorialImage
              image={campaign.images.event}
              aspect="aspect-[4/5]"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
          </div>
        </Container>
        <div id="attend" className="scroll-mt-24">
        <Container className="grid gap-10 pb-16 lg:grid-cols-12 lg:pb-24">
          <div className="lg:col-span-5">
            <h3 className="text-h2">{campaign.event.attend.title}</h3>
            <p className="mt-5 text-body-lg text-ink/85">{campaign.event.attend.text}</p>
          </div>
          <div className="bg-white p-5 sm:p-8 lg:col-span-6 lg:col-start-7">
            <CampaignEnquiryForm kind="rsvp" />
          </div>
        </Container>
        </div>
        <Container className="border-t border-border py-16 lg:py-24">
          <h3 className="max-w-3xl text-h2">{campaign.event.purposeTitle}</h3>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {campaign.event.activities.map((activity) => (
              <li key={activity.title} className="border-t-4 border-campaign pt-5">
                <h4 className="text-h4">{activity.title}</h4>
                <p className="mt-3 text-body text-ink/80">{activity.text}</p>
              </li>
            ))}
          </ul>
          <div className="mt-16 max-w-3xl">
            <h3 className="text-h2">{campaign.event.dressTitle}</h3>
            <p className="mt-5 text-body-lg text-ink/85">{campaign.event.dress}</p>
          </div>
          <div className="mt-16 max-w-3xl">
            <h3 className="text-h2">{campaign.event.awayTitle}</h3>
            <p className="mt-5 text-body-lg text-ink/85">{campaign.event.away}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={campaign.donateHref}>{campaign.donateLabel}</ButtonLink>
              <ButtonLink href={campaign.sponsorHref} variant="secondary">
                Explore a partnership
              </ButtonLink>
              <ButtonLink href={campaign.auctionHref} variant="secondary">
                Contribute an auction item
              </ButtonLink>
            </div>
            <p className="mt-8 font-display text-h3 text-deep">{campaign.event.close}</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-white">
        <Container className="py-16 lg:py-24">
          <h2 className="max-w-3xl text-h1">{campaign.model.title}</h2>
          <p className="mt-5 max-w-2xl text-body-lg text-ink/80">{campaign.model.intro}</p>
          <ol className="mt-10 grid gap-6 md:grid-cols-2">
            {campaign.model.items.map((item, index) => (
              <li key={item.title} className="flex flex-col border border-border p-6">
                <p className="font-display text-h3 text-campaign">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-h3">{item.title}</h3>
                <p className="mt-3 flex-1 text-body text-ink/80">{item.text}</p>
                <div className="mt-6">
                  <ButtonLink href={item.href} variant={index === 0 ? "primary" : "secondary"}>
                    {item.cta}
                  </ButtonLink>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-small text-ink/75">
            For any other question,{" "}
            <Link href={campaign.enquireHref} className="font-medium text-deep underline underline-offset-4">
              write to the campaign
            </Link>
            .
          </p>
        </Container>
      </section>

      <section id="donate" className="scroll-mt-24 border-b border-border bg-campaign-deep text-white">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-5">
            <p className="eyebrow text-campaign-ball">{campaign.donate.eyebrow}</p>
            <h2 className="mt-3 text-h1">{campaign.donate.title}</h2>
            <div className="mt-6 space-y-4">
              {campaign.donate.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body-lg text-white/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="bg-paper p-5 text-ink sm:p-8 lg:col-span-6 lg:col-start-7">
            <DonationForm methods={payments.configured ? payments.methods : []} />
          </div>
        </Container>
      </section>

      <section className="border-b border-border" aria-labelledby="funds-title">
        <Container className="py-16 lg:py-24">
          <h2 id="funds-title" className="max-w-3xl text-h1">
            {campaign.funds.title}
          </h2>
          <p className="mt-5 max-w-2xl text-body-lg text-ink/80">{campaign.funds.intro}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {campaign.funds.priorities.map((priority) => (
              <div key={priority.label} className="bg-white p-6 sm:p-8">
                <h3 className="text-h3">{priority.label}</h3>
                <ul className="mt-5 space-y-3">
                  {priority.items.map((item) => (
                    <li key={item} className="border-l-2 border-campaign pl-4 text-body text-ink/85">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-body text-ink/80">{campaign.funds.clinical}</p>
        </Container>
      </section>

      <section className="border-b border-border bg-white" aria-labelledby="account-title">
        <Container className="grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="eyebrow text-deep">Accountability</p>
            <h2 id="account-title" className="mt-3 text-h1">
              {campaign.accountability.title}
            </h2>
            <div className="mt-6 space-y-4">
              {campaign.accountability.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-body text-ink/85">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <h3 className="text-h4">Kept separate from cash received</h3>
            <ul className="mt-4 space-y-3">
              {campaign.accountability.separate.map((item) => (
                <li key={item} className="text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-body text-ink/80">{campaign.accountability.report}</p>
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
          <p className="text-small text-ink/70 lg:col-span-4 lg:col-start-9">
            The portrait and the tennis photographs illustrate the campaign. They are not pictures of
            guests, partners, or children the campaign hopes to support.
          </p>
        </Container>
      </section>
    </article>
  );
}
