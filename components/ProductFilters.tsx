"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";
import { PhoneIcon } from "@/components/icons";
import { WHATSAPP_NUMBER, SITE_URL } from "@/lib/config";

const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under KSh 30,000", min: 0, max: 30000 },
  { label: "KSh 30,000 – 60,000", min: 30000, max: 60000 },
  { label: "KSh 60,000 – 100,000", min: 60000, max: 100000 },
  { label: "Above KSh 100,000", min: 100000, max: Infinity },
];

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function ProductFilters({ items }: { items: Product[] }) {
  const [priceRange, setPriceRange] = useState(0);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...items];
    const range = PRICE_RANGES[priceRange];

    result = result.filter((p) => {
      const price = getDisplayPrice(p);
      return price >= range.min && price <= range.max;
    });

    if (onSaleOnly) {
      result = result.filter((p) => isOnSale(p));
    }

    if (sort === "price-asc") {
      result.sort((a, b) => getDisplayPrice(a) - getDisplayPrice(b));
    } else if (sort === "price-desc") {
      result.sort((a, b) => getDisplayPrice(b) - getDisplayPrice(a));
    }

    return result;
  }, [items, priceRange, onSaleOnly, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-100">
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          aria-label="Filter by price"
          className="border border-gray-200 rounded-md px-3 py-2 text-sm text-okoa-dark focus:outline-none focus:border-okoa-orange"
        >
          {PRICE_RANGES.map((r, i) => (
            <option key={r.label} value={i}>
              {r.label}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 text-sm text-okoa-dark cursor-pointer border border-gray-200 rounded-md px-3 py-2">
          <input
            type="checkbox"
            checked={onSaleOnly}
            onChange={(e) => setOnSaleOnly(e.target.checked)}
            className="accent-okoa-orange"
          />
          On Offer Only
        </label>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort products"
          className="border border-gray-200 rounded-md px-3 py-2 text-sm text-okoa-dark focus:outline-none focus:border-okoa-orange ml-auto"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <span className="text-xs text-gray-400 w-full sm:w-auto">
          {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </span>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const onSale = product.showPrice && isOnSale(product);
            const discount = onSale ? getDiscountPercent(product) : 0;
            const displayPrice = getDisplayPrice(product);

            return (
              <div
                key={product.id}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500"
              >
                <Link href={`/product/${product.slug}`}>
                  <div className="bg-okoa-cream aspect-square relative overflow-hidden">
                    {onSale && (
                      <span className="absolute top-2 right-2 z-10 bg-okoa-orange text-white text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow-md">
                        Offer {discount}%
                      </span>
                    )}
                    {product.images[0] === "/images/placeholder.jpg" ? (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                        Image coming soon
                      </div>
                    ) : (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4 pb-0">
                    <h3 className="font-medium text-okoa-dark group-hover:text-okoa-orange transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </Link>
                <div className="p-4 pt-2">
                  {product.showPrice && (
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-okoa-orange font-semibold">
                        KSh {displayPrice.toLocaleString()}
                      </span>
                      {onSale && (
                        <span className="text-gray-400 text-sm line-through">
                          KSh {product.regularPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <a
                      href={getWhatsAppOrderLink(
                        product.name,
                        product.showPrice ? displayPrice : undefined,
                        `${SITE_URL}/product/${product.slug}`
                      )}
                      target="_blank"
                      className="flex-1 text-center bg-okoa-dark text-white py-2.5 rounded-md text-sm font-semibold uppercase tracking-wide hover:bg-okoa-orange transition-colors duration-300"
                    >
                      Order via WhatsApp
                    </a>
                    <a
                      href={`tel:+${WHATSAPP_NUMBER}`}
                      aria-label="Call us"
                      className="shrink-0 w-11 flex items-center justify-center border border-gray-200 rounded-md text-okoa-dark hover:border-okoa-dark hover:bg-okoa-dark hover:text-white transition-colors duration-300"
                    >
                      <PhoneIcon />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-12">
          No furniture matches these filters. Try adjusting your selection.
        </p>
      )}
    </div>
  );
}