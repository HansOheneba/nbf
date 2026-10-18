import { CampaignFooter } from "@/components/campaign/campaign-footer";
import type { ReactNode } from "react";

export default function CampaignLayout({ children }: { children: ReactNode }) {
  return (
    <div data-theme="campaign" className="bg-paper text-ink">
      {children}
      <CampaignFooter />
    </div>
  );
}
