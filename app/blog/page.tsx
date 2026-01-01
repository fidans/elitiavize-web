// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vize Rehberi | ABD Vize Danışmanlığı | Elitia Vize",
  description:
    "ABD vize başvuruları, DS-160, B1/B2 ve mülakat süreçleri hakkında danışman gözüyle hazırlanmış rehber içerikler.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "abd-vizesi-neden-reddedilir",
    title: "ABD vizesi neden reddedilir?",
    desc: "Danışman gözüyle en sık red nedenleri ve nasıl önlenir.",
    tag: "Red & Risk",
    read: "4 dk okuma",
  },
  {
    slug: "ds-160-hatalari",
    title: "DS-160’ta yapılan 10 kritik hata",
    desc: "Formda yapılan hatalar red riskini nasıl artırır?",
    tag: "DS-160",
    read: "5 dk okuma",
  },
  {
    slug: "b1-b2-mulakat-sorulari",
    title: "B1/B2 mülakat soruları (danışman gözüyle)",
    desc: "Mülakatta en sık sorulan sorular ve riskli cevap alanları.",
    tag: "Mülakat",
    read: "6 dk okuma",
  },
];

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20Vize%20rehberinizi%20inceledim%20ve%20profilim%20için%20ön%20değerlendirme%20almak%20istiyorum.";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,49,93,.12)] via-[rgba(24,154,144,.08)] to-transparent" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(24,154,144,.14)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link href="/" className="hover:underline">Anasayfa</Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Vize Rehberi</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
              <span className="font-semibold text-[var(--brand-navy)]">
                Vize Rehberi
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">
                Danışman gözüyle
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
              ABD vize süreçlerini doğru okumak için
            </h1>

            <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
              Bu içerikler “nasıl yapılır” anlatmaz.  
              <strong> Nerede risk var, nerede hata yapılıyor</strong> onu gösterir.
            </p>

            <div className="mt-6">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                WhatsApp’tan Ön Değerlendirme
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span className="rounded-full bg-neutral-100 px-3 py-1 font-medium">
                  {p.tag}
                </span>
                <span>{p.read}</span>
              </div>

              <h2 className="mt-4 text-xl font-semibold text-[var(--brand-navy)] group-hover:underline">
                {p.title}
              </h2>

              <p className="mt-2 text-sm text-neutral-600">
                {p.desc}
              </p>

              <div className="mt-4 text-sm font-medium text-[var(--brand-teal)]">
                Rehberi oku →
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 rounded-3xl bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
                Okuduklarınız size tanıdık geldiyse
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Profilinizi yazın, sizin için riskleri netleştirelim.
              </p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
