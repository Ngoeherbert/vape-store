import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/page-header";
import { ProductGrid } from "@/components/store/product-grid";
import { brands, products } from "@/lib/mock-data";

export const instant = false;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = brands.find((b) => b.slug === slug);
  if (!brand) notFound();

  return (
    <div className="page pt-14 pb-24">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/brands" },
          { label: brand.name },
        ]}
      />
      <section className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-start">
        <div className="flex size-44 shrink-0 items-center justify-center bg-soft text-muted">
          Logo
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest text-muted">
            Brand detail
          </p>
          <h1 className="mt-3 text-h2">{brand.name}</h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-muted">
            {brand.description} {brand.productCount} products available.
          </p>
        </div>
      </section>
      <div className="mt-16">
        <ProductGrid products={products.slice(0, 4)} />
      </div>
    </div>
  );
}
