// app/components/SiteFooter.tsx
import Link from "next/link";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20%C3%96n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export default function SiteFooter() {
  return (
    <footer className="relative mt-14 overflow-hidden">
      {/* premium grounded wash (NOT full navy) */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-[rgba(0,49,93,.08)]" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(24,154,144,.10)] blur-3xl" />
      <div className="absolute -bottom-28 right-8 h-80 w-80 rounded-full bg-[rgba(0,49,93,.10)] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-12">
        {/* top card */}
        <div className="rounded-3xl bg-white/90 p-8 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3">
                {/* Logo */}
                <div className="group relative h-11 w-11 rounded-2xl bg-white/90 p-1 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5">
                  <img
                    src="/elitia-logo.svg"
                    alt="Elitia Vize"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                  />
                </div>

                <div>
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    Elitia Vize 
                  </div>
                  <div className="text-xs text-neutral-500">
                    ABD vize süreçlerinde danışmanlık & süreç yönetimi
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                Biz “bilgi paylaşımı” değil, <strong>başvuru yönetimi</strong>{" "}
                yaparız: profil ön değerlendirme, DS-160 tutarlılığı, evrak
                kontrolü ve mülakat hazırlığı.
              </p>

              {/* Trust chips */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-[var(--brand-navy)] ring-1 ring-black/5">
                  Şeffaflık
                </span>
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-[var(--brand-navy)] ring-1 ring-black/5">
                  Danışmanlık Odaklı
                </span>
                <span className="rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-[var(--brand-navy)] ring-1 ring-black/5">
                  Gizlilik Hassasiyeti
                </span>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Hızlı Linkler
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/hizmetler"
                >
                  Hizmetler
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/iletisim"
                >
                  İletişim
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/abd-vizesi"
                >
                  ABD Vizesi
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/sikca-sorulan-sorular"
                >
                  S.S.S
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/green-card-dv-lottery"
                >
                  DV Lottery
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/blog"
                >
                  Vize Rehberi
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/randevu-one-cekme"
                >
                  Randevu Takip
                </Link>
                <Link
                  className="underline underline-offset-4 text-neutral-700 transition-colors hover:text-[var(--brand-navy)]"
                  href="/abd-vizesi/red-sonrasi-basvuru"
                >
                  Red Sonrası
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6 ring-1 ring-black/5">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                10 dakikalık ön değerlendirme
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Mevcut durumunuzu yazın; size uygun yol haritasını netleştirelim.
              </p>

              <div className="mt-5">
                <a
                  className="btn-primary w-full transition-transform duration-300 hover:-translate-y-0.5"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>

              <div className="mt-4 text-xs text-neutral-600">
                Yazmanız yeterli:
                <div className="mt-2 grid gap-2">
                  <div className="rounded-2xl bg-white/70 px-3 py-2 ring-1 ring-black/5">
                    1) Vize türü (B1/B2, F1, J1…)
                  </div>
                  <div className="rounded-2xl bg-white/70 px-3 py-2 ring-1 ring-black/5">
                    2) Kısa profil (iş/okul/bağlar)
                  </div>
                  <div className="rounded-2xl bg-white/70 px-3 py-2 ring-1 ring-black/5">
                    3) Hedef tarih / amaç
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom note */}
          <div className="mt-8 border-t border-neutral-200/70 pt-6 text-xs leading-relaxed text-neutral-500">
            <div>
              Not: Elitia Vize danışmanlık hizmeti sunar;{" "}
              <strong>sonuç garantisi vermez</strong>. Nihai karar ilgili resmi
              makamlar tarafından verilir.
            </div>
            <div className="mt-2">© {new Date().getFullYear()} Elitia Vize Danışmanlığı</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
