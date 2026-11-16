"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const input =
  "mt-2 h-[68px] w-full border border-[#d4d4d4] px-5 text-lg placeholder:text-[#999]";

export function CustomerForm() {
  const router = useRouter();
  const [ageOk, setAgeOk] = useState(true);

  return (
    <form
      className="mt-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (ageOk) router.push("/checkout/address");
      }}
    >
      <div className="flex items-center justify-between border border-[#e5e5e5] px-10 py-9">
        <span className="text-xl">Already have an account?</span>
        <Link
          href="/login"
          className="border border-[#d4d4d4] px-6 py-4 text-lg"
        >
          Log in
        </Link>
      </div>

      <label className="mt-10 block text-[#555]">
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className={input}
        />
      </label>
      <label className="mt-8 block text-[#555]">
        Phone
        <input type="tel" name="phone" className={input} />
      </label>

      <label className="mt-8 flex items-center gap-3 text-xl">
        <input type="checkbox" name="marketing" className="h-5 w-5" /> Email me
        news and offers
      </label>
      <label className="mt-5 flex items-center gap-3 text-xl">
        <input
          type="checkbox"
          name="age"
          checked={ageOk}
          onChange={(e) => setAgeOk(e.target.checked)}
          className="h-5 w-5"
        />{" "}
        I confirm I am 18 or older
      </label>

      <div className="mt-12 flex items-center justify-between">
        <Link href="/cart" className="text-xl underline">
          Back to cart
        </Link>
        <button
          type="submit"
          disabled={!ageOk}
          className="bg-[#111] px-10 py-5 text-xl text-white disabled:opacity-40"
        >
          Continue to address
        </button>
      </div>
    </form>
  );
}
