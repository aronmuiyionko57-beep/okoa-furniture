"use client";

import { useState, useEffect } from "react";

function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .9.9-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.5s-.6-1.5-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export default function FloatingContact() {
  const [showLabel, setShowLabel] = useState(false);
  const phoneNumber = "254711682894";

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:+${phoneNumber}`}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-okoa-dark text-white flex items-center justify-center shadow-xl hover:bg-okoa-orange transition-colors duration-200"
      >
        <PhoneIcon />
      </a>

      <div className="relative flex items-center gap-2">
        {showLabel && (
          <div className="flex items-center gap-1.5 bg-white text-okoa-dark text-sm font-medium pl-3 pr-2 py-2 rounded-full shadow-lg animate-in fade-in slide-in-from-right-2 duration-500">
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
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity duration-200 shrink-0"
        >
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}