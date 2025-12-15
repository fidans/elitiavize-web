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
    <main className="mx-auto max-w-6xl px-6 py-12">
      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">Anasayfa</Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">Hizmetler</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold sm:text-5xl">Hizmetler</h1>
        <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
          Elitia Vize; bilgi vermekten çok, süreci <strong>doğru yönetmeye</strong> odaklanır.
          Profilinize göre riskleri tespit eder, başvuru akışını netleştirir ve WhatsApp üzerinden hızlı ön değerlendirme sunar.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-50"
          >
            Ön Değerlendirme (WhatsApp)
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            İletişim
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border p-7">
          <div className="text-sm font-semibold">ABD Vize Danışmanlığı</div>
          <p className="mt-2 text-sm text-neutral-700">
            Turistik (B1/B2) başta olmak üzere ABD vize sürecinde dosya akışı, DS-160 tutarlılığı ve mülakat hazırlığı.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/abd-vizesi">
              Sayfayı İncele
            </Link>
            <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/abd-vizesi/b1-b2-turistik-vize">
              B1/B2 Turistik
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border p-7">
          <div className="text-sm font-semibold">Green Card (DV Lottery)</div>
          <p className="mt-2 text-sm text-neutral-700">
            Uygunluk kontrolü, başvuru bilgilerinin tutarlılığı ve hata riskini azaltmaya odaklı danışmanlık.
          </p>
          <div className="mt-5">
            <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/green-card-dv-lottery">
              Sayfayı İncele
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border p-7">
          <div className="text-sm font-semibold">Randevu Öne Çekme</div>
          <p className="mt-2 text-sm text-neutral-700">
            Randevu takip planı ve süreç yönetimi. Dönemsel uygunluklara göre profesyonel takip.
          </p>
          <div className="mt-5">
            <Link className="rounded-2xl border px-4 py-3 text-sm hover:bg-neutral-50" href="/randevu-one-cekme">
              Sayfayı İncele
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border bg-white p-8">
        <h2 className="text-2xl font-semibold">Hızlı Başlangıç</h2>
        <p className="mt-2 text-sm text-neutral-700">
          WhatsApp mesajında şu 3 bilgiyi yazın: (1) Hangi hizmet? (2) Profil özeti (3) Hedef tarih/amaç.
        </p>
        <div className="mt-5">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            WhatsApp’tan Yaz
          </a>
        </div>
      </section>
    </main>
  );
}
