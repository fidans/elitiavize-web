import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vize%20randevumu%20%C3%B6ne%20%C3%A7ekme%20hizmeti%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.%20Mevcut%20randevu%20tarihim%20:%20____%20";

export const metadata: Metadata = {
  title: "Randevu Öne Çekme | ABD Vize Randevu Takip Hizmeti | Elitia Vize",
  description:
    "ABD vize randevusu öne çekme ve randevu takip hizmeti: uygunluk değerlendirme, takip planı ve profesyonel süreç yönetimi. Ücretlendirme ve paketler burada.",
  alternates: { canonical: "/randevu-one-cekme" },
};

const faqs = [
  {
    q: "Randevu öne çekme garanti mi?",
    a: "Hayır. Randevu uygunluğu dönemsel olarak değişir ve resmi sistemlerde garanti verilemez. Elitia Vize, süreci profesyonel takip ve planlama ile yönetir.",
  },
  {
    q: "Kimler için randevu öne çekme mantıklı?",
    a: "Zamanı kritik olan (iş, eğitim, etkinlik, aile ziyareti vb.) başvurularda uygunluk durumuna göre değerlendirilir. Önce profil ve mevcut tarih kontrolü yapılır.",
  },
  {
    q: "Danışmanlık paketi alınca ücret değişiyor mu?",
    a: "Evet. Danışmanlık alanlar için 45 güne kadar paket farklı fiyatlandırılır. Ayrıca 4KDV paketinde 6 aya kadar takip ücretsizdir.",
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

export default function AppointmentAdvancePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">Randevu Öne Çekme</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span className="font-medium">ABD Vizesi</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600">Randevu Takip & Öne Çekme</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
          Randevunuzu daha erkene çekmek için profesyonel takip
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          ABD vize randevularında uygun tarihlerin açılması dönemsel olarak değişebilir.
          Elitia Vize, <strong>ekibimizin yoğun ve düzenli takibi</strong> ile randevu sürecini
          profesyonel şekilde yönetir; acil durumlarda doğru stratejiyle ilerlemenize yardımcı olur.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            Ön Değerlendirme Al (WhatsApp)
          </a>
          <Link
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            href="/iletisim"
          >
            İletişim
          </Link>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Önemli not: Randevu uygunluğu resmi sistemlere bağlıdır; sonuç garantisi verilemez. Hizmetimiz
          “takip, süreç yönetimi ve danışmanlık” kapsamındadır.
        </p>
      </section>

      {/* Pricing */}
      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">Paketler ve Ücretlendirme</h2>
        <p className="mt-2 text-neutral-700">
          Paket seçimi; mevcut randevu tarihinize ve hedeflediğiniz aralığa göre yapılır.
          Fiyatlar <strong>USD + KDV</strong> olarak uygulanır.
        </p>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border p-6">
            <div className="text-sm font-semibold">45 güne kadar</div>
            <div className="mt-2 text-3xl font-semibold">$300</div>
            <div className="mt-1 text-sm text-neutral-600">+ KDV</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Profesyonel randevu takip planı</li>
              <li>• Uygunluk & süreç değerlendirme</li>
              <li>• Öncelikli takip (hedef aralık)</li>
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Bu Paket İçin Yaz
            </a>
          </div>

          <div className="rounded-3xl border p-6">
            <div className="text-sm font-semibold">90 güne kadar</div>
            <div className="mt-2 text-3xl font-semibold">$150</div>
            <div className="mt-1 text-sm text-neutral-600">+ KDV</div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Düzenli takip & bilgilendirme</li>
              <li>• Uygun tarih fırsatlarının takibi</li>
              <li>• Süreç planlama desteği</li>
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Bu Paket İçin Yaz
            </a>
          </div>

          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Danışmanlık alanlara özel</div>
            <div className="mt-2 text-3xl font-semibold">$250</div>
            <div className="mt-1 text-sm text-neutral-600">
              45 güne kadar • + KDV
            </div>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Danışmanlık süreciyle uyumlu takip</li>
              <li>• Profil & dosya akışına göre planlama</li>
              <li>
                • <strong>4KDV paketinde:</strong> 6 aya kadar ücretsiz takip
              </li>
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Danışmanlık + Takip İçin Yaz
            </a>
          </div>
        </div>

        <p className="mt-6 text-xs text-neutral-500">
          Ücretler hizmet bedelidir; resmi harçlar ve üçüncü taraf ödemeleri bu kapsamda değildir.
        </p>
      </section>

      {/* How it works */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Süreç nasıl ilerliyor?</h2>
          <ol className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Ön değerlendirme</div>
              <div className="mt-1 text-neutral-600">
                Mevcut randevu tarihiniz ve hedef aralığınız alınır; uygun paket belirlenir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) Takip planı</div>
              <div className="mt-1 text-neutral-600">
                Ekiplerimiz tarafından düzenli takip yapılır ve süreç planı netleştirilir.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Bilgilendirme & yönlendirme</div>
              <div className="mt-1 text-neutral-600">
                Uygunluk durumuna göre bilgilendirme ve sonraki adımlar paylaşılır.
              </div>
            </li>
          </ol>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Hızlı başlangıç için</h2>
          <p className="mt-2 text-neutral-700">
            WhatsApp mesajında şu 3 bilgiyi yazarsanız hızlıca yönlendirebiliriz:
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Mevcut randevu tarihiniz</div>
              <div className="mt-1 text-neutral-600">Örn: 2026-08-15</div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) Hedef aralık</div>
              <div className="mt-1 text-neutral-600">
                45 gün / 90 gün / danışmanlık + takip
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Başvuru türünüz</div>
              <div className="mt-1 text-neutral-600">B1/B2, F1, J1 vb.</div>
            </li>
          </ul>

          <div className="mt-6">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              Hemen Yaz (WhatsApp)
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="mt-10 rounded-3xl border bg-white p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Randevu durumunuzu değerlendirelim</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Mevcut tarihinizi yazın, size uygun paket ve yol haritasını söyleyelim.
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
