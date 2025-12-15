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
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />
      <ServiceJsonLd />

      {/* Header */}
      <section className="rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="font-medium">ABD Vize Danışmanlığı</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600">B1/B2 öncelikli</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            ABD vize başvurunuzu <span className="underline decoration-neutral-300">strateji</span> ve{" "}
            <span className="underline decoration-neutral-300">tutarlılık</span> ile yönetiyoruz.
          </h1>

          <p className="max-w-3xl text-neutral-700 sm:text-lg">
            Elitia Vize; başvurunuzu tek tek adımlara bölerek ilerler:{" "}
            <strong>profil ön değerlendirme</strong>, <strong>DS-160 danışmanlığı</strong>,{" "}
            <strong>evrak kontrolü</strong>, <strong>randevu planlama</strong> ve{" "}
            <strong>mülakat hazırlığı</strong>. Amaç; başvurunun net, tutarlı ve düzenli ilerlemesidir.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Ön Değerlendirme Al
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              href="/iletisim"
            >
              İletişim Formu
            </Link>
          </div>

          <p className="text-xs text-neutral-500">
            Not: Danışmanlık hizmetimiz başvuruyu hazırlama ve süreç yönetimi sunar; nihai karar ilgili resmi
            makamlar tarafından verilir.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Süreç nasıl ilerler?</h2>
          <p className="mt-3 text-neutral-700">
            ABD vizesinde en büyük risk; parçalı, çelişkili veya eksik bir başvuru dosyasıdır. Biz, süreci
            standardize ederek ilerleriz.
          </p>

          <ol className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Profil Ön Değerlendirme</div>
              <div className="mt-1 text-neutral-600">
                Seyahat amacı, bağlar, geçmiş başvurular ve risk noktaları üzerinden yol haritası oluştururuz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) DS-160 Danışmanlığı</div>
              <div className="mt-1 text-neutral-600">
                DS-160 form akışını profilinize göre netleştirir, beyanların tutarlılığını birlikte doğrularız.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Evrak Kontrol</div>
              <div className="mt-1 text-neutral-600">
                Evrak setini kontrol eder, eksikleri ve tutarsızlıkları başvuru öncesinde gideririz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">4) Randevu & Mülakat Hazırlığı</div>
              <div className="mt-1 text-neutral-600">
                Randevu planını çıkarır, mülakatta kendinizi net ifade etmeniz için hazırlık yaparız.
              </div>
            </li>
          </ol>
        </div>

        {/* Visa Types */}
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Hangi ABD vize türlerinde destek veriyoruz?</h2>
          <p className="mt-3 text-neutral-700">
            Önceliğimiz <strong>B1/B2 turistik vize</strong>. Diğer vize türlerinde de danışmanlık sunuyoruz.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/b1-b2-turistik-vize">
              <div className="text-sm font-medium">B1/B2 Turistik Vize</div>
              <div className="mt-1 text-sm text-neutral-600">Turizm / iş ziyareti başvuruları.</div>
            </Link>
            <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/f1-ogrenci-vizesi">
              <div className="text-sm font-medium">F1 Öğrenci Vizesi</div>
              <div className="mt-1 text-sm text-neutral-600">Okul planı ve evrak akışı.</div>
            </Link>
            <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/j1-degisim-programi">
              <div className="text-sm font-medium">J1 Değişim Programı</div>
              <div className="mt-1 text-sm text-neutral-600">Program türüne göre hazırlık.</div>
            </Link>
            <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/ds-160-doldurma">
              <div className="text-sm font-medium">DS-160 Danışmanlığı</div>
              <div className="mt-1 text-sm text-neutral-600">Form akışı ve kontrol.</div>
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <div className="text-sm font-medium">Hızlı Başlangıç</div>
            <p className="mt-1 text-sm text-neutral-600">
              Profilinize göre doğru akışı çıkaralım. Ön değerlendirme için WhatsApp’tan yazabilirsiniz.
            </p>
            <div className="mt-4">
              <a
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’a Git
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>
        <p className="mt-2 text-neutral-700">
          Kısa ve net cevaplar: Hem kullanıcı hem de AI aramaları için.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-5">
              <div className="text-sm font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-3xl border bg-white p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">ABD vize başvurunuzu birlikte planlayalım.</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Öncelik B1/B2. DS-160 + evrak kontrol + randevu + mülakat hazırlığı tek akışta.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <Link
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              href="/iletisim"
            >
              İletişim
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">
            Vize Rehberi’nden Öne Çıkanlar
        </h2>
        <p className="mt-2 text-neutral-700">
            ABD vize süreçlerinde en sık karşılaşılan riskler ve danışmanlık
            bakış açısıyla hazırlanmış rehberler.
        </p>

        <ul className="mt-6 space-y-3 text-sm">
            <li>
                <Link
                    href="/blog/abd-vizesi-neden-reddedilir"
                className="underline"
      >
        ABD vizesi neden reddedilir?
      </Link>
    </li>
    <li>
      <Link
        href="/blog/ds-160-hatalari"
        className="underline"
      >
        DS-160’ta yapılan 10 kritik hata
      </Link>
    </li>
    <li>
      <Link
        href="/blog/b1-b2-mulakat-sorulari"
        className="underline"
      >
        B1/B2 mülakat soruları (danışman gözüyle)
      </Link>
    </li>
    <li>
      <Link
        href="/blog"
        className="inline-flex underline text-sm mt-6"
      >
        Vize Rehberi → ABD vize süreçlerini danışman gözüyle inceleyin
      </Link>
    </li>
    <li>
      <Link href="/abd-vizesi/red-sonrasi-basvuru" className="underline text-sm">
        Red sonrası yeniden başvuru rehberi →
      </Link>
    </li>
  </ul>
</section>
    </main>
  );
}
