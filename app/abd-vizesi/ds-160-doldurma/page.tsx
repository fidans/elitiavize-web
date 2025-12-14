import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20DS-160%20dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "DS-160 Danışmanlığı | Elitia Vize",
  description:
    "DS-160 formu danışmanlığı: başvuru beyanınızın tutarlı ve eksiksiz hazırlanması için Elitia Vize ile DS-160 akışını profesyonel şekilde yönetin.",
  alternates: { canonical: "/abd-vizesi/ds-160-doldurma" },
};

const faqs = [
  {
    q: "DS-160 nedir?",
    a: "DS-160, ABD vize başvurularında kullanılan temel form akışıdır ve başvuru sahibinin beyanını içerir. Elitia Vize, DS-160 akışını profilinize göre netleştirir.",
  },
  {
    q: "DS-160’ta en sık hata nerede olur?",
    a: "Adres/iş geçmişi/tarih tutarsızlığı, seyahat amacı belirsizliği ve eksik beyanlar sık hatalardır. Biz, bilgileri sizinle doğrulayarak tutarlılığı artırırız.",
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

export default function DS160Page() {
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
        <span className="text-neutral-900">DS-160</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
          DS-160 Danışmanlığı
        </h1>
        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          DS-160, başvurunun omurgasıdır. Elitia Vize; form akışını{" "}
          <strong>profilinize uygun</strong> şekilde netleştirir, bilgileri{" "}
          <strong>sizinle doğrular</strong> ve beyanın{" "}
          <strong>tutarlı</strong> ilerlemesine destek olur.
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

        <p className="mt-4 text-xs text-neutral-500">
          Not: Danışmanlık hizmetimiz başvuruyu hazırlama ve süreç yönetimi sunar; nihai karar ilgili resmi makamlar tarafından verilir.
        </p>
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
