import { rooms } from "@/data/categories";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductFilters from "@/components/ProductFilters";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ room: string; subcategory: string }>;
}): Promise<Metadata> {
  const { room: roomSlug, subcategory: subSlug } = await params;
  const room = rooms.find((r) => r.slug === roomSlug);
  const sub = room?.subcategories.find((s) => s.slug === subSlug);

  if (!room || !sub) return { title: "Not Found | OKOA Furniture" };

  const title = `${sub.name} | ${room.name} | OKOA Furniture`;
  const description = `Browse ${sub.name.toLowerCase()} in our ${room.name.toLowerCase()} collection — quality furniture, order directly via WhatsApp.`;

  return {
    title,
    description,
    alternates: { canonical: `/${room.slug}/${sub.slug}` },
    openGraph: { title, description, url: `/${room.slug}/${sub.slug}` },
  };
}

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
    <main id="main-content">
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
          <ProductFilters items={items} />
        ) : (
          <p className="text-gray-500 text-center py-12">
            No products yet in this category.
          </p>
        )}
      </div>
    </main>
  );
}