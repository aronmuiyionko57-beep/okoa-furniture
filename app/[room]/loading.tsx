export default function Loading() {
  return (
    <main>
      <section className="bg-okoa-dark py-16 px-4 text-center">
        <div className="h-3 w-40 bg-okoa-white/10 rounded mx-auto mb-4 animate-pulse" />
        <div className="h-8 w-56 bg-okoa-white/10 rounded mx-auto animate-pulse" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-lg bg-gray-100 animate-pulse"
            />
          ))}
        </div>
      </div>
    </main>
  );
}