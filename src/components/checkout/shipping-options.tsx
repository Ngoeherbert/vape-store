"use client";

export type ShippingOption = {
  id: string;
  name: string;
  eta: string;
  price: number;
};

export function ShippingOptions({
  options,
  value,
  onChange,
}: {
  options: ShippingOption[];
  value: string;
  onChange: (id: string) => void;
}) {
    return (
      <div className="space-y-3">
      {options.map((o) => (
        <label
          key={o.id}
          className="check"
          onClick={() => onChange(o.id)}
        >
          <input
            type="radio"
            name="shipping"
            value={o.id}
            checked={value === o.id}
            onChange={() => onChange(o.id)}
          />
          <div>
            <p className="text-lg">{o.name}</p>
            <p className="mt-1 text-muted">{o.eta}</p>
          </div>
          <span className="ml-auto text-ink">
            ${o.price.toFixed(2)}
          </span>
        </label>
      ))}
    </div>
  );
}
