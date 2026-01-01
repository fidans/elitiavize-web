import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vize%20randevumu%20%C3%B6ne%20%C3%A7ekme%20hizmeti%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.%20Mevcut%20randevu%20tarihim%20:%20____%20";

export const metadata: Metadata = {
  title: "Randevu Öne Çekme | ABD Vize Randevu Takip Hizmeti | Elitia Vize",
  description:
    "ABD vize randevusu öne çekme ve randevu takip hizmeti: uygunluk değerlendirme, takip planı ve profesyonel süreç yönetimi. Paketler ve ücretlendirme burada.",
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function AppointmentAdvancePage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,49,93,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link className="hover:underline" href="/">
              Anasayfa
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Randevu Öne Çekme</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  ABD Vizesi
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Randevu Takip & Öne Çekme</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                Randevunuzu daha erkene çekmek için{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  profesyonel takip
                </span>
                .
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                ABD vize randevularında uygun tarihlerin açılması dönemsel olarak değişebilir. Elitia Vize,
                <strong> düzenli takip + doğru planlama</strong> ile süreci yönetir ve zaman kritikse
                en mantıklı stratejiyi birlikte belirler.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  Ön Değerlendirme (WhatsApp)
                </a>
                <Link
                  href="/iletisim"
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                >
                  İletişim
                </Link>
              </div>

              {/* Notice card (çok görünür, ama satış öldürmeyen) */}
              <div className="rounded-3xl bg-neutral-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-sm text-lg">
                    ⚠️
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      Önemli Not (Şeffaflık)
                    </div>
                    <div className="mt-1 text-sm text-neutral-700">
                      Randevu uygunluğu resmi sistemlere bağlıdır; <strong>sonuç garantisi verilemez</strong>.
                      Hizmet; takip, süreç yönetimi ve doğru yönlendirme kapsamındadır.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧭 Uygunluk Değerlendirme
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Mevcut tarih + hedef aralık analiz edilir.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    📅 Takip Planı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Hedef aralığa göre takip kurgusu.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    📣 Bilgilendirme
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Uygunluk durumuna göre yönlendirme.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
                Paketler ve Ücretlendirme
              </h2>
              <p className="mt-2 text-neutral-700">
                Paket seçimi; mevcut randevu tarihinize ve hedeflediğiniz aralığa göre yapılır.
                Fiyatlar <strong>USD + KDV</strong> olarak uygulanır.
              </p>
            </div>

            <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
              💡 Hızlı değerlendirme: <strong>Mevcut randevu tarihini</strong> WhatsApp’ta yaz.
            </div>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {/* 45 güne kadar */}
            <div className="rounded-3xl bg-neutral-50 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-navy)] shadow-sm">
                Hızlı hedef
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-800">45 güne kadar</div>
              <div className="mt-2 text-3xl font-semibold text-[var(--brand-navy)]">$300</div>
              <div className="mt-1 text-sm text-neutral-600">+ KDV</div>

              <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                <li>• Uygunluk & süreç değerlendirme</li>
                <li>• Hedef aralık odaklı takip planı</li>
                <li>• Bilgilendirme & yönlendirme</li>
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Bu Paket İçin Yaz
              </a>
            </div>

            {/* 90 güne kadar */}
            <div className="rounded-3xl bg-neutral-50 p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-navy)] shadow-sm">
                Dengeli plan
              </div>
              <div className="mt-4 text-sm font-semibold text-neutral-800">90 güne kadar</div>
              <div className="mt-2 text-3xl font-semibold text-[var(--brand-navy)]">$150</div>
              <div className="mt-1 text-sm text-neutral-600">+ KDV</div>

              <ul className="mt-5 space-y-2 text-sm text-neutral-700">
                <li>• Düzenli takip & bilgilendirme</li>
                <li>• Uygun tarih fırsatlarının takibi</li>
                <li>• Süreç planlama desteği</li>
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium hover:bg-neutral-50"
              >
                Bu Paket İçin Yaz
              </a>
            </div>

            {/* Danışmanlık alanlara özel (featured) */}
            <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(24,154,144,.14)] to-transparent" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-teal)] shadow-sm">
                  Önerilen
                </div>

                <div className="mt-4 text-sm font-semibold text-neutral-800">
                  Danışmanlık alanlara özel
                </div>
                <div className="mt-2 text-3xl font-semibold text-[var(--brand-navy)]">$250</div>
                <div className="mt-1 text-sm text-neutral-600">45 güne kadar • + KDV</div>

                <ul className="mt-5 space-y-2 text-sm text-neutral-700">
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
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-[var(--brand-teal)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  Danışmanlık + Takip İçin Yaz
                </a>

                <p className="mt-3 text-xs text-neutral-500">
                  Ücretler hizmet bedelidir; resmi harçlar ve üçüncü taraf ödemeleri dahil değildir.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500">
            Paketler hedef aralığa göre değerlendirilir. Uygunluk tamamen resmi sistemlerdeki dönemsel açılışlara bağlıdır.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Süreç nasıl ilerliyor?
            </h2>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧾",
                  title: "1) Ön değerlendirme",
                  desc: "Mevcut randevu tarihiniz + hedef aralık alınır, doğru paket seçilir.",
                },
                {
                  icon: "📅",
                  title: "2) Takip planı",
                  desc: "Ekiplerimiz hedef aralığa göre takip kurgusunu oluşturur.",
                },
                {
                  icon: "📣",
                  title: "3) Bilgilendirme & yönlendirme",
                  desc: "Uygunluk durumuna göre bilgilendirme ve sonraki adımlar paylaşılır.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-white shadow-sm text-lg">
                      {x.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {x.title}
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">{x.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[rgba(0,49,93,.10)] to-white p-6">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Mini ipucu
              </div>
              <p className="mt-1 text-sm text-neutral-700">
                Mevcut tarihiniz çok uzaksa, doğru hedef aralıkla plan yapmak avantaj sağlar.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Hızlı başlangıç için WhatsApp mesajı
            </h2>
            <p className="mt-2 text-neutral-700">
              Aşağıdaki 3 bilgiyi yazarsanız hızlıca yönlendirebiliriz:
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  title: "1) Mevcut randevu tarihiniz",
                  desc: "Örn: 2026-08-15",
                },
                {
                  title: "2) Hedef aralık",
                  desc: "45 gün / 90 gün / danışmanlık + takip",
                },
                {
                  title: "3) Başvuru türünüz",
                  desc: "B1/B2, F1, J1 vb.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    {x.title}
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">{x.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a className="btn-primary w-full" href={WHATSAPP} target="_blank" rel="noreferrer">
                Hemen Yaz (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-3xl bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,49,93,.10)] text-xl">
                    🗓️
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      Randevu Takip
                    </div>
                    <div className="text-xs text-neutral-500">Şeffaf yaklaşım</div>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[var(--brand-navy)]">
                  Sık Sorulan Sorular
                </h2>
                <p className="mt-3 text-sm text-neutral-700">
                  Kısa ve net cevaplar (SEO + GEO uyumlu).
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(0,49,93,.10)] text-lg">
                      ❓
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--brand-navy)]">
                        {f.q}
                      </div>
                      <div className="mt-2 text-sm text-neutral-700 leading-relaxed">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,49,93,.12)] via-[rgba(24,154,144,.10)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
                  Randevu durumunuzu değerlendirelim.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Mevcut tarihinizi yazın; size uygun paket ve yol haritasını söyleyelim.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a className="btn-primary px-6 py-3 text-base" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp’tan Yaz
                </a>
                <p className="text-xs text-neutral-500 sm:text-right">
                  Randevu uygunluğu resmi sistemlere bağlıdır; sonuç garanti edilemez.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-600">
            İlgili sayfalar:{" "}
            <Link
              href="/abd-vizesi"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              ABD Vize Danışmanlığı
            </Link>
            {" "}ve{" "}
            <Link
              href="/hizmetler"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              Hizmetler
            </Link>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
