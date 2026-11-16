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

const initial = [
  {
    id: "pod-device-kit",
    name: "Pod Device Kit",
    price: "$34.00",
    inStock: true,
  },
  {
    id: "nic-salt-30ml-mint",
    name: "Nic Salt 30ml · Mint",
    price: "$12.00",
    inStock: true,
  },
  {
    id: "mod-starter-kit",
    name: "Mod Starter Kit",
    price: "$58.00",
    inStock: false,
  },
];

const outline = "border border-[#d4d4d4] px-6 py-4 text-lg";

export default function WishlistPage() {
  const [items, setItems] = useState(initial);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">Wishlist</h1>
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

          <div className="grid gap-6 md:grid-cols-3">
            {items.map((i) => (
              <article key={i.id} className="border border-[#e5e5e5] p-8">
                <div className="flex aspect-square items-center justify-center bg-[#f1f1f1] text-[#555]">
                  Image
                </div>
                <h2 className="mt-6 text-xl">{i.name}</h2>
                <p className="mt-1 text-lg text-[#555]">{i.price}</p>
                {!i.inStock && (
                  <span className="mt-3 inline-block border border-[#d4d4d4] px-3 py-1.5 text-[15px]">
                    Out of stock
                  </span>
                )}
                <div className="mt-4 flex gap-3">
                  {i.inStock ? (
                    <button
                      type="button"
                      className="bg-[#111] px-6 py-4 text-lg text-white"
                    >
                      Add to cart
                    </button>
                  ) : (
                    <button type="button" className={outline}>
                      Notify me
                    </button>
                  )}
                  <button
                    type="button"
                    className={outline}
                    onClick={() =>
                      setItems((a) => a.filter((x) => x.id !== i.id))
                    }
                  >
                    Remove
                  </button>
                </div>
              </article>
            ))}
            {items.length === 0 && (
              <p className="text-xl text-[#555]">
                Your wishlist is empty.{" "}
                <Link href="/products" className="underline">
                  Browse products
                </Link>
              </p>
            )}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
