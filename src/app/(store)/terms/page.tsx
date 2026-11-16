import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-[760px]">
      <nav className="text-lg text-[#555]">Home / Terms of service</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">Terms of service</h1>
      <p className="mt-10 text-lg text-[#555]">Last updated [DATE]</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">1. Eligibility</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">You must be at least 18 years old, or the legal age in your region, to use this site.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">2. Orders and payment</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">[YOUR TERMS ON ORDERS, PRICING AND CRYPTO PAYMENTS]</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">3. Shipping and returns</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">See our <Link href="/shipping-policy" className="underline">shipping</Link> and <Link href="/returns" className="underline">returns</Link> policies.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">4. Liability</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">[YOUR LIABILITY TERMS]</p>
      </section>
    </div>
  );
}