"use client";
import { useState } from "react";

const optional = [
  { key: "analytics", title: "Analytics", desc: "Anonymous usage statistics" },
  { key: "marketing", title: "Marketing", desc: "Personalised offers" },
];

export default function CookiesPage() {
  const [choices, setChoices] = useState<Record<string, boolean>>({ analytics: false, marketing: false });

  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Cookie policy</nav>
      <h1 className="mt-10 text-h1">Cookie policy</h1>
      <p className="mt-10 text-lg text-muted">Last updated [DATE]</p>

      <h2 className="mt-10 text-2xl font-semibold">Cookies we use</h2>
      <p className="mt-2 text-xl leading-8 text-muted">We use a small number of cookies to keep the site working and understand how it is used.</p>

      <form onSubmit={(e) => { e.preventDefault(); /* TODO: persist consent choices in a cookie */ }}>
        <div className="mt-8 border border-line">
          <div className="flex items-center justify-between border-b border-line px-8 py-6">
            <div><p className="text-2xl">Essential</p><p className="mt-1 text-lg text-muted">Cart, login and age gate</p></div>
            <span className="border border-[#d4d4d4] px-3 py-1.5 text-[15px]">Always on</span>
          </div>
          {optional.map((o) => (
            <label key={o.key} className="flex cursor-pointer items-center justify-between border-b border-line px-8 py-6 last:border-b-0">
              <span><span className="block text-2xl">{o.title}</span><span className="mt-1 block text-lg text-muted">{o.desc}</span></span>
              <input type="checkbox" checked={choices[o.key]} onChange={(e) => setChoices((c) => ({ ...c, [o.key]: e.target.checked }))} className="mr-1 h-5 w-5" />
            </label>
          ))}
        </div>
        <button type="submit" className="mt-8 bg-ink px-9 py-5 text-xl text-canvas">Save choices</button>
      </form>
    </div>
  );
}