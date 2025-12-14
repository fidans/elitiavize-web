// app/abd-vizesi/b1-b2-turistik-vize/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20B1/B2%20turistik%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "B1/B2 Turistik ABD Vizesi Danışmanlığı | Elitia Vize",
  description:
    "B1/B2 turistik ABD vizesi başvurularında profil analizi, DS-160 danışmanlığı, evrak kontrolü ve mülakat hazırlığıyla süreci Elitia Vize ile planlayın.",
  alternates: { canonical: "/abd-vizesi/b1-b2-turistik-vize" },
  openGraph: {
    title: "B1/B2 Turistik ABD Vizesi Danışmanlığı | Elitia Vize",
    description:
      "B1/B2 vize başvurusunda DS-160, evrak uyumu, randevu planlama ve mülakat hazırlığı için profesyonel danışmanlık.",
    url: "/abd-vizesi/b1-b2-turistik-vize",
    type: "article",
  },
};

const faqs = [
  {
    q: "B1/B2 vizesi nedir?",
    a: "B1/B2; kısa süreli iş ziyareti (B1) ve turistik/ziyaret amaçlı (B2) ABD seyahatleri için kullanılan vize türüdür. Elitia Vize, başvuruyu profilinize göre planlayıp süreci danışmanlıkla yönetir.",
  },
  {
    q: "B1/B2 vizesinde en sık red nedenleri nelerdir?",
    a: "En sık risk; seyahat amacının net olmaması, DS-160 içinde tutarsız beyanlar, evrakların profil ile uyumsuz görünmesi ve bağların yeterince güçlü anlatılamamasıdır. Elitia Vize, bu riskleri baştan tespit edip başvuruyu daha güçlü kurgular.",
  },
  {
    q: "Mülakatta ne sorulur?",
    a: "Genellikle seyahat amacı, plan, finansman, Türkiye ile bağlar (iş/okul/aile) ve geçmiş seyahatler sorulur. Elitia Vize, profilinize uygun bir mülakat hazırlığı planı çıkarır.",
  },
  {
    q: "Randevu bulunamıyor, ne yapmalıyım?",
    a: "Randevu bulunabilirliği dönemsel değişebilir. Biz, profilinize göre doğru zamanlama ve takip yaklaşımını belirleyip süreci planlarız.",
  },
  {
    q: "Red aldıktan sonra tekrar başvuru yapılır mı?",
    a: "Evet. Red gerekçeleri analiz edilerek yeni başvuru daha doğru bir stratejiyle hazırlanabilir. Elitia Vize, önceki başvurudaki zayıf noktaları tespit edip yeni dosyayı buna göre kurgular.",
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
    name: "B1/B2 Turistik ABD Vizesi Danışmanlığı",
    provider: {
      "@type": "Organization",
      name: "Elitia Vize Danışmanlığı",
      url: "https://elitiavize.com/abd-vizesi/b1-b2-turistik-vize",
    },
    areaServed: "TR",
    serviceType: "Vize danışmanlığı",
    description:
      "B1/B2 turistik ABD vizesi başvurularında profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu planlama ve mülakat hazırlığı.",
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function B1B2Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />
      <ServiceJsonLd />

      {/* Breadcrumb */}
      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <Link className="hover:underline" href="/abd-vizesi">
          ABD Vizesi
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">B1/B2 Turistik Vize</span>
      </nav>

      {/* Hero */}
      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="font-medium">B1/B2 Öncelikli Danışmanlık</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600">Turistik & iş ziyareti</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            B1/B2 Turistik ABD Vizesi başvurunuzu{" "}
            <span className="underline decoration-neutral-300">net</span> ve{" "}
            <span className="underline decoration-neutral-300">tutarlı</span> şekilde hazırlıyoruz.
          </h1>

          <p className="max-w-3xl text-neutral-700 sm:text-lg">
            B1/B2 başvurularında küçük hatalar bile red riskini artırabilir. Elitia Vize;{" "}
            <strong>profilinizi analiz eder</strong>, <strong>DS-160 akışını doğrular</strong>,{" "}
            <strong>evrakları kontrol eder</strong> ve <strong>mülakat hazırlığı</strong> için plan çıkarır.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp’tan Ön Değerlendirme
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

      {/* Why / Risks */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">B1/B2’de kritik noktalar</h2>
          <p className="mt-3 text-neutral-700">
            B1/B2 başvurularında değerlendirme, başvuru sahibinin profil bütünlüğü üzerinden yapılır. En sık
            sorun yaşanan başlıklar:
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">DS-160 Tutarlılığı</div>
              <div className="mt-1 text-neutral-600">
                İş/gelir/seyahat amacı gibi alanlarda çelişki veya eksik anlatım risk yaratabilir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">Seyahat Amacının Netliği</div>
              <div className="mt-1 text-neutral-600">
                Planın belirsiz olması veya profil ile uyumsuz görünmesi soru işaretleri doğurabilir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">Evrak Uyum ve Düzeni</div>
              <div className="mt-1 text-neutral-600">
                Evrakların “var” olması kadar, profilinizle uyumu ve düzeni de önemlidir.
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Elitia Vize bu süreçte ne yapar?</h2>
          <p className="mt-3 text-neutral-700">
            Bizim yaklaşımımız “tek seferlik evrak listesi” değil; profilinize göre başvuruyu{" "}
            <strong>uçtan uca</strong> yönetmektir.
          </p>

          <ol className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Ön Değerlendirme</div>
              <div className="mt-1 text-neutral-600">
                Profilinize göre riskleri görür, hangi noktaları güçlendireceğimizi belirleriz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) DS-160 Danışmanlığı</div>
              <div className="mt-1 text-neutral-600">
                Form akışını netleştirir, bilgileri sizinle doğrulayarak tutarlılığı artırırız.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Evrak Kontrol + Mülakat Hazırlığı</div>
              <div className="mt-1 text-neutral-600">
                Evrak setini düzenler, mülakat pratiği için profilinize uygun bir plan çıkarırız.
              </div>
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border p-5">
            <div className="text-sm font-medium">Hızlı Başlangıç</div>
            <p className="mt-1 text-sm text-neutral-600">
              WhatsApp’tan yazın; profilinize göre B1/B2 başvuru yol haritasını çıkaralım.
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
          Kısa ve net cevaplar (SEO + GEO uyumlu).
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
            <h3 className="text-xl font-semibold">B1/B2 başvurunuzu birlikte planlayalım.</h3>
            <p className="mt-1 text-sm text-neutral-600">
              DS-160 + evrak kontrol + mülakat hazırlığı tek akışta.
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
    </main>
  );
}
