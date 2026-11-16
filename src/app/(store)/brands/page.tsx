import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { ProductGrid } from "@/components/store/product-grid";
import { brands, products } from "@/lib/mock-data";

export default function BrandsPage() {
  const featured = brands[0];

  return (
    <div className="page">
      <PageHeader
        title="Brands"
        crumbs={[{ label: "Home", href: "/" }, { label: "Brands" }]}
      />

      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-5">
        {brands.map((b) => (
          <Link
            key={b.slug}
            href={`/brands/${b.slug}`}
            className="flex h-32 items-center justify-center border border-line text-2xl hover:border-ink"
          >
            {b.name}
          </Link>
        ))}
      </div>

      <hr className="mt-24 border-line" />

      <section className="mt-16 flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="flex size-44 shrink-0 items-center justify-center bg-soft text-muted">
          Logo
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-muted">
            Brand detail
          </p>
          <h2 className="mt-3 text-5xl font-semibold tracking-tight">
            {featured.name}
          </h2>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
            {featured.description} {featured.productCount} products available.
          </p>
        </div>
      </section>

      <div className="mt-16">
        <ProductGrid products={products.slice(0, 4)} />
      </div>
    </div>
  );
}
