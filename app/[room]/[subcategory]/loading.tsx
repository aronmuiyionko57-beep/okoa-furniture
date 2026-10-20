export default function Loading() {
  return (
    <main>
      <section className="bg-okoa-dark py-16 px-4 text-center">
        <div className="h-3 w-40 bg-white/10 rounded mx-auto mb-4 animate-pulse" />
        <div className="h-8 w-64 bg-white/10 rounded mx-auto animate-pulse" />
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap gap-3 mb-8 pb-6 border-b border-gray-100">
          <div className="h-10 w-40 bg-gray-100 rounded-md animate-pulse" />
          <div className="h-10 w-32 bg-gray-100 rounded-md animate-pulse" />
          <div className="h-10 w-40 bg-gray-100 rounded-md animate-pulse ml-auto" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-100">
              <div className="aspect-square bg-gray-100 animate-pulse" />
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
                <div className="h-9 bg-gray-100 rounded-md animate-pulse mt-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}