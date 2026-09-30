"use client";

import { useState } from "react";
import Link from "next/link";

const furnitureTypes = [
  "Sofa",
  "Bed",
  "Dining Set",
  "TV Unit",
  "Wardrobe",
  "Other",
];

const materials = ["Fabric", "Leather", "Wood", "Velvet", "Not sure yet"];

export default function CustomFurniturePage() {
  const [type, setType] = useState("");
  const [material, setMaterial] = useState("");
  const [details, setDetails] = useState("");

  const buildMessage = () => {
    const parts = [
      "Hi, I'd like a custom furniture quote.",
      type && `Item: ${type}`,
      material && `Preferred material: ${material}`,
      details && `Details: ${details}`,
    ].filter(Boolean);
    return encodeURIComponent(parts.join("\n"));
  };

  const canSubmit = type !== "";

  return (
    <main>
      {/* Page header */}
      <section className="bg-okoa-dark text-white py-16 px-4 text-center">
        <nav className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-okoa-orange transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-okoa-orange">Custom Furniture</span>
        </nav>
        <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-4">
          Made For You
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
          Custom Furniture
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Tell us what you have in mind — style, material, size — and we&apos;ll
          get back to you with a tailored quote.
        </p>
      </section>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-8">
          {/* Step 1: Furniture type */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-okoa-dark mb-4">
              1. What are you looking for?
            </h2>
            <div className="flex flex-wrap gap-2">
              {furnitureTypes.map((item) => (
                <button
                  key={item}
                  onClick={() => setType(item)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors duration-200 ${
                    type === item
                      ? "bg-okoa-dark text-white border-okoa-dark"
                      : "border-gray-200 text-gray-600 hover:border-okoa-orange"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Material */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-okoa-dark mb-4">
              2. Preferred material (optional)
            </h2>
            <div className="flex flex-wrap gap-2">
              {materials.map((item) => (
                <button
                  key={item}
                  onClick={() => setMaterial(item)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors duration-200 ${
                    material === item
                      ? "bg-okoa-dark text-white border-okoa-dark"
                      : "border-gray-200 text-gray-600 hover:border-okoa-orange"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Details */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-okoa-dark mb-4">
              3. Tell us more (optional)
            </h2>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Size, color, inspiration, room it's for..."
              rows={4}
              className="w-full border border-gray-200 rounded-md p-3 text-sm text-okoa-dark focus:outline-none focus:border-okoa-orange transition-colors resize-none"
            />
          </div>

          <a
            href={
              canSubmit
                ? `https://wa.me/254711682894?text=${buildMessage()}`
                : undefined
            }
            target="_blank"
            aria-disabled={!canSubmit}
            className={`block text-center px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest transition-colors duration-300 ${
              canSubmit
                ? "bg-okoa-orange text-white hover:bg-okoa-dark cursor-pointer"
                : "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none"
            }`}
          >
            Send Request via WhatsApp
          </a>
          {!canSubmit && (
            <p className="text-xs text-gray-400 text-center mt-3">
              Select an item type to continue
            </p>
          )}
        </div>
      </div>
    </main>
  );
}