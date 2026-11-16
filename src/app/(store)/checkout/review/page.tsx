"use client";
import Link from "next/link";
import { useState } from "react";
import { CheckoutSteps } from "@/components/checkout/checkout-steps";
import { ReviewCard } from "@/components/checkout/review-card";
import { OrderSummary } from "@/components/store/order-summary";

export default function CheckoutReviewPage() {
  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <CheckoutSteps current={5} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_400px]">
        <div>
          <h1 className="text-5xl font-semibold tracking-tight">
            Review your order
          </h1>
          <div className="mt-8 space-y-5">
            <ReviewCard
              title="Contact"
              value="you@example.com"
              href="/checkout/info"
            />
            <ReviewCard
              title="Ship to"
              value="[Name], [Street], [City], [Postcode]"
              href="/checkout/address"
            />
            <ReviewCard
              title="Shipping"
              value="Standard · 3–5 business days"
              href="/checkout/shipping"
            />
            <ReviewCard
              title="Payment"
              value="Cryptocurrency"
              href="/checkout/payment"
            />
          </div>

          <label className="mt-6 flex items-center gap-3 text-xl">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-5 w-5"
            />
            <span>
              I agree to the{" "}
              <Link href="/terms" className="underline">
                Terms
              </Link>{" "}
              and confirm I am of legal age.
            </span>
          </label>

          <div className="mt-12 flex items-center justify-between">
            <Link href="/checkout/payment" className="text-xl underline">
              Back
            </Link>
            {/* TODO: call the checkout server action, then redirect to /pay/[orderId] */}
            <Link
              href="/pay/10482"
              aria-disabled={!agreed}
              onClick={(e) => {
                if (!agreed) e.preventDefault();
              }}
              className={`bg-[#111] px-10 py-5 text-xl text-white ${agreed ? "" : "opacity-40"}`}
            >
              Place order and pay
            </Link>
          </div>
        </div>

        <div className="self-start">
          <OrderSummary
            title="Order summary"
            lines={[
              ["Nic Salt 30ml × 1", 12],
              ["Pod Device Kit × 1", 34],
            ]}
            subtotal={46}
            shipping={4.99}
            total={50.99}
          />
        </div>
      </div>
    </>
  );
}
