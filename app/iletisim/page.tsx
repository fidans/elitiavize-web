// app/iletisim/page.tsx
import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "İletişim | Elitia Vize Danışmanlığı",
  description:
    "Elitia Vize Danışmanlığı iletişim: WhatsApp üzerinden hızlı ön değerlendirme ve iletişim formu. ABD vize başvurularında danışmanlık.",
  alternates: { canonical: "/iletisim" },
};

export default function ContactPage() {
  return <ContactClient />;
}
