// app/page.tsx
import Link from "next/link";

const faqs = [
  {
    q: "ABD vizesi için danışmanlık almak şart mı?",
    a: "Zorunlu değildir. Ancak başvurunun doğru hazırlanması, DS-160 formunda tutarlılık ve evrak düzeni gibi detaylar red riskini azaltmada kritik olabilir. Elitia Vize, süreci uçtan uca danışmanlıkla yöneterek başvuruyu daha sistemli hale getirir.",
  },
  {
    q: "Elitia Vize hangi aşamalarda destek sağlar?",
    a: "Profil ön değerlendirme, DS-160 formu danışmanlığı, evrak kontrolü ve mülakat hazırlığı gibi adımlarda rehberlik sağlar.",
  },
  {
    q: "DS-160 formunu kim doldurmalı?",
    a: "DS-160 başvuru sahibinin beyanıdır. Formun doğru ve tutarlı hazırlanması önemlidir. Elitia Vize, bilgilerinizi sizinle birlikte doğrulayarak formun eksiksiz ve tutarlı ilerlemesine destek olur.",
  },
  {
    q: "Vize reddi almış başvurularla çalışıyor musunuz?",
    a: "Evet. Red gerekçelerini anlamaya, önceki başvuru akışını analiz etmeye ve yeni başvuruyu daha güçlü bir planla hazırlamaya yönelik danışmanlık sunuyoruz.",
  },
  {
    q: "Ne kadar sürede sonuç alırım?",
    a: "Sonuç süresi randevu bulunabilirliği ve konsolosluk süreçlerine göre değişir. Biz, sizin durumunuza göre en doğru planı çıkarıp süreci hızlandırmaya yönelik adımları organize ederiz.",
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* Hero */}
<section className="relative overflow-hidden">
  {/* Soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.08)] to-transparent" />

  <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-14">
    <div className="flex flex-col gap-8">

      {/* Badge */}
      <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
        <span className="font-medium text-[var(--brand-navy)]">
          🇺🇸 Elitia Vize Danışmanlığı
        </span>
        <span className="text-neutral-400">•</span>
        <span className="text-neutral-600">
          ABD vize başvurularında uzman danışmanlık
        </span>
      </div>

      {/* Heading */}
      <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
        ABD vize başvurunuzu{" "}
        <span className="text-[var(--brand-teal)] font-bold">
          doğru strateji
        </span>{" "}
        ile hazırlayın.
      </h1>

      {/* Sub text */}
      <p className="max-w-2xl text-base text-neutral-700 sm:text-lg">
        DS-160 tutarlılığı, evrak düzeni ve mülakat hazırlığıyla başvurunuzu
        şansa bırakmayın. Elitia Vize, süreci bilgi paylaşımı değil,
        <strong> danışmanlık </strong>
        olarak ele alır.
      </p>

      {/* CTA */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <a
          href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          WhatsApp’tan Ön Değerlendirme
        </a>

        <Link
          href="/iletisim"
          className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
        >
          İletişim Formu
        </Link>
      </div>

      {/* Micro trust */}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-4 shadow-soft">
          <div className="text-sm font-medium">📑 Evrak Kontrol</div>
          <div className="mt-1 text-sm text-neutral-600">
            Eksik ve tutarsız noktaları netleştiririz.
          </div>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-soft">
          <div className="text-sm font-medium">🧾 DS-160 Danışmanlığı</div>
          <div className="mt-1 text-sm text-neutral-600">
            Form akışını profilinize göre birlikte kurgularız.
          </div>
        </div>
        <div className="rounded-2xl bg-white p-4 shadow-soft">
          <div className="text-sm font-medium">🗓️ Mülakat Hazırlığı</div>
          <div className="mt-1 text-sm text-neutral-600">
            Süreci planlar, mülakata hazırlık yaparız.
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-neutral-500">
        Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlarca verilir.
      </p>
    </div>
  </div>
</section>


      {/* Services */}
<section className="relative">
  {/* section background rhythm */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(24,154,144,.06)] to-transparent" />
  <div className="relative mx-auto max-w-6xl px-6 py-12">
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Left: What we do */}
      <div className="rounded-3xl bg-white p-8 shadow-soft">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Ne yapıyoruz?
            </h2>
            <p className="mt-3 text-neutral-700">
              ABD vize başvurusunda en çok hata yapılan yerler:{" "}
              <strong>DS-160 tutarlılığı</strong>, <strong>evrak uyumu</strong> ve{" "}
              <strong>mülakat hazırlığı</strong>. Elitia Vize, bu üç alanda süreci
              sistemli hale getirir.
            </p>
          </div>

          {/* mini trust tag */}
          <div className="hidden sm:inline-flex items-center rounded-2xl bg-[rgba(24,154,144,.10)] px-4 py-2 text-xs font-semibold text-[var(--brand-navy)]">
            Standart Süreç • Net Akış
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm">
                <span className="text-lg">🧭</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  1) Profil Ön Değerlendirme
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Seyahat amacı, bağlar, geçmiş başvurular ve risk noktaları üzerinden
                  net bir yol haritası.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm">
                <span className="text-lg">🧾</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  2) DS-160 Süreci
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Form alanlarını profilinize göre netleştirir, beyanların tutarlılığını
                  birlikte kontrol ederiz.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm">
                <span className="text-lg">🎤</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  3) Evrak & Mülakat Hazırlığı
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Evrak setini kontrol eder, mülakat pratiğiyle kendinizi daha rahat ifade
                  etmenizi destekleriz.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small CTA line (not a second primary button) */}
        <div className="mt-6 text-sm text-neutral-700">
          <span className="font-semibold text-[var(--brand-navy)]">
            En hızlı başlangıç:
          </span>{" "}
          WhatsApp’tan yazın, profilinize göre net bir plan çıkaralım.
        </div>
      </div>

      {/* Right: visa types + quick start */}
      <div className="rounded-3xl bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
          En çok çalıştığımız ABD vize türleri
        </h2>
        <p className="mt-3 text-neutral-700">
          Önceliğimiz ABD vize danışmanlığı. Schengen sayfalarını ikinci fazda aynı yapı
          altında ekleyeceğiz.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            href="/abd-vizesi/b1-b2-turistik-vize"
          >
            <div className="text-sm font-semibold text-[var(--brand-navy)]">
              B1/B2 Turistik Vize
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Kısa süreli ziyaretler, iş/turizm amaçlı.
            </div>
          </Link>

          <Link
            className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            href="/abd-vizesi/f1-ogrenci-vizesi"
          >
            <div className="text-sm font-semibold text-[var(--brand-navy)]">
              F1 Öğrenci Vizesi
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Eğitim planına uygun başvuru akışı.
            </div>
          </Link>

          <Link
            className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            href="/abd-vizesi/j1-degisim-programi"
          >
            <div className="text-sm font-semibold text-[var(--brand-navy)]">
              J1 Değişim Programı
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Program türüne göre hazırlık.
            </div>
          </Link>

          <Link
            className="rounded-2xl bg-neutral-50 p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
            href="/abd-vizesi/ds-160-doldurma"
          >
            <div className="text-sm font-semibold text-[var(--brand-navy)]">
              DS-160 Danışmanlığı
            </div>
            <div className="mt-1 text-sm text-neutral-600">
              Form akışı, tutarlılık ve kontrol.
            </div>
          </Link>
        </div>

        {/* Quick Start (Primary CTA here is okay; it's inside section, not competing with hero) */}
        <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Hızlı Başlangıç
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                10 dakikalık ön değerlendirme için WhatsApp’tan yazın. Profilinize göre
                size net bir yol haritası çıkaralım.
              </p>
            </div>
            <div className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm">
              ⚡
            </div>
          </div>

          <div className="mt-4">
            <a
              className="btn-primary w-full sm:w-auto"
              href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Yaz
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* FAQ */}
<section className="relative">
  {/* soft background */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />

  <div className="relative mx-auto max-w-6xl px-6 py-14">
    <div className="grid gap-8 lg:grid-cols-3">

      {/* Left visual / intro */}
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
            Bu bölümde, ABD vize başvurularında en çok merak edilen konulara
            <strong> danışman gözüyle </strong>
            net ve kısa cevaplar bulabilirsiniz.
          </p>

          <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
            💡 Cevaplarımız bilgilendirme amaçlı değil,
            <strong> danışmanlık deneyimine </strong>
            dayalıdır.
          </div>
        </div>
      </div>

      {/* FAQ cards */}
      <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
        {faqs.map((f, i) => (
          <div
            key={f.q}
            className="rounded-3xl bg-white p-6 shadow-soft"
          >
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

{/* CTA Footer */}
<section className="relative">
  {/* gradient background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(24,154,144,.18)] via-[rgba(24,154,144,.08)] to-transparent" />

  <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-20">
    <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
      <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">

        {/* Left content */}
        <div>
          <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
            Başvurunuzu birlikte planlayalım.
          </h3>
          <p className="mt-2 max-w-xl text-sm text-neutral-700">
            Profilinize göre net bir yol haritası, DS-160 danışmanlığı, evrak kontrolü
            ve mülakat hazırlığıyla süreci birlikte ilerletelim.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              🔒 Gizlilik & KVKK
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              📑 DS-160 Kontrol
            </span>
            <span className="rounded-full bg-neutral-100 px-3 py-1">
              🎯 Mülakat Hazırlığı
            </span>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex flex-col items-start gap-3 sm:items-end">
          <a
            href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-6 py-3 text-base"
          >
            WhatsApp’tan Ön Değerlendirme
          </a>

          <p className="text-xs text-neutral-500 sm:text-right">
            Danışmanlık hizmetidir. Nihai karar resmi makamlarca verilir.
          </p>
        </div>
             <Link
  href="/blog"
  className="inline-flex underline text-sm mt-8"
>
  Vize Rehberi → ABD vize süreçlerini danışman gözüyle inceleyin
</Link>

      </div>
    </div>
  </div>
</section>

 

    </main>
  );
}
