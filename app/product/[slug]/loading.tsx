export default function Loading() {
  return (
    <main>
      <div className="bg-okoa-cream py-4 px-4">
        <div className="max-w-6xl mx-auto h-3 w-48 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-xl bg-gray-100 animate-pulse" />
        <div className="space-y-4">
          <div className="h-8 w-3/4 bg-gray-100 rounded animate-pulse" />
          <div className="h-6 w-1/3 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
          <div className="h-12 w-48 bg-gray-100 rounded-md animate-pulse mt-6" />
        </div>
      </div>
    </main>
  );
}