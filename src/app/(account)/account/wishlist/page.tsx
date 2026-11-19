"use client";
import Link from "next/link";
import { useState } from "react";

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
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">Wishlist</h1>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((i) => (
          <article key={i.id} className="card">
            <div className="flex aspect-square items-center justify-center bg-soft text-muted">
              Image
            </div>
            <h2 className="mt-6 text-xl">{i.name}</h2>
            <p className="mt-1 text-lg text-muted">{i.price}</p>
            {!i.inStock && (
              <span className="mt-3 inline-block border border-line px-3 py-1.5 text-[15px]">
                Out of stock
              </span>
            )}
            <div className="mt-4 flex gap-3">
              {i.inStock ? (
                <button type="button" className="bg-ink px-6 py-4 text-lg text-canvas">
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
          <p className="text-xl text-muted">
            Your wishlist is empty.{" "}
            <Link href="/products" className="underline">
              Browse products
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
