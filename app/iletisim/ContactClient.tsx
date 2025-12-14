// app/iletisim/ContactClient.tsx
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

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <nav className="text-sm text-neutral-600">
        <Link className="hover:underline" href="/">
          Anasayfa
        </Link>{" "}
        <span className="text-neutral-400">/</span>{" "}
        <span className="text-neutral-900">İletişim</span>
      </nav>

      <section className="mt-6 rounded-3xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold sm:text-5xl">
          Hızlı ön değerlendirme için WhatsApp’tan yazın
        </h1>

        <p className="mt-4 max-w-3xl text-neutral-700">
          Aşağıdaki formu doldurun, mesajınız WhatsApp’ta otomatik hazırlansın.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            href={`${WHATSAPP_BASE}?text=${encode(DEFAULT_TEXT)}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp’ı Aç
          </a>

          <a
            className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
            href={`tel:+90${PHONE_DISPLAY.replace(/\s/g, "").replace(/^0/, "")}`}
          >
            Ara: {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border p-8">
        <h2 className="text-2xl font-semibold">WhatsApp mesajını hazırlayın</h2>

        <div className="mt-6 grid gap-4">
          <input
            className="rounded-2xl border px-4 py-3 text-sm"
            placeholder="Ad Soyad"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="rounded-2xl border px-4 py-3 text-sm"
            placeholder="Telefon (opsiyonel)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            className="rounded-2xl border px-4 py-3 text-sm"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            <option>B1/B2 Turistik</option>
            <option>F1 Öğrenci</option>
            <option>J1 Değişim Programı</option>
            <option>DS-160 Danışmanlığı</option>
            <option>Red Sonrası Başvuru</option>
          </select>

          <textarea
            className="rounded-2xl border px-4 py-3 text-sm"
            placeholder="Kısa notunuz"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border px-5 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            WhatsApp’ta Gönder
          </a>
        </div>
      </section>
    </main>
  );
}
