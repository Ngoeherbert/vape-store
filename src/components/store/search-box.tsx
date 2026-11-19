"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { suggestions } from "@/lib/mock-data";

export function SearchBox({ initialQuery = "" }: { initialQuery?: string }) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(initialQuery.length > 0);

  function go(q: string) {
    const trimmed = q.trim();
    if (!trimmed) return;
    setQuery(trimmed);
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        go(query);
      }}
      className="relative max-w-3xl"
    >
      <label htmlFor="search" className="block text-muted">
        Search
      </label>
      <input
        id="search"
        type="search"
        autoComplete="off"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(e.target.value.length > 0);
        }}
        onFocus={() => setOpen(query.length > 0)}
        className="mt-3 h-16 w-full border border-line px-5 text-2xl outline-none focus:border-ink"
      />
      {open && (
        <div className="absolute left-0 right-0 z-10 mt-3 border border-line bg-canvas px-6 py-6 shadow-lg">
          <p className="text-sm uppercase tracking-widest text-muted">
            Suggestions
          </p>
          <ul className="mt-5 space-y-6">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => go(s)}
                  className="text-xl hover:underline"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
