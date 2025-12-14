import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20DS-160%20formu%20i%C3%A7in%20dan%C4%B1%C5%9Fmanl%C4%B1k%20almak%20istiyorum.%20%C3%96n%20de%C4%9Ferlendirme%20yapabilir%20miyiz%3F";

export const metadata: Metadata = {
  title: "DS-160’ta yapılan 10 kritik hata | Elitia Vize",
  description:
    "DS-160 formunda en sık yapılan 10 kritik hata: tutarsız iş/adres geçmişi, seyahat amacı belirsizliği, tarih hataları ve daha fazlası. Danışman gözüyle net açıklamalar.",
  alternates: { canonical: "/blog/ds-160-hatalari" },
};

const faqs = [
  {
    q: "DS-160 formunda en kritik risk nedir?",
    a: "Tutarsızlık. İş/adres geçmişi, tarih aralıkları, seyahat amacı ve önceki beyanlar arasında çelişki olması red riskini artırabilir.",
  },
  {
    q: "DS-160’ı yanlış doldurursam ne olur?",
    a: "Eksik/yanlış beyan mülakatta güven kaybına ve red riskine yol açabilir. Elitia Vize, bilgileri sizinle doğrulayarak form akışını daha tutarlı hale getirir.",
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

export default function Post() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <FAQJsonLd />

      <nav className="text-sm text-neutral-600">
        <Link href="/" className="hover:underline">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <Link href="/blog" className="hover:underline">
          Blog
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">DS-160’ta yapılan 10 kritik hata</span>
      </nav>

      <article className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          DS-160’ta yapılan 10 kritik hata
        </h1>

        <p className="mt-6 max-w-3xl text-neutral-700 sm:text-lg">
          DS-160 formu, ABD vize başvurusunun omurgasıdır. Hatalar çoğu zaman
          “küçük” görünür ama mülakatta güveni ve dosya bütünlüğünü etkileyebilir.
          Elitia Vize’nin danışmanlık sürecinde en sık gördüğü 10 kritik hatayı
          aşağıda net şekilde listeliyoruz.
        </p>

        <div className="mt-8 rounded-2xl border p-6">
          <div className="text-sm font-semibold">Hızlı not</div>
          <p className="mt-2 text-sm text-neutral-700">
            Bu içerik bilgilendirme amaçlıdır; profilinize özel DS-160 akışı için
            WhatsApp’tan ön değerlendirme alabilirsiniz.
          </p>
          <div className="mt-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              DS-160 için WhatsApp’tan Yaz
            </a>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-semibold">1) İş geçmişinde tarih tutarsızlığı</h2>
        <p className="mt-2 text-neutral-700">
          İş başlangıç/bitiş tarihleri, pozisyonlar ve süreler arasında çelişki,
          mülakatta soru işareti doğurabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">2) Adres geçmişinde boşluk bırakmak</h2>
        <p className="mt-2 text-neutral-700">
          Adres geçmişinde açıklanamayan boşluklar veya yanlış tarih aralıkları
          formun güvenilirliğini zayıflatabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">3) Seyahat amacını belirsiz yazmak</h2>
        <p className="mt-2 text-neutral-700">
          “Turistik” demek yetmez; planın mantıklı ve profil ile uyumlu
          görünmesi önemlidir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">4) Finansmanı açıklayamamak</h2>
        <p className="mt-2 text-neutral-700">
          Önemli olan tek bir banka rakamı değil; gelir, birikim ve masraf
          ilişkisini tutarlı anlatabilmektir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">5) Önceki vize/seyahat bilgilerini eksik girmek</h2>
        <p className="mt-2 text-neutral-700">
          Eski vizeler ve seyahat geçmişi, profil bütünlüğünün önemli parçasıdır.
          Eksik beyan risk doğurabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">6) Sosyal medya / iletişim alanlarını yanlış yönetmek</h2>
        <p className="mt-2 text-neutral-700">
          İletişim bilgileri ve hesapların yanlış veya tutarsız yazılması,
          gereksiz açıklama ihtiyacı yaratabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">7) Aile bilgileriyle uyumsuz beyan</h2>
        <p className="mt-2 text-neutral-700">
          Aile/medeni durum bilgileri ile diğer alanlar arasında çelişki,
          güveni azaltabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">8) Eğitim geçmişinde eksik/yanlış kayıt</h2>
        <p className="mt-2 text-neutral-700">
          Okul/mezuniyet tarihleri gibi detaylar, özellikle öğrenci profillerinde
          kritik olabilir.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">9) Tutarsız “plan” dili</h2>
        <p className="mt-2 text-neutral-700">
          Formda yazılan amaç ile mülakatta anlatılan amaç farklı olursa red riski
          yükselir. Dosya dili tek çizgide olmalıdır.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">10) Son kontrolden geçmeden göndermek</h2>
        <p className="mt-2 text-neutral-700">
          Yazım hataları, yanlış tarih, eksik alanlar… En yaygın hata “acele
          bitirmek”tir. Elitia Vize, son kontrol adımıyla bu riski düşürür.
        </p>

        <section className="mt-10 rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">DS-160’ı doğru yönetmek için</h3>
          <p className="mt-2 text-sm text-neutral-700">
            Profilinizi kısaca yazın; size DS-160 akışını netleştirelim ve riskli
            noktaları baştan düzeltelim.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              WhatsApp
            </a>
            <Link
              href="/abd-vizesi/ds-160-doldurma"
              className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            >
              DS-160 Danışmanlığı Sayfası
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">Sık Sorulan Sorular</h3>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border p-5">
                <div className="text-sm font-semibold">{f.q}</div>
                <div className="mt-2 text-sm text-neutral-700">{f.a}</div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
