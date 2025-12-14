// app/page.tsx
import Link from "next/link";

const faqs = [
  {
    q: "ABD vizesi için danışmanlık almak şart mı?",
    a: "Zorunlu değildir. Ancak başvurunun doğru hazırlanması, DS-160 formunda tutarlılık ve evrak düzeni gibi detaylar red riskini azaltmada kritik olabilir. Elitia Vize, süreci uçtan uca danışmanlıkla yöneterek başvuruyu daha sistemli hale getirir.",
  },
  {
    q: "Elitia Vize hangi aşamalarda destek sağlar?",
    a: "Profil ön değerlendirme, DS-160 formu danışmanlığı, evrak kontrolü, randevu süreci planlama ve mülakat hazırlığı gibi adımlarda rehberlik sağlar.",
  },
  {
    q: "DS-160 formunu kim doldurmalı?",
    a: "DS-160 başvuru sahibinin beyanıdır. Formun doğru ve tutarlı hazırlanması önemlidir. Elitia Vize, bilgilerinizi sizinle birlikte doğrulayarak formun eksiksiz ve tutarlı ilerlemesine destek olur.",
  },
  {
    q: "Vize reddi almış başvurularla çalışıyor musunuz?",
    a: "Evet. Red gerekçelerini anlamaya, önceki başvuru akışını analiz etmeye ve yeni başvuruyu daha güçlü bir planla hazırlamaya yönelik danışmanlık sunuyoruz.",
  },
  {
    q: "Ne kadar sürede sonuç alırım?",
    a: "Sonuç süresi randevu bulunabilirliği ve konsolosluk süreçlerine göre değişir. Biz, sizin durumunuza göre en doğru planı çıkarıp süreci hızlandırmaya yönelik adımları organize ederiz.",
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

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="rounded-3xl border bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
              <span className="font-medium">🇺🇸 Elitia Vize Danışmanlığı</span>
              <span className="text-neutral-500">•</span>
              <span className="text-neutral-600">ABD vize başvurularında uzman danışmanlık</span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
              ABD Vize Başvurunuzda <span className="underline decoration-neutral-300">doğru strateji</span>,{" "}
              <span className="underline decoration-neutral-300">eksiksiz evrak</span> ve{" "}
              <span className="underline decoration-neutral-300">tutarlı DS-160</span>.
            </h1>

            <p className="max-w-2xl text-base text-neutral-700 sm:text-lg">
              Elitia Vize, başvurunuzu “bilgi paylaşımı” olarak değil,{" "}
              <strong>danışmanlık süreci</strong> olarak ele alır: profilinizi analiz eder, DS-160 akışını
              birlikte netleştirir, evrakları kontrol eder ve randevu/mülakat hazırlığı için plan çıkarır.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
                href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’tan Ön Değerlendirme
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="/iletisim"
              >
                İletişim Formu
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="/abd-vizesi"
              >
                ABD Vize Danışmanlığı Sayfası
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border p-4">
                <div className="text-sm font-medium">📑 Evrak Kontrol</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Belgelerinizi kontrol eder, eksik/tutarsız noktaları netleştiririz.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-sm font-medium">🧾 DS-160 Danışmanlığı</div>
                <div className="mt-1 text-sm text-neutral-600">
                  DS-160 akışını profilinize göre düzenler, doğruluğu birlikte teyit ederiz.
                </div>
              </div>
              <div className="rounded-2xl border p-4">
                <div className="text-sm font-medium">🗓️ Randevu & Mülakat Hazırlığı</div>
                <div className="mt-1 text-sm text-neutral-600">
                  Süreci planlar, mülakata hazırlık için örnek sorularla pratik yaparız.
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-500">
              Not: Danışmanlık hizmetimiz başvuruyu hazırlar ve süreci yönetir; nihai karar ilgili resmi
              makamlar tarafından verilir.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border p-8">
            <h2 className="text-2xl font-semibold">Ne yapıyoruz?</h2>
            <p className="mt-3 text-neutral-700">
              ABD vize başvurusunda en çok hata yapılan yerler: <strong>DS-160 tutarlılığı</strong>,{" "}
              <strong>evrak uyumu</strong> ve <strong>mülakat hazırlığı</strong>. Elitia Vize, bu üç alanda
              süreci standartlaştırır.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              <li className="rounded-2xl border p-4">
                <div className="font-medium">1) Profil Ön Değerlendirme</div>
                <div className="mt-1 text-neutral-600">
                  Seyahat amacı, bağlar, geçmiş başvurular ve risk noktaları üzerinden yol haritası.
                </div>
              </li>
              <li className="rounded-2xl border p-4">
                <div className="font-medium">2) DS-160 Süreci</div>
                <div className="mt-1 text-neutral-600">
                  Form alanlarını profilinize göre netleştirir, beyanların tutarlılığını kontrol ederiz.
                </div>
              </li>
              <li className="rounded-2xl border p-4">
                <div className="font-medium">3) Evrak & Mülakat Hazırlığı</div>
                <div className="mt-1 text-neutral-600">
                  Evrak setini kontrol eder, mülakat pratiğiyle kendinizi daha rahat ifade etmenizi sağlarız.
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border p-8">
            <h2 className="text-2xl font-semibold">En çok çalıştığımız ABD vize türleri</h2>
            <p className="mt-3 text-neutral-700">
              Önceliğimiz ABD vize danışmanlığı. Schengen sayfalarını ikinci fazda aynı yapı altında ekleyeceğiz.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/b1-b2-turistik-vize">
                <div className="text-sm font-medium">B1/B2 Turistik Vize</div>
                <div className="mt-1 text-sm text-neutral-600">Kısa süreli ziyaretler, iş/turizm amaçlı.</div>
              </Link>
              <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/f1-ogrenci-vizesi">
                <div className="text-sm font-medium">F1 Öğrenci Vizesi</div>
                <div className="mt-1 text-sm text-neutral-600">Eğitim planına uygun başvuru akışı.</div>
              </Link>
              <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/j1-degisim-programi">
                <div className="text-sm font-medium">J1 Değişim Programı</div>
                <div className="mt-1 text-sm text-neutral-600">Program türüne göre hazırlık.</div>
              </Link>
              <Link className="rounded-2xl border p-4 hover:bg-neutral-50" href="/abd-vizesi/ds-160-doldurma">
                <div className="text-sm font-medium">DS-160 Danışmanlığı</div>
                <div className="mt-1 text-sm text-neutral-600">Form akışı, tutarlılık ve kontrol.</div>
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border p-5">
              <div className="text-sm font-medium">Hızlı Başlangıç</div>
              <p className="mt-1 text-sm text-neutral-600">
                10 dakikalık ön değerlendirme için WhatsApp’tan yazın. Profilinize göre size net bir yol haritası çıkaralım.
              </p>
              <div className="mt-4">
                <a
                  className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                  href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp’a Git
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Sık Sorulan Sorular</h2>
          <p className="mt-2 text-neutral-700">
            Bu bölüm, hem kullanıcılar hem de AI arama sonuçları için net ve kısa cevaplar içerir.
          </p>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border p-5">
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="mx-auto max-w-6xl px-6 pt-2 pb-16">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Başvurunuzu birlikte planlayalım.</h3>
              <p className="mt-1 text-sm text-neutral-600">
                Profilinize göre net bir yol haritası + DS-160 + evrak kontrol + mülakat hazırlığı.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <Link
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href="/iletisim"
              >
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
