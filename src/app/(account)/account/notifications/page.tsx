"use client";
import Link from "next/link";
import { useState } from "react";
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

const options = [
  { key: "orders", title: "Order updates", desc: "Payment, shipping and delivery" },
  { key: "stock", title: "Back in stock", desc: "Items on your wishlist" },
  { key: "offers", title: "Offers and news", desc: "Occasional email, unsubscribe any time" },
  { key: "sms", title: "SMS alerts", desc: "Delivery updates by text" },
];

export default function NotificationsPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({ orders: true, stock: true, offers: false, sms: false });

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">Notifications</h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <form className="max-w-[1000px]" onSubmit={(e) => { e.preventDefault(); /* TODO: save notification preferences */ }}>
            <div className="border border-[#e5e5e5]">
              {options.map((o) => (
                <label key={o.key} className="flex cursor-pointer items-center justify-between border-b border-[#e5e5e5] px-8 py-6 last:border-b-0">
                  <span>
                    <span className="block text-2xl">{o.title}</span>
                    <span className="mt-1 block text-lg text-[#555]">{o.desc}</span>
                  </span>
                  <input type="checkbox" checked={prefs[o.key]} onChange={(e) => setPrefs((p) => ({ ...p, [o.key]: e.target.checked }))} className="h-5 w-5" />
                </label>
              ))}
            </div>
            <button type="submit" className="mt-8 bg-[#111] px-9 py-5 text-xl text-white">Save preferences</button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}