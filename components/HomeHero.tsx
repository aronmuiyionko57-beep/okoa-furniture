"use client";

import { useEffect, useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import BlackNovemberBanner, {
  CAMPAIGN_START,
  CAMPAIGN_END,
} from "@/components/BlackNovemberBanner";

/**
 * Shows the Black November banner from 30 Oct to 30 Nov 2026, and the normal
 * hero carousel at any other time. The page is pre-rendered, so the banner is
 * the default and the date check runs in the visitor's browser.
 */
export default function HomeHero() {
  const [campaignLive, setCampaignLive] = useState(true);

  useEffect(() => {
    const now = new Date();
    setCampaignLive(now >= CAMPAIGN_START && now <= CAMPAIGN_END);
  }, []);

  return campaignLive ? <BlackNovemberBanner /> : <HeroCarousel />;
}