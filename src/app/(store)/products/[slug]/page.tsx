import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/mock-data";
import { formatMoney } from "@/lib/money";
import { ProductGrid } from "@/components/store/product-grid";
import { btnPrimary, btnOutline } from "@/lib/utils";

export const instant = false;

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  const related = products.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <div className="page pt-14 pb-24">
      <nav className="text-[15px] text-muted">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/products" className="hover:underline">Products</Link> / {product.name}
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="relative aspect-square overflow-hidden bg-soft">
            <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" priority />
          </div>
        </div>

        <div>
          <p className="text-[15px] text-muted">{product.brand}</p>
          <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>
          <p className="mt-8 text-3xl font-semibold">{formatMoney(product.priceCents)}</p>
          <div className="mt-8 flex gap-3">
            <button type="button" className={`${btnPrimary} flex-1`}>Add to cart</button>
            <button type="button" className={btnOutline}>Save</button>
          </div>
          <p className="mt-8 text-[15px] text-muted">In stock · Ships in 1–2 days</p>
          <p className="mt-8 border-t border-line pt-6 text-sm text-muted">
            WARNING: This product contains nicotine, a highly addictive substance.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-semibold">Related products</h2>
        <ProductGrid products={related} />
      </section>
    </div>
  );
}
