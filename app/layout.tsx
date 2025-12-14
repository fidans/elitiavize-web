import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import StickyWhatsApp from "./components/StickyWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elitia Vize Danışmanlığı | ABD Vize Başvuruları",
  description:
    "ABD vize başvurularında profil ön değerlendirme, DS-160 danışmanlığı, evrak kontrolü, randevu planlama ve mülakat hazırlığı.",
  metadataBase: new URL("https://elitiavize.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}
        <StickyWhatsApp />
      </body>
    </html>
  );
}
