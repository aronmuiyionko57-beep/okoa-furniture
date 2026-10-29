"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/config";

// Runs from 30 October to 30 November 2026 (visitor's local time).
const START = new Date(2026, 9, 30, 0, 0, 0);
const END = new Date(2026, 10, 30, 23, 59, 59);

const MESSAGES = [
  "Order via WhatsApp",
  "Black November",
  "Up to 30% off",
  "Buy a sofa, get a free mirror",
  "Buy a bed, get a free pouffe",
  "Ends 30th November",
];

export default function PromoTicker() {
  const [live, setLive] = useState(true);

  useEffect(() => {
    const now = new Date();
    setLive(now >= START && now <= END);
  }, []);

  if (!live) return null;

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Black November offers. Order via WhatsApp"
      className="block overflow-hidden bg-okoa-orange py-2.5 text-white"
    >
      <div className="okoa-marquee flex w-max whitespace-nowrap" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {[...MESSAGES, ...MESSAGES].map((text, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center text-xs font-bold uppercase tracking-[0.3em]"
              >
                <span className="px-6">{text}</span>
                <span className="text-white/60">&#9670;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </a>
  );
}