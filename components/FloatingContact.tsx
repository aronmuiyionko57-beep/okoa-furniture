"use client";

import { useState, useEffect } from "react";
import { WHATSAPP_NUMBER } from "@/lib/config";
import { PhoneIcon, WhatsAppIcon } from "@/components/icons";

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function FloatingContact() {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:+${WHATSAPP_NUMBER}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-[#128C7E] text-white flex items-center justify-center shadow-xl hover:bg-[#0e7469] transition-colors duration-200"
      >
        <PhoneIcon size={26} />
      </a>

      <div className="relative flex items-center gap-2">
        {showLabel && (
          <div className="flex items-center gap-1.5 bg-okoa-white text-okoa-dark text-sm font-medium pl-3 pr-2 py-2 rounded-full shadow-lg animate-in fade-in slide-in-from-right-2 duration-500">
            <span>Chat with us</span>
            <button
              onClick={() => setShowLabel(false)}
              aria-label="Dismiss"
              className="text-gray-400 hover:text-gray-600 p-0.5"
            >
              <CloseIcon />
            </button>
          </div>
        )}

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity duration-200 shrink-0"
        >
          <WhatsAppIcon size={30} />
        </a>
      </div>
    </div>
  );
}