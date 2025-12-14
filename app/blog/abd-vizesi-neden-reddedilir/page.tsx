import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20reddi%20sonras%C4%B1%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "ABD vizesi neden reddedilir? | Elitia Vize",
  description:
    "ABD vize reddinin en yaygın nedenleri: DS-160 hataları, profil tutarsızlığı, mülakat riskleri. Danışman gözüyle net açıklamalar.",
  alternates: { canonical: "/blog/abd-vizesi-neden-reddedilir" },
};

const faqs = [
  {
    q: "ABD vizesi neden reddedilir?",
    a: "En yaygın nedenler; DS-160 tutarsızlıkları, seyahat amacının net olmaması, finansman anlatısının zayıf olması ve Türkiye ile bağların yeterince açıklanamamasıdır.",
  },
  {
    q: "Red aldıktan sonra tekrar başvurulur mu?",
    a: "Evet. Ancak önce red gerekçeleri analiz edilmeli ve yeni başvuru daha güçlü bir stratejiyle hazırlanmalıdır.",
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
        <span className="text-neutral-900">ABD vizesi neden reddedilir?</span>
      </nav>

      <article className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          ABD vizesi neden reddedilir?
        </h1>

        <p className="mt-6 max-w-3xl text-neutral-700 sm:text-lg">
          ABD vize başvurularında red kararları çoğu zaman tek bir sebebe değil,
          başvurunun <strong>bütününe</strong> bakılarak verilir. Elitia Vize,
          danışmanlık sürecinde en sık karşılaşılan red nedenlerini aşağıda
          net şekilde özetler.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1) DS-160 tutarsızlıkları</h2>
        <p className="mt-2 text-neutral-700">
          DS-160 formundaki iş, adres, seyahat amacı ve tarih bilgilerindeki
          çelişkiler en yaygın red sebeplerindendir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">2) Seyahat amacının net olmaması</h2>
        <p className="mt-2 text-neutral-700">
          “Turistik” denmesine rağmen planın belirsiz olması veya profil ile
          örtüşmemesi soru işaretleri doğurur.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">3) Finansman anlatısının zayıflığı</h2>
        <p className="mt-2 text-neutral-700">
          Önemli olan hesap bakiyesi değil, seyahat planı ile finansmanın
          uyumlu ve açıklanabilir olmasıdır.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">4) Türkiye ile bağların zayıf görünmesi</h2>
        <p className="mt-2 text-neutral-700">
          İş, eğitim, aile ve sosyal bağlar net anlatılamadığında geri dönüş
          niyeti sorgulanabilir.
        </p>

        <div className="mt-10 rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">
            Red aldıysanız ne yapmalısınız?
          </h3>
          <p className="mt-2 text-sm text-neutral-700">
            Yeni başvuru öncesi red gerekçeleri analiz edilmeli ve dosya
            danışmanlıkla yeniden yapılandırılmalıdır.
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              WhatsApp’tan Ön Değerlendirme
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
