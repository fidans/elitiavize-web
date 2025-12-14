import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | ABD Vize Danışmanlığı | Elitia Vize",
  description:
    "ABD vize başvuruları, DS-160, B1/B2 ve mülakat süreçleri hakkında danışman gözüyle hazırlanan rehberler.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "abd-vizesi-neden-reddedilir",
    title: "ABD vizesi neden reddedilir?",
    desc: "Danışman gözüyle en sık red nedenleri ve nasıl önlenir.",
  },
  {
    slug: "ds-160-hatalari",
    title: "DS-160’ta yapılan 10 kritik hata",
    desc: "Formda en sık yapılan hatalar, red riskini nasıl artırır ve danışmanlık yaklaşımı.",
  },
];


export default function BlogPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-semibold sm:text-5xl">Blog</h1>
      <p className="mt-4 max-w-3xl text-neutral-700">
        ABD vize süreçlerine dair pratik, net ve danışmanlık odaklı içerikler.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="rounded-3xl border p-6 hover:bg-neutral-50"
          >
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
