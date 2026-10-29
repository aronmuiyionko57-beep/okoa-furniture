"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { WHATSAPP_NUMBER } from "@/lib/config";

// Runs from 30 October to 30 November 2026 (visitor's local time).
const START = new Date(2026, 9, 30, 0, 0, 0);
const END = new Date(2026, 10, 30, 23, 59, 59);
const ROTATE_MS = 3500;

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const MESSAGES = [
  { text: "Black November: up to 30% off", cta: "Shop now", href: "/living-room" },
  { text: "Buy a sofa, get a free mirror", cta: "View sofas", href: "/living-room/sofas" },
  { text: "Buy a bed, get a free pouffe", cta: "View beds", href: "/bedroom/beds" },
  { text: "Order via WhatsApp", cta: "Chat now", href: WHATSAPP_URL },
  { text: "Offers end 30th November", cta: "Shop now", href: "/living-room" },
];

export default function PromoTicker() {
  const [live, setLive] = useState(true);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // The page is pre-rendered, so the strip shows by default and the
  // date check runs in the visitor's browser.
  useEffect(() => {
    const now = new Date();
    setLive(now >= START && now <= END);
  }, []);

  useEffect(() => {
    if (!live || paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % MESSAGES.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, [live, paused]);

  if (!live) return null;

  return (
    <div
      role="region"
      aria-label="Black November offers"
      className="relative h-10 overflow-hidden bg-okoa-orange text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {MESSAGES.map((m, i) => {
        const isActive = i === active;
        const isPrev = i === (active - 1 + MESSAGES.length) % MESSAGES.length;
        const position = isActive
          ? "translate-y-0 opacity-100"
          : isPrev
            ? "-translate-y-full opacity-0"
            : "translate-y-full opacity-0";
        const external = m.href.startsWith("http");
        const classes = `absolute inset-0 flex items-center justify-center gap-3 px-4 text-center text-xs font-bold uppercase tracking-[0.18em] transition-all duration-500 ease-in-out sm:text-[13px] ${position}`;
        const content = (
          <>
            <span>{m.text}</span>
            <span className="hidden shrink-0 border-b border-white/80 pb-px text-[11px] sm:inline">
              {m.cta}
            </span>
          </>
        );

        return external ? (
          <a
            key={m.text}
            href={m.href}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isActive ? 0 : -1}
            aria-hidden={!isActive}
            className={classes}
          >
            {content}
          </a>
        ) : (
          <Link
            key={m.text}
            href={m.href}
            tabIndex={isActive ? 0 : -1}
            aria-hidden={!isActive}
            className={classes}
          >
            {content}
          </Link>
        );
      })}

      {/* Progress dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-1"
      >
        {MESSAGES.map((m, i) => (
          <span
            key={m.text}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === active ? "w-4 bg-white" : "w-1 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}