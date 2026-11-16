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

const recent = [
  { id: "10482", date: "9 Nov 2026", status: "Processing", total: "$50.99" },
  { id: "10391", date: "28 Oct 2026", status: "Delivered", total: "$32.00" },
];

const badge = (s: string) =>
  `inline-block border px-3 py-1.5 text-[15px] ${s === "Delivered" || s === "Verified" ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`;

export default function AccountPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">My account</h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav
            aria-label="Account"
            className="self-start border border-[#e5e5e5]"
          >
            {nav.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border border-[#e5e5e5] p-8">
                <p className="text-[#555]">Orders</p>
                <p className="mt-2 text-5xl font-semibold">7</p>
              </div>
              <div className="border border-[#e5e5e5] p-8">
                <p className="text-[#555]">Wishlist</p>
                <p className="mt-2 text-5xl font-semibold">5</p>
              </div>
              <div className="border border-[#e5e5e5] p-8">
                <p className="text-[#555]">Age verification</p>
                <span className={`mt-3 ${badge("Verified")}`}>Verified</span>
              </div>
            </div>

            <div className="mt-14 flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Recent orders</h2>
              <Link href="/account/orders" className="text-lg underline">
                View all
              </Link>
            </div>
            <div className="mt-6 border border-[#e5e5e5]">
              {recent.map((o) => (
                <Link
                  key={o.id}
                  href={`/account/orders/${o.id}`}
                  className="grid grid-cols-[1fr_1.2fr_1.2fr_auto] items-center border-b border-[#e5e5e5] px-6 py-5 text-xl last:border-b-0"
                >
                  <span>#{o.id}</span>
                  <span className="text-[#555]">{o.date}</span>
                  <span>
                    <span className={badge(o.status)}>{o.status}</span>
                  </span>
                  <span>{o.total}</span>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between border border-[#e5e5e5] p-9">
              <div>
                <h2 className="text-2xl font-semibold">Default address</h2>
                <p className="mt-2 text-xl text-[#555]">
                  [Street], [City], [Postcode]
                </p>
              </div>
              <Link
                href="/account/addresses"
                className="border border-[#d4d4d4] px-6 py-4 text-lg"
              >
                Manage
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
