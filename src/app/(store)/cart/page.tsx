"use client";
import Link from "next/link";
import { useState } from "react";
import { CartLine, type CartItem } from "@/components/store/cart-line";
import { OrderSummary } from "@/components/store/order-summary";

const initial: CartItem[] = [
  {
    id: "nic-salt",
    name: "Nic Salt 30ml",
    variant: "Mint · 20mg · 30ml",
    price: 12,
    qty: 1,
  },
  {
    id: "pod-kit",
    name: "Pod Device Kit",
    variant: "Matte black",
    price: 34,
    qty: 1,
  },
];

export default function CartPage() {
  const [items, setItems] = useState(initial);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <h1 className="text-5xl font-semibold tracking-tight">Your cart</h1>
      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          {items.map((i) => (
            <CartLine
              key={i.id}
              item={i}
              onQty={(qty) =>
                setItems((a) =>
                  a.map((x) => (x.id === i.id ? { ...x, qty } : x)),
                )
              }
              onRemove={() => setItems((a) => a.filter((x) => x.id !== i.id))}
            />
          ))}
          <div className="border-t border-[#e5e5e5] pt-8">
            <Link href="/products" className="text-xl underline">
              Continue shopping
            </Link>
          </div>
        </div>

        <OrderSummary subtotal={subtotal} shipping="Calculated next">
          <label className="mt-6 block text-[#555]">
            Discount code
            <div className="mt-2 flex gap-2">
              <input
                placeholder="Enter code"
                className="h-[68px] min-w-0 flex-1 border border-[#d4d4d4] px-5 text-lg"
              />
              <button
                type="button"
                className="border border-[#d4d4d4] px-7 text-lg text-[#111]"
              >
                Apply
              </button>
            </div>
          </label>
          <Link
            href="/checkout/info"
            className="mt-8 block bg-[#111] py-5 text-center text-xl text-white"
          >
            Checkout
          </Link>
        </OrderSummary>
      </div>
    </>
  );
}
