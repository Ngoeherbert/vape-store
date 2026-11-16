import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/shared/page-header";
import { ProductGrid } from "@/components/store/product-grid";
import { categories, products } from "@/lib/mock-data";

export const instant = false;

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <div className="page pt-14">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.name },
        ]}
      />
      <h1 className="mt-6 text-5xl font-semibold tracking-tight">
        {category.name}
      </h1>
      <p className="mt-3 text-lg text-[#555]">{category.count} products</p>
      <div className="mt-12">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
