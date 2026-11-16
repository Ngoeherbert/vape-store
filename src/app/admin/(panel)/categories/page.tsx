import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Categories</h1>
      <p className="mt-3 text-[#555]">This screen is scaffolded. Use the links below to navigate.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin" className="border border-[#d4d4d4] px-4 py-2 hover:border-[#111]">Admin</Link>
        <Link href="/admin/products" className="border border-[#d4d4d4] px-4 py-2 hover:border-[#111]">Products</Link>
        <Link href="/admin/orders" className="border border-[#d4d4d4] px-4 py-2 hover:border-[#111]">Orders</Link>
        <Link href="/admin/customers" className="border border-[#d4d4d4] px-4 py-2 hover:border-[#111]">Customers</Link>
      </div>
    </div>
  );
}
