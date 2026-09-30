import { products } from "@/data/products";
import { rooms } from "@/data/categories";
import { notFound } from "next/navigation";
import { getWhatsAppOrderLink } from "@/lib/whatsapp";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import Link from "next/link";

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

  return (
    <main>
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
        <ProductImageCarousel images={product.images} name={product.name} />

        <div>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-okoa-dark mb-3">
            {product.name}
          </h1>

          {product.showPrice && (
            <p className="text-2xl text-okoa-orange font-semibold mb-6">
              KSh {product.price.toLocaleString()}
            </p>
          )}

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

          <a
            href={getWhatsAppOrderLink(product.name)}
            target="_blank"
            className="inline-block bg-okoa-dark text-white px-10 py-4 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-okoa-orange transition-colors duration-300"
          >
            Order via WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}