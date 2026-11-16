"use client";
import { useState } from "react";

const label = "block text-[15px] text-[#555]";
const input =
  "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg placeholder:text-[#999]";

// Mock result. Replace with a lookup by order number + email.
const mock = {
  id: "10482",
  status: "Shipped",
  steps: [
    { label: "Order placed · 9 Nov", done: true },
    { label: "Payment confirmed · 9 Nov", done: true },
    { label: "Shipped · 10 Nov", done: true },
    { label: "Delivered", done: false },
  ],
};

export default function TrackOrderPage() {
  const [result, setResult] = useState<typeof mock | null>(mock);

  return (
    <div className="mx-auto max-w-[920px]">
      <h1 className="text-5xl font-semibold tracking-tight">Track my order</h1>
      <p className="mt-4 text-xl text-[#555]">
        No account needed. Enter your order number and email.
      </p>

      <form
        className="mt-10 border border-[#e5e5e5] p-9"
        onSubmit={(e) => {
          e.preventDefault();
          /* TODO: look up the order */ setResult(mock);
        }}
      >
        <label className={label}>
          Order number
          <input name="order" required placeholder="#10482" className={input} />
        </label>
        <label className={`${label} mt-6`}>
          Email
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            className={input}
          />
        </label>
        <button
          type="submit"
          className="mt-6 h-[68px] w-full bg-[#111] text-xl text-white"
        >
          Track
        </button>
      </form>

      {result && (
        <section className="mt-10 border border-[#e5e5e5] p-9">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl">Order #{result.id}</h2>
            <span className="border border-[#d4d4d4] px-4 py-2 text-base">
              {result.status}
            </span>
          </div>
          <ol className="mt-6">
            {result.steps.map((s) => (
              <li
                key={s.label}
                className="flex items-center gap-4 border-b border-[#e5e5e5] py-4 last:border-b-0"
              >
                <span
                  className={`border px-3 py-1.5 text-[15px] ${s.done ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}
                >
                  {s.done ? "Done" : "Next"}
                </span>
                <span className={`text-xl ${s.done ? "" : "text-[#777]"}`}>
                  {s.label}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
