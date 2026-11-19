import Image from "next/image";
import Link from "next/link";
import { money } from "@/components/store/product-card";

const bundles = [
  {
    slug: "starter-kit",
    name: "Starter kit",
    desc: "Device, 2 pods, 1 e-liquid",
    price: 39,
    was: 48,
    image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "flavor-trio",
    name: "Flavor trio",
    desc: "Three 30ml nic salts of your choice",
    price: 28,
    was: 36,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },
  {
    slug: "coil-refill-pack",
    name: "Coil refill pack",
    desc: "Five coils and a spare pod",
    price: 22,
    was: 34,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BundlesPage() {
  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Bundles</nav>
      <h1 className="mt-10 text-h1">Bundles &amp; kits</h1>
      <p className="mt-4 text-xl text-muted">
        Everything you need in one box, for less.
      </p>

      <div className="mt-14 grid gap-9 md:grid-cols-3">
        {bundles.map((b) => (
          <article key={b.slug} className="border border-line p-9">
            <div className="relative aspect-[4/3] overflow-hidden bg-soft">
              <Image src={b.image} alt={b.name} fill className="object-cover" sizes="(min-width: 768px) 33vw, 100vw" />
            </div>
            <span className="mt-7 inline-block border border-[#d4d4d4] px-3 py-1.5 text-[15px]">
              Save ${b.was - b.price}
            </span>
            <h2 className="mt-5 text-2xl font-semibold">{b.name}</h2>
            <p className="mt-2 text-lg text-muted">{b.desc}</p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <span className="text-2xl font-semibold">{money(b.price)}</span>{" "}
                <span className="text-lg text-muted price-was">
                  {money(b.was)}
                </span>
              </div>
              <Link
                href={`/products/${b.slug}`}
                className="bg-ink px-6 py-3.5 text-lg text-canvas"
              >
                View
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
