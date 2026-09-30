import Link from "next/link";
import { rooms } from "@/data/categories";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      {/* Trust bar */}
      <section className="bg-okoa-cream py-6 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-3 text-center">
          <p className="text-sm font-medium text-okoa-dark">
            ✓ Quality Craftsmanship
          </p>
          <p className="text-sm font-medium text-okoa-dark">
            ✓ Custom Orders Available
          </p>
          <p className="text-sm font-medium text-okoa-dark">
            ✓ Order Directly via WhatsApp
          </p>
        </div>
      </section>

      <WhyChooseUs />

      {/* Shop by Room grid */}
      <section id="shop-by-room" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-14">
          <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-3">
            Explore
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark">
            Shop by Room
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              href={`/${room.slug}`}
              className="group relative bg-okoa-dark rounded-xl overflow-hidden aspect-[4/3] flex items-end p-6 shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-okoa-orange/0 group-hover:bg-okoa-orange/10 transition-colors duration-500" />

              <div className="relative">
                <span className="block text-xl font-semibold text-white mb-1">
                  {room.name}
                </span>
                <span className="inline-flex items-center gap-1 text-okoa-orange text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Custom Furniture callout */}
      <section className="bg-okoa-dark text-white py-20 px-4 text-center">
        <p className="text-okoa-orange text-xs font-semibold uppercase tracking-[0.3em] mb-4">
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