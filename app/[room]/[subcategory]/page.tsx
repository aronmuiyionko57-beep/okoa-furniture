import { rooms } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";
import { isOnSale, getDiscountPercent, getDisplayPrice } from "@/lib/pricing";
import Link from "next/link";
import Image from "next/image";

export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ room: string; subcategory: string }>;
}) {
  const { room: roomSlug, subcategory: subSlug } = await params;
  const room = rooms.find((r) => r.slug === roomSlug);
  const sub = room?.subcategories.find((s) => s.slug === subSlug);

  if (!room || !sub) return notFound();

  const items = products.filter(
    (p) => p.room === roomSlug && p.subcategory === subSlug
  );

  return (
    <main>
      {/* Page header */}
      <section className="bg-okoa-dark text-white py-16 px-4 text-center">
        <nav className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-okoa-orange transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/${room.slug}`}
            className="hover:text-okoa-orange transition-colors"
          >
            {room.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-okoa-orange">{sub.name}</span>
        </nav>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold">
          {sub.name}
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {items.map((product) => {
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
                    <a
                      href={getWhatsAppOrderLink(product.name, product.showPrice ? displayPrice : undefined)}
                      target="_blank"
                      className="block text-center bg-okoa-dark text-white py-2.5 rounded-md text-sm font-semibold uppercase tracking-wide hover:bg-okoa-orange transition-colors duration-300"
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            No products yet in this category.
          </p>
        )}
      </div>
    </main>
  );
}