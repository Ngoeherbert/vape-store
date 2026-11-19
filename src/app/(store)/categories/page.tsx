import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/shared/page-header";
import { ProductGrid } from "@/components/store/product-grid";
import { categories, products } from "@/lib/mock-data";

export default function CategoriesPage() {
  return (
    <div className="page pt-14 pb-24">
      <PageHeader
        title="Shop by category"
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <div className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-5">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/categories/${c.slug}`}
            className="block border border-line p-8 hover:border-ink"
          >
            <div className="relative h-36 overflow-hidden bg-soft">
              <Image src={c.imageUrl} alt={c.name} fill className="object-cover" sizes="(min-width: 1024px) 20vw, 50vw" />
            </div>
            <p className="mt-8 text-2xl">{c.name}</p>
            <p className="mt-1 text-lg text-muted">{c.count} products</p>
          </Link>
        ))}
      </div>

      <h2 className="mt-24 text-h2">Popular right now</h2>
      <div className="mt-12">
        <ProductGrid products={products.slice(0, 4)} />
      </div>
    </div>
  );
}
