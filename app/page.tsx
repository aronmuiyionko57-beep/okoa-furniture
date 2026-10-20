import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/data/categories";
import { products } from "@/data/products";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";
import { SITE_URL, WHATSAPP_NUMBER, SOCIAL_LINKS } from "@/lib/config";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

const roomImages: Record<string, string> = {
  "living-room": "/images/products/classic-rolled-arm-sofa-set-green.jpg",
  bedroom: "/images/products/linear-bed-6x6.jpg",
  "dining-room": "/images/products/mahogany-dining-set-ladder-back.jpg",
  "home-office": "/images/products/study-desk-wood.jpg",
};

const featuredSlugs = [
  "linear-bed-6x6",
  "marble-top-dining-set-black-grey",
  "semi-recliner-sofa-set-7-seater",
  "kenya-shaped-mirror",
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    name: "OKOA Furniture",
    description:
      "Quality modern furniture for every room — living room, bedroom, dining, home office, outdoor, and custom pieces.",
    url: SITE_URL,
    telephone: `+${WHATSAPP_NUMBER}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roysambu",
      addressRegion: "Nairobi",
      addressCountry: "KE",
    },
    sameAs: [SOCIAL_LINKS.instagram, SOCIAL_LINKS.tiktok, SOCIAL_LINKS.facebook],
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <HeroCarousel />

      {/* Trust bar */}
      <section className="bg-okoa-cream py-5 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-10 gap-y-2 text-center">
          <p className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.15em]">
            Quality Craftsmanship
          </p>
          <span className="hidden sm:inline text-gray-300">·</span>
          <p className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.15em]">
            Custom Orders Available
          </p>
          <span className="hidden sm:inline text-gray-300">·</span>
          <p className="text-[11px] font-medium text-gray-500 uppercase tracking-[0.15em]">
            Order Directly via WhatsApp
          </p>
        </div>
      </section>

      <WhyChooseUs />

      {/* Editorial moment */}
      <section className="relative h-[55vh] min-h-[420px] overflow-hidden my-4">
        <Image
          src="/images/products/mahogany-dining-set-ladder-back.jpg"
          alt="OKOA Furniture craftsmanship"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6">
          <p className="font-[family-name:var(--font-playfair)] text-white text-2xl md:text-4xl font-medium text-center max-w-2xl leading-snug">
            Every piece is chosen to make a house feel like home.
          </p>
        </div>
      </section>

      {/* Shop by Room grid */}
      <section id="shop-by-room" className="max-w-7xl mx-auto px-4 py-28">
        <div className="text-center mb-16">
          <p className="text-okoa-orange text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-okoa-dark">
            Shop by Room
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {rooms.map((room) => {
            const img = roomImages[room.slug];
            return (
              <Link
                key={room.slug}
                href={`/${room.slug}`}
                className="group relative bg-okoa-dark rounded-lg overflow-hidden aspect-[4/3] flex items-end p-6"
              >
                {img && (
                  <Image
                    src={img}
                    alt={room.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="relative text-lg font-medium text-white tracking-wide">
                  {room.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="bg-okoa-cream py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-okoa-orange text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              Handpicked
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-okoa-dark">
              Featured Pieces
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((product) => {
              const onSale = product.showPrice && isOnSale(product);
              const discount = onSale ? getDiscountPercent(product) : 0;
              const displayPrice = getDisplayPrice(product);

              return (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-square bg-white overflow-hidden">
                    {onSale && (
                      <span className="absolute top-2 right-2 z-10 bg-okoa-orange text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-full">
                        Offer {discount}%
                      </span>
                    )}
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-okoa-dark mb-1 group-hover:text-okoa-orange transition-colors">
                      {product.name}
                    </h3>
                    {product.showPrice && (
                      <div className="flex items-center gap-2">
                        <span className="text-okoa-orange font-semibold text-sm">
                          KSh {displayPrice.toLocaleString()}
                        </span>
                        {onSale && (
                          <span className="text-gray-400 text-xs line-through">
                            KSh {product.regularPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/living-room"
              className="inline-block border border-okoa-dark text-okoa-dark px-8 py-3 rounded-md font-medium text-sm uppercase tracking-wide hover:bg-okoa-dark hover:text-white transition-colors duration-300"
            >
              View All Furniture
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Furniture callout */}
      <section className="bg-okoa-dark text-white py-28 px-4 text-center">
        <p className="text-okoa-orange text-[11px] font-semibold uppercase tracking-[0.3em] mb-5">
          Made For You
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium mb-5">
          Don&apos;t See What You&apos;re Looking For?
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg font-light">
          We build custom furniture tailored to your space, style, and
          measurements.
        </p>
        <Link
          href="/custom-furniture"
          className="inline-block bg-okoa-orange text-white px-9 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-white hover:text-okoa-dark transition-colors duration-300"
        >
          Explore Custom Furniture
        </Link>
      </section>
    </main>
  );
}