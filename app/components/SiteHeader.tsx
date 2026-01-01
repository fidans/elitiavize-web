// app/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

const servicesDropdown = [
  {
    href: "/hizmetler",
    t: "Hizmetler (Genel)",
    d: "Tüm hizmetleri tek sayfada görün.",
  },
  {
    href: "/abd-vizesi",
    t: "ABD Vize Danışmanlığı",
    d: "B1/B2 öncelikli danışmanlık akışı.",
  },
  {
    href: "/abd-vizesi/red-sonrasi-basvuru",
    t: "Red Sonrası Başvuru",
    d: "Red analizi + yeni dosya kurgusu.",
  },
  {
    href: "/green-card-dv-lottery",
    t: "Green Card (DV Lottery)",
    d: "Hata riskini azaltan başvuru kontrolü.",
  },
  {
    href: "/randevu-one-cekme",
    t: "Randevu Öne Çekme",
    d: "Takip planı + profesyonel süreç.",
  },
];

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all",
        "bg-white/80 backdrop-blur-md",
        scrolled && "shadow-soft"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
  {/* Logo */}
  <div className="relative h-11 w-11 shrink-0">
    <Image
      src="/elitia-logo.svg"
      alt="Elitia Vize Danışmanlığı"
      fill
      className="object-contain"
      priority
    />
  </div>

  {/* Brand text */}
  <div className="leading-tight">
    <div className="flex items-center gap-2">
      <span className="text-[15px] font-semibold tracking-tight text-[var(--brand-navy)]">
        Elitia Vize
      </span>
      <span className="rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] font-semibold text-neutral-500">
        ABD
      </span>
    </div>
    <div className="text-[11px] text-neutral-500">
      Danışmanlık & süreç yönetimi
    </div>
  </div>
</Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className={cn(
              "nav-link px-3 py-2 rounded-xl text-sm",
              active("/") && "bg-neutral-100 font-medium"
            )}
          >
            Anasayfa
          </Link>

          {/* Hizmetler */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(v => !v)}
              className={cn(
                "nav-link px-3 py-2 rounded-xl text-sm inline-flex items-center gap-2",
                servicesOpen && "bg-neutral-100 font-medium"
              )}
            >
              Hizmetler
              <span
                className={cn(
                  "text-neutral-400 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              >
                ▾
              </span>
            </button>

            {servicesOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setServicesOpen(false)}
                />

                <div className="absolute left-1/2 z-20 mt-3 w-[520px] -translate-x-1/2 rounded-3xl bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-[var(--brand-navy)]">
                          Hizmetler
                        </div>
                        <div className="text-xs text-neutral-500">
                          Profilinize uygun doğru akışı seçin.
                        </div>
                      </div>

                      <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-2xl bg-[var(--brand-teal)] px-4 py-2 text-xs font-semibold text-white"
                      >
                        WhatsApp’tan Başla
                      </a>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {servicesDropdown.map(i => (
                        <Link
                          key={i.href}
                          href={i.href}
                          onClick={() => setServicesOpen(false)}
                          className="rounded-2xl border border-black/5 px-4 py-3 hover:-translate-y-0.5 hover:shadow-soft transition"
                        >
                          <div className="text-sm font-semibold text-[var(--brand-navy)]">
                            {i.t}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {i.d}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <Link
            href="/blog"
            className={cn(
              "nav-link px-3 py-2 rounded-xl text-sm",
              active("/blog") && "bg-neutral-100 font-medium"
            )}
          >
            Vize Rehberi
          </Link>

          <Link
            href="/sikca-sorulan-sorular"
            className={cn(
              "nav-link px-3 py-2 rounded-xl text-sm",
              active("/sikca-sorulan-sorular") && "bg-neutral-100 font-medium"
            )}
          >
            Sorular
          </Link>

          <Link
            href="/iletisim"
            className={cn(
              "nav-link px-3 py-2 rounded-xl text-sm",
              active("/iletisim") && "bg-neutral-100 font-medium"
            )}
          >
            İletişim
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            WhatsApp’tan Ön Değerlendirme
          </a>
        </div>

        {/* MOBILE */}
        <button
          className="rounded-xl border px-3 py-2 text-sm md:hidden"
          onClick={() => setMobileOpen(v => !v)}
        >
          Menü
        </button>
      </div>
    </header>
  );
}
