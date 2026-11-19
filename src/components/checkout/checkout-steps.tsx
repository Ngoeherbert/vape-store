"use client";
import Link from "next/link";

const steps = [
  { label: "Customer", href: "/checkout/info", current: 1 },
  { label: "Address", href: "/checkout/address", current: 2 },
  { label: "Shipping", href: "/checkout/shipping", current: 3 },
  { label: "Payment", href: "/checkout/payment", current: 4 },
  { label: "Review", href: "/checkout/review", current: 5 },
];

export function CheckoutSteps({ current }: { current: number }) {
  return (
    <ol className="steps">
      {steps.map((s) => {
        const active = s.current === current;
        const done = s.current < current;
        return (
          <li key={s.label}>
            <Link
              href={s.href}
              aria-current={active ? "step" : undefined}
              className={done ? "text-ink font-semibold" : "text-muted"}
            >
              {s.label}
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
