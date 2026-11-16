"use client";
import Link from "next/link";
import { useState } from "react";

const tabs = ["Orders", "Payment", "Shipping", "Products"];

// Only the Orders tab is shown in the mockup; add questions for the other tabs as needed.
const faqs: Record<string, { q: string; a: string }[]> = {
  Orders: [
    { q: "How do I pay with crypto?", a: "Choose Cryptocurrency at checkout, pick your coin and send the exact amount to the address shown before the timer ends." },
    { q: "How long do payments take to confirm?", a: "[ANSWER]" },
    { q: "Do you need ID to order?", a: "[ANSWER]" },
    { q: "When will my order arrive?", a: "[ANSWER]" },
    { q: "Can I return an opened product?", a: "[ANSWER]" },
  ],
  Payment: [],
  Shipping: [],
  Products: [],
};

export default function FaqPage() {
  const [tab, setTab] = useState("Orders");
  const items = faqs[tab];

  return (
    <div className="mx-auto max-w-[1000px]">
      <nav className="text-lg text-[#555]">Home / FAQ</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">Frequently asked questions</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button key={t} type="button" aria-pressed={t === tab} onClick={() => setTab(t)}
            className={`border px-6 py-3.5 text-lg ${t === tab ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}>{t}</button>
        ))}
      </div>

      <div className="mt-8 border-t border-[#e5e5e5]">
        {items.map((f, i) => (
          <details key={f.q} open={i === 0} className="border-b border-[#e5e5e5] py-6">
            <summary className="cursor-pointer text-xl">{f.q}</summary>
            <p className="mt-4 text-xl leading-8 text-[#555]">{f.a}</p>
          </details>
        ))}
        {items.length === 0 && <p className="border-b border-[#e5e5e5] py-8 text-xl text-[#555]">No questions in this category yet.</p>}
      </div>

      <div className="mt-14 flex items-center justify-between border border-[#e5e5e5] p-9">
        <p className="text-xl">Still need help?</p>
        <Link href="/contact" className="border border-[#d4d4d4] px-6 py-4 text-lg">Contact us</Link>
      </div>
    </div>
  );
}