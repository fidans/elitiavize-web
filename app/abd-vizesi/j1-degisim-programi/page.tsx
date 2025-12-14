import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20J1%20de%C4%9Fi%C5%9Fim%20program%C4%B1%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "J1 Değişim Programı ABD Vizesi Danışmanlığı | Elitia Vize",
  description:
    "J1 değişim programı vizesi başvurularında DS-160 danışmanlığı, evrak kontrolü ve mülakat hazırlığı için Elitia Vize ile danışmanlık alın.",
  alternates: { canonical: "/abd-vizesi/j1-degisim-programi" },
};

const faqs = [
  {
    q: "J1 vizesi hangi durumlarda kullanılır?",
    a: "Değişim programları kapsamında değerlendirilen başvurularda kullanılır. Elitia Vize, program türünüze göre dosya akışını planlar.",
  },
  {
    q: "J1 başvurusunda en önemli nokta nedir?",
    a: "Program detaylarının netliği ve başvuru dosyasında tutarlılık. DS-160 + evrak seti + mülakat hazırlığı birlikte ele alınmalıdır.",
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

export default function J1Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <Link className="hover:underline" href="/abd-vizesi">
          ABD Vizesi
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">J1 Değişim Programı</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          J1 Değişim Programı ABD Vizesi Danışmanlığı
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          Elitia Vize; J1 sürecinde <strong>profil değerlendirme</strong>,{" "}
          <strong>DS-160 danışmanlığı</strong>, <strong>evrak kontrolü</strong> ve{" "}
          <strong>mülakat hazırlığı</strong> adımlarını programınıza göre planlar.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
            İletişim
          </Link>
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
    </main>
  );
}
