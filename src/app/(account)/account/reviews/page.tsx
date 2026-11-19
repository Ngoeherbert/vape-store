"use client";
import { useState } from "react";

const initial = [
  { id: "r1", product: "Nic Salt 30ml · Mint", rating: 5, text: "Smooth and clean. Will order again.", status: "Published" },
  { id: "r2", product: "Pod Device Kit", rating: 4, text: "Good battery life, pods fit well.", status: "Pending" },
];

export default function MyReviewsPage() {
  const [reviews, setReviews] = useState(initial);

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">My reviews</h1>
      <div className="mt-14 space-y-6">
        {reviews.map((r) => (
          <article key={r.id} className="card">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl">{r.product}</h2>
              <span className={`border px-3 py-1.5 text-[15px] ${r.status === "Published" ? "border-ink bg-ink text-canvas" : "border-line"}`}>
                {r.status}
              </span>
            </div>
            <p className="mt-3 text-2xl" aria-label={`${r.rating} out of 5`}>
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </p>
            <p className="mt-3 text-xl text-muted">{r.text}</p>
            <div className="mt-3 flex gap-5 text-lg">
              <button type="button" className="underline">Edit</button>
              <button
                type="button"
                className="underline"
                onClick={() => setReviews((a) => a.filter((x) => x.id !== r.id))}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </div>

      <h2 className="mt-14 text-3xl font-semibold">Waiting for your review</h2>
      <div className="mt-8 flex items-center gap-5 border border-line p-9">
        <div className="flex h-[88px] w-[88px] shrink-0 items-center justify-center bg-soft text-muted">
          Img
        </div>
        <p className="flex-1 text-2xl">Mod Starter Kit</p>
        <button type="button" className="border border-line px-6 py-4 text-lg hover:border-ink">
          Write review
        </button>
      </div>
    </div>
  );
}
