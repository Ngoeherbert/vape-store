"use client";
import Link from "next/link";
import { btnOutline } from "@/lib/utils";

export type PaymentMethod = {
  id: string;
  name: string;
  desc: string;
};

export function PaymentMethods({
  methods,
  value,
  onChange,
}: {
  methods: PaymentMethod[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      {methods.map((m) => (
        <label key={m.id} className="chip" onClick={() => onChange(m.id)}>
          <input
            type="radio"
            name="payment"
            value={m.id}
            checked={value === m.id}
            onChange={() => onChange(m.id)}
            aria-hidden
          />
          {m.id === value ? "●" : "○"}
          <div>
            <p className="text-lg">{m.name}</p>
            <p className="mt-1 text-muted">{m.desc}</p>
          </div>
        </label>
      ))}
      <p className="mt-4 text-sm text-muted">
        Not your method?{" "}
        <Link href="/contact" className={btnOutline}>
          Contact support
        </Link>
      </p>
    </div>
  );
}
