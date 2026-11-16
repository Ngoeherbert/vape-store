"use client";
import { useState } from "react";

export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try { await navigator.clipboard.writeText(value); setDone(true); setTimeout(() => setDone(false), 1500); } catch {}
      }}
      className="h-14 min-w-[98px] border border-[#d4d4d4] px-6 text-lg"
    >
      {done ? "Copied" : label}
    </button>
  );
}