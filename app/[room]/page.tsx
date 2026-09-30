import { rooms } from "@/data/categories";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return rooms.map((room) => ({ room: room.slug }));
}

export default async function RoomPage({
  params,
}: {
  params: Promise<{ room: string }>;
}) {
  const { room: roomSlug } = await params;
  const room = rooms.find((r) => r.slug === roomSlug);

  if (!room) return notFound();

  return (
    <main>
      {/* Page header */}
      <section className="bg-okoa-dark text-white py-16 px-4 text-center">
        <nav className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-okoa-orange transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-okoa-orange">{room.name}</span>
        </nav>
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold">
          {room.name}
        </h1>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {room.subcategories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {room.subcategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/${room.slug}/${sub.slug}`}
                className="group relative bg-okoa-dark rounded-xl overflow-hidden aspect-square flex items-end p-5 shadow-md hover:shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-okoa-orange/0 group-hover:bg-okoa-orange/10 transition-colors duration-500" />
                <span className="relative text-base font-semibold text-white">
                  {sub.name}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-12">
            Products coming soon for this room.
          </p>
        )}
      </div>
    </main>
  );
}