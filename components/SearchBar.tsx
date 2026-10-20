"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { getDisplayPrice } from "@/lib/pricing";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const results =
    query.trim().length > 1
      ? products
          .filter((p) =>
            `${p.name} ${p.description} ${p.subcategory}`
              .toLowerCase()
              .includes(query.toLowerCase())
          )
          .slice(0, 6)
      : [];

  const handleResultClick = (slug: string) => {
    setOpen(false);
    setQuery("");
    router.push(`/product/${slug}`);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search products"
        className="flex items-center gap-2 text-gray-400 hover:border-okoa-orange hover:text-okoa-dark border border-gray-200 rounded-full px-4 py-2 text-sm transition-colors"
      >
        <SearchIcon />
        <span className="hidden xl:inline">Search furniture...</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 flex items-start justify-center pt-20 px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Search products"
        >
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-xl overflow-hidden">
            <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3">
              <SearchIcon />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sofas, beds, dining sets..."
                aria-label="Search products"
                className="flex-1 outline-none text-sm text-okoa-dark placeholder:text-gray-400"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="text-gray-400 hover:text-gray-600"
              >
                <CloseIcon />
              </button>
            </div>

            {query.trim().length > 1 && (
              <div className="max-h-96 overflow-y-auto">
                {results.length > 0 ? (
                  results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleResultClick(product.slug)}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-okoa-cream transition-colors text-left"
                    >
                      <div className="relative w-12 h-12 rounded-md overflow-hidden bg-okoa-cream shrink-0">
                        {product.images[0] !== "/images/placeholder.jpg" && (
                          <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-okoa-dark truncate">
                          {product.name}
                        </p>
                        {product.showPrice && (
                          <p className="text-xs text-okoa-orange font-semibold">
                            KSh {getDisplayPrice(product).toLocaleString()}
                          </p>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-gray-500 text-center py-8">
                    No furniture found for &quot;{query}&quot;
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}