// app/blog/abd-vizesi-neden-reddedilir/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20reddi%20aldım%20ve%20dosyamı%20danışman%20gözüyle%20değerlendirmek%20istiyorum.";

export const metadata: Metadata = {
  title: "ABD vizesi neden reddedilir? | Elitia Vize",
  description:
    "ABD vize reddinin en yaygın nedenleri: DS-160 hataları, profil tutarsızlığı ve mülakat riskleri. Danışman gözüyle net açıklamalar.",
  alternates: { canonical: "/blog/abd-vizesi-neden-reddedilir" },
};

export default function Post() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <nav className="text-sm text-neutral-600">
          <Link href="/" className="hover:underline">Anasayfa</Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <Link href="/blog" className="hover:underline">Vize Rehberi</Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <span className="text-neutral-900">ABD vizesi neden reddedilir?</span>
        </nav>

        <article className="mt-6 grid gap-10 lg:grid-cols-12">
          {/* CONTENT */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
              <span className="font-semibold text-[var(--brand-navy)]">Rehber</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">Red & Risk</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
              ABD vizesi neden reddedilir?
            </h1>

            <p className="mt-6 text-neutral-700 sm:text-lg">
              ABD vize başvurularında red kararları genellikle tek bir nedene değil,
              başvurunun <strong>bütününe</strong> bakılarak verilir.
              Aşağıda danışmanlık sürecinde en sık karşılaşılan nedenleri net şekilde özetledik.
            </p>

            <h2 className="mt-10 text-2xl font-semibold">1) DS-160 tutarsızlıkları</h2>
            <p className="mt-2 text-neutral-700">
              İş, adres, seyahat amacı ve tarih bilgilerindeki çelişkiler,
              başvurunun güvenilirliğini zedeler.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">2) Seyahat amacının net olmaması</h2>
            <p className="mt-2 text-neutral-700">
              “Turistik” denmesine rağmen planın belirsiz olması,
              mülakatta soru işaretleri doğurur.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">3) Finansman anlatısının zayıflığı</h2>
            <p className="mt-2 text-neutral-700">
              Önemli olan hesap bakiyesi değil,
              seyahat planı ile finansmanın uyumudur.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">4) Türkiye ile bağların zayıf görünmesi</h2>
            <p className="mt-2 text-neutral-700">
              İş, eğitim ve aile bağları net anlatılamadığında
              geri dönüş niyeti sorgulanabilir.
            </p>

            <div className="mt-10 rounded-3xl border bg-neutral-50 p-6">
              <h3 className="text-lg font-semibold">
                Red aldıysanız ne yapmalısınız?
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Aynı dosyayla tekrar denemek yerine,
                red gerekçeleri analiz edilmeli ve başvuru yeniden kurgulanmalıdır.
              </p>

              <div className="mt-4">
                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary">
                  WhatsApp’tan Ön Değerlendirme
                </a>
              </div>
            </div>
          </div>

          {/* SIDE CTA */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-[var(--brand-navy)]">
                Bu içerik size tanıdık geldiyse
              </h4>
              <p className="mt-2 text-sm text-neutral-600">
                Dosyanızı danışman gözüyle değerlendirelim.
              </p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full">
                WhatsApp’tan Yaz
              </a>

              <Link
                href="/abd-vizesi/red-sonrasi-basvuru"
                className="mt-4 inline-block text-sm underline"
              >
                Red sonrası yeniden başvuru rehberi →
              </Link>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}
