// app/blog/ds-160-hatalari/page.tsx
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
    <main className="min-h-screen">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <FAQJsonLd />

        <nav className="text-sm text-neutral-600">
          <Link href="/" className="hover:underline">
            Anasayfa
          </Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <Link href="/blog" className="hover:underline">
            Vize Rehberi
          </Link>{" "}
          <span className="text-neutral-400">/</span>{" "}
          <span className="text-neutral-900">DS-160’ta yapılan 10 kritik hata</span>
        </nav>

        <article className="mt-6 grid gap-10 lg:grid-cols-12">
          {/* CONTENT */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-8 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
              <span className="font-semibold text-[var(--brand-navy)]">Rehber</span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-600">DS-160 • Riskler</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">
              DS-160’ta yapılan 10 kritik hata
            </h1>

            <p className="mt-6 max-w-3xl text-neutral-700 sm:text-lg">
              DS-160 formu, ABD vize başvurusunun omurgasıdır. Hatalar çoğu zaman “küçük”
              görünür ama mülakatta güveni ve dosya bütünlüğünü etkileyebilir. Elitia Vize’nin
              danışmanlık sürecinde en sık gördüğü <strong>10 kritik hatayı</strong> aşağıda
              net şekilde listeliyoruz.
            </p>

            {/* QUICK NOTE */}
            <div className="mt-8 rounded-3xl border bg-neutral-50 p-6">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">Hızlı not</div>
              <p className="mt-2 text-sm text-neutral-700">
                Bu içerik genel bilgilendirme amaçlıdır; profilinize özel DS-160 akışı için
                WhatsApp’tan ön değerlendirme alabilirsiniz.
              </p>
              <div className="mt-4">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  DS-160 için WhatsApp’tan Yaz
                </a>
              </div>
            </div>

            {/* 10 ITEMS */}
            <h2 className="mt-12 text-2xl font-semibold">10 kritik hata (danışman gözüyle)</h2>

            <div className="mt-6 space-y-4">
              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">1) İş geçmişinde tarih tutarsızlığı</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  İş başlangıç/bitiş tarihleri, pozisyonlar ve süreler arasında çelişki mülakatta soru işareti doğurabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: İş geçmişi “kesintisiz zaman çizgisi” gibi okunmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">2) Adres geçmişinde boşluk bırakmak</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Adres geçmişinde açıklanamayan boşluklar veya yanlış tarih aralıkları formun güvenilirliğini zayıflatabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Taşınma dönemleri tarih aralığıyla tutarlı olmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">3) Seyahat amacını belirsiz yazmak</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  “Turistik” demek yetmez; planın mantıklı ve profil ile uyumlu görünmesi önemlidir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Amaç, süre ve finansman aynı hikâyeyi anlatmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">4) Finansmanı açıklayamamak</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Önemli olan tek bir banka rakamı değil; gelir, birikim ve masraf ilişkisini tutarlı anlatabilmektir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Gelir düzeyi + planlanan masraf “makul” görünmeli.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">5) Önceki vize/seyahat bilgilerini eksik girmek</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Eski vizeler ve seyahat geçmişi profil bütünlüğünün parçasıdır. Eksik beyan gereksiz risk doğurabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Pasaportlar/seyahatler arasında “unutulan” kısım kalmamalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">6) Sosyal medya / iletişim alanlarını yanlış yönetmek</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  İletişim bilgileri ve hesapların yanlış veya tutarsız yazılması, gereksiz açıklama ihtiyacı yaratabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Kullanılan hesaplar ve iletişim bilgileri tutarlı olmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">7) Aile bilgileriyle uyumsuz beyan</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Aile/medeni durum bilgileri ile diğer alanlar arasında çelişki, güveni azaltabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Medeni durum + birlikte yaşama bilgileri uyumlu olmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">8) Eğitim geçmişinde eksik/yanlış kayıt</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Okul/mezuniyet tarihleri gibi detaylar, özellikle öğrenci profillerinde kritik olabilir.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: Eğitim çizgisi iş/plan ile çelişmemeli.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">9) Tutarsız “plan” dili</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Formda yazılan amaç ile mülakatta anlatılan amaç farklı olursa red riski yükselir. Dosya dili tek çizgide olmalıdır.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: DS-160 + evrak + sözlü anlatım aynı eksende olmalı.
                </p>
              </section>

              <section className="rounded-3xl border p-6">
                <h3 className="text-lg font-semibold">10) Son kontrolden geçmeden göndermek</h3>
                <p className="mt-2 text-sm text-neutral-700">
                  Yazım hataları, yanlış tarih, eksik alanlar… En yaygın hata “acele bitirmek”tir. Son kontrol bu riski düşürür.
                </p>
                <p className="mt-2 text-sm text-neutral-600">
                  ✅ Kontrol: “Bir gece beklet + yeniden oku” yaklaşımı bile hataları yakalar.
                </p>
              </section>
            </div>

            {/* CTA */}
            <section className="mt-12 rounded-3xl border bg-white p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-[var(--brand-navy)]">
                DS-160’ı doğru yönetmek için
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Profilinizi 2–3 satır yazın; DS-160 akışını netleştirelim ve riskli noktaları baştan temizleyelim.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>
                <Link
                  href="/abd-vizesi/ds-160-doldurma"
                  className="btn-secondary"
                >
                  DS-160 Danışmanlığı Sayfası
                </Link>
              </div>
            </section>

            {/* FAQ (visible) */}
            <section className="mt-12 rounded-3xl border p-6">
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
          </div>

          {/* SIDE CTA */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <h4 className="text-lg font-semibold text-[var(--brand-navy)]">
                DS-160 hızlı kontrol
              </h4>
              <p className="mt-2 text-sm text-neutral-600">
                Formu göndermeden önce riskli alanları birlikte netleştirelim.
              </p>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-4 w-full"
              >
                WhatsApp’tan Yaz
              </a>

              <div className="mt-4 rounded-2xl border bg-neutral-50 p-4 text-sm text-neutral-700">
                <div className="font-medium">Yazmanız yeterli:</div>
                <ul className="mt-2 space-y-1 text-neutral-600">
                  <li>• Vize türü (B1/B2, F1, J1)</li>
                  <li>• İş/okul durumu</li>
                  <li>• Seyahat amacı + hedef tarih</li>
                </ul>
              </div>

              <Link href="/abd-vizesi" className="mt-4 inline-block text-sm underline">
                ABD Vize Danışmanlığı →
              </Link>
            </div>
          </aside>
        </article>
      </section>
    </main>
  );
}
