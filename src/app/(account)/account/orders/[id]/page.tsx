import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const nav = [
  ["Overview", "/account"],
  ["Orders", "/account/orders"],
  ["Addresses", "/account/addresses"],
  ["Wishlist", "/account/wishlist"],
  ["My reviews", "/account/reviews"],
  ["Notifications", "/account/notifications"],
  ["ID verification", "/account/verification"],
  ["Profile & password", "/account/profile"],
];

const stages = [
  ["Placed", true], ["Paid", true], ["Shipped", true], ["Out for delivery", false], ["Delivered", false],
] as const;

const items = [
  { name: "Nic Salt 30ml", meta: "Mint · 20mg · ×1", price: "$12.00" },
  { name: "Pod Device Kit", meta: "Matte black · ×1", price: "$34.00" },
];

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // TODO: load the real order for the signed-in user.

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold tracking-tight">Order #{id}</h1>
          <a href={`/api/invoices/${id}`} className="border border-[#d4d4d4] px-7 py-4 text-lg">Download invoice</a>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <div className="space-y-8">
            <section className="border border-[#e5e5e5] p-9">
              <h2 className="text-2xl font-semibold">Tracking</h2>
              <ol className="mt-6 flex flex-wrap gap-3">
                {stages.map(([label, done]) => (
                  <li key={label} className={`border px-4 py-2 text-base ${done ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}>{label}</li>
                ))}
              </ol>
              <p className="mt-6 text-xl text-[#555]">Carrier: [CARRIER] · Tracking: <a href="#" className="text-[#111] underline">[TRACKING NUMBER]</a></p>
            </section>

            <section className="border border-[#e5e5e5] p-9">
              <h2 className="text-2xl font-semibold">Items</h2>
              <ul className="mt-6">
                {items.map((i) => (
                  <li key={i.name} className="flex items-center gap-5 border-b border-[#e5e5e5] py-4">
                    <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center bg-[#f1f1f1] text-[#555]">Img</div>
                    <div className="flex-1"><p className="text-2xl">{i.name}</p><p className="text-lg text-[#555]">{i.meta}</p></div>
                    <p className="text-2xl">{i.price}</p>
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-4 text-xl">
                <div className="flex justify-between text-[#555]"><dt>Shipping</dt><dd className="text-[#111]">$4.99</dd></div>
                <div className="flex justify-between font-semibold"><dt>Total</dt><dd>$50.99</dd></div>
              </dl>
            </section>

            <div className="grid gap-8 md:grid-cols-2">
              <section className="border border-[#e5e5e5] p-9">
                <h2 className="text-xl font-semibold">Shipping address</h2>
                <p className="mt-5 text-xl leading-9 text-[#555]">[Name]<br />[Street]<br />[City], [Postcode]</p>
              </section>
              <section className="border border-[#e5e5e5] p-9">
                <h2 className="text-xl font-semibold">Payment</h2>
                <p className="mt-5 text-xl leading-9 text-[#555]">Cryptocurrency<br />50.99 USDT · Paid</p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}