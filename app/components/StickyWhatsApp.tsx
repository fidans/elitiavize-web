// app/components/StickyWhatsApp.tsx
"use client";

import { useEffect, useState } from "react";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export default function StickyWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`flex justify-end transition-all ${
            show ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"
          }`}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border bg-white px-4 py-3 text-sm font-medium shadow-lg hover:bg-neutral-50"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-neutral-900" />
            WhatsApp’tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
}
