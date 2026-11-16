import { ProductFilters } from "@/components/store/product-filters";
import { ProductGrid } from "@/components/store/product-grid";
import { Pagination } from "@/components/shared/pagination";
import { products } from "@/lib/mock-data";

export const instant = false;

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page = "1" } = await searchParams;
  const current = Math.max(1, Number(page) || 1);

  return (
    <div className="page pt-14">
      <nav className="text-lg text-[#555]">Home / All products</nav>
      <div className="mt-10 flex items-end justify-between gap-4">
        <h1 className="text-5xl font-semibold tracking-tight">All products</h1>
        <p className="text-lg text-[#555]">{products.length} products</p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[260px_1fr]">
        <ProductFilters />
        <div>
          <ProductGrid products={products} />
          <div className="mt-14">
            <Pagination page={current} totalPages={3} basePath="/products" />
          </div>
        </div>
      </div>
    </div>
  );
}
