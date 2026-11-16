import Link from "next/link";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  // TODO: load the real order (payment, delivery, total, email) from the database.

  const rows = [
    ["Order number", `#${orderId}`],
    ["Payment", "50.99 USDT · Paid"],
    ["Delivery", "Standard · 3–5 business days"],
  ];

  return (
    <div className="mx-auto max-w-[920px] pt-6 text-center">
      <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[#111]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        </svg>
      </div>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">
        Thank you for your order
      </h1>
      <p className="mt-5 text-xl text-[#555]">
        Order #{orderId} is confirmed. We have sent a receipt to
        you@example.com.
      </p>

      <dl className="mt-12 border border-[#e5e5e5] p-9 text-left text-xl">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-2.5">
            <dt className="text-[#555]">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
        <div className="mt-4 flex justify-between border-t border-[#e5e5e5] pt-6 font-semibold">
          <dt>Total</dt>
          <dd>$50.99</dd>
        </div>
      </dl>

      <div className="mt-12 flex justify-center gap-4">
        <Link
          href={`/account/orders/${orderId}`}
          className="bg-[#111] px-9 py-5 text-xl text-white"
        >
          View order
        </Link>
        <Link
          href="/products"
          className="border border-[#d4d4d4] px-9 py-5 text-xl"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
