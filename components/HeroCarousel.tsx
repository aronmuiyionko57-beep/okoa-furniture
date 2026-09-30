"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    image: "", // add real image path later, e.g. "/images/hero-living-room.jpg"
    eyebrow: "Quality Meets Comfort",
    title: "The Home of\nModern Designs",
    subtitle: "Quality furniture for every room — crafted for comfort, built to last.",
  },
  {
    image: "",
    eyebrow: "Custom Made",
    title: "Furniture Built\nAround You",
    subtitle: "Tailored pieces designed to fit your space, style, and budget.",
  },
  {
    image: "",
    eyebrow: "Order With Ease",
    title: "Shop, Chat,\nDelivered",
    subtitle: "Browse online, order instantly via WhatsApp — no hassle.",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-okoa-dark text-white h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center text-center px-4 transition-opacity duration-1000 ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={
            slide.image
              ? {
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        >
          {slide.image && (
            <div className="absolute inset-0 bg-black/50" />
          )}
          <div className="relative">
            <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              {slide.eyebrow}
            </p>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-6 leading-tight whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto mb-10 text-lg">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#shop-by-room"
                className="inline-block bg-okoa-orange text-white px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-white hover:text-okoa-dark transition-colors duration-300"
              >
                Shop by Room
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
        {slides.map((_, i) => (
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