import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20F1%20%C3%B6%C4%9Frenci%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "F1 Öğrenci ABD Vizesi Danışmanlığı | Elitia Vize",
  description:
    "F1 öğrenci vizesi başvurularında profil değerlendirme, DS-160 danışmanlığı, evrak kontrolü ve mülakat hazırlığı için Elitia Vize ile danışmanlık alın.",
  alternates: { canonical: "/abd-vizesi/f1-ogrenci-vizesi" },
};

const faqs = [
  {
    q: "F1 vizesinde en kritik konu nedir?",
    a: "Eğitim planınızın netliği ve başvuru dosyasındaki tutarlılık. Elitia Vize, DS-160 akışını ve evrak setini profilinize göre düzenler.",
  },
  {
    q: "Mülakatta neler sorulabilir?",
    a: "Okul/plan, finansman, Türkiye ile bağlar ve eğitim sonrası planlar. Elitia Vize, profilinize uygun bir mülakat hazırlığı planı çıkarır.",
  },
  {
    q: "F1 başvurusunda en sık risk nerede oluşur?",
    a: "Planın belirsiz anlatılması, finansmanın net olmaması, okul/program seçim gerekçesinin zayıf kalması ve DS-160 alanlarında tarih/tutarsızlık riskleridir.",
  },
  {
    q: "Eğitim sonrası plan neden önemli?",
    a: "F1 değerlendirmesinde eğitim amacının netliği ve Türkiye ile bağların anlatımı önemlidir. Elitia Vize, profilinize uygun anlatım çerçevesi oluşturur.",
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

export default function F1Page() {
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
            <span className="text-neutral-900">F1 Öğrenci</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  F1 Öğrenci Vizesi
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Plan & tutarlılık odaklı</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                F1 başvurunuzu{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  net bir eğitim planı
                </span>{" "}
                ve{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  tutarlı bir dosya
                </span>{" "}
                ile hazırlayın.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                Elitia Vize, F1 başvurularında{" "}
                <strong>profil ön değerlendirme</strong>,{" "}
                <strong>DS-160 danışmanlığı</strong>,{" "}
                <strong>evrak kontrolü</strong> ve{" "}
                <strong>mülakat hazırlığı</strong> adımlarını tek akışta yönetir.
                Amaç: başvurunun <strong>anlaşılır</strong>, <strong>tutarlı</strong>{" "}
                ve <strong>planlı</strong> ilerlemesidir.
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
                    🎓 Eğitim Planı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Okul/program seçimi ve hedef net olmalı.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    💳 Finansman
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Kaynaklar ve akış “anlaşılır” görünmeli.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🔗 Bağlar
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Türkiye ile bağların anlatımı tutarlı olmalı.
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

      {/* F1 focus blocks */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Critical topics */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              F1’de kritik başlıklar
            </h2>
            <p className="mt-3 text-neutral-700">
              F1 değerlendirmesinde en büyük risk; eğitim amacının ve planın{" "}
              <strong>bulanık</strong> kalmasıdır. En sık dikkat edilen başlıklar:
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🎓",
                  title: "Okul / Program Seçimi",
                  desc: "Programın hedefle ilişkisi ve seçimin gerekçesi net olmalı.",
                },
                {
                  icon: "💳",
                  title: "Finansman Netliği",
                  desc: "Eğitim masrafları ve kaynakların açıklaması tutarlı olmalı.",
                },
                {
                  icon: "🗓️",
                  title: "Zaman Çizgisi",
                  desc: "Eğitim planı, geçmiş ve tarihler birbiriyle uyumlu olmalı.",
                },
                {
                  icon: "🔗",
                  title: "Türkiye ile Bağlar",
                  desc: "İş/okul/aile gibi bağların anlatımı profil ile uyumlu olmalı.",
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

          {/* How we work */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Elitia Vize ile F1 akışı
            </h2>
            <p className="mt-3 text-neutral-700">
              Amaç: eğitim planını <strong>netleştirmek</strong> ve dosyayı{" "}
              <strong>tutarlı</strong> bir anlatımla hazırlamak.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Ön değerlendirme",
                  desc: "Eğitim amacı, profil, bağlar ve risk noktaları netleştirilir.",
                },
                {
                  icon: "🧾",
                  title: "2) DS-160 danışmanlığı",
                  desc: "Kritik alanlar birlikte doğrulanır, tutarlılık korunur.",
                },
                {
                  icon: "📑",
                  title: "3) Evrak kontrol",
                  desc: "Dosya düzeni, evrak uyumu ve eksikler kontrol edilir.",
                },
                {
                  icon: "🎤",
                  title: "4) Mülakat hazırlığı",
                  desc: "Profilinize uygun soru setiyle pratik yapılır.",
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
                WhatsApp’tan yazın; F1 başvurusu için profilinize uygun yol haritasını
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
                    🎓
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      F1 Öğrenci Vizesi
                    </div>
                    <div className="text-xs text-neutral-500">
                      Plan & tutarlılık
                    </div>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[var(--brand-navy)]">
                  Sık Sorulan Sorular
                </h2>
                <p className="mt-3 text-sm text-neutral-700">
                  Kısa ve net cevaplar 
                </p>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                  💡 En kritik konu: <strong>eğitim planının netliği</strong>.
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
                  F1 başvurunuzu birlikte planlayalım.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Eğitim planı + DS-160 + evrak kontrol + mülakat hazırlığı tek akışta.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-600">
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    🎓 Plan
                  </span>
                  <span className="rounded-full bg-neutral-100 px-3 py-1">
                    ✅ Tutarlılık
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
              href="/abd-vizesi/j1-degisim-programi"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              J1 danışmanlığı
            </Link>{" "}
            veya{" "}
            <Link
              href="/abd-vizesi/ds-160-doldurma"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              DS-160 danışmanlığı
            </Link>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
