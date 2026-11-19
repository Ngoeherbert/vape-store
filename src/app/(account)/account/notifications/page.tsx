"use client";
import { useState } from "react";
import { btnPrimary } from "@/lib/utils";

const options = [
  { key: "orders", title: "Order updates", desc: "Payment, shipping and delivery" },
  { key: "stock", title: "Back in stock", desc: "Items on your wishlist" },
  { key: "offers", title: "Offers and news", desc: "Occasional email, unsubscribe any time" },
  { key: "sms", title: "SMS alerts", desc: "Delivery updates by text" },
];

export default function NotificationsPage() {
  const [prefs, setPrefs] = useState<Record<string, boolean>>({ orders: true, stock: true, offers: false, sms: false });

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">Notifications</h1>
      <form className="mt-14 max-w-[1000px]" onSubmit={(e) => { e.preventDefault(); /* TODO: save notification preferences */ }}>
        <div className="card">
          {options.map((o) => (
            <label key={o.key} className="flex cursor-pointer items-center justify-between border-b border-line px-8 py-6 last:border-b-0">
              <span>
                <span className="block text-2xl">{o.title}</span>
                <span className="mt-1 block text-lg text-muted">{o.desc}</span>
              </span>
              <input
                type="checkbox"
                checked={prefs[o.key]}
                onChange={(e) => setPrefs((p) => ({ ...p, [o.key]: e.target.checked }))}
                className="h-5 w-5"
              />
            </label>
          ))}
        </div>
        <button type="submit" className={btnPrimary}>
          Save preferences
        </button>
      </form>
    </div>
  );
}
