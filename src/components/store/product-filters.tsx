"use client";

import { useState } from "react";
import { flavors, nicotineStrengths, vgPgRatios } from "@/lib/mock-data";

const brandOptions = ["Brand A", "Brand B", "Brand C"];

function Group({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <fieldset className="mt-9 first:mt-0">
      <legend className="mb-3 font-semibold">{title}</legend>
      {children}
    </fieldset>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2 text-lg">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="size-4 accent-ink"
      />
      {label}
    </label>
  );
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-4 py-2.5 text-base ${
        active ? "border-ink bg-ink text-canvas" : "border-line hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}

function toggle(list: string[], value: string) {
  return list.includes(value)
    ? list.filter((v) => v !== value)
    : [...list, value];
}

export function ProductFilters() {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [strengths, setStrengths] = useState<string[]>(["6mg"]);
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);
  const [ratios, setRatios] = useState<string[]>([]);
  const [inStock, setInStock] = useState(true);

  function clear() {
    setMin("");
    setMax("");
    setBrands([]);
    setStrengths([]);
    setSelectedFlavors([]);
    setRatios([]);
    setInStock(false);
  }

  return (
    <aside aria-label="Filters" className="w-full">
      <Group title="Price">
        <div className="flex items-center gap-3">
          <input
            inputMode="decimal"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="h-14 w-full min-w-0 border border-line px-4 text-lg outline-none focus:border-ink"
          />
          <span aria-hidden>–</span>
          <input
            inputMode="decimal"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="h-14 w-full min-w-0 border border-line px-4 text-lg outline-none focus:border-ink"
          />
        </div>
      </Group>

      <Group title="Brand">
        {brandOptions.map((b) => (
          <Check
            key={b}
            label={b}
            checked={brands.includes(b)}
            onChange={() => setBrands(toggle(brands, b))}
          />
        ))}
      </Group>

      <Group title="Nicotine strength">
        <div className="flex flex-wrap gap-3">
          {nicotineStrengths.map((s) => (
            <Chip
              key={s}
              label={s}
              active={strengths.includes(s)}
              onClick={() => setStrengths(toggle(strengths, s))}
            />
          ))}
        </div>
      </Group>

      <Group title="Flavor">
        {flavors.map((f) => (
          <Check
            key={f}
            label={f}
            checked={selectedFlavors.includes(f)}
            onChange={() => setSelectedFlavors(toggle(selectedFlavors, f))}
          />
        ))}
      </Group>

      <Group title="VG / PG ratio">
        <div className="flex flex-wrap gap-3">
          {vgPgRatios.map((r) => (
            <Chip
              key={r}
              label={r}
              active={ratios.includes(r)}
              onClick={() => setRatios(toggle(ratios, r))}
            />
          ))}
        </div>
      </Group>

      <div className="mt-8">
        <Check
          label="In stock only"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />
      </div>

      <button
        type="button"
        onClick={clear}
        className="mt-6 h-14 w-full border border-line text-lg hover:border-ink btn-secondary"
      >
        Clear filters
      </button>
    </aside>
  );
}
