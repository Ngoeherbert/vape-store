import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Terms of service</nav>
      <h1 className="mt-10 text-h1">Terms of service</h1>
      <p className="mt-10 text-lg text-muted">Last updated [DATE]</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">1. Eligibility</h2>
        <p className="mt-2 text-xl leading-8 text-muted">You must be at least 18 years old, or the legal age in your region, to use this site.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">2. Orders and payment</h2>
        <p className="mt-2 text-xl leading-8 text-muted">[YOUR TERMS ON ORDERS, PRICING AND CRYPTO PAYMENTS]</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">3. Shipping and returns</h2>
        <p className="mt-2 text-xl leading-8 text-muted">See our <Link href="/shipping-policy" className="underline">shipping</Link> and <Link href="/returns" className="underline">returns</Link> policies.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">4. Liability</h2>
        <p className="mt-2 text-xl leading-8 text-muted">[YOUR LIABILITY TERMS]</p>
      </section>
    </div>
  );
}