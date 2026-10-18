import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";

export function CampaignArticle({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <article>
      <header className="border-b border-white/10 bg-campaign-deep text-white">
        <Container className="py-14 lg:py-20">
          <p className="eyebrow text-campaign-ball">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-h1">{title}</h1>
          <p className="mt-6 max-w-2xl text-body-lg text-white/85">{lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={campaign.donateHref} variant="inverse">
              {campaign.donateLabel}
            </ButtonLink>
            <ButtonLink href={campaign.path} variant="on-dark">
              Back to the campaign
            </ButtonLink>
          </div>
        </Container>
      </header>
      {children}
    </article>
  );
}
