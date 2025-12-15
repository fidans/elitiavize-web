import type { MetadataRoute } from "next";

const baseUrl = "https://www.elitiavize.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "/",
    "/abd-vizesi",
    "/abd-vizesi/b1-b2-turistik-vize",
    "/abd-vizesi/f1-ogrenci-vizesi",
    "/abd-vizesi/j1-degisim-programi",
    "/abd-vizesi/ds-160-doldurma",
    "/sikca-sorulan-sorular",
    "/iletisim",
    "/blog",
    "/blog/abd-vizesi-neden-reddedilir",
    "/blog/ds-160-hatalari",
    "/blog/b1-b2-mulakat-sorulari",


  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : path.startsWith("/abd-vizesi/b1-b2") ? 0.9 : 0.7,
  }));
}
