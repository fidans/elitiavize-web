// app/blog/b1-b2-mulakat-sorulari/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20B1/B2%20m%C3%BClakat%C4%B1%20%C3%B6ncesi%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "B1/B2 mülakat soruları (danışman gözüyle) | Elitia Vize",
  description:
    "B1/B2 ABD vize mülakatında en sık sorulan sorular, riskli cevap alanları ve danışmanlık yaklaşımı. Mülakata girmeden önce bilinmesi gerekenler.",
  alternates: { canonical: "/blog/b1-b2-mulakat-sorulari" },
};

const faqs = [
  {
    q: "ABD vize mülakatında neye bakılır?",
    a: "Mülakatta tek tek cevaplardan çok, başvuru sahibinin profil bütünlüğü ve tutarlılığı değerlendirilir.",
  },
  {
    q: "Yanlış cevap vize reddine sebep olur mu?",
    a: "Tek bir cümle değil; ancak tutarsız, belirsiz veya profil ile uyumsuz cevaplar red riskini artırabilir.",
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

export default function Post() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <FAQJsonLd />

        <nav className="text-sm text-neutral-600">
          <Link href="/" className="hover:underline">
            Anasayfa
          </Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <Link href="/blog" className="hover:underline">
            Vize Rehberi
          </Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <span className="text-neutral-900">
            B1/B2 mülakat soruları (danışman gözüyle)
          </span>
        </nav>

        <article className="mt-6 grid gap-10 lg:grid-cols-12">
          {/* CONTENT */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
              <span className="font-semibold text-[var(--brand-navy)]">Rehber</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">B1/B2 • Mülakat</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
              B1/B2 mülakat soruları (danışman gözüyle)
            </h1>

            <p className="mt-6 max-w-3xl text-neutral-700 sm:text-lg">
              ABD B1/B2 vize mülakatında sorular genellikle basit görünür. Ancak asıl
              değerlendirme, tek tek cevaplardan çok{" "}
              <strong>profil bütünlüğü ve tutarlılık</strong> üzerinden yapılır. Elitia Vize,
              mülakatı “ezber cevap” değil, <strong>risk yönetimi</strong> olarak ele alır.
            </p>

            {/* NOTICE */}
            <div className="mt-8 rounded-3xl border bg-neutral-50 p-6">
              <p className="text-sm text-neutral-700">
                ⚠️ Bu içerik genel bilgilendirme amaçlıdır. Her başvuru profili farklıdır; Elitia Vize,
                mülakat öncesi <strong>kişiye özel hazırlık</strong> ile ilerler.
              </p>
              <div className="mt-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Mülakat Ön Değerlendirmesi (WhatsApp)
                </a>
              </div>
            </div>

            <h2 className="mt-12 text-2xl font-semibold">
              En sık sorulan B1/B2 mülakat soruları
            </h2>

            {/* Q1 */}
            <h3 className="mt-6 text-xl font-semibold">
              1) ABD’ye neden gitmek istiyorsunuz?
            </h3>
            <p className="mt-2 text-neutral-700">
              Bu soru, başvurunun merkezidir. Amaç “gezmek” cevabını duymak değil;
              seyahat planının profilinizle uyumlu olup olmadığını anlamaktır.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              ✅ Elitia yaklaşımı: Seyahat amacını iş, gelir ve bağlarla tutarlı şekilde konumlandırırız.
            </p>

            {/* Q2 */}
            <h3 className="mt-6 text-xl font-semibold">
              2) Ne kadar süre kalacaksınız?
            </h3>
            <p className="mt-2 text-neutral-700">
              Belirsiz veya aşırı uzun süreler, geri dönüş niyetinizle ilgili soru işaretleri yaratabilir.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              ✅ Elitia yaklaşımı: Süreyi plan, izin ve finansmanla uyumlu hale getiririz.
            </p>

            {/* Q3 */}
            <h3 className="mt-6 text-xl font-semibold">
              3) Masraflarınızı kim karşılıyor?
            </h3>
            <p className="mt-2 text-neutral-700">
              Bu soruda tek başına banka bakiyesi değil; gelir–harcama ilişkisi ve açıklanabilirlik değerlendirilir.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              ✅ Elitia yaklaşımı: Finansman anlatısını netleştirir, riskli alanları temizleriz.
            </p>

            {/* Q4 */}
            <h3 className="mt-6 text-xl font-semibold">
              4) Türkiye’de ne iş yapıyorsunuz?
            </h3>
            <p className="mt-2 text-neutral-700">
              İş durumu, geri dönüş bağlarının en güçlü parçalarından biridir. Eksik veya muğlak cevaplar risk yaratabilir.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              ✅ Elitia yaklaşımı: İş/gelir anlatısını DS-160 ile birebir uyumlu hale getiririz.
            </p>

            {/* Q5 */}
            <h3 className="mt-6 text-xl font-semibold">
              5) Daha önce yurtdışına çıktınız mı?
            </h3>
            <p className="mt-2 text-neutral-700">
              Seyahat geçmişi tek başına belirleyici değildir; ancak yanlış/eksik beyan ciddi risk yaratır.
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              ✅ Elitia yaklaşımı: Seyahat geçmişini profil bütünlüğü içinde konumlandırırız.
            </p>

            {/* KEY TAKEAWAY */}
            <section className="mt-12 rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-[var(--brand-navy)]">
                Mülakata girmeden önce bilinmesi gereken en önemli şey
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Mülakat bir “soru–cevap sınavı” değildir. Asıl değerlendirme, başvurunun başından itibaren
                <strong> aynı hikâyeyi tutarlı şekilde anlatıp anlatmadığınızdır.</strong>
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  Profilimi Yazayım, Riskleri Söyleyin (WhatsApp)
                </a>
                <Link
                  href="/abd-vizesi/b1-b2-turistik-vize"
                  className="btn-secondary"
                >
                  B1/B2 Danışmanlık Sayfası
                </Link>
              </div>
            </section>
          </div>

          {/* SIDE CTA */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-[var(--brand-navy)]">
                Mülakat öncesi hızlı kontrol
              </h4>
              <p className="mt-2 text-sm text-neutral-600">
                2–3 satır profil özeti yazın, riskli alanları netleştirelim.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-4 w-full"
              >
                WhatsApp’tan Yaz
              </a>

              <div className="mt-4 rounded-2xl border bg-neutral-50 p-4 text-sm text-neutral-700">
                <div className="font-medium">Yazmanız yeterli:</div>
                <ul className="mt-2 space-y-1 text-neutral-600">
                  <li>• Seyahat amacı + süre</li>
                  <li>• İş/okul durumu</li>
                  <li>• Finansman (kısa)</li>
                </ul>
              </div>

              <Link
                href="/abd-vizesi"
                className="mt-4 inline-block text-sm underline"
              >
                ABD Vize Danışmanlığı →
              </Link>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}
