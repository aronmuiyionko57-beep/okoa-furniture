"use client";

import { useState, useEffect } from "react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: string;
  primaryLabel?: string;
  primaryHref?: string;
  promo?: boolean;
};

const slides: Slide[] = [
  {
    image: "/images/products/round-arm-sofa-3-seater.jpg",
    eyebrow: "Quality Meets Comfort",
    title: "The Home of\nModern Designs",
    subtitle: "Quality furniture for every room — crafted for comfort, built to last.",
  },
  {
    image: "/images/products/box-arm-sofa-set.jpg",
    eyebrow: "Custom Made",
    title: "Furniture Built\nAround You",
    subtitle: "Tailored pieces designed to fit your space, style, and budget.",
  },
  {
    image: "/images/products/adjustable-l-shape-sectional-sofa-cream.jpg",
    eyebrow: "Order With Ease",
    title: "Shop, Chat,\nDelivered",
    subtitle: "Browse online, order instantly via WhatsApp — no hassle.",
  },
];

// Campaign window: 30 October to 30 November 2026 (inclusive, visitor's local time).
const CAMPAIGN_START = new Date(2026, 9, 30, 0, 0, 0);
const CAMPAIGN_END = new Date(2026, 10, 30, 23, 59, 59);

const blackNovemberSlide: Slide = {
  image: "/images/products/charcoal-chenille-l-shape-sectional-storage-ottoman.jpg",
  eyebrow: "Black November",
  title: "Black November\nOffers",
  badge: "Get up to 30% off",
  subtitle: "Offers on selected furniture, until 30th November.",
  primaryLabel: "Shop the Offers",
  primaryHref: "#browse-all",
  promo: true,
};

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [isNovember, setIsNovember] = useState(false);

  // Decided on the client so the banner follows the visitor's date
  // without causing a server/client mismatch.
  useEffect(() => {
    const now = new Date();
    if (now >= CAMPAIGN_START && now <= CAMPAIGN_END) {
      setIsNovember(true);
      setActive(0);
    }
  }, []);

  const allSlides = isNovember ? [blackNovemberSlide, ...slides] : slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % allSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allSlides.length]);

  return (
    <section className="relative bg-okoa-dark text-white h-[600px] overflow-hidden">
      {allSlides.map((slide, i) => (
        <div
          key={slide.promo ? "black-november" : slide.image}
          className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-transform duration-700 ease-in-out ${
            i === active ? "z-10" : "z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateX(${(i - active) * 100}%)`,
          }}
        >
          <div
            className={`absolute inset-0 ${
              slide.promo ? "bg-black/75" : "bg-black/50"
            }`}
          />
          <div className="relative">
            <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              {slide.eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
              {slide.title}
            </h1>
            {slide.badge && (
              <p className="inline-block mb-6 bg-okoa-orange text-white px-6 py-2 rounded-full text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                {slide.badge}
              </p>
            )}
            <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={slide.primaryHref ?? "#shop-by-room"}
                className="inline-block bg-okoa-orange text-white px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-okoa-white hover:text-okoa-dark transition-colors duration-300"
              >
                {slide.primaryLabel ?? "Shop by Room"}
              </a>
              <a
                href="https://wa.me/254711682894"
                target="_blank"
                className="inline-block border border-gray-500 text-white px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:border-okoa-orange hover:text-okoa-orange transition-colors duration-300"
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {allSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-okoa-orange" : "w-1.5 bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}