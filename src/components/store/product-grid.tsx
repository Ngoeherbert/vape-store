import type { ComponentProps } from "react";
import { ProductCard } from "./product-card";

type Product = ComponentProps<typeof ProductCard>["product"];

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-4">
      {products.map((p) => (
        <ProductCard key={p.slug} product={p} />
      ))}
    </div>
  );
}
