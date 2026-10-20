"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";

const heroSlugs = [
  "round-arm-sofa-3-seater",
  "mahogany-dining-set-ladder-back",
  "cream-tufted-l-shape-sofa-usb",
  "box-arm-sofa-set",
  "adjustable-l-shape-sectional-sofa-cream",
];

const heroProducts = heroSlugs
  .map((slug) => products.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

export default function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % heroProducts.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (heroProducts.length === 0) return null;

  const current = heroProducts[active];
  const onSale = current.showPrice && isOnSale(current);
  const discount = onSale ? getDiscountPercent(current) : 0;
  const displayPrice = getDisplayPrice(current);

  return (
    <section
      className="relative bg-okoa-dark text-white h-[85vh] min-h-[560px] overflow-hidden"
      role="region"
      aria-label="Featured furniture carousel"
    >
      {heroProducts.map((product, i) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === active ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            backgroundImage: `url(${product.images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/35" />
        </div>
      ))}

      {onSale && (
        <div className="absolute top-8 right-6 md:right-14 z-20 bg-okoa-orange text-white text-xs font-bold uppercase tracking-[0.15em] px-4 py-2 rounded-full shadow-lg">
          Limited Offer — {discount}% Off
        </div>
      )}

      <div className="absolute bottom-10 left-6 md:left-14 z-20 max-w-md">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-5xl font-medium leading-tight mb-3">
          {current.name}
        </h1>
        {current.showPrice && (
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xl md:text-2xl font-semibold text-okoa-orange">
              KSh {displayPrice.toLocaleString()}
            </span>
            {onSale && (
              <span className="text-base text-gray-300 line-through">
                KSh {current.regularPrice.toLocaleString()}
              </span>
            )}
          </div>
        )}
        <a
          href={`/product/${current.slug}`}
          className="inline-block border border-white/70 text-white px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] hover:bg-white hover:text-okoa-dark transition-colors duration-300"
        >
          View This Piece
        </a>
      </div>

      <div className="absolute bottom-10 right-6 md:right-14 z-20 flex gap-2">
        {heroProducts.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1} of ${heroProducts.length}: ${heroProducts[i].name}`}
            aria-current={i === active}
            className={`h-px transition-all duration-500 ${
              i === active ? "w-10 bg-white" : "w-5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}