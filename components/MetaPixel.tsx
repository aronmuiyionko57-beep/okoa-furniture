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

// Read a browser cookie (Meta's _fbp and _fbc cookies help match visitors)
function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((c) => c.startsWith(name + "="))
    ?.split("=")[1];
}

// A unique ID shared by the browser event and the server event,
// so Meta counts each click only once
function newEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
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

  // When someone clicks ANY WhatsApp or phone link on the site:
  // send Contact + InitiateCheckout from the browser (Pixel) AND from the
  // server (Conversions API), with matching event IDs.
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a");
      const href = link?.getAttribute("href") ?? "";
      if (!link || !/wa\.me|whatsapp\.com|^whatsapp:|^tel:/i.test(href)) return;

      // Product price, if the button (or a wrapper around it) carries data-meta-value="85000"
      const priceAttr = link.closest("[data-meta-value]")?.getAttribute("data-meta-value");
      const price = priceAttr ? Number(priceAttr) : NaN;
      const value = Number.isFinite(price) && price > 0 ? price : undefined;

      const contactId = newEventId();
      const checkoutId = newEventId();

      // Browser (Pixel)
      window.fbq?.("track", "Contact", {}, { eventID: contactId });
      window.fbq?.(
        "track",
        "InitiateCheckout",
        value ? { currency: "KES", value } : { currency: "KES" },
        { eventID: checkoutId }
      );

      // Server (Conversions API). sendBeacon still delivers even though
      // the browser is leaving the page to open WhatsApp.
      const payload = JSON.stringify({
        url: window.location.href,
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        events: [
          { eventName: "Contact", eventId: contactId },
          { eventName: "InitiateCheckout", eventId: checkoutId, value },
        ],
      });

      try {
        if (navigator.sendBeacon) {
          navigator.sendBeacon(
            "/api/meta-capi",
            new Blob([payload], { type: "application/json" })
          );
        } else {
          fetch("/api/meta-capi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: payload,
            keepalive: true,
          });
        }
      } catch {
        // Never let tracking break the WhatsApp button
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