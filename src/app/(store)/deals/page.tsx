import Link from "next/link";
import { ProductGrid } from "@/components/store/product-grid";
import { products } from "@/lib/mock-data";

export const instant = false;

const tabs = [
  { key: "sale", label: "Sale" },
  { key: "new", label: "New arrivals" },
  { key: "clearance", label: "Clearance" },
];

export default async function DealsPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab = "sale" } = await searchParams;

  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Deals</nav>
      <h1 className="mt-10 text-h1">Deals &amp; new arrivals</h1>

      <div className="mt-8 flex gap-3">
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={`/deals?tab=${t.key}`}
            className={`border px-6 py-3.5 text-lg ${tab === t.key ? "border-ink bg-ink text-canvas" : "border-[#d4d4d4]"}`}
          >
            {t.label}
          </Link>
        ))}
      </div>

      <div className="mt-9 flex items-center justify-between bg-hero px-9 py-8">
        <div>
          <p className="text-2xl font-semibold">
            Up to 30% off selected devices
          </p>
          <p className="mt-1 text-lg text-muted">Offer ends Sunday</p>
        </div>
        <Link
          href="/categories/devices?sale=1"
          className="bg-ink px-6 py-4 text-lg text-canvas"
        >
          Shop the sale
        </Link>
      </div>

      <div className="mt-14">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
