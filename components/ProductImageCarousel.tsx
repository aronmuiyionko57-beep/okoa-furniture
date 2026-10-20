"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function CloseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ transform: direction === "left" ? "rotate(180deg)" : undefined }}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export default function ProductImageCarousel({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const hasRealImages = images[0] !== "/images/placeholder.jpg";

  useEffect(() => {
    if (!hasRealImages || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, hasRealImages]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setActive((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((p) => (p - 1 + images.length) % images.length);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, images.length]);

  if (!hasRealImages) {
    return (
      <div className="bg-okoa-cream rounded-xl aspect-square flex items-center justify-center text-gray-400">
        <span className="text-sm">Image coming soon</span>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => setLightboxOpen(true)}
        aria-label="View larger image"
        className="relative bg-okoa-cream rounded-xl aspect-square overflow-hidden mb-3 w-full cursor-zoom-in"
      >
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
      </button>

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

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${name} image viewer`}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
            className="absolute top-5 right-5 text-white hover:text-okoa-orange transition-colors"
          >
            <CloseIcon />
          </button>

          {images.length > 1 && (
            <>
              <button
                onClick={() => setActive((p) => (p - 1 + images.length) % images.length)}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 text-white hover:text-okoa-orange transition-colors"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                onClick={() => setActive((p) => (p + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-4 md:right-8 text-white hover:text-okoa-orange transition-colors"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}

          <div className="relative w-full h-full max-w-4xl max-h-[85vh]">
            <Image
              src={images[active]}
              alt={`${name} — image ${active + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-6 text-white text-sm">
              {active + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </div>
  );
}