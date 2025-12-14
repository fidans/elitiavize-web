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
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link href="/" className="hover:underline">Anasayfa</Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <Link href="/blog" className="hover:underline">Blog</Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">
          B1/B2 mülakat soruları (danışman gözüyle)
        </span>
      </nav>

      <article className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          B1/B2 mülakat soruları (danışman gözüyle)
        </h1>

        <p className="mt-6 max-w-3xl text-neutral-700 sm:text-lg">
          ABD B1/B2 vize mülakatında sorular genellikle basit görünür.
          Ancak asıl değerlendirme, verdiğiniz cevaplardan çok
          <strong> profilinizin tutarlılığı </strong> üzerinden yapılır.
          Elitia Vize, mülakatı ezber cevaplarla değil,
          <strong> risk yönetimi </strong> ile ele alır.
        </p>

        <div className="mt-8 rounded-2xl border p-6">
          <p className="text-sm text-neutral-700">
            ⚠️ Bu içerik bilgilendirme amaçlıdır.
            Her başvuru profili farklıdır; Elitia Vize,
            mülakat öncesi <strong>kişiye özel hazırlık</strong> yapar.
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Mülakat Ön Değerlendirmesi Al (WhatsApp)
            </a>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">
          En sık sorulan B1/B2 mülakat soruları
        </h2>

        <h3 className="mt-6 text-xl font-semibold">
          1) ABD’ye neden gitmek istiyorsunuz?
        </h3>
        <p className="mt-2 text-neutral-700">
          Bu soru, başvurunun merkezidir. Sorunun amacı “gezmek” cevabını duymak
          değil, seyahat planının profil ile uyumlu olup olmadığını anlamaktır.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          ✅ Elitia yaklaşımı: Seyahat amacını iş, gelir ve sosyal bağlarla
          tutarlı şekilde konumlandırırız.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          2) Ne kadar süre kalacaksınız?
        </h3>
        <p className="mt-2 text-neutral-700">
          Belirsiz veya aşırı uzun süreler, geri dönüş niyetiyle ilgili soru
          işaretleri yaratabilir.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          ✅ Elitia yaklaşımı: Süreyi plan, izin ve finansmanla uyumlu hale getiririz.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          3) Masraflarınızı kim karşılıyor?
        </h3>
        <p className="mt-2 text-neutral-700">
          Bu soruda tek başına banka bakiyesi değil, gelir–harcama ilişkisi
          değerlendirilir.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          ✅ Elitia yaklaşımı: Finansman anlatısını netleştirir, riskli alanları temizleriz.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          4) Türkiye’de ne iş yapıyorsunuz?
        </h3>
        <p className="mt-2 text-neutral-700">
          İş durumu, geri dönüş bağlarının en önemli parçasıdır.
          Eksik veya muğlak cevaplar red riskini artırabilir.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          ✅ Elitia yaklaşımı: İş/gelir anlatısını DS-160 ile birebir uyumlu hale getiririz.
        </p>

        <h3 className="mt-6 text-xl font-semibold">
          5) Daha önce yurtdışına çıktınız mı?
        </h3>
        <p className="mt-2 text-neutral-700">
          Seyahat geçmişi tek başına belirleyici değildir; ancak yanlış veya
          eksik beyan ciddi risk yaratır.
        </p>
        <p className="mt-2 text-sm text-neutral-600">
          ✅ Elitia yaklaşımı: Seyahat geçmişini profil bütünlüğü içinde konumlandırırız.
        </p>

        <section className="mt-10 rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">
            Mülakata girmeden önce bilinmesi gereken en önemli şey
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Mülakat bir “soru–cevap sınavı” değildir.
            Asıl değerlendirme, başvurunun başından itibaren
            <strong> aynı hikâyeyi tutarlı şekilde anlatıp anlatmadığıdır.</strong>
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Profilimi Yazayım, Riskleri Söyleyin (WhatsApp)
            </a>
            <Link
              href="/abd-vizesi/b1-b2-turistik-vize"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              B1/B2 Danışmanlık Sayfası
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
