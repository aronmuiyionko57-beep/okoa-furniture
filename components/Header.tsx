"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { rooms } from "@/data/categories";

export default function Header() {
  const [openRoom, setOpenRoom] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRoomOpen, setMobileRoomOpen] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-24">
        <Link href="/" className="flex items-center h-24" onClick={() => setMobileOpen(false)}>
          <div className="relative w-48 h-16">
            <Image
              src="/images/okoa-logo.png"
              alt="OKOA Furniture"
              fill
              sizes="192px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {rooms.map((room) => (
            <div
              key={room.slug}
              className="relative h-full flex items-center"
              onMouseEnter={() => setOpenRoom(room.slug)}
              onMouseLeave={() => setOpenRoom(null)}
            >
              <Link
                href={`/${room.slug}`}
                className="group relative text-xs font-semibold uppercase tracking-widest text-okoa-dark py-2"
              >
                {room.name}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-okoa-orange transition-all duration-300 group-hover:w-full" />
              </Link>

              {room.subcategories.length > 0 && openRoom === room.slug && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg py-4 min-w-[240px] border-t-2 border-okoa-orange">
                  {room.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/${room.slug}/${sub.slug}`}
                      className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-okoa-cream hover:text-okoa-orange transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/254711682894"
          target="_blank"
          className="hidden lg:inline-block bg-okoa-dark text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-md hover:bg-okoa-orange transition-colors duration-300"
        >
          Order via WhatsApp
        </a>

        {/* Mobile hamburger button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-okoa-dark transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-okoa-dark transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-okoa-dark transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          {rooms.map((room) => (
            <div key={room.slug} className="border-b border-gray-100">
              <div className="flex items-center justify-between px-4 py-3">
                <Link
                  href={`/${room.slug}`}
                  className="text-sm font-semibold uppercase tracking-widest text-okoa-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {room.name}
                </Link>
                {room.subcategories.length > 0 && (
                  <button
                    onClick={() =>
                      setMobileRoomOpen(mobileRoomOpen === room.slug ? null : room.slug)
                    }
                    className="p-2 text-okoa-dark"
                    aria-label={`Toggle ${room.name} subcategories`}
                  >
                    {mobileRoomOpen === room.slug ? "−" : "+"}
                  </button>
                )}
              </div>

              {mobileRoomOpen === room.slug && (
                <div className="pb-2">
                  {room.subcategories.map((sub) => (
                    <Link
                      key={sub.slug}
                      href={`/${room.slug}/${sub.slug}`}
                      className="block px-8 py-2 text-sm text-gray-600"
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <a
              href="https://wa.me/254711682894"
              target="_blank"
              className="block text-center bg-okoa-dark text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-md"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}