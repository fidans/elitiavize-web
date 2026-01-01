// app/abd-vizesi/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "ABD Vize Danışmanlığı | Elitia Vize",
  description:
    "Elitia Vize; ABD vize başvurularında profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu planlama ve mülakat hazırlığı ile süreci uçtan uca yönetir.",
  alternates: { canonical: "/abd-vizesi" },
  openGraph: {
    title: "ABD Vize Danışmanlığı | Elitia Vize",
    description:
      "ABD vize başvurularında DS-160, evrak kontrolü, randevu ve mülakat hazırlığı için profesyonel danışmanlık.",
    url: "/abd-vizesi",
    type: "website",
  },
};

const faqs = [
  {
    q: "ABD vize danışmanlığı neleri kapsar?",
    a: "Elitia Vize; profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu süreci planlama ve mülakat hazırlığı gibi adımlarda başvuruyu daha sistemli hale getirir.",
  },
  {
    q: "B1/B2 turistik vize için süreç nasıl ilerler?",
    a: "Önce profil ön değerlendirme yapılır, DS-160 akışı netleştirilir, evrak seti kontrol edilir ve randevu/mülakat hazırlığı planlanır. Nihai karar ilgili resmi makamlar tarafından verilir.",
  },
  {
    q: "Daha önce red aldıysam tekrar başvurabilir miyim?",
    a: "Evet. Red gerekçelerini ve önceki başvurunun zayıf noktalarını analiz edip yeni başvuruyu daha güçlü bir planla hazırlamak mümkündür.",
  },
  {
    q: "DS-160 formunda en kritik nokta nedir?",
    a: "Tutarlılık. Seyahat amacı, iş/okul geçmişi, gelir ve bağlar gibi alanlarda çelişkili veya eksik beyanlar risk yaratabilir. Elitia Vize, bilgilerinizi sizinle birlikte doğrulayarak form akışını yönetir.",
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

function ServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ABD Vize Danışmanlığı",
    provider: {
      "@type": "Organization",
      name: "Elitia Vize Danışmanlığı",
      url: "https://elitiavize.com/abd-vizesi",
    },
    areaServed: "TR",
    serviceType: "Vize danışmanlığı",
    description:
      "ABD vize başvurularında profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu planlama ve mülakat hazırlığı.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AbdVizesiPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />
      <ServiceJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  ABD Vize Danışmanlığı
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">B1/B2 öncelikli</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                ABD vize başvurunuzu{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  strateji
                </span>{" "}
                ve{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  tutarlılık
                </span>{" "}
                ile yönetiyoruz.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                Elitia Vize; başvurunuzu tek tek adımlara bölerek ilerler:{" "}
                <strong>profil ön değerlendirme</strong>,{" "}
                <strong>DS-160 danışmanlığı</strong>,{" "}
                <strong>evrak kontrolü</strong>, <strong>randevu planlama</strong>{" "}
                ve <strong>mülakat hazırlığı</strong>. Amaç; başvurunun net,
                tutarlı ve düzenli ilerlemesidir.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’tan Ön Değerlendirme Al
                </a>

                <Link
                  href="/iletisim"
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                >
                  İletişim Formu
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    📑 Evrak Kontrol
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Eksik ve tutarsız noktaları netleştiririz.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧾 DS-160 Akışı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Beyanları birlikte doğrular, tutarlılığı koruruz.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🎤 Mülakat Hazırlığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Net anlatım için prova ve örnek soru çalışması.
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

      {/* Process + Types */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Process */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Süreç nasıl ilerler?
            </h2>
            <p className="mt-3 text-neutral-700">
              ABD vizesinde en büyük risk; parçalı, çelişkili veya eksik bir başvuru
              dosyasıdır. Biz, süreci standardize ederek ilerleriz.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Profil Ön Değerlendirme",
                  desc: "Seyahat amacı, bağlar, geçmiş başvurular ve risk noktaları üzerinden yol haritası oluştururuz.",
                },
                {
                  icon: "🧾",
                  title: "2) DS-160 Danışmanlığı",
                  desc: "Form akışını profilinize göre netleştirir, beyanların tutarlılığını birlikte doğrularız.",
                },
                {
                  icon: "📑",
                  title: "3) Evrak Kontrol",
                  desc: "Evrak setini kontrol eder, eksikleri ve tutarsızlıkları başvuru öncesinde gideririz.",
                },
                {
                  icon: "🎤",
                  title: "4) Randevu & Mülakat Hazırlığı",
                  desc: "Randevu planını çıkarır, mülakatta kendinizi net ifade etmeniz için hazırlık yaparız.",
                },
              ].map((s) => (
                <div key={s.title} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm text-lg">
                      {s.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {s.title}
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visa Types */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Hangi ABD vize türlerinde destek veriyoruz?
            </h2>
            <p className="mt-3 text-neutral-700">
              Önceliğimiz <strong>B1/B2 turistik vize</strong>. Diğer vize türlerinde
              de danışmanlık sunuyoruz.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                {
                  href: "/abd-vizesi/b1-b2-turistik-vize",
                  title: "B1/B2 Turistik Vize",
                  desc: "Turizm / iş ziyareti başvuruları.",
                },
                {
                  href: "/abd-vizesi/f1-ogrenci-vizesi",
                  title: "F1 Öğrenci Vizesi",
                  desc: "Okul planı ve evrak akışı.",
                },
                {
                  href: "/abd-vizesi/j1-degisim-programi",
                  title: "J1 Değişim Programı",
                  desc: "Program türüne göre hazırlık.",
                },
                {
                  href: "/abd-vizesi/ds-160-doldurma",
                  title: "DS-160 Danışmanlığı",
                  desc: "Form akışı ve kontrol.",
                },
              ].map((t) => (
                <Link
                  key={t.href}
                  className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                  href={t.href}
                >
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    {t.title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">{t.desc}</div>
                </Link>
              ))}
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Hızlı Başlangıç
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                Profilinize göre doğru akışı çıkaralım. Ön değerlendirme için
                WhatsApp’tan yazabilirsiniz.
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

      {/* FAQ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Intro */}
            <div className="lg:col-span-1">
              <div className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.15)] text-xl">
                    🇺🇸
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      Elitia Vize
                    </div>
                    <div className="text-xs text-neutral-500">
                      ABD Vize Danışmanlığı
                    </div>
                  </div>
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-[var(--brand-navy)]">
                  Sık Sorulan Sorular
                </h2>
                <p className="mt-3 text-sm text-neutral-700">
                  Kısa ve net cevaplar: Hem kullanıcı hem de AI aramaları için.
                </p>
                <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                  💡 En kritik konu: <strong>tutarlılık</strong>. Süreci birlikte
                  netleştiririz.
                </div>
              </div>
            </div>

            {/* Cards */}
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
                  ABD vize başvurunuzu birlikte planlayalım.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Öncelik B1/B2. DS-160 + evrak kontrol + randevu + mülakat hazırlığı
                  tek akışta.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    🔒 Gizlilik
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    ✅ Tutarlılık
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    🎯 Plan
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
        </div>
      </section>

      {/* Blog highlights */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
            Vize Rehberi’nden Öne Çıkanlar
          </h2>
          <p className="mt-2 text-neutral-700">
            ABD vize süreçlerinde en sık karşılaşılan riskler ve danışmanlık bakış
            açısıyla hazırlanmış rehberler.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/blog/abd-vizesi-neden-reddedilir"
              className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                ABD vizesi neden reddedilir?
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                En yaygın riskler ve danışman gözüyle yorum.
              </div>
            </Link>

            <Link
              href="/blog/ds-160-hatalari"
              className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                DS-160’ta yapılan 10 kritik hata
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                Tutarlılığı bozan detaylar ve kaçınma yöntemi.
              </div>
            </Link>

            <Link
              href="/blog/b1-b2-mulakat-sorulari"
              className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                B1/B2 mülakat soruları (danışman gözüyle)
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                Hazırlık mantığı ve pratik yaklaşım.
              </div>
            </Link>

            <Link
              href="/abd-vizesi/red-sonrasi-basvuru"
              className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            >
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Red sonrası yeniden başvuru rehberi
              </div>
              <div className="mt-1 text-sm text-neutral-600">
                Önce analiz, sonra daha güçlü plan.
              </div>
            </Link>
          </div>

          <div className="mt-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              Vize Rehberi → Tüm yazıları inceleyin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
