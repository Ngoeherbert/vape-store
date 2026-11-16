"use client";
import { money } from "@/components/store/product-card";

export type ShippingOption = { id: string; name: string; eta: string; price: number };

export function ShippingOptions({ options, value, onChange }: { options: ShippingOption[]; value: string; onChange: (id: string) => void }) {
  return (
    <fieldset className="mt-8 space-y-4">
      <legend className="sr-only">Shipping method</legend>
      {options.map((o) => (
        <label
          key={o.id}
          className={`flex cursor-pointer items-start gap-4 px-8 py-7 ${o.id === value ? "border-2 border-[#111]" : "border border-[#d4d4d4]"}`}
        >
          <input type="radio" name="shipping" value={o.id} checked={o.id === value} onChange={() => onChange(o.id)} className="mt-1.5 h-5 w-5" />
          <span className="flex-1">
            <span className="block text-xl">{o.name}</span>
            <span className="mt-1 block text-lg text-[#555]">{o.eta}</span>
          </span>
          <span className="text-xl">{money(o.price)}</span>
        </label>
      ))}
    </fieldset>
  );
}