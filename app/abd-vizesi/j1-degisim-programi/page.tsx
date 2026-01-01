import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20J1%20de%C4%9Fi%C5%9Fim%20program%C4%B1%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "J1 Değişim Programı ABD Vizesi Danışmanlığı | Elitia Vize",
  description:
    "J1 değişim programı ABD vizesi başvurularında program türüne uygun DS-160 danışmanlığı, evrak kontrolü ve mülakat hazırlığı için Elitia Vize.",
  alternates: { canonical: "/abd-vizesi/j1-degisim-programi" },
};

const faqs = [
  {
    q: "J1 vizesi hangi programlar için kullanılır?",
    a: "Work & Travel, staj, araştırma, öğretmen değişim programları ve benzeri kültürel/değişim programları için kullanılır. Elitia Vize, program türünüze göre süreci planlar.",
  },
  {
    q: "J1 başvurularında en kritik nokta nedir?",
    a: "Program detaylarının netliği, sponsor evraklarının uyumu ve DS-160 içindeki beyanların tutarlılığıdır.",
  },
  {
    q: "J1 vizesi F1’den farklı mı değerlendirilir?",
    a: "Evet. J1 değerlendirmesi program ve sponsor odaklıdır. Eğitim planından çok program içeriği ve dönüş niyeti ön plandadır.",
  },
  {
    q: "Mülakatta hangi sorular sorulur?",
    a: "Program içeriği, sponsor, ABD’de yapılacak faaliyet, süre ve program sonrası planlar sıklıkla sorulur.",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function J1Page() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link href="/" className="hover:underline">Anasayfa</Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <Link href="/abd-vizesi" className="hover:underline">ABD Vizesi</Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">J1 Değişim Programı</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  J1 Değişim Programı
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Program odaklı danışmanlık</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                J1 başvurunuzu{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  programınıza uygun
                </span>{" "}
                ve{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  tutarlı bir dosya
                </span>{" "}
                ile hazırlayın.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                J1 başvurularında değerlendirme; program içeriği, sponsor belgeleri ve
                başvuru sahibinin bu programa uygunluğu üzerinden yapılır.
                Elitia Vize, süreci <strong>profil + program + DS-160</strong> üçgeninde yönetir.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
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
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">🧾 Program Detayı</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    İçerik, süre ve sponsor bilgileri net olmalı.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">🏢 Sponsor Uyumu</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    DS-2019 ve evraklar başvuruyla birebir örtüşmeli.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">🔗 Dönüş Niyeti</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Program sonrası plan net şekilde anlatılmalı.
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlar tarafından verilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              J1 sürecinde Elitia Vize ne yapar?
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Program Analizi",
                  desc: "Program türü, sponsor ve süre detayları analiz edilir.",
                },
                {
                  icon: "🧾",
                  title: "2) DS-160 Danışmanlığı",
                  desc: "Program bilgileriyle uyumlu DS-160 akışı kurulur.",
                },
                {
                  icon: "📑",
                  title: "3) Evrak Kontrol",
                  desc: "DS-2019 ve destekleyici belgeler kontrol edilir.",
                },
                {
                  icon: "🎤",
                  title: "4) Mülakat Hazırlığı",
                  desc: "Program odaklı mülakat pratiği yapılır.",
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
                      <div className="mt-1 text-sm text-neutral-600">{x.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-8">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Hızlı Başlangıç
            </h2>
            <p className="mt-3 text-neutral-700">
              WhatsApp’tan yazın; J1 programınıza göre başvuru yol haritasını birlikte çıkaralım.
            </p>
            <div className="mt-5">
              <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl bg-white p-6 shadow-soft">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  {f.q}
                </div>
                <div className="mt-2 text-sm text-neutral-700 leading-relaxed">
                  {f.a}
                </div>
              </div>
            ))}
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
                  J1 başvurunuzu birlikte planlayalım.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Program + DS-160 + evrak + mülakat hazırlığı tek akışta.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a className="btn-primary px-6 py-3 text-base" href={WHATSAPP} target="_blank" rel="noreferrer">
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
              href="/abd-vizesi/red-sonrasi-basvuru"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              Red sonrası başvuru
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
