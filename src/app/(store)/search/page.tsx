import { SearchBox } from "@/components/store/search-box";
import { ProductGrid } from "@/components/store/product-grid";
import { products } from "@/lib/mock-data";

export const instant = false;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;

  return (
    <div className="page pt-14">
      <SearchBox key={q} initialQuery={q} />

      {q && (
        <section className="mt-24">
          <div className="flex items-baseline justify-between">
            <h1 className="text-4xl font-semibold tracking-tight">
              Results for “{q}”
            </h1>
            <p className="text-lg text-muted">36 products</p>
          </div>
          <div className="mt-12">
            <ProductGrid products={products} />
          </div>
        </section>
      )}
    </div>
  );
}
