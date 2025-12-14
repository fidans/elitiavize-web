// app/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

const nav = [
  { href: "/abd-vizesi", label: "ABD Vizesi" },
  { href: "/abd-vizesi/b1-b2-turistik-vize", label: "B1/B2 Turistik" },
  { href: "/abd-vizesi/f1-ogrenci-vizesi", label: "F1 Öğrenci" },
  { href: "/abd-vizesi/j1-degisim-programi", label: "J1 Değişim" },
  { href: "/abd-vizesi/ds-160-doldurma", label: "DS-160" },
];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useMemo(() => {
    const p = pathname || "/";
    return (href: string) => (href === "/" ? p === "/" : p.startsWith(href));
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // route change -> close mobile
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/80 backdrop-blur",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl border bg-white shadow-sm" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Elitia Vize</div>
            <div className="text-xs text-neutral-500">ABD Vize Danışmanlığı</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={cn(
              "rounded-xl px-3 py-2 text-sm hover:bg-neutral-50",
              active("/") && "bg-neutral-50 font-medium"
            )}
          >
            Anasayfa
          </Link>
          <Link
            href="/abd-vizesi"
            className={cn(
              "rounded-xl px-3 py-2 text-sm hover:bg-neutral-50",
              active("/abd-vizesi") && "bg-neutral-50 font-medium"
            )}
          >
            ABD Vizesi
          </Link>
          <Link
            href="/sikca-sorulan-sorular"
            className={cn(
              "rounded-xl px-3 py-2 text-sm hover:bg-neutral-50",
              active("/sikca-sorulan-sorular") && "bg-neutral-50 font-medium"
            )}
          >
            SSS
          </Link>
          <Link
            href="/iletisim"
            className={cn(
              "rounded-xl px-3 py-2 text-sm hover:bg-neutral-50",
              active("/iletisim") && "bg-neutral-50 font-medium"
            )}
          >
            İletişim
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border px-3 py-2 text-sm md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
        >
          {mobileOpen ? "Kapat" : "Menü"}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <div className="grid gap-2">
              <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/">
                Anasayfa
              </Link>

              <div className="rounded-2xl border p-3">
                <div className="px-1 pb-2 text-xs font-semibold text-neutral-500">
                  ABD Vize Sayfaları
                </div>
                <div className="grid gap-2">
                  {nav.map((i) => (
                    <Link
                      key={i.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50",
                        active(i.href) && "bg-neutral-50 font-medium"
                      )}
                      href={i.href}
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/sikca-sorulan-sorular">
                Sık Sorulan Sorular
              </Link>

              <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/iletisim">
                İletişim
              </Link>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border px-4 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
              >
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
