import Link from "next/link";
import { PaymentStatusTimeline } from "@/components/payments/payment-status-timeline";

const others = [
  {
    badge: "Confirming",
    dark: false,
    text: "Payment seen. Waiting for 2 of 3 network confirmations.",
  },
  {
    badge: "Partially paid",
    dark: false,
    text: "We received 30.00 of 50.99 USDT. Send the remaining 20.99 USDT.",
    action: { label: "View address", href: "../", primary: true },
  },
  {
    badge: "Paid",
    dark: true,
    text: "Payment confirmed. Thank you.",
    action: { label: "Continue", href: "/order/confirmation", primary: true },
  },
  {
    badge: "Expired",
    dark: false,
    text: "The payment window has closed.",
    action: { label: "Try again", href: "/checkout/payment", primary: false },
  },
  {
    badge: "Failed",
    dark: false,
    text: "Something went wrong. No funds were taken by us.",
    action: { label: "Contact support", href: "/contact", primary: false },
  },
];

export default async function PaymentStatusPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = await params;
  // TODO: poll via usePaymentStatus() (or SSE) and render the real state; static mock for now.

  return (
    <div className="mx-auto max-w-[950px]">
      <p className="text-[15px] uppercase tracking-wider text-[#555]">
        Order #{orderId}
      </p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight">
        Waiting for your payment
      </h1>
      <p className="mt-4 text-xl text-[#555]">
        We will update this page automatically.
      </p>

      <div className="mt-12">
        <PaymentStatusTimeline
          steps={[
            { label: "Order created", state: "done" },
            { label: "Waiting for payment", state: "now" },
            { label: "Confirming on network", state: "next" },
            { label: "Paid", state: "next" },
          ]}
        />
      </div>

      <h2 className="mt-16 text-2xl font-semibold">Other possible states</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {others.map((s) => (
          <section key={s.badge} className="border border-[#e5e5e5] p-9">
            <span
              className={`inline-block border px-3 py-1.5 text-[15px] ${s.dark ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}
            >
              {s.badge}
            </span>
            <p className="mt-4 text-xl text-[#555]">{s.text}</p>
            {s.action && (
              <Link
                href={s.action.href}
                className={`mt-5 inline-block px-6 py-4 text-lg ${s.action.primary ? "bg-[#111] text-white" : "border border-[#d4d4d4]"}`}
              >
                {s.action.label}
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
