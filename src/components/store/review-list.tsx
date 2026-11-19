export type Review = { rating: number; title: string; body: string };

export function ReviewList({ reviews }: { reviews: Review[] }) {
  return (
    <div className="max-w-[740px] space-y-4">
      {reviews.map((r, i) => (
        <article key={i} className="border border-line px-6 py-5">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">
              <span aria-label={`${r.rating} out of 5`}>
                {"★".repeat(r.rating)}
                {"☆".repeat(5 - r.rating)}
              </span>{" "}
              {r.title}
            </h3>
            <span className="text-sm text-muted">Verified buyer</span>
          </div>
          <p className="mt-3 text-muted">{r.body}</p>
        </article>
      ))}
    </div>
  );
}
