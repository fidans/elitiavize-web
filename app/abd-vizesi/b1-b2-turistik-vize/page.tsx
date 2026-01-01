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
    <main className="min-h-screen">
      <FAQJsonLd />
      <ServiceJsonLd />

      {/* Breadcrumb + Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
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

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  B1/B2 Öncelikli Danışmanlık
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Turistik & iş ziyareti</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                B1/B2 başvurunuzu{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  net
                </span>{" "}
                ve{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  tutarlı
                </span>{" "}
                şekilde hazırlayın.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                B1/B2 başvurularında küçük hatalar bile red riskini artırabilir.
                Elitia Vize; <strong>profilinizi analiz eder</strong>,{" "}
                <strong>DS-160 akışını doğrular</strong>,{" "}
                <strong>evrakları kontrol eder</strong> ve{" "}
                <strong>mülakat hazırlığı</strong> için plan çıkarır.
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
                  İletişim Formu
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧾 DS-160 Tutarlılığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Beyanların çelişmemesi, akışın net olması.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧭 Amaç Netliği
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Seyahat planı profilinizle uyumlu görünmeli.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    📑 Evrak Uyumu
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    “Var” olması kadar, düzen ve uyum önemli.
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

      {/* Why / Risks + What we do */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Critical points */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              B1/B2’de kritik noktalar
            </h2>
            <p className="mt-3 text-neutral-700">
              B1/B2 başvurularında değerlendirme, başvuru sahibinin{" "}
              <strong>profil bütünlüğü</strong> üzerinden yapılır. En sık sorun
              yaşanan başlıklar:
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧾",
                  title: "DS-160 Tutarlılığı",
                  desc: "İş/gelir/seyahat amacı gibi alanlarda çelişki veya eksik anlatım risk yaratabilir.",
                },
                {
                  icon: "🧭",
                  title: "Seyahat Amacının Netliği",
                  desc: "Planın belirsiz olması veya profil ile uyumsuz görünmesi soru işaretleri doğurabilir.",
                },
                {
                  icon: "📑",
                  title: "Evrak Uyum ve Düzeni",
                  desc: "Evrakların “var” olması kadar, profilinizle uyumu ve düzeni de önemlidir.",
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
          </div>

          {/* What Elitia does */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Elitia Vize bu süreçte ne yapar?
            </h2>
            <p className="mt-3 text-neutral-700">
              Bizim yaklaşımımız “tek seferlik evrak listesi” değil; profilinize göre
              başvuruyu <strong>uçtan uca</strong> yönetmektir.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Ön Değerlendirme",
                  desc: "Profilinize göre riskleri görür, hangi noktaları güçlendireceğimizi belirleriz.",
                },
                {
                  icon: "🧾",
                  title: "2) DS-160 Danışmanlığı",
                  desc: "Form akışını netleştirir, bilgileri sizinle doğrulayarak tutarlılığı artırırız.",
                },
                {
                  icon: "🎤",
                  title: "3) Evrak Kontrol + Mülakat Hazırlığı",
                  desc: "Evrak setini düzenler, mülakat pratiği için profilinize uygun bir plan çıkarırız.",
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
                Hızlı Başlangıç
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                WhatsApp’tan yazın; profilinize göre B1/B2 başvuru yol haritasını
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

      {/* FAQ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
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
                      B1/B2 Danışmanlığı
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
                  💡 En sık risk: <strong>tutarsız akış</strong>. Önce netleştirir,
                  sonra başlarız.
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
                  B1/B2 başvurunuzu birlikte planlayalım.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  DS-160 + evrak kontrol + mülakat hazırlığı tek akışta.
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

          <div className="mt-6 text-sm text-neutral-600">
            Bir sonraki sayfa:{" "}
            <Link
              href="/abd-vizesi/ds-160-doldurma"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              DS-160 danışmanlığı
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
