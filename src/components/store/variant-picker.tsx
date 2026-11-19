"use client";

export function VariantPicker({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="mt-8">
      <legend className="mb-2 text-sm text-muted">{label}</legend>
      <div className="flex flex-wrap gap-3">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={o === value}
            onClick={() => onChange(o)}
            className={`border px-4 py-2.5 text-[15px] ${o === value ? "border-ink bg-ink text-canvas" : "border-[#d4d4d4] bg-canvas"}`}
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
