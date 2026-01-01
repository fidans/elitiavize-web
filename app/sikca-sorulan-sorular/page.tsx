// app/sikca-sorulan-sorular/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20ABD%20vizesi%20i%C3%A7in%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

const faqs = [
  {
    q: "ABD vizesi için danışmanlık almak şart mı?",
    a: "Hayır, zorunlu değildir. Ancak DS-160 tutarlılığı, evrak uyumu ve mülakat hazırlığı gibi detaylar red riskini etkileyebilir. Elitia Vize, süreci danışmanlıkla yöneterek başvuruyu daha sistemli hale getirir.",
    cat: "Genel",
  },
  {
    q: "B1/B2 vizesi nedir?",
    a: "B1/B2; kısa süreli iş ziyareti (B1) ve turistik/ziyaret amaçlı (B2) seyahatler için kullanılan ABD vizesidir. Elitia Vize, B1/B2 başvurularında profil analizi ve başvuru planlaması yapar.",
    cat: "B1/B2",
  },
  {
    q: "DS-160 formunu kim doldurmalı?",
    a: "DS-160 başvuru sahibinin beyanıdır. Formda eksik/çelişkili bilgi risktir. Elitia Vize, bilgileri sizinle doğrulayarak DS-160 akışını danışmanlıkla destekler.",
    cat: "DS-160",
  },
  {
    q: "DS-160’ta en kritik konu nedir?",
    a: "Tutarlılık. Seyahat amacı, iş/gelir, geçmiş seyahatler ve adres bilgileri gibi alanlarda çelişki veya belirsizlik risk yaratabilir. Biz, form akışını profilinize göre netleştiririz.",
    cat: "DS-160",
  },
  {
    q: "Randevu bulunamıyor, ne yapmalıyım?",
    a: "Randevu bulunabilirliği dönemsel değişir. Elitia Vize, profilinize göre doğru zamanlama ve takip yaklaşımını planlayarak süreci organize eder.",
    cat: "Randevu",
  },
  {
    q: "Vize reddi aldıysam tekrar başvurabilir miyim?",
    a: "Evet. Red gerekçeleri analiz edilerek yeni başvuru daha doğru bir stratejiyle hazırlanabilir. Elitia Vize, önceki dosyanın zayıf noktalarını tespit ederek yeni başvuru planı çıkarır.",
    cat: "Red Sonrası",
  },
  {
    q: "Mülakatta genelde ne sorulur?",
    a: "Seyahat amacı, plan, finansman, Türkiye ile bağlar (iş/okul/aile) ve geçmiş seyahatler sık sorulan başlıklardır. Elitia Vize, profilinize uygun mülakat hazırlığı yapar.",
    cat: "Mülakat",
  },
  {
    q: "Evraklar eksik olursa ne olur?",
    a: "Eksik veya profil ile uyumsuz evraklar süreci zora sokabilir. Elitia Vize, evrak setini kontrol eder ve başvuru öncesi eksikleri tamamlamaya yönelik yönlendirme yapar.",
    cat: "Evrak",
  },
  {
    q: "Banka hesabımda ne kadar para olmalı?",
    a: "Tek bir “sabit tutar” yoktur; önemli olan seyahat planı ile finansmanın uyumlu ve açıklanabilir olmasıdır. Elitia Vize, profilinize göre finansman anlatısını netleştirmenize yardımcı olur.",
    cat: "Finansman",
  },
  {
    q: "ABD vizesi kaç yıllık verilir?",
    a: "Süre, vize türü ve değerlendirmeye göre değişebilir. Elitia Vize, hedefinize uygun başvuru kurgusu için danışmanlık sağlar.",
    cat: "Genel",
  },
  {
    q: "Pasaport sürem kısa, başvurabilir miyim?",
    a: "Başvuru koşulları ve planlanan seyahat tarihlerine göre değişebilir. Biz, pasaport sürenizi ve hedefinizi değerlendirip doğru planı öneririz.",
    cat: "Genel",
  },
  {
    q: "Eski vizelerim veya seyahat geçmişim önemli mi?",
    a: "Evet, geçmiş seyahatler profili destekleyebilir. Elitia Vize, seyahat geçmişinizi başvuruda tutarlı şekilde konumlandırır.",
    cat: "Profil",
  },
  {
    q: "Çalışmıyorum / öğrenciyim, başvurabilir miyim?",
    a: "Başvurular profil bütünlüğüyle değerlendirilir. Durumunuza göre bağlar ve finansman anlatısı önem kazanır. Elitia Vize, profilinize uygun başvuru stratejisi çıkarır.",
    cat: "Profil",
  },
  {
    q: "Sponsor ile başvuru yapılır mı?",
    a: "Bazı durumlarda sponsor/finansör gösterilebilir; ancak bunun mantıklı ve belgelenebilir olması gerekir. Elitia Vize, sponsor kullanımının profilinize uygunluğunu değerlendirir.",
    cat: "Finansman",
  },
  {
    q: "Danışmanlık süreci kaç gün sürer?",
    a: "Profilinize ve evrakların hazır olma durumuna göre değişir. Amaç, başvuruyu hızla değil doğru ve tutarlı şekilde tamamlamaktır.",
    cat: "Genel",
  },
  {
    q: "Elitia Vize hangi hizmetleri sunuyor?",
    a: "Profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu süreci planlama ve mülakat hazırlığı adımlarında danışmanlık sağlıyoruz.",
    cat: "Genel",
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

function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqPage() {
  const categories = useMemo(() => {
    const order = ["Genel", "B1/B2", "DS-160", "Evrak", "Mülakat", "Randevu", "Red Sonrası", "Finansman", "Profil"];
    const cats = Array.from(new Set(faqs.map((f) => f.cat)));
    cats.sort((a, b) => (order.indexOf(a) === -1 ? 999 : order.indexOf(a)) - (order.indexOf(b) === -1 ? 999 : order.indexOf(b)));
    return cats;
  }, []);

  const [activeCat, setActiveCat] = useState<string>("Genel");
  const [openKey, setOpenKey] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return faqs.filter((f) => f.cat === activeCat);
  }, [activeCat]);

  return (
    <main className="min-h-screen">
      <FAQJsonLd />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,49,93,.12)] via-[rgba(24,154,144,.08)] to-transparent" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[rgba(24,154,144,.12)] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          <nav className="text-sm text-neutral-600">
            <Link className="hover:underline" href="/">
              Anasayfa
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Sık Sorulan Sorular</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
                <span className="font-semibold text-[var(--brand-navy)]">SSS</span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">ABD Vize Danışmanlığı</span>
              </div>

              <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
                ABD vize süreçlerinde en çok sorulan sorular
              </h1>

              <p className="max-w-3xl text-neutral-700 sm:text-lg">
                Buradaki cevaplar “genel çerçeve” içindir. Profilinize özel yol haritası için{" "}
                <strong>WhatsApp’tan yazın</strong>; doğru akışı birlikte netleştirelim.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp’tan Ön Değerlendirme
                </a>

                <Link className="btn-secondary" href="/abd-vizesi/b1-b2-turistik-vize">
                  B1/B2 Sayfası
                </Link>

                <Link
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                  href="/iletisim"
                >
                  İletişim Formu →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Categories */}
          <aside className="rounded-3xl bg-white p-6 shadow-soft lg:sticky lg:top-24 lg:h-fit">
            <div className="text-sm font-semibold text-[var(--brand-navy)]">
              Kategoriler
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Soruları daha hızlı bulmak için kategori seçin.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = c === activeCat;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => {
                      setActiveCat(c);
                      setOpenKey(null);
                    }}
                    className={cn(
                      "rounded-full border px-3 py-2 text-sm",
                      active
                        ? "border-transparent bg-[rgba(24,154,144,.14)] text-[var(--brand-navy)] font-semibold"
                        : "bg-white text-neutral-700 hover:bg-neutral-50"
                    )}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-5">
              <div className="text-sm font-semibold text-[var(--brand-navy)]">
                Hızlı Başlangıç
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                WhatsApp mesajında şu 3 bilgiyi yazın:
              </p>
              <div className="mt-3 grid gap-2 text-xs text-neutral-700">
                <div className="rounded-2xl bg-white/70 px-3 py-2">1) Vize türü</div>
                <div className="rounded-2xl bg-white/70 px-3 py-2">2) Kısa profil</div>
                <div className="rounded-2xl bg-white/70 px-3 py-2">3) Hedef tarih / amaç</div>
              </div>
              <a className="btn-primary mt-4 w-full" href={WHATSAPP} target="_blank" rel="noreferrer">
                WhatsApp’tan Yaz
              </a>
            </div>
          </aside>

          {/* Accordion */}
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-soft">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
                    {activeCat} soruları
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600">
                    Kısa ve net cevaplar (SEO + GEO uyumlu).
                  </p>
                </div>

                <div className="text-xs text-neutral-500">
                  {filtered.length} soru
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {filtered.map((f) => {
                  const key = `${f.cat}::${f.q}`;
                  const open = openKey === key;

                  return (
                    <div key={key} className="rounded-3xl border bg-white">
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 p-5 text-left"
                        onClick={() => setOpenKey(open ? null : key)}
                        aria-expanded={open}
                      >
                        <div>
                          <div className="text-sm font-semibold text-neutral-900">
                            {f.q}
                          </div>
                          <div className="mt-1 text-xs text-neutral-500">
                            {f.cat}
                          </div>
                        </div>

                        <div
                          className={cn(
                            "mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm",
                            open ? "bg-neutral-50" : "bg-white"
                          )}
                          aria-hidden="true"
                        >
                          {open ? "–" : "+"}
                        </div>
                      </button>

                      {open && (
                        <div className="px-5 pb-5">
                          <div className="rounded-3xl bg-neutral-50 p-4 text-sm text-neutral-700 leading-relaxed">
                            {f.a}
                          </div>

                          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                            <a
                              className="btn-primary w-full sm:w-auto"
                              href={WHATSAPP}
                              target="_blank"
                              rel="noreferrer"
                            >
                              WhatsApp’tan Sor
                            </a>
                            <Link
                              className="btn-secondary w-full sm:w-auto"
                              href="/iletisim"
                            >
                              İletişim Sayfası
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
                    Sorunuza özel cevap için
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">
                    Profilinizi 2–3 bilgiyle özetleyin; size net bir yol haritası çıkaralım.
                  </p>
                </div>
                <a className="btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
