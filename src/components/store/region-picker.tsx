"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { GateCard } from "@/components/shared/gate-card";
import { btnPrimary } from "@/lib/utils";
import { REGION_COOKIE, countries, isBlocked, setCookie } from "@/lib/region";

const select =
  "mt-2 h-[44px] w-full rounded-[3px] border border-[#ccc] bg-canvas px-3 text-[17px] text-ink focus-visible:outline-2 focus-visible:outline-ink";

export function RegionPicker() {
  const router = useRouter();
  const id = useId();
  const [country, setCountry] = useState(countries[0].code);
  const [region, setRegion] = useState("");
  const [error, setError] = useState("");

  const regions = countries.find((c) => c.code === country)?.regions ?? [];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!region) return setError("Select your region to continue.");
    setCookie(REGION_COOKIE, `${country}:${region}`);
    router.replace(isBlocked(country, region) ? "/blocked" : "/");
  }

  return (
    <GateCard align="left">
      <h1 className="text-[32px] font-semibold leading-tight text-ink">
        Where are you shipping to?
      </h1>
      <p className="mt-3 text-[17px] leading-[1.5] text-muted">
        Shipping rules and product availability depend on your location.
      </p>
      <form onSubmit={submit} className="mt-8">
        <label
          htmlFor={`${id}-country`}
          className="block text-[15px] text-muted"
        >
          Country
        </label>
        <select
          id={`${id}-country`}
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
            setRegion("");
            setError("");
          }}
          className={select}
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>

        <label
          htmlFor={`${id}-region`}
          className="mt-6 block text-[15px] text-muted"
        >
          Region / state
        </label>
        <select
          id={`${id}-region`}
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setError("");
          }}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={select}
        >
          <option value="">Select region</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        {error && (
          <p
            id={`${id}-error`}
            role="alert"
            className="mt-2 text-[14px] text-[#b42318]"
          >
            {error}
          </p>
        )}

        <button type="submit" className={`${btnPrimary} mt-6 w-full`}>
          Continue
        </button>
      </form>
      <p className="mt-5 text-center text-[14px] text-muted">
        You can change this later from the footer.
      </p>
    </GateCard>
  );
}
