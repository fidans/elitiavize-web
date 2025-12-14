// app/sikca-sorulan-sorular/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | ABD Vize Danışmanlığı | Elitia Vize",
  description:
    "ABD vize başvuruları hakkında sık sorulan sorular: DS-160, randevu süreci, B1/B2 turistik vize, red sonrası başvuru ve mülakat hazırlığı. Elitia Vize ile danışmanlık süreci.",
  alternates: { canonical: "/sikca-sorulan-sorular" },
  openGraph: {
    title: "Sık Sorulan Sorular | Elitia Vize",
    description:
      "ABD vize başvuruları, DS-160, B1/B2 ve randevu süreçleri hakkında sık sorulan sorular ve danışmanlık yaklaşımımız.",
    url: "/sikca-sorulan-sorular",
    type: "article",
  },
};

const faqs = [
  {
    q: "ABD vizesi için danışmanlık almak şart mı?",
    a: "Hayır, zorunlu değildir. Ancak DS-160 tutarlılığı, evrak uyumu ve mülakat hazırlığı gibi detaylar red riskini etkileyebilir. Elitia Vize, süreci danışmanlıkla yöneterek başvuruyu daha sistemli hale getirir.",
  },
  {
    q: "B1/B2 vizesi nedir?",
    a: "B1/B2; kısa süreli iş ziyareti (B1) ve turistik/ziyaret amaçlı (B2) seyahatler için kullanılan ABD vizesidir. Elitia Vize, B1/B2 başvurularında profil analizi ve başvuru planlaması yapar.",
  },
  {
    q: "DS-160 formunu kim doldurmalı?",
    a: "DS-160 başvuru sahibinin beyanıdır. Formda eksik/çelişkili bilgi risktir. Elitia Vize, bilgileri sizinle doğrulayarak DS-160 akışını danışmanlıkla destekler.",
  },
  {
    q: "DS-160’ta en kritik konu nedir?",
    a: "Tutarlılık. Seyahat amacı, iş/gelir, geçmiş seyahatler ve adres bilgileri gibi alanlarda çelişki veya belirsizlik risk yaratabilir. Biz, form akışını profilinize göre netleştiririz.",
  },
  {
    q: "Randevu bulunamıyor, ne yapmalıyım?",
    a: "Randevu bulunabilirliği dönemsel değişir. Elitia Vize, profilinize göre doğru zamanlama ve takip yaklaşımını planlayarak süreci organize eder.",
  },
  {
    q: "Vize reddi aldıysam tekrar başvurabilir miyim?",
    a: "Evet. Red gerekçeleri analiz edilerek yeni başvuru daha doğru bir stratejiyle hazırlanabilir. Elitia Vize, önceki dosyanın zayıf noktalarını tespit ederek yeni başvuru planı çıkarır.",
  },
  {
    q: "Mülakatta genelde ne sorulur?",
    a: "Seyahat amacı, plan, finansman, Türkiye ile bağlar (iş/okul/aile) ve geçmiş seyahatler sık sorulan başlıklardır. Elitia Vize, profilinize uygun mülakat hazırlığı yapar.",
  },
  {
    q: "Evraklar eksik olursa ne olur?",
    a: "Eksik veya profil ile uyumsuz evraklar süreci zora sokabilir. Elitia Vize, evrak setini kontrol eder ve başvuru öncesi eksikleri tamamlamaya yönelik yönlendirme yapar.",
  },
  {
    q: "Banka hesabımda ne kadar para olmalı?",
    a: "Tek bir “sabit tutar” yoktur; önemli olan seyahat planı ile finansmanın uyumlu ve açıklanabilir olmasıdır. Elitia Vize, profilinize göre finansman anlatısını netleştirmenize yardımcı olur.",
  },
  {
    q: "ABD vizesi kaç yıllık verilir?",
    a: "Süre, vize türü ve değerlendirmeye göre değişebilir. Elitia Vize, hedefinize uygun başvuru kurgusu için danışmanlık sağlar.",
  },
  {
    q: "Pasaport sürem kısa, başvurabilir miyim?",
    a: "Başvuru koşulları ve planlanan seyahat tarihlerine göre değişebilir. Biz, pasaport sürenizi ve hedefinizi değerlendirip doğru planı öneririz.",
  },
  {
    q: "Eski vizelerim veya seyahat geçmişim önemli mi?",
    a: "Evet, geçmiş seyahatler profili destekleyebilir. Elitia Vize, seyahat geçmişinizi başvuruda tutarlı şekilde konumlandırır.",
  },
  {
    q: "Çalışmıyorum / öğrenciyim, başvurabilir miyim?",
    a: "Başvurular profil bütünlüğüyle değerlendirilir. Durumunuza göre bağlar ve finansman anlatısı önem kazanır. Elitia Vize, profilinize uygun başvuru stratejisi çıkarır.",
  },
  {
    q: "Sponsor ile başvuru yapılır mı?",
    a: "Bazı durumlarda sponsor/finansör gösterilebilir; ancak bunun mantıklı ve belgelenebilir olması gerekir. Elitia Vize, sponsor kullanımının profilinize uygunluğunu değerlendirir.",
  },
  {
    q: "Danışmanlık süreci kaç gün sürer?",
    a: "Profilinize ve evrakların hazır olma durumuna göre değişir. Amaç, başvuruyu hızla değil doğru ve tutarlı şekilde tamamlamaktır.",
  },
  {
    q: "Elitia Vize hangi hizmetleri sunuyor?",
    a: "Profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu süreci planlama ve mülakat hazırlığı adımlarında danışmanlık sağlıyoruz.",
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

export default function FaqPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">Sık Sorulan Sorular</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
            <span className="font-medium">SSS</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-600">ABD Vize Danışmanlığı</span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
            ABD vize başvuruları hakkında sık sorulan sorular
          </h1>

          <p className="max-w-3xl text-neutral-700 sm:text-lg">
            Buradaki cevaplar, bilgi vermek kadar <strong>doğru danışmanlık akışını</strong> netleştirmek için
            hazırlanmıştır. Profilinize özel yol haritası için WhatsApp’tan yazabilirsiniz.
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
              href="/abd-vizesi/b1-b2-turistik-vize"
            >
              B1/B2 Sayfasına Git
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">Sorular & Cevaplar</h2>
        <p className="mt-2 text-neutral-700">
          AI aramalarında görünürlük için kısa ve net cevaplar kullandık.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <article key={f.q} className="rounded-2xl border p-5">
              <h3 className="text-sm font-semibold">{f.q}</h3>
              <p className="mt-2 text-sm text-neutral-700">{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Sorunuza özel cevap için</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Profilinizi 2–3 bilgiyle özetleyin, size net bir yol haritası çıkaralım.
            </p>
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
