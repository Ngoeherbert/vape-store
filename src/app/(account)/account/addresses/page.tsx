"use client";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const nav = [
  ["Overview", "/account"],
  ["Orders", "/account/orders"],
  ["Addresses", "/account/addresses"],
  ["Wishlist", "/account/wishlist"],
  ["My reviews", "/account/reviews"],
  ["Notifications", "/account/notifications"],
  ["ID verification", "/account/verification"],
  ["Profile & password", "/account/profile"],
];

const label = "block text-[15px] text-[#555]";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function AddressesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold tracking-tight">Addresses</h1>
          <a href="#address-form" className="bg-[#111] px-8 py-5 text-xl text-white">Add address</a>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="border border-[#e5e5e5] p-9">
                <span className="inline-block bg-[#111] px-3 py-1.5 text-[15px] text-white">Default</span>
                <p className="mt-5 text-xl leading-9">[Name]<br />[Street]<br />[City], [Postcode]</p>
                <div className="mt-4 flex gap-5 text-lg"><button type="button" className="underline">Edit</button><button type="button" className="underline">Delete</button></div>
              </article>
              <article className="border border-[#e5e5e5] p-9">
                <p className="text-xl leading-9">[Name]<br />[Street]<br />[City], [Postcode]</p>
                <div className="mt-4 flex gap-5 text-lg"><button type="button" className="underline">Edit</button><button type="button" className="underline">Delete</button><button type="button" className="underline">Set as default</button></div>
              </article>
            </div>

            <form id="address-form" className="mt-10 border border-[#e5e5e5] p-9" onSubmit={(e) => { e.preventDefault(); /* TODO: save address server action */ }}>
              <h2 className="text-3xl font-semibold">Add / edit address</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <label className={label}>First name<input name="firstName" required className={input} /></label>
                <label className={label}>Last name<input name="lastName" required className={input} /></label>
              </div>
              <label className={`${label} mt-6`}>Address<input name="address" required className={input} /></label>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <label className={label}>City<input name="city" required className={input} /></label>
                <label className={label}>Postcode<input name="postcode" required className={input} /></label>
              </div>
              <div className="mt-8 flex gap-4">
                <button type="submit" className="bg-[#111] px-9 py-5 text-xl text-white">Save address</button>
                <button type="reset" className="border border-[#d4d4d4] px-9 py-5 text-xl">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}