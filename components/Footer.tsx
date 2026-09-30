import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/data/categories";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.62h-3.16v13.4c0 1.68-1.37 3.05-3.05 3.05a3.05 3.05 0 0 1 0-6.1c.25 0 .5.03.73.09V9.4a6.24 6.24 0 0 0-.73-.04A6.21 6.21 0 0 0 2.58 15.6a6.21 6.21 0 0 0 6.21 6.21 6.21 6.21 0 0 0 6.21-6.21V9.1a8.36 8.36 0 0 0 4.87 1.56V7.5a5.4 5.4 0 0 1-3.27-1.68Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-okoa-orange to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-8 gap-x-6 gap-y-10 mb-14">
          <div className="col-span-2">
            <div className="relative w-40 h-14 mb-4">
              <Image
                src="/images/okoa-logo.png"
                alt="OKOA Furniture"
                fill
                sizes="160px"
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-xs">
              The home of modern designs. Quality furniture for every room —
              crafted for comfort, built to last.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/254711682894"
                target="_blank"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-okoa-orange hover:text-okoa-orange hover:bg-okoa-orange/10 transition-all duration-200"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://www.instagram.com/okoafurniture"
                target="_blank"
                aria-label="OKOA Furniture on Instagram"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-okoa-orange hover:text-okoa-orange hover:bg-okoa-orange/10 transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.tiktok.com/@okoafurniture"
                target="_blank"
                aria-label="OKOA Furniture on TikTok"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-okoa-orange hover:text-okoa-orange hover:bg-okoa-orange/10 transition-all duration-200"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>

          {rooms.map((room) => (
            <div key={room.slug}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-4">
                <Link href={`/${room.slug}`} className="hover:text-okoa-orange transition-colors">
                  {room.name}
                </Link>
              </h4>
              {room.subcategories.length > 0 && (
                <ul className="space-y-2.5 text-sm">
                  {room.subcategories.map((sub) => (
                    <li key={sub.slug}>
                      <Link
                        href={`/${room.slug}/${sub.slug}`}
                        className="text-gray-300 hover:text-okoa-orange transition-colors"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} OKOA Furniture. All rights reserved.
          </p>
          <a
            href="https://wa.me/254711682894"
            target="_blank"
            className="text-xs text-gray-400 hover:text-okoa-orange transition-colors"
          >
            0711 682 894 · Order via WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}