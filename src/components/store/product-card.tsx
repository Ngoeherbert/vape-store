import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/lib/money";

export type ProductSummary = {
  slug: string;
  imageUrl?: string | null;
  name: string;
  brand: string;
  priceCents: number;
};

export function money(dollars: number) {
  return formatMoney(Math.round(dollars * 100));
}

export function ProductCard({ product }: { product: ProductSummary }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-[3px] bg-soft">
        {product.imageUrl ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-[15px] text-muted">
            Product image
          </span>
        )}
      </div>
      <p className="mt-5 text-[15px] text-muted">{product.brand}</p>
      <h3 className="mt-1 text-[18px] font-medium leading-snug text-ink">
        {product.name}
      </h3>
      <p className="mt-3 text-[18px] text-ink">
        {formatMoney(product.priceCents)}
      </p>
    </Link>
  );
}
