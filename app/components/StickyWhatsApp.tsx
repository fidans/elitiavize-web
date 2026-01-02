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
    // ✅ Bu katman asla tıklama yemez
    <div className="fixed inset-x-0 bottom-4 z-40 px-4 pointer-events-none">
      <div className="mx-auto max-w-6xl flex justify-end">
        <div
          className={`transition-all ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
        >
          {/* ✅ Sadece buton tıklanabilir */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-5 py-3 shadow-soft pointer-events-auto wa-pulse"
          >
            WhatsApp’tan Yaz
          </a>
        </div>
      </div>
    </div>
  );
}
