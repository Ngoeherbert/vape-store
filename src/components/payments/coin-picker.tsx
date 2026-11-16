"use client";

export function CoinPicker({ coins, value, onChange }: { coins: { id: string; label: string }[]; value: string; onChange: (id: string) => void }) {
  return (
    <div>
      <p className="text-[#555]">Select coin</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {coins.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-pressed={c.id === value}
            onClick={() => onChange(c.id)}
            className={`border px-6 py-4 text-lg ${c.id === value ? "border-[#111] bg-[#111] text-white" : "border-[#d4d4d4]"}`}
          >
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}