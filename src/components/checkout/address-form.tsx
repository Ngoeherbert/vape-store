"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-5 text-lg";
const label = "block text-[#555]";

export function AddressForm() {
  const router = useRouter();
  return (
    <form
      className="mt-8"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/checkout/shipping");
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className={label}>
          First name
          <input
            name="firstName"
            required
            autoComplete="given-name"
            className={input}
          />
        </label>
        <label className={label}>
          Last name
          <input
            name="lastName"
            required
            autoComplete="family-name"
            className={input}
          />
        </label>
      </div>
      <label className={`${label} mt-6`}>
        Address
        <input
          name="address"
          required
          autoComplete="address-line1"
          className={input}
        />
      </label>
      <label className={`${label} mt-6`}>
        Apartment, suite (optional)
        <input name="address2" autoComplete="address-line2" className={input} />
      </label>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <label className={label}>
          City
          <input
            name="city"
            required
            autoComplete="address-level2"
            className={input}
          />
        </label>
        <label className={label}>
          Postcode
          <input
            name="postcode"
            required
            autoComplete="postal-code"
            className={input}
          />
        </label>
      </div>
      <label className={`${label} mt-6`}>
        Country
        <select
          name="country"
          defaultValue="United Kingdom"
          className={`${input} bg-white`}
        >
          <option>United Kingdom</option>
          <option>Ireland</option>
          <option>Germany</option>
          <option>France</option>
        </select>
      </label>
      <label className="mt-6 flex items-center gap-3 text-xl">
        <input
          type="checkbox"
          name="billingSame"
          defaultChecked
          className="h-5 w-5"
        />{" "}
        Billing address is the same
      </label>
      <div className="mt-12 flex items-center justify-between">
        <Link href="/checkout/info" className="text-xl underline">
          Back
        </Link>
        <button
          type="submit"
          className="bg-[#111] px-10 py-5 text-xl text-white"
        >
          Continue to shipping
        </button>
      </div>
    </form>
  );
}
