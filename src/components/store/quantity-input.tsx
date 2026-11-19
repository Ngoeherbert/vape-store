"use client";

export function QuantityInput({
  value,
  onChange,
  min = 1,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
}) {
  return (
    <div className="inline-flex h-14 items-center border border-line">
      <button
        type="button"
        aria-label="Decrease"
        className="px-4"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        –
      </button>
      <span className="w-6 text-center">{value}</span>
      <button
        type="button"
        aria-label="Increase"
        className="px-4"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
