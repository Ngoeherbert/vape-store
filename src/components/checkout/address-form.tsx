"use client";
import { useState } from "react";
import { btnPrimary } from "@/lib/utils";

export type AddressFormValue = {
  fullName: string;
  street: string;
  city: string;
  postcode: string;
  country: string;
};

export function AddressForm() {
  const [form, setForm] = useState<AddressFormValue>({
    fullName: "",
    street: "",
    city: "",
    postcode: "",
    country: "GB",
  });
  const [error, setError] = useState("");

  const countries = [
    { code: "GB", label: "United Kingdom" },
    { code: "IE", label: "Ireland" },
    { code: "US", label: "United States" },
    { code: "CA", label: "Canada" },
  ];

  const regions = [
    { code: "ENG", label: "England" },
    { code: "SCT", label: "Scotland" },
    { code: "WLS", label: "Wales" },
    { code: "NIR", label: "Northern Ireland" },
  ];

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.fullName || !form.street || !form.city || !form.postcode) {
      return setError("Please fill in all required fields.");
    }
    setError("");
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      {error && (
        <p className="mt-2 text-sm text-[#b42318]" role="alert">
          {error}
        </p>
      )}
      <label className="field">
        <span className="field-label">Full name</span>
        <input
          name="fullName"
          autoComplete="name"
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          className="input"
        />
      </label>
      <label className="field">
        <span className="field-label">Street address</span>
        <input
          name="street"
          autoComplete="street-address"
          required
          value={form.street}
          onChange={(e) => setForm({ ...form, street: e.target.value })}
          className="input"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="field">
          <span className="field-label">City</span>
          <input
            name="city"
            autoComplete="address-level2"
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="input"
          />
        </label>
        <label className="field">
          <span className="field-label">Postcode</span>
          <input
            name="postcode"
            autoComplete="postal-code"
            required
            value={form.postcode}
            onChange={(e) => setForm({ ...form, postcode: e.target.value })}
            className="input"
          />
        </label>
      </div>
      <label className="field">
        <span className="field-label">Country</span>
        <select
          name="country"
          value={form.country}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
          className="select"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
      </label>
      <label className="field">
        <span className="field-label">Region</span>
        <select name="region" className="select">
          {regions.map((r) => (
            <option key={r.code} value={r.code}>
              {r.label}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" className={btnPrimary}>
        Save and continue
      </button>
    </form>
  );
}
