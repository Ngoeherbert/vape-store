"use client";

export type PaymentMethod = { id: string; name: string; desc: string };

export function PaymentMethods({ methods, value, onChange }: { methods: PaymentMethod[]; value: string; onChange: (id: string) => void }) {
  return (
    <fieldset className="mt-8 space-y-4">
      <legend className="sr-only">Payment method</legend>
      {methods.map((m) => (
        <label
          key={m.id}
          className={`flex cursor-pointer items-start gap-4 px-8 py-7 ${m.id === value ? "border-2 border-[#111]" : "border border-[#d4d4d4]"}`}
        >
          <input type="radio" name="payment" value={m.id} checked={m.id === value} onChange={() => onChange(m.id)} className="mt-1.5 h-5 w-5" />
          <span>
            <span className="block text-xl">{m.name}</span>
            <span className="mt-1 block text-lg text-[#555]">{m.desc}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
}