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

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">Profile &amp; password</h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <div className="max-w-[1000px] space-y-8">
            <form className="border border-[#e5e5e5] p-9" onSubmit={(e) => { e.preventDefault(); /* TODO: update profile */ }}>
              <h2 className="text-3xl font-semibold">Personal details</h2>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <label className={label}>First name<input name="firstName" autoComplete="given-name" className={input} /></label>
                <label className={label}>Last name<input name="lastName" autoComplete="family-name" className={input} /></label>
              </div>
              <label className={`${label} mt-6`}>Email<input type="email" name="email" autoComplete="email" className={input} /></label>
              <label className={`${label} mt-6`}>Phone<input type="tel" name="phone" autoComplete="tel" className={input} /></label>
              <button type="submit" className="mt-8 bg-[#111] px-9 py-5 text-xl text-white">Save changes</button>
            </form>

            <form className="border border-[#e5e5e5] p-9" onSubmit={(e) => { e.preventDefault(); /* TODO: change password */ }}>
              <h2 className="text-3xl font-semibold">Change password</h2>
              <label className={`${label} mt-6`}>Current password<input type="password" name="current" autoComplete="current-password" className={input} /></label>
              <label className={`${label} mt-6`}>New password<input type="password" name="next" autoComplete="new-password" className={input} /></label>
              <label className={`${label} mt-6`}>Confirm new password<input type="password" name="confirm" autoComplete="new-password" className={input} /></label>
              <button type="submit" className="mt-8 bg-[#111] px-9 py-5 text-xl text-white">Update password</button>
            </form>

            <section className="border border-[#e5e5e5] p-9">
              <h2 className="text-2xl font-semibold">Delete account</h2>
              <p className="mt-4 text-xl text-[#555]">This permanently removes your data and order history.</p>
              <button type="button" className="mt-5 border border-[#d4d4d4] px-6 py-4 text-lg">Delete my account</button>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}