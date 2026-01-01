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
    q: "Red aldıktan sonra hemen tekrar başvurabilir miyim?",
    a: "Her profil farklıdır. Önce redin gerçek nedenini anlamak gerekir. Aynı dosyayla tekrar başvurmak çoğu zaman riski artırır.",
  },
  {
    q: "Red kağıdında sebep net yazmıyorsa ne yapılır?",
    a: "Red maddesi tek başına yeterli değildir. DS-160, evraklar ve mülakat anlatımı birlikte analiz edilmelidir.",
  },
  {
    q: "Red sonrası danışmanlıkta ne yapıyorsunuz?",
    a: "Profil & red analizi, DS-160 tutarlılık kontrolü, evrak uyumu ve mülakat hazırlığı. Amaç ezber değil, doğru konumlandırmadır.",
  },
  {
    q: "Red sonrası başvuruda garanti var mı?",
    a: "Hayır. Hiçbir danışmanlık sonucu garanti edemez. Ancak risk yaratan hatalar ciddi şekilde azaltılabilir.",
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

export default function RedSonrasiBasvuruPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,7,11,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link href="/" className="hover:underline">Anasayfa</Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <Link href="/abd-vizesi" className="hover:underline">ABD Vizesi</Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Red Sonrası Başvuru</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  ABD Vizesi
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Red Sonrası Yeniden Başvuru</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                ABD vize reddi sonrası{" "}
                <span className="text-[var(--brand-red)] font-bold">
                  aynı hatayı tekrar etmeyin
                </span>
                .
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                Red sonrası en büyük hata, başvuruyu değiştirmeden tekrar denemektir.
                Elitia Vize, süreci <strong>risk analizi</strong>,{" "}
                <strong>tutarlılık</strong> ve{" "}
                <strong>doğru konumlandırma</strong> üzerinden yönetir.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="btn-primary"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  Red Sonrası Ön Değerlendirme (WhatsApp)
                </a>

                <Link
                  href="/iletisim"
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                >
                  İletişim
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🔍 Red Analizi
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Görünen değil, gerçek red nedenleri.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧾 DS-160 Tutarlılığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Çelişki yaratan alanlar temizlenir.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🎤 Mülakat Hazırlığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Ezber değil, profile uygun anlatım.
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlar tarafından verilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HATALAR */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
            Red sonrası en sık yapılan hatalar
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Aynı DS-160 ile tekrar başvurmak",
              "Red sebebini tek maddeye indirgemek",
              "Seyahat amacını netleştirmemek",
              "Evrakları kontrolsüz çoğaltmak",
              "Mülakata ezber cevaplarla gitmek",
            ].map((x) => (
              <div key={x} className="rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                ❌ {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIYORUZ */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Elitia Vize yaklaşımı
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                "Profil & red analizi",
                "DS-160 tutarlılık kontrolü",
                "Evrak uyumu ve anlatı netliği",
                "Mülakat prova & senaryo çalışması",
              ].map((x, i) => (
                <div key={x} className="rounded-2xl bg-neutral-50 p-4 text-sm">
                  <strong>{i + 1}.</strong> {x}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[rgba(255,7,11,.12)] to-white p-8">
            <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
              Hızlı başlangıç
            </h3>
            <p className="mt-2 text-sm text-neutral-700">
              WhatsApp’ta red tarihinizi, vize türünü ve kısa profilinizi yazın.
            </p>
            <div className="mt-4">
              <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp’tan Yaz
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,7,11,.16)] via-[rgba(24,154,144,.08)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
                  Red sonrası başvuruyu doğru kurgulayalım.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Hataları temizleyelim, dosyayı yeniden konumlandıralım.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a className="btn-primary px-6 py-3 text-base" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp’tan Ön Değerlendirme
                </a>
                <p className="text-xs text-neutral-500 sm:text-right">
                  Danışmanlık hizmetidir. Sonuç garantisi vermez.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
