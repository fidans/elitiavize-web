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
        <span className="text-neutral-900">F1 Öğrenci</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          F1 Öğrenci ABD Vizesi Danışmanlığı
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          Elitia Vize, F1 başvurularında <strong>profil ön değerlendirme</strong>,{" "}
          <strong>DS-160 danışmanlığı</strong>, <strong>evrak kontrolü</strong> ve{" "}
          <strong>mülakat hazırlığı</strong> adımlarını tek akışta yönetir.
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
