import Link from "next/link";

const recent = [
  { id: "10482", date: "9 Nov 2026", status: "Processing", total: "$50.99" },
  { id: "10391", date: "28 Oct 2026", status: "Delivered", total: "$32.00" },
];

const badge = (s: string) =>
  `inline-block border px-3 py-1.5 text-[15px] ${s === "Delivered" || s === "Verified" ? "border-ink bg-ink text-canvas" : "border-line"}`;

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">My account</h1>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="card">
          <p className="text-muted">Orders</p>
          <p className="mt-2 text-5xl font-semibold">7</p>
        </div>
        <div className="card">
          <p className="text-muted">Wishlist</p>
          <p className="mt-2 text-5xl font-semibold">5</p>
        </div>
        <div className="card">
          <p className="text-muted">Age verification</p>
          <span className={`mt-3 ${badge("Verified")}`}>Verified</span>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Recent orders</h2>
        <Link href="/account/orders" className="text-lg underline">
          View all
        </Link>
      </div>
      <div className="mt-6 border border-line">
        {recent.map((o) => (
          <Link
            key={o.id}
            href={`/account/orders/${o.id}`}
            className="grid grid-cols-[1fr_1.2fr_1.2fr_auto] items-center border-b border-line px-6 py-5 text-xl last:border-b-0"
          >
            <span>#{o.id}</span>
            <span className="text-muted">{o.date}</span>
            <span>
              <span className={badge(o.status)}>{o.status}</span>
            </span>
            <span>{o.total}</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border border-line p-9">
        <div>
          <h2 className="text-2xl font-semibold">Default address</h2>
          <p className="mt-2 text-xl text-muted">
            [Street], [City], [Postcode]
          </p>
        </div>
        <Link
          href="/account/addresses"
          className="border border-line px-6 py-4 text-lg hover:border-ink"
        >
          Manage
        </Link>
      </div>
    </div>
  );
}
