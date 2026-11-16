"use client";
import Link from "next/link";

const label = "block text-[15px] text-[#555]";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function ContactPage() {
  return (
    <>
      <nav className="text-lg text-[#555]">Home / Contact</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">Contact us</h1>
      <p className="mt-4 text-xl text-[#555]">We usually reply within one business day.</p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
        <form onSubmit={(e) => { e.preventDefault(); /* TODO: contact server action */ }}>
          <label className={label}>Name<input name="name" required autoComplete="name" className={input} /></label>
          <label className={`${label} mt-6`}>Email<input type="email" name="email" required autoComplete="email" className={input} /></label>
          <label className={`${label} mt-6`}>Order number (optional)<input name="order" className={input} /></label>
          <label className={`${label} mt-6`}>Topic
            <select name="topic" defaultValue="Order question" className={`${input} bg-white text-[#111]`}>
              <option>Order question</option>
              <option>Payment issue</option>
              <option>Shipping</option>
              <option>Product question</option>
              <option>Other</option>
            </select>
          </label>
          <label className={`${label} mt-6`}>Message<textarea name="message" required rows={5} className="mt-2 w-full border border-[#d4d4d4] p-4 text-lg" /></label>
          <button type="submit" className="mt-6 bg-[#111] px-9 py-5 text-xl text-white">Send message</button>
        </form>

        <aside className="space-y-6 self-start">
          <section className="border border-[#e5e5e5] p-9"><h2 className="text-2xl font-semibold">Email</h2><p className="mt-1 text-xl text-[#555]">[SUPPORT EMAIL]</p></section>
          <section className="border border-[#e5e5e5] p-9"><h2 className="text-2xl font-semibold">Hours</h2><p className="mt-1 text-xl text-[#555]">Mon–Fri · 9:00–17:00</p></section>
          <section className="border border-[#e5e5e5] p-9"><h2 className="text-2xl font-semibold">Quick answers</h2><Link href="/faq" className="mt-1 inline-block text-xl underline">Read the FAQ</Link></section>
        </aside>
      </div>
    </>
  );
}