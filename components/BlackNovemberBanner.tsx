"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { products, Product } from "@/data/products";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";
import { WHATSAPP_NUMBER } from "@/lib/config";

// Campaign window: 30 October to 30 November 2026 (visitor's local time).
export const CAMPAIGN_START = new Date(2026, 9, 30, 0, 0, 0);
export const CAMPAIGN_END = new Date(2026, 10, 30, 23, 59, 59);

const SPOTLIGHT_ROOMS = ["living-room", "bedroom", "dining-room", "tv-area"];

/** One top-discount piece per room, highest price first, so the banner shows range. */
function getSpotlight(): Product[] {
  const picks: Product[] = [];
  for (const room of SPOTLIGHT_ROOMS) {
    const best = products
      .filter(
        (p) =>
          p.room === room &&
          p.showPrice &&
          isOnSale(p) &&
          getDiscountPercent(p) >= 30 &&
          p.images[0] &&
          p.images[0] !== "/images/placeholder.jpg"
      )
      .sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a))[0];
    if (best) picks.push(best);
  }
  return picks.slice(0, 4);
}

const spotlight = getSpotlight();

const TICKER = [
  "Order via WhatsApp",
  "Black November",
  "Up to 30% off",
  "Buy a sofa, get a free mirror",
  "Buy a bed, get a free pouffe",
  "Ends 30th November",
];

// Free-gift offers. Images are existing catalogue photos.
const GIFT_OFFERS = [
  {
    buyLabel: "Buy a Sofa",
    giftLabel: "Free Mirror",
    buyImage: "/images/products/round-arm-sofa-3-seater-blue-chenille.jpg",
    giftImage: "/images/products/gold-arched-leaning-mirror.jpg",
    href: "/living-room/sofas",
  },
  {
    buyLabel: "Buy a Bed",
    giftLabel: "Free Pouffe",
    buyImage: "/images/products/white-stepped-panel-wooden-bed-5x6.jpg",
    giftImage: "/images/products/chesterfield-storage-pouf.jpg",
    href: "/bedroom/beds",
  },
];

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function getTimeLeft() {
  const diff = Math.max(0, CAMPAIGN_END.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function BlackNovemberBanner() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const units = [
    { label: "Days", value: time ? String(time.days) : "--" },
    { label: "Hours", value: time ? pad(time.hours) : "--" },
    { label: "Mins", value: time ? pad(time.minutes) : "--" },
    { label: "Secs", value: time ? pad(time.seconds) : "--" },
  ];

  return (
    <section
      aria-label="Black November offers"
      className="relative overflow-hidden bg-[#0a0a0a] text-white"
    >
      {/* Ticker */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order via WhatsApp"
        className="relative z-10 block overflow-hidden border-b border-white/10 bg-okoa-orange py-2.5"
      >
        <div className="okoa-marquee flex w-max whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[...TICKER, ...TICKER].map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="flex items-center text-xs font-bold uppercase tracking-[0.3em] text-white"
                >
                  <span className="px-6">{t}</span>
                  <span className="text-white/60">&#9670;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </a>

      {/* Atmosphere: glow, diagonal grain and edge lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(242,106,33,0.35),transparent_55%),radial-gradient(ellipse_at_90%_90%,rgba(242,106,33,0.18),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:repeating-linear-gradient(135deg,#fff_0,#fff_1px,transparent_1px,transparent_14px)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-okoa-orange to-transparent"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:py-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        {/* Left: the message */}
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-okoa-orange">
            <span className="okoa-pulse-dot inline-block h-2 w-2 rounded-full bg-okoa-orange" />
            OKOA Furniture presents
          </p>

          <h1 className="font-[family-name:var(--font-playfair)] text-[clamp(2.6rem,8vw,5.5rem)] font-black uppercase leading-[0.95] tracking-tight">
            Black
            <br />
            November
          </h1>

          <div className="mt-5 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1 lg:justify-start">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
              Up to
            </span>
            <span className="okoa-shimmer-text font-[family-name:var(--font-playfair)] text-[clamp(4rem,14vw,8rem)] font-black leading-none">
              30%
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-300">
              Off
            </span>
          </div>

          <p className="mx-auto mt-4 max-w-md text-base text-gray-300 lg:mx-0">
            Offers on selected furniture across every room, plus free gifts
            when you buy. Offer ends 30th November.
          </p>

          {/* Free-gift offers */}
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 lg:mx-0">
            {GIFT_OFFERS.map((o) => (
              <Link
                key={o.buyLabel}
                href={o.href}
                className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-okoa-orange/50 bg-gradient-to-br from-okoa-orange/20 to-white/5 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-okoa-orange"
              >
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={o.buyImage}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <span
                  aria-hidden="true"
                  className="text-lg font-bold text-okoa-orange"
                >
                  +
                </span>
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md ring-2 ring-okoa-orange">
                  <Image
                    src={o.giftImage}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-300">
                    {o.buyLabel}
                  </p>
                  <p className="font-[family-name:var(--font-playfair)] text-base font-bold leading-tight text-white">
                    Get a <span className="text-okoa-orange">{o.giftLabel}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Countdown */}
          <div
            className="mx-auto mt-7 grid max-w-sm grid-cols-4 gap-2 lg:mx-0"
            role="timer"
            aria-label="Time left in the Black November offer"
          >
            {units.map((u) => (
              <div
                key={u.label}
                className="rounded-md border border-white/15 bg-white/5 px-2 py-3 text-center backdrop-blur-sm"
              >
                <div className="font-[family-name:var(--font-playfair)] text-2xl font-bold tabular-nums md:text-3xl">
                  {u.value}
                </div>
                <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#browse-all"
              className="inline-block rounded-md bg-okoa-orange px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_30px_-8px_rgba(242,106,33,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-okoa-dark"
            >
              Shop the Offers
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md border border-white/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-okoa-orange hover:text-okoa-orange"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Right: spotlight pieces */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {spotlight.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.slug}`}
              className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-1 hover:border-okoa-orange/60"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={p.images[0]}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-0 top-3 bg-okoa-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                  -{getDiscountPercent(p)}%
                </span>
              </div>
              <div className="p-3">
                <h2 className="line-clamp-1 text-sm font-medium text-white">
                  {p.name}
                </h2>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-sm font-bold text-okoa-orange">
                    KSh {getDisplayPrice(p).toLocaleString()}
                  </span>
                  <span className="text-xs text-gray-400 line-through">
                    KSh {p.regularPrice.toLocaleString()}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}