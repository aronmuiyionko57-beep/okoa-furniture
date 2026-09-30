"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProductImageCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const hasRealImages = images[0] !== "/images/placeholder.jpg";

  useEffect(() => {
    if (!hasRealImages || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, hasRealImages]);

  if (!hasRealImages) {
    return (
      <div className="bg-okoa-cream rounded-xl aspect-square flex items-center justify-center text-gray-400">
        <span className="text-sm">Image coming soon</span>
      </div>
    );
  }

  return (
    <div>
      <div className="relative bg-okoa-cream rounded-xl aspect-square overflow-hidden mb-3">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`${name} — image ${i + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 justify-center">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative w-16 h-16 rounded-md overflow-hidden border-2 transition-colors ${
                i === active ? "border-okoa-orange" : "border-transparent"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}