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
  { id: "r1", product: "Nic Salt 30ml · Mint", rating: 5, text: "Smooth and clean. Will order again.", status: "Published" },
  { id: "r2", product: "Pod Device Kit", rating: 4, text: "Good battery life, pods fit well.", status: "Pending" },
];

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState(initial);

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">My reviews</h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <div>
            <div className="space-y-6">
              {reviews.map((r) => (
                <article key={r.id} className="border border-[#e5e5e5] p-9">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl">{r.product}</h2>
                    <span className={`border px-3 py-1.5 text-[15px] ${r.status === "Published" ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}>{r.status}</span>
                  </div>
                  <p className="mt-3 text-2xl" aria-label={`${r.rating} out of 5`}>{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</p>
                  <p className="mt-3 text-xl text-[#555]">{r.text}</p>
                  <div className="mt-3 flex gap-5 text-lg">
                    <button type="button" className="underline">Edit</button>
                    <button type="button" className="underline" onClick={() => setReviews((a) => a.filter((x) => x.id !== r.id))}>Delete</button>
                  </div>
                </article>
              ))}
            </div>

            <h2 className="mt-14 text-3xl font-semibold">Waiting for your review</h2>
            <div className="mt-8 flex items-center gap-5 border border-[#e5e5e5] p-9">
              <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center bg-[#f1f1f1] text-[#555]">Img</div>
              <p className="flex-1 text-2xl">Mod Starter Kit</p>
              <button type="button" className="border border-[#d4d4d4] px-6 py-4 text-lg">Write review</button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}