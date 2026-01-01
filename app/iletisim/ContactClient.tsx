"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const PHONE_DISPLAY = "0543 727 46 21";
const WHATSAPP_BASE = "https://wa.me/905437274621";

const DEFAULT_TEXT =
  "Merhaba Elitia Vize. ABD vizesi için ön değerlendirme almak istiyorum.";

function encode(text: string) {
  return encodeURIComponent(text);
}

export default function ContactClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("B1/B2 Turistik");
  const [note, setNote] = useState("");

  const composedMessage = useMemo(() => {
    const parts = [
      "Merhaba Elitia Vize,",
      `Konu: ${topic}`,
      name ? `Ad Soyad: ${name}` : "",
      phone ? `Telefon: ${phone}` : "",
      note ? `Not: ${note}` : "",
      "Uygun olduğunuzda ön değerlendirme almak istiyorum.",
    ].filter(Boolean);

    return parts.join("\n");
  }, [name, phone, topic, note]);

  const whatsappHref = `${WHATSAPP_BASE}?text=${encode(
    composedMessage || DEFAULT_TEXT
  )}`;

  const telHref = `tel:+90${PHONE_DISPLAY.replace(/\s/g, "").replace(/^0/, "")}`;

  return (
    <main className="min-h-screen">
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
            <span className="text-neutral-900">İletişim</span>
          </nav>

          <div className="mt-6 rounded-3xl bg-white p-8 shadow-soft">
            <div className="grid gap-8 lg:grid-cols-3 lg:items-start">
              {/* Left: headline */}
              <div className="lg:col-span-2">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-neutral-50 px-4 py-2 text-sm">
                  <span className="font-semibold text-[var(--brand-navy)]">
                    WhatsApp Ön Değerlendirme
                  </span>
                  <span className="text-neutral-400">•</span>
                  <span className="text-neutral-600">Hızlı yönlendirme</span>
                </div>

                <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
                  En hızlı yol:{" "}
                  <span className="text-[var(--brand-teal)] font-bold">
                    WhatsApp’tan yazın
                  </span>
                  .
                </h1>

                <p className="mt-4 max-w-3xl text-neutral-700 sm:text-lg">
                  Aşağıdaki alanları doldurun; mesajınız WhatsApp’ta otomatik hazırlansın.
                  Biz de profilinize göre net bir yol haritası çıkaralım.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a className="btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                    WhatsApp’ta Mesajı Aç
                  </a>

                  <a
                    className="btn-secondary"
                    href={`${WHATSAPP_BASE}?text=${encode(DEFAULT_TEXT)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hazır Mesajla Aç
                  </a>

                  <a
                    className="text-sm font-medium text-[var(--brand-navy)] underline underline-offset-4"
                    href={telHref}
                  >
                    Ara: {PHONE_DISPLAY}
                  </a>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-neutral-50 p-4">
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      🔍 Ön değerlendirme
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Profil + hedef tarih analizi
                    </div>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-4">
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      🧾 DS-160 & evrak
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Tutarlılık ve dosya düzeni
                    </div>
                  </div>
                  <div className="rounded-2xl bg-neutral-50 p-4">
                    <div className="text-sm font-semibold text-[var(--brand-navy)]">
                      🗓️ Randevu & mülakat
                    </div>
                    <div className="mt-1 text-sm text-neutral-600">
                      Plan + hazırlık yaklaşımı
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-xs text-neutral-500">
                  Not: Danışmanlık hizmetimiz sonuç garantisi vermez; nihai karar ilgili resmi makamlar tarafından verilir.
                </p>
              </div>

              {/* Right: quick start card */}
              <div className="rounded-3xl bg-gradient-to-br from-[rgba(24,154,144,.14)] to-white p-6">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  Hızlı Başlangıç
                </div>
                <p className="mt-2 text-sm text-neutral-700">
                  WhatsApp mesajında şu 3 bilgiyi yazmanız yeterli:
                </p>

                <div className="mt-4 grid gap-2 text-xs text-neutral-700">
                  <div className="rounded-2xl bg-white/70 px-3 py-2">
                    1) Vize türü (B1/B2, F1, J1…)
                  </div>
                  <div className="rounded-2xl bg-white/70 px-3 py-2">
                    2) Kısa profil (iş/okul/bağlar)
                  </div>
                  <div className="rounded-2xl bg-white/70 px-3 py-2">
                    3) Hedef tarih / amaç
                  </div>
                </div>

                <a className="btn-primary mt-5 w-full" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp’tan Yaz
                </a>

                <div className="mt-3 text-xs text-neutral-600">
                  Cevap süresi, yoğunluğa göre değişebilir.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--brand-navy)]">
                WhatsApp mesajını hazırlayın
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Bilgileriniz WhatsApp mesajına eklenir. Gönderim kontrolü sizdedir.
              </p>
            </div>

            <div className="rounded-2xl bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
              ✅ Mesaj önizlemesi aşağıda
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-semibold text-[var(--brand-navy)]">
                  Ad Soyad (opsiyonel)
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(24,154,144,.25)]"
                  placeholder="Örn: Sultan Kara"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--brand-navy)]">
                  Telefon (opsiyonel)
                </label>
                <input
                  className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(24,154,144,.25)]"
                  placeholder="Örn: 05xx xxx xx xx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--brand-navy)]">
                  Konu
                </label>
                <select
                  className="mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(24,154,144,.25)]"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                >
                  <option>B1/B2 Turistik</option>
                  <option>F1 Öğrenci</option>
                  <option>J1 Değişim Programı</option>
                  <option>DS-160 Danışmanlığı</option>
                  <option>Red Sonrası Başvuru</option>
                  <option>Green Card (DV Lottery)</option>
                  <option>Randevu Öne Çekme</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-[var(--brand-navy)]">
                  Kısa not (opsiyonel)
                </label>
                <textarea
                  className="mt-2 min-h-[120px] w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[rgba(24,154,144,.25)]"
                  placeholder="Örn: Daha önce başvuru yaptım / seyahat amacı / hedef tarih vb."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary w-full" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp’ta Gönder
                </a>
                <a className="btn-secondary w-full" href={telHref}>
                  Ara
                </a>
              </div>

              <div className="text-xs text-neutral-500">
                Gönder butonu WhatsApp’ı açar; mesajı gönderme kontrolü sizdedir.
              </div>
            </div>

            {/* Preview */}
            <div className="rounded-3xl bg-neutral-50 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  Mesaj Önizlemesi
                </div>
                <div className="text-xs text-neutral-500">
                  WhatsApp’a aynen aktarılır
                </div>
              </div>

              <div className="mt-4 whitespace-pre-line rounded-3xl bg-white p-5 text-sm text-neutral-800 shadow-sm">
                {composedMessage || DEFAULT_TEXT}
              </div>

              <div className="mt-4 rounded-3xl bg-white p-5 text-sm text-neutral-700 shadow-sm">
                <div className="text-sm font-semibold text-[var(--brand-navy)]">
                  İstersen hızlıca böyle yaz:
                </div>
                <div className="mt-2 text-sm text-neutral-600">
                  “B1/B2 — {PHONE_DISPLAY} — İş: ___ — Amaç: ___ — Hedef tarih: ___”
                </div>
              </div>

              <div className="mt-4">
                <a className="btn-primary w-full" href={whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp’ı Aç
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA mini */}
        <div className="mt-8 rounded-3xl bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[var(--brand-navy)]">
                Hazırsanız başlayalım.
              </h3>
              <p className="mt-1 text-sm text-neutral-600">
                Profilinizi yazın; size uygun yol haritasını netleştirelim.
              </p>
            </div>
            <a className="btn-primary" href={whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
