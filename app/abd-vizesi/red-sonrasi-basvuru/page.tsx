import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vize%20reddi%20ald%C4%B1m%20ve%20yeniden%20ba%C5%9Fvuru%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20istiyorum.%20Red%20tarihim:%20____%20%7C%20Vize%20t%C3%BCr%C3%BC:%20B1/B2%20%7C%20K%C4%B1sa%20profil:%20____";

export const metadata: Metadata = {
  title: "ABD Vize Reddi Sonrası Yeniden Başvuru | Elitia Vize",
  description:
    "ABD vize reddi sonrası yeniden başvuru danışmanlığı: red sebebi analizi, DS-160 tutarlılık kontrolü, evrak uyumu ve mülakat hazırlığı. Elitia Vize ile riskleri azaltın.",
  alternates: { canonical: "/abd-vizesi/red-sonrasi-basvuru" },
};

const faqs = [
  {
    q: "Red aldıktan sonra hemen tekrar başvurulur mu?",
    a: "Her profil farklıdır. Temel nokta, önceki redin sebeplerini doğru analiz edip başvuruda anlamlı bir değişiklik/tutarlılık göstermektir. Biz önce ön değerlendirme yaparız.",
  },
  {
    q: "Red sebebi yazmıyorsa ne yapılır?",
    a: "Red kağıdındaki madde tek başına yeterli olmayabilir. DS-160, evraklar ve mülakat akışı birlikte değerlendirilmelidir. Elitia Vize, dosya bütünlüğüne göre yol haritası çıkarır.",
  },
  {
    q: "Red sonrası danışmanlıkta ne yapıyorsunuz?",
    a: "Ön analiz + DS-160 tutarlılık kontrolü + evrak uyumu + mülakat prova. Amaç ezber cevap değil, profilin doğru konumlandırılmasıdır.",
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

export default function RedSonrasiBasvuruPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">Anasayfa</Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <Link className="hover:underline" href="/abd-vizesi">ABD Vizesi</Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">Red Sonrası Başvuru</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span className="font-medium">ABD Vizesi</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600">Red Sonrası Yeniden Başvuru</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
          ABD vize reddi sonrası yeniden başvuru: riskleri azaltan yol haritası
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          Red sonrası en büyük hata “aynı dosyayla tekrar denemek”tir.
          Elitia Vize, süreci adım adım öğretmez; <strong>başvuruyu tutarlılık ve risk analizi</strong> ile yönetir.
          Amacımız: başvurunun zayıf noktalarını netleştirip, dosyayı doğru konumlandırmaktır.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
          >
            Red Sonrası Ön Değerlendirme (WhatsApp)
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            İletişim
          </Link>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Not: Danışmanlık hizmeti sonuç garantisi vermez. Ama red riskini artıran hataları azaltmak için süreç doğru yönetilebilir.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Red sonrası en sık yapılan 5 hata</h2>
          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) DS-160’ı acele ve tutarsız doldurmak</div>
              <div className="mt-1 text-neutral-600">
                Tarih/iş/adres/amaç tutarsızlıkları mülakatta güven kaybı yaratabilir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) “Aynı dosyayla tekrar denemek”</div>
              <div className="mt-1 text-neutral-600">
                Red sonrası başvuruda, dosyada anlamlı iyileştirme ve netlik gerekir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Seyahat amacını belirsiz bırakmak</div>
              <div className="mt-1 text-neutral-600">
                Planın profil ile uyumu değerlendirilir; ezber cümleler fayda etmez.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">4) Evrakları amaçsız “kalabalık” yapmak</div>
              <div className="mt-1 text-neutral-600">
                Çok evrak değil, doğru evrak ve doğru anlatı önemlidir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">5) Mülakata “ezber cevap” ile gitmek</div>
              <div className="mt-1 text-neutral-600">
                Değerlendirme tutarlılık üzerinedir; doğal ve profil ile uyumlu anlatım gerekir.
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Elitia Vize bu süreçte ne yapar?</h2>
          <p className="mt-2 text-neutral-700">
            Red sonrası başvuruyu, “tek hamle” değil, bütünsel bir dosya yönetimi olarak ele alırız.
          </p>

          <ol className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Profil & red analizi</div>
              <div className="mt-1 text-neutral-600">
                Kısa profil + önceki başvuru akışı üzerinden riskli noktaları tespit ederiz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) DS-160 tutarlılık kontrolü</div>
              <div className="mt-1 text-neutral-600">
                İş/adres/finansman/seyahat amacı alanlarında çelişki riskini azaltırız.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Evrak uyumu & anlatı netliği</div>
              <div className="mt-1 text-neutral-600">
                Evrakların “ne söylediğini” netleştirir, gereksiz riskleri temizleriz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">4) Mülakat hazırlığı (prova)</div>
              <div className="mt-1 text-neutral-600">
                Ezber yerine, profilinize uygun net anlatım ve soru senaryoları ile hazırlık yaparız.
              </div>
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border p-5">
            <div className="text-sm font-medium">Hızlı başlangıç</div>
            <p className="mt-1 text-sm text-neutral-600">
              WhatsApp’tan red tarihinizi ve kısaca profilinizi yazın; size özel yol haritasını çıkaralım.
            </p>
            <div className="mt-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                WhatsApp’a Git
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border p-5">
              <div className="text-sm font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Red sonrası başvurunuzu birlikte planlayalım</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Profilinizi yazın, riskleri ve bir sonraki adımı netleştirelim.
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
