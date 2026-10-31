"use client";

import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export default function ContactClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      const details = {
        page_path: window.location.pathname,
        page_title: document.title,
        link_label:
          link.getAttribute("aria-label") ||
          link.textContent?.trim().slice(0, 100) ||
          "",
      };

      if (href.includes("wa.me") || href.includes("whatsapp.com")) {
        sendGAEvent("event", "whatsapp_click", details);
      } else if (href.startsWith("tel:")) {
        sendGAEvent("event", "phone_call_click", details);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}