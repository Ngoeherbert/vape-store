"use client";
import Link from "next/link";
import { useState } from "react";
import { CheckoutSteps } from "@/components/checkout/checkout-steps";
import {
  PaymentMethods,
  type PaymentMethod,
} from "@/components/checkout/payment-methods";
import { OrderSummary } from "@/components/store/order-summary";

const methods: PaymentMethod[] = [
  {
    id: "crypto",
    name: "Cryptocurrency",
    desc: "Pay with BTC, ETH, USDT, LTC and more",
  },
  { id: "other", name: "Other method", desc: "[ADD YOUR METHOD]" },
];

export default function CheckoutPaymentPage() {
  const [method, setMethod] = useState("crypto");

  return (
    <div className="page pt-14 pb-24">
      <CheckoutSteps current={4} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-h1">Payment method</h1>
          <PaymentMethods
            methods={methods}
            value={method}
            onChange={setMethod}
          />
          <p className="mt-6 text-lg text-muted">
            You will choose your coin on the next step after reviewing your
            order.
          </p>
          <div className="mt-12 flex items-center justify-between">
            <Link href="/checkout/shipping" className="text-xl underline">
              Back
            </Link>
            <Link
              href="/checkout/review"
              className="bg-ink px-10 py-5 text-xl text-canvas"
            >
              Review order
            </Link>
          </div>
        </div>
        <div className="self-start">
          <OrderSummary
            title="Summary"
            subtotal={46}
            shipping={4.99}
            total={50.99}
          />
        </div>
      </div>
    </div>
  );
}
