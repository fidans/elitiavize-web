import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP =
  "https://wa.me/905437274621?text=Merhaba%20Elitia%20Vize.%20Hizmetler%20hakk%C4%B1nda%20%C3%B6n%20de%C4%9Ferlendirme%20almak%20istiyorum.";

export const metadata: Metadata = {
  title: "Hizmetler | Elitia Vize",
  description:
    "Elitia Vize hizmetleri: ABD vize danışmanlığı, Green Card (DV Lottery) başvuru danışmanlığı ve randevu öne çekme/takip hizmeti.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,154,144,.10)] to-transparent" />

        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-10">
          {/* Breadcrumb */}
          <nav className="text-sm text-neutral-600">
            <Link className="hover:underline" href="/">
              Anasayfa
            </Link>{" "}
            <span className="text-neutral-400">/</span>{" "}
            <span className="text-neutral-900">Hizmetler</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-soft">
                <span className="font-medium text-[var(--brand-navy)]">
                  Elitia Vize
                </span>
                <span className="text-neutral-400">•</span>
                <span className="text-neutral-600">
                  Danışmanlık odaklı hizmetler
                </span>
              </div>

              <div>
                <h1 className="text-3xl font-semibold text-[var(--brand-navy)] sm:text-5xl">
                  Hizmetler
                </h1>
                <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
                  Elitia Vize; bilgi vermekten çok, süreci{" "}
                  <strong>doğru yönetmeye</strong> odaklanır. Profilinize göre risk
                  noktalarını netleştirir, başvuru akışını planlar ve WhatsApp üzerinden
                  hızlı ön değerlendirme sunar.
                </p>
              </div>

              {/* CTA hierarchy: WhatsApp primary, Contact as link */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  WhatsApp’tan Ön Değerlendirme
                </a>

                <Link
                  href="/iletisim"
                  className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                >
                  İletişim
                </Link>
              </div>

              {/* Micro trust */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🔒 Gizlilik
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Bilgileriniz gizli tutulur, süreç şeffaf ilerler.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    ✅ Tutarlılık
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    DS-160 ve evrak uyumunu birlikte kontrol ederiz.
                  </div>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-4">
                  <div className="text-sm font-semibold text-[var(--brand-navy)]">
                    🎯 Plan
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Profilinize göre net yol haritası çıkarırız.
                  </div>
                </div>
              </div>

              <p className="text-xs text-neutral-500">
                Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlarca verilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* ABD */}
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(24,154,144,.12)] text-xl">
                🇺🇸
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  ABD Vize Danışmanlığı
                </div>
                <p className="mt-2 text-sm text-neutral-700">
                  Turistik (B1/B2) başta olmak üzere ABD vize sürecinde dosya akışı,
                  DS-160 tutarlılığı ve mülakat hazırlığı.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-2">
              <Link
                className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                href="/abd-vizesi"
              >
                Sayfayı İncele
              </Link>
              <Link
                className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                href="/abd-vizesi/b1-b2-turistik-vize"
              >
                B1/B2 Turistik
              </Link>
            </div>
          </div>

          {/* DV */}
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(0,49,93,.08)] text-xl">
                🟩
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  Green Card (DV Lottery)
                </div>
                <p className="mt-2 text-sm text-neutral-700">
                  Uygunluk kontrolü, başvuru bilgilerinin tutarlılığı ve hata riskini
                  azaltmaya odaklı danışmanlık.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                className="block rounded-2xl bg-neutral-50 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                href="/green-card-dv-lottery"
              >
                Sayfayı İncele
              </Link>
            </div>
          </div>

          {/* Randevu */}
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(255,7,11,.08)] text-xl">
                📅
              </div>
              <div>
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  Randevu Öne Çekme
                </div>
                <p className="mt-2 text-sm text-neutral-700">
                  Randevu takip planı ve süreç yönetimi. Dönemsel uygunluklara göre
                  profesyonel takip.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Link
                className="block rounded-2xl bg-neutral-50 px-4 py-3 text-sm transition hover:-translate-y-0.5 hover:shadow-soft"
                href="/randevu-one-cekme"
              >
                Sayfayı İncele
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,49,93,.06)] to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20">
          <div className="overflow-hidden rounded-3xl bg-white p-8 shadow-soft">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
                  Hızlı Başlangıç
                </h2>
                <p className="mt-2 text-sm text-neutral-700">
                  WhatsApp mesajında şu 3 bilgiyi yazın:{" "}
                  <strong>(1)</strong> Hangi hizmet? <strong>(2)</strong> Profil özeti{" "}
                  <strong>(3)</strong> Hedef tarih/amaç.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 sm:items-end">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary px-6 py-3"
                >
                  WhatsApp’tan Yaz
                </a>
                <div className="text-xs text-neutral-500 sm:text-right">
                  Ortalama 10 dk içinde ön değerlendirme akışı.
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  1) Hizmeti seçin
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  ABD vizesi / DV / Randevu
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  2) Profil özetinizi yazın
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Amaç, geçmiş, bağlar
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-50 p-4">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  3) Hedef tarih
                </div>
                <div className="mt-1 text-sm text-neutral-600">
                  Seyahat planı / okul tarihi
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs text-neutral-500">
              Danışmanlık hizmetidir. Nihai karar ilgili resmi makamlarca verilir.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
