"use client";
import Link from "next/link";
import { useState } from "react";
import { btnPrimary } from "@/lib/utils";

export type CustomerFormValue = {
  email: string;
  phone: string;
  marketing: boolean;
};

export function CustomerForm() {
  const [form, setForm] = useState<CustomerFormValue>({
    email: "",
    phone: "",
    marketing: false,
  });
  const [error, setError] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.phone) {
      return setError("Please enter your email and phone.");
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
        <span className="field-label">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
        />
      </label>
      <label className="field">
        <span className="field-label">Phone</span>
        <input
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="input"
        />
      </label>
      <label className="check">
        <input
          name="marketing"
          type="checkbox"
          checked={form.marketing}
          onChange={(e) =>
            setForm({ ...form, marketing: e.target.checked })
          }
        />
        <span>Email me news and offers</span>
      </label>
      <button type="submit" className={btnPrimary}>
        Save and continue
      </button>
      <p className="mt-4 text-sm text-muted">
        Already have an account?{" "}
        <Link href="/account" className="link-underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
