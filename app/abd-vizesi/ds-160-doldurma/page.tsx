// app/abd-vizesi/ds-160-doldurma/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20DS-160%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "DS-160 Danışmanlığı | Elitia Vize",
  description:
    "DS-160 formu danışmanlığı: başvuru beyanınızın tutarlı ve eksiksiz hazırlanması için Elitia Vize ile DS-160 akışını profesyonel şekilde yönetin.",
  alternates: { canonical: "/abd-vizesi/ds-160-doldurma" },
};

const faqs = [
  {
    q: "DS-160 nedir?",
    a: "DS-160, ABD vize başvurularında kullanılan temel form akışıdır ve başvuru sahibinin beyanını içerir. Elitia Vize, DS-160 akışını profilinize göre netleştirir.",
  },
  {
    q: "DS-160’ta en sık hata nerede olur?",
    a: "Adres/iş geçmişi/tarih tutarsızlığı, seyahat amacı belirsizliği ve eksik beyanlar sık hatalardır. Biz, bilgileri sizinle doğrulayarak tutarlılığı artırırız.",
  },
  {
    q: "DS-160’ı kim doldurmalı?",
    a: "DS-160, başvuru sahibinin beyanıdır. Bilgilerin doğru ve tutarlı olması kritiktir. Elitia Vize, bilgileri sizinle birlikte doğrulayarak akışı yönetir.",
  },
  {
    q: "DS-160’ta yapılan küçük hatalar önemli mi?",
    a: "Evet. Tarih/iş/okul/seyahat amacı gibi alanlarda küçük tutarsızlıklar risk yaratabilir. Amaç; başvuruyu net ve çelişkisiz ilerletmektir.",
  },
];

function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function DS160Page() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* Breadcrumb + Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link className="hover:underline" href="/">
              Anasayfa
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <Link className="hover:underline" href="/abd-vizesi">
              ABD Vizesi
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">DS-160</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  DS-160 Danışmanlığı
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Tutarlılık odaklı</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                DS-160 akışını{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  net
                </span>{" "}
                ve{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  tutarlı
                </span>{" "}
                şekilde ilerletin.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                DS-160, başvurunun omurgasıdır. Elitia Vize; form akışını{" "}
                <strong>profilinize uygun</strong> şekilde netleştirir, bilgileri{" "}
                <strong>sizinle doğrular</strong> ve beyanın{" "}
                <strong>çelişkisiz</strong> ilerlemesine destek olur.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Ön Değerlendirme
                </a>

                <Link
                  href="/iletisim"
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                >
                  İletişim
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🗓️ Tarih Tutarlılığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    İş/okul/adres geçmişi kronolojisi net olmalı.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🎯 Amaç Netliği
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Seyahat planı ve beyanlar birbiriyle uyumlu olmalı.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    ✅ Eksiksiz Beyan
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Atlanan/yanlış girilen alanlar risk yaratabilir.
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlar tarafından
                verilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do (short) */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              DS-160’ta en kritik başlıklar
            </h2>
            <p className="mt-3 text-neutral-700">
              DS-160’ta hata çoğu zaman “bilgi yokluğu” değil,{" "}
              <strong>tutarsızlık</strong> kaynaklı olur. En sık dikkat edilmesi
              gereken alanlar:
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🏠",
                  title: "Adres Geçmişi",
                  desc: "Adresler ve tarihler birbirini doğrulamalı.",
                },
                {
                  icon: "💼",
                  title: "İş / Okul Geçmişi",
                  desc: "Pozisyon, tarih aralıkları ve açıklamalar uyumlu olmalı.",
                },
                {
                  icon: "✈️",
                  title: "Seyahat Amacı",
                  desc: "Plan net, profil ile uyumlu ve çelişkisiz görünmeli.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm text-lg">
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {x.title}
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        {x.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-neutral-700">
              <span className="font-semibold text-[var(--brand-navy)]">
                Hızlı başlangıç:
              </span>{" "}
              WhatsApp’tan yazın, DS-160 akışını profilinize göre netleştirelim.
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Elitia Vize ile DS-160 akışı
            </h2>
            <p className="mt-3 text-neutral-700">
              Amaç “form doldurmak” değil, başvuruyu{" "}
              <strong>doğru anlatmak</strong>. Akışı birlikte şu şekilde ilerletiriz:
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Profil netleştirme",
                  desc: "Amaç, geçmiş, bağlar ve risk noktaları kısa şekilde toparlanır.",
                },
                {
                  icon: "🧾",
                  title: "2) DS-160 alanlarını doğrulama",
                  desc: "Kritik alanlarda çelişki ihtimali sıfırlanır.",
                },
                {
                  icon: "✅",
                  title: "3) Son kontrol",
                  desc: "Form mantığı, akışı ve beyan bütünlüğü kontrol edilir.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm text-lg">
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {x.title}
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        {x.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Ön Değerlendirme
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                DS-160 danışmanlığı için WhatsApp’tan yazın, profilinize uygun akışı
                çıkaralım.
              </p>
              <div className="mt-4">
                <a
                  className="btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (premium) */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.15)] text-xl">
                    🧾
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      DS-160
                    </div>
                    <div className="text-xs text-neutral-500">
                      Tutarlılık odaklı danışmanlık
                    </div>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[var(--brand-navy)]">
                  Sık Sorulan Sorular
                </h2>

                <p className="mt-3 text-sm text-neutral-700">
                  Kısa ve net cevaplar (SEO + GEO uyumlu).
                </p>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                  💡 DS-160’ta kritik şey: <strong>tarih ve anlatım tutarlılığı</strong>.
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.12)] text-lg">
                      ❓
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {f.q}
                      </div>
                      <div className="mt-2 text-sm text-neutral-700 leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(24,154,144,.18)] via-[rgba(24,154,144,.08)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
                  DS-160 akışını birlikte netleştirelim.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Form akışı, kritik alan kontrolü ve tutarlılık: tek akışta.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    ✅ Tutarlılık
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    🗓️ Tarih Kontrolü
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    🔒 Gizlilik
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a
                  className="btn-primary px-6 py-3 text-base"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Ön Değerlendirme
                </a>
                <p className="text-xs text-neutral-500 sm:text-right">
                  Danışmanlık hizmetidir. Nihai karar resmi makamlarca verilir.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-600">
            Sonraki sayfa:{" "}
            <Link
              href="/abd-vizesi/b1-b2-turistik-vize"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              B1/B2 danışmanlığı
            </Link>{" "}
            veya{" "}
            <Link
              href="/abd-vizesi/red-sonrasi-basvuru"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              red sonrası başvuru
            </Link>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
