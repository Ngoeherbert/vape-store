import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components/store/product-grid";
import { categories, heroImage, products } from "@/lib/mock-data";

const homeCategories = categories.slice(0, 4);

function SectionHeader({ title, href }: { title: string; href: string }) {
  return (
    <div className="flex items-end justify-between">
      <h2 className="text-h2">{title}</h2>
      <Link href={href} className="link-underline">
        View all
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="bg-hero">
        <div className="page grid items-center gap-12 py-24 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted">
              New arrivals
            </p>
            <h1 className="mt-6 text-display leading-[1.05] tracking-tight">
              Simple vaping,
              <br />
              done properly.
            </h1>
            <p className="mt-8 max-w-md text-xl leading-relaxed text-muted">
              Devices, e-liquids and pods from trusted brands. Fast, discreet
              delivery.
            </p>
            <div className="mt-10 flex gap-4">
              <Link
                href="/products"
                className="bg-ink px-8 py-4 text-lg text-canvas"
              >
                Shop all
              </Link>
              <Link
                href="/deals"
                className="border border-line bg-canvas px-8 py-4 text-lg"
              >
                View deals
              </Link>
            </div>
          </div>
          <div className="relative h-[500px] overflow-hidden bg-soft">
            <Image src={heroImage} alt="Vaping devices and e-liquids" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          </div>
        </div>
      </section>

      <section className="page pt-24">
        <SectionHeader title="Shop by category" href="/categories" />
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {homeCategories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-soft">
                <Image src={c.imageUrl} alt={c.name} fill className="object-cover transition-transform group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" />
              </div>
              <p className="mt-5 text-2xl group-hover:underline">{c.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="page pt-24">
        <SectionHeader title="Featured" href="/products" />
        <div className="mt-10">
          <ProductGrid products={products.slice(0, 4)} />
        </div>
      </section>

      <section className="page pt-24">
        <div className="flex items-center justify-between bg-ink px-14 py-16 text-canvas">
          <div>
            <p className="text-sm uppercase tracking-widest text-canvas/60">
              Promotion
            </p>
            <p className="mt-3 text-4xl font-semibold">
              Save 15% on your first order
            </p>
          </div>
          <Link href="/bundles" className="bg-canvas px-8 py-4 text-lg text-ink">
            Shop bundles
          </Link>
        </div>
      </section>
    </>
  );
}
