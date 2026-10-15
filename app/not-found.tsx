import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="font-[family-name:var(--font-playfair)] text-7xl font-bold text-okoa-orange mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-okoa-dark mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          Let&apos;s get you back to the OKOA Furniture collection.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-block bg-okoa-dark text-white px-7 py-3 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-okoa-orange transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/living-room"
            className="inline-block border border-okoa-dark text-okoa-dark px-7 py-3 rounded-md font-semibold uppercase text-sm tracking-widest hover:bg-okoa-dark hover:text-white transition-colors duration-300"
          >
            Browse Furniture
          </Link>
        </div>
      </div>
    </main>
  );
}