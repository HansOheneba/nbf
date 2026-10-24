import Link from "next/link";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/ui/container";
import { campaign } from "@/content/campaign";
import { site } from "@/content/site";

const links = [
  { href: campaign.donateHref, label: "Donate" },
  ...(campaign.attend.requestsOpen ? [{ href: `${campaign.path}#attend`, label: campaign.rsvpLabel }] : []),
  { href: campaign.sponsorHref, label: "Partnerships" },
  { href: campaign.auctionHref, label: "Auction lots" },
  { href: campaign.inKindHref, label: "In-kind support" },
  { href: campaign.enquireHref, label: "Campaign enquiry" },
  { href: "/health/sickle-cell", label: "Sickle cell facts" },
  { href: "/privacy", label: "Privacy" },
];

export function CampaignFooter() {
  return (
    <footer className="bg-campaign-deep text-white" aria-label="Red for a Reason">
      <Container className="grid gap-10 py-14 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-5">
          <p className="font-display text-h3 text-campaign-ball">{campaign.name}</p>
          <p className="mt-3 max-w-md text-body text-white/80">{campaign.footer.summary}</p>
        </div>
        <nav aria-label="Campaign" className="lg:col-span-4">
          <ul className="grid gap-2 sm:grid-cols-2">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-small underline decoration-white/30 underline-offset-4">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="lg:col-span-3">
          <p className="eyebrow text-white/70">An initiative of</p>
          <Link href="/" className="mt-4 inline-flex">
            <Logo variant="lockup-light" className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-small text-white/75">{site.name}</p>
        </div>
      </Container>
    </footer>
  );
}
