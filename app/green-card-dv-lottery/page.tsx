import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20Green%20Card%20(DV%20Lottery)%20ba%C5%9Fvurusu%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Green Card (DV Lottery) Başvuru Danışmanlığı | Elitia Vize",
  description:
    "Green Card (DV Lottery) başvurularında uygunluk değerlendirmesi, başvuru kontrolü ve hatalı başvuru riskini azaltma odaklı danışmanlık. Elitia Vize ile süreci doğru yönetin.",
  alternates: { canonical: "/green-card-dv-lottery" },
  openGraph: {
    title: "Green Card (DV Lottery) Başvuru Danışmanlığı | Elitia Vize",
    description:
      "DV Lottery başvurularında en sık yapılan hataları azaltın. Elitia Vize ile danışmanlık odaklı başvuru yönetimi.",
    url: "/green-card-dv-lottery",
    type: "article",
  },
};

const faqs = [
  {
    q: "Green Card DV Lottery danışmanlığı ne sağlar?",
    a: "Elitia Vize, başvuruyu “öğretmekten” çok doğru akışla yönetmeye odaklanır: uygunluk kontrolü, başvuru bilgilerinin tutarlılığı ve hatalı başvuru riskini azaltma.",
  },
  {
    q: "DV Lottery başvurusunda en sık risk nerede olur?",
    a: "Kişisel bilgilerde hata, fotoğraf kriterlerinde uyumsuzluk ve formda tutarsız beyanlar en sık risk alanlarıdır. Biz, başvuru öncesi kontrol listesiyle bu riskleri azaltırız.",
  },
  {
    q: "DV Lottery sonucu garantili mi?",
    a: "Hayır. DV Lottery bir çekiliştir; danışmanlık hizmeti sonuç garantisi vermez. Ama hatalı başvuru riskini azaltmak için süreç doğru yönetilebilir.",
  },
  {
    q: "DV Lottery’de en çok elenme sebebi nedir?",
    a: "Fotoğraf kriterleri ve form alanlarında hata/tutarsızlıklar en sık problem alanlarıdır. Bu yüzden süreç kontrol odaklı yürütülmelidir.",
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

export default function DVLotteryPage() {
  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link className="hover:underline" href="/">
              Anasayfa
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Green Card (DV Lottery)</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  Green Card (DV Lottery)
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">Kontrol & risk azaltma</span>
              </div>

              <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
                DV Lottery başvurunuzu{" "}
                <span className="text-[var(--brand-teal)] font-bold">
                  hatasız ve tutarlı
                </span>{" "}
                şekilde yönetin.
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                DV Lottery bir çekiliştir; sonucu kimse garanti edemez. Ancak en kritik konu şudur:{" "}
                <strong>hatalı/uygunsuz başvuru nedeniyle elenmemek</strong>. Elitia Vize, süreci “bilgi
                anlatımı” gibi değil, <strong>kontrol listesi + tutarlılık</strong> yaklaşımıyla yönetir.
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

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    📸 Fotoğraf Kriterleri
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    En sık risk alanı: uygunluk kontrolü şart.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🧾 Bilgi Tutarlılığı
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Form alanları arasında çelişki olmamalı.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    ✅ Son Kontrol
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Gönderim öncesi riskleri temizleme.
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                Danışmanlık hizmetidir. Çekiliş sonucu garanti edilemez. Ama hatalı başvuru riskini azaltmak mümkündür.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RISK AREAS */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              En sık yapılan hatalar (risk alanları)
            </h2>
            <p className="mt-2 text-neutral-700">
              DV Lottery’de küçük görünen hatalar başvurunun geçersiz sayılmasına yol açabilir. Bu nedenle biz
              “kontrol” odaklı ilerleriz.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "📸",
                  title: "Fotoğraf kriterlerinde uyumsuzluk",
                  desc: "En yaygın risk alanı. Kriter uyumu kontrol edilmeden gönderim yapılmamalı.",
                },
                {
                  icon: "🪪",
                  title: "Kişisel bilgilerde hata / eksik beyan",
                  desc: "İsim, doğum, eğitim gibi alanlarda yanlış yazım bile risk yaratabilir.",
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "Aile durumu & bağlı bilgiler",
                  desc: "İlişkili alanlar arasında çelişki olmaması için kontrol listesi gerekir.",
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
          </div>

          {/* HOW WE WORK */}
          <div className="rounded-3xl bg-white p-8 shadow-soft">
            <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
              Elitia Vize bu süreçte ne yapar?
            </h2>
            <p className="mt-2 text-neutral-700">
              Amacımız başvuruyu “öğretmek” değil; sizin adınıza doğru akışla yönetmektir.
            </p>

            <div className="mt-6 grid gap-3">
              {[
                {
                  icon: "🧭",
                  title: "1) Uygunluk & profil kontrolü",
                  desc: "Başlamadan önce temel uygunluk ve riskli alanlar netleştirilir.",
                },
                {
                  icon: "🧾",
                  title: "2) Başvuru bilgi tutarlılığı",
                  desc: "Form alanları ve beyanlar arasında çelişki riski azaltılır.",
                },
                {
                  icon: "✅",
                  title: "3) Son kontrol & takip planı",
                  desc: "Gönderim öncesi kontrol + sonraki adımlar için net yol haritası.",
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

            <div className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">Hızlı başlangıç</div>
              <p className="mt-1 text-sm text-neutral-700">
                WhatsApp’tan yazın; profilinize göre DV Lottery başvuru kontrolünü başlatalım.
              </p>
              <div className="mt-4">
                <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp’tan Yaz
                </a>
              </div>
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.15)] text-xl">
                    🍀
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      DV Lottery
                    </div>
                    <div className="text-xs text-neutral-500">Kontrol odaklı</div>
                  </div>
                </div>

                <h2 className="mt-6 text-2xl font-semibold text-[var(--brand-navy)]">
                  Sık Sorulan Sorular
                </h2>
                <p className="mt-3 text-sm text-neutral-700">
                  Kısa ve net cevaplar (SEO + GEO uyumlu).
                </p>

                <div className="mt-6 rounded-2xl bg-neutral-50 p-4 text-sm text-neutral-700">
                  💡 Hedef: <strong>hatalı başvuru riskini azaltmak</strong>.
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-3xl bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.12)] text-lg">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(24,154,144,.18)] via-[rgba(24,154,144,.08)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-6 pb-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-soft">
            <div className="grid gap-6 p-8 sm:grid-cols-2 sm:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
                  DV Lottery başvurunuzu birlikte kontrol edelim.
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Hata riskini azaltmak için hızlı ön değerlendirme.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <a className="btn-primary px-6 py-3 text-base" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp’tan Ön Değerlendirme
                </a>
                <p className="text-xs text-neutral-500 sm:text-right">
                  DV Lottery bir çekiliştir; sonuç garantisi yoktur.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-neutral-600">
            Sonraki sayfa:{" "}
            <Link
              href="/randevu-one-cekme"
              className="font-medium text-[var(--brand-navy)] underline underline-offset-4"
            >
              Randevu öne çekme & takip
            </Link>
            .
          </div>
        </div>
      </section>
    </main>
  );
}
