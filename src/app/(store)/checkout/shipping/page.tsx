"use client";
import Link from "next/link";
import { useState } from "react";
import { CheckoutSteps } from "@/components/checkout/checkout-steps";
import {
  ShippingOptions,
  type ShippingOption,
} from "@/components/checkout/shipping-options";
import { OrderSummary } from "@/components/store/order-summary";

const options: ShippingOption[] = [
  { id: "standard", name: "Standard", eta: "3–5 business days", price: 4.99 },
  { id: "express", name: "Express", eta: "1–2 business days", price: 9.99 },
  {
    id: "pickup",
    name: "Pickup point",
    eta: "Collect nearby, ready in 2 days",
    price: 2.99,
  },
];

export default function CheckoutShippingPage() {
  const [method, setMethod] = useState("standard");
  const subtotal = 46;
  const shipping = options.find((o) => o.id === method)!.price;

  return (
    <div className="page pt-14 pb-24">
      <CheckoutSteps current={3} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-h1">Shipping method</h1>
          <ShippingOptions
            options={options}
            value={method}
            onChange={setMethod}
          />
          <p className="mt-6 text-lg text-muted">
            Adult signature required on delivery.
          </p>
          <div className="mt-12 flex items-center justify-between">
            <Link href="/checkout/address" className="text-xl underline">
              Back
            </Link>
            <Link
              href="/checkout/payment"
              className="bg-ink px-10 py-5 text-xl text-canvas"
            >
              Continue to payment
            </Link>
          </div>
        </div>
        <div className="self-start">
          <OrderSummary
            title="Summary"
            subtotal={subtotal}
            shipping={shipping}
            total={subtotal + shipping}
          />
        </div>
      </div>
    </div>
  );
}
