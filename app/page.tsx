import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/data/categories";
import { products } from "@/data/products";
import { hasDiscount, getDiscountPercent, getOriginalPrice } from "@/lib/pricing";
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
    .filter(Boolean);

  return (
    <main>
      <HeroCarousel />

      {/* Trust bar */}
      <section className="bg-okoa-cream py-5 px-4 border-b border-gray-200">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-center">
          <p className="text-xs font-medium text-okoa-dark uppercase tracking-wide">
            Quality Craftsmanship
          </p>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p className="text-xs font-medium text-okoa-dark uppercase tracking-wide">
            Custom Orders Available
          </p>
          <span className="hidden sm:inline text-gray-300">|</span>
          <p className="text-xs font-medium text-okoa-dark uppercase tracking-wide">
            Order Directly via WhatsApp
          </p>
        </div>
      </section>

      <WhyChooseUs />

      {/* Shop by Room grid */}
      <section id="shop-by-room" className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark">
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
                <span className="relative text-lg font-semibold text-white tracking-wide">
                  {room.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Pieces */}
      <section className="bg-okoa-cream py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              Handpicked
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark">
              Featured Pieces
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((product) => {
              if (!product) return null;
              const onSale = product.showPrice && hasDiscount(product.id);
              const discount = onSale ? getDiscountPercent(product.id) : 0;
              const original = onSale
                ? getOriginalPrice(product.price, discount)
                : 0;

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
                          KSh {product.price.toLocaleString()}
                        </span>
                        {onSale && (
                          <span className="text-gray-400 text-xs line-through">
                            KSh {original.toLocaleString()}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
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
      <section className="bg-okoa-dark text-white py-20 px-4 text-center">
        <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.25em] mb-4">
          Made For You
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4">
          Don&apos;t See What You&apos;re Looking For?
        </h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-8">
          We build custom furniture tailored to your space, style, and
          measurements.
        </p>
        <Link
          href="/custom-furniture"
          className="inline-block bg-okoa-orange text-white px-8 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-white hover:text-okoa-dark transition-colors duration-300"
        >
          Explore Custom Furniture
        </Link>
      </section>
    </main>
  );
}