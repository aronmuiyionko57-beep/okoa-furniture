import { products } from "@/data/products";
import { rooms } from "@/data/categories";
import { notFound } from "next/navigation";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";
import { getAvailabilityLabel, getAvailabilityColor } from "@/lib/availability";
import { SITE_URL } from "@/lib/config";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { PhoneIcon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return { title: "Not Found | OKOA Furniture" };

  return {
    title: `${product.name} | OKOA Furniture`,
    description: product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      url: `/product/${product.slug}`,
      images:
        product.images[0] !== "/images/placeholder.jpg"
          ? [product.images[0]]
          : [],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  const room = rooms.find((r) => r.slug === product.room);
  const sub = room?.subcategories.find((s) => s.slug === product.subcategory);
  const onSale = product.showPrice && isOnSale(product);
  const discount = onSale ? getDiscountPercent(product) : 0;
  const displayPrice = getDisplayPrice(product);

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.room === product.room &&
        p.subcategory === product.subcategory
    )
    .slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image:
      product.images[0] !== "/images/placeholder.jpg"
        ? `${SITE_URL}${product.images[0]}`
        : undefined,
    offers: product.showPrice
      ? {
          "@type": "Offer",
          priceCurrency: "KES",
          price: displayPrice,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/product/${product.slug}`,
        }
      : undefined,
  };

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    ...(room
      ? [
          {
            "@type": "ListItem",
            position: 2,
            name: room.name,
            item: `${SITE_URL}/${room.slug}`,
          },
        ]
      : []),
    ...(sub
      ? [
          {
            "@type": "ListItem",
            position: 3,
            name: sub.name,
            item: `${SITE_URL}/${room!.slug}/${sub.slug}`,
          },
        ]
      : []),
    {
      "@type": "ListItem",
      position: sub ? 4 : room ? 3 : 2,
      name: product.name,
    },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-okoa-cream py-4 px-4">
        <nav className="max-w-6xl mx-auto text-xs text-gray-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-okoa-orange transition-colors">
            Home
          </Link>
          {room && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/${room.slug}`}
                className="hover:text-okoa-orange transition-colors"
              >
                {room.name}
              </Link>
            </>
          )}
          {sub && (
            <>
              <span className="mx-2">/</span>
              <Link
                href={`/${room!.slug}/${sub.slug}`}
                className="hover:text-okoa-orange transition-colors"
              >
                {sub.name}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-okoa-dark">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div className="relative">
          {onSale && (
            <span className="absolute top-2 right-2 z-10 bg-okoa-orange text-white text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full shadow-md">
              Offer {discount}%
            </span>
          )}
          <ProductImageCarousel images={product.images} name={product.name} />
        </div>

        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark mb-3">
            {product.name}
          </h1>

          {product.showPrice && (
            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl text-okoa-orange font-semibold">
                KSh {displayPrice.toLocaleString()}
              </span>
              {onSale && (
                <span className="text-lg text-gray-400 line-through">
                  KSh {product.regularPrice.toLocaleString()}
                </span>
              )}
            </div>
          )}

          <span
            className={`inline-block mb-6 text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full ${getAvailabilityColor(product)}`}
          >
            {getAvailabilityLabel(product)}
          </span>

          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {(product.dimensions || product.material) && (
            <div className="mb-8 border-t border-gray-100 pt-6 space-y-3 text-sm">
              {product.dimensions && (
                <div className="flex gap-2">
                  <span className="font-semibold text-okoa-dark uppercase tracking-wide text-xs w-24 shrink-0 pt-0.5">
                    Dimensions
                  </span>
                  <span className="text-gray-600">{product.dimensions}</span>
                </div>
              )}
              {product.material && (
                <div className="flex gap-2">
                  <span className="font-semibold text-okoa-dark uppercase tracking-wide text-xs w-24 shrink-0 pt-0.5">
                    Material
                  </span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={getWhatsAppOrderLink(
                product.name,
                product.showPrice ? displayPrice : undefined,
                `${SITE_URL}/product/${product.slug}`
              )}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-okoa-dark text-white px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-okoa-orange transition-colors duration-300"
            >
              Order via WhatsApp
            </a>
            <a
              href="tel:+254711682894"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-okoa-dark px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:border-okoa-dark transition-colors duration-300"
            >
              <PhoneIcon />
              Call Us
            </a>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-okoa-cream py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-okoa-dark mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((item) => {
                const itemOnSale = item.showPrice && isOnSale(item);
                const itemDiscount = itemOnSale ? getDiscountPercent(item) : 0;
                const itemPrice = getDisplayPrice(item);

                return (
                  <Link
                    key={item.id}
                    href={`/product/${item.slug}`}
                    className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative aspect-square bg-white overflow-hidden">
                      {itemOnSale && (
                        <span className="absolute top-2 right-2 z-10 bg-okoa-orange text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full">
                          Offer {itemDiscount}%
                        </span>
                      )}
                      {item.images[0] !== "/images/placeholder.jpg" && (
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-okoa-dark mb-1 group-hover:text-okoa-orange transition-colors">
                        {item.name}
                      </h3>
                      {item.showPrice && (
                        <div className="flex items-center gap-2">
                          <span className="text-okoa-orange font-semibold text-sm">
                            KSh {itemPrice.toLocaleString()}
                          </span>
                          {itemOnSale && (
                            <span className="text-gray-400 text-xs line-through">
                              KSh {item.regularPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}