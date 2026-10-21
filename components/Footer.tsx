import Link from "next/link";
import Image from "next/image";
import { rooms } from "@/data/categories";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, MAPS_LINK, SOCIAL_LINKS } from "@/lib/config";

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

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
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

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

const socialLinks = [
  { href: `https://wa.me/${WHATSAPP_NUMBER}`, label: "Chat on WhatsApp", icon: WhatsAppIcon },
  { href: SOCIAL_LINKS.instagram, label: "OKOA Furniture on Instagram", icon: InstagramIcon },
  { href: SOCIAL_LINKS.facebook, label: "OKOA Furniture on Facebook", icon: FacebookIcon },
  { href: SOCIAL_LINKS.tiktok, label: "OKOA Furniture on TikTok", icon: TikTokIcon },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white mt-24 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-okoa-orange to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 mb-14">
          <div className="md:col-span-5">
            <Image
              src="/images/okoa-logo.png"
              alt="OKOA Furniture"
              width={130}
              height={42}
              style={{ height: "auto" }}
              className="mb-5"
            />
            <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-xs">
              The home of modern designs. Quality furniture for every room —
              crafted for comfort, built to last.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-300 hover:border-okoa-orange hover:text-okoa-orange hover:bg-okoa-orange/10 transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm">
              {rooms.map((room) => (
                <li key={room.slug}>
                  <Link
                    href={`/${room.slug}`}
                    className="text-gray-300 hover:text-okoa-orange transition-colors"
                  >
                    {room.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="rounded-lg overflow-hidden mb-2 border border-gray-800">
                  <iframe
                    src="https://www.google.com/maps?q=-1.209426,36.906214&z=15&output=embed"
                    width="100%"
                    height="120"
                    style={{ border: 0, filter: "grayscale(0.3) invert(0.92) contrast(0.9)" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="OKOA Furniture location map"
                  />
                </div>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-okoa-orange transition-colors text-sm"
                >
                  <MapPinIcon />
                  Roysambu, Nairobi — Get Directions →
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-okoa-orange transition-colors"
                >
                  <PhoneIcon />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  className="flex items-center gap-2 text-gray-300 hover:text-okoa-orange transition-colors"
                >
                  <WhatsAppIcon />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <Link
                  href="/custom-furniture"
                  className="text-gray-300 hover:text-okoa-orange transition-colors"
                >
                  Request a Custom Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} OKOA Furniture. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/privacy-policy" className="hover:text-okoa-orange transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-700">|</span>
            <Link href="/terms" className="hover:text-okoa-orange transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="text-xs text-gray-400">
            Designed &amp; built by <span className="text-gray-300">AROKELIX</span>
          </p>
        </div>
      </div>
    </footer>
  );
}