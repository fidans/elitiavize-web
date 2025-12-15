import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20Green%20Card%20(DV%20Lottery)%20ba%C5%9Fvurusu%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Green Card (DV Lottery) Başvuru Danışmanlığı | Elitia Vize",
  description:
    "Green Card (DV Lottery) başvurularında başvuru kontrolü, uygunluk değerlendirmesi ve risk azaltma odaklı danışmanlık. Elitia Vize ile süreci doğru yönetin.",
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
    a: "Elitia Vize, başvuruyu “öğretmekten” çok doğru akışla yönetmeye odaklanır: uygunluk kontrolü, başvuru bilgilerinin tutarlılığı ve hata riskini azaltma.",
  },
  {
    q: "DV Lottery başvurusunda en sık risk nerede olur?",
    a: "Kişisel bilgilerde hata, fotoğraf kriterlerinde uyumsuzluk ve formda tutarsız beyanlar en sık risk alanlarıdır. Biz, başvuru öncesi kontrol listesiyle bu riskleri azaltırız.",
  },
  {
    q: "DV Lottery sonucu garantili mi?",
    a: "Hayır. DV Lottery bir çekiliştir; danışmanlık hizmeti sonuç garantisi vermez. Ama hatalı başvuru riskini azaltmak için süreç doğru yönetilebilir.",
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

export default function DVLotteryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">Green Card (DV Lottery)</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm">
          <span className="font-medium">Green Card</span>
          <span className="text-neutral-500">•</span>
          <span className="text-neutral-600">DV Lottery Danışmanlığı</span>
        </div>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
          Green Card (DV Lottery) başvurunuzu hatasız ve tutarlı yönetin
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          DV Lottery bir çekiliştir; sonucu kimse garanti edemez. Ama en kritik konu şudur:
          <strong> hatalı/uygunsuz başvuru yüzünden elenmemek.</strong> Elitia Vize,
          başvuruyu “adım adım anlatmak” yerine <strong>başvuru risklerini temizleyerek</strong>{" "}
          süreci danışmanlıkla yönetir.
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
          Not: Danışmanlık hizmeti bilgilendirme ve başvuru yönetimi sunar; çekiliş sonucu ve nihai
          değerlendirmeler ilgili resmi süreçlere tabidir.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">En sık yapılan hatalar (risk alanları)</h2>
          <p className="mt-2 text-neutral-700">
            DV Lottery’de küçük görünen hatalar, başvurunun geçersiz sayılmasına yol açabilir.
            Bu nedenle biz “kontrol” odaklı ilerleriz.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">Fotoğraf kriterlerinde uyumsuzluk</div>
              <div className="mt-1 text-neutral-600">
                En yaygın risk alanıdır. Biz başvuru öncesi kriter uyumunu kontrol ederiz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">Kişisel bilgilerde yanlış/eksik beyan</div>
              <div className="mt-1 text-neutral-600">
                İsim, doğum, eğitim bilgileri gibi alanlarda hata riskini azaltmak için tutarlılık kontrolü yaparız.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">Aile durumu ve bağlı bilgiler</div>
              <div className="mt-1 text-neutral-600">
                Form içindeki ilişkili alanlar arasında çelişki olmaması için kontrol listesi uygularız.
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border p-8">
          <h2 className="text-2xl font-semibold">Elitia Vize bu süreçte ne yapar?</h2>
          <p className="mt-2 text-neutral-700">
            Amacımız başvuruyu “öğretmek” değil; sizin adınıza doğru akışla yönetmektir.
          </p>

          <ol className="mt-6 space-y-3 text-sm text-neutral-700">
            <li className="rounded-2xl border p-4">
              <div className="font-medium">1) Uygunluk & profil kontrolü</div>
              <div className="mt-1 text-neutral-600">
                Başvuruya başlamadan önce temel uygunluğu ve riskli alanları tespit ederiz.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">2) Başvuru bilgi tutarlılığı</div>
              <div className="mt-1 text-neutral-600">
                Form alanlarında çelişki ve hata riskini azaltacak şekilde doğrulama yaparız.
              </div>
            </li>
            <li className="rounded-2xl border p-4">
              <div className="font-medium">3) Son kontrol & takip planı</div>
              <div className="mt-1 text-neutral-600">
                Başvurunun gönderim öncesi kontrolünü yapar, sonraki adımlar için net yol haritası çıkarırız.
              </div>
            </li>
          </ol>

          <div className="mt-6 rounded-2xl border p-5">
            <div className="text-sm font-medium">Hızlı başlangıç</div>
            <p className="mt-1 text-sm text-neutral-600">
              WhatsApp’tan yazın; profilinize göre DV Lottery başvuru kontrolünü başlatalım.
            </p>
            <div className="mt-4">
              <a
                className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp’a Git
              </a>
            </div>
          </div>
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

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">DV Lottery başvurunuzu birlikte kontrol edelim</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Hata riskini azaltmak için hızlı ön değerlendirme.
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
