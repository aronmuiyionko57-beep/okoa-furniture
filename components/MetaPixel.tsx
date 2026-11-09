"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

// Okoa Furniture Website dataset (owned by the Okoa furniture portfolio)
const PIXEL_ID = "1154854153666936";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function MetaPixel() {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  // Count a PageView each time the visitor moves to another page.
  // (The very first page view is already sent by the base code below.)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.fbq?.("track", "PageView");
  }, [pathname]);

  // Send a "Contact" event whenever someone clicks ANY WhatsApp or phone
  // link on the site (Order via WhatsApp buttons, floating button, footer, etc.).
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a");
      const href = link?.getAttribute("href") ?? "";
      if (/wa\.me|whatsapp\.com|^whatsapp:|^tel:/i.test(href)) {
        window.fbq?.("track", "Contact");
      }
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}