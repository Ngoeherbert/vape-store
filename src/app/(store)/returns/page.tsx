import Link from "next/link";

export default function ReturnsPage() {
  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Returns &amp; refunds</nav>
      <h1 className="mt-10 text-h1">Returns &amp; refund policy</h1>
      <p className="mt-10 text-lg text-muted">Last updated [DATE]</p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">What can be returned</h2>
        <p className="mt-2 text-xl leading-8 text-muted">Unopened items in original packaging within 14 days of delivery. Opened e-liquids, pods and coils cannot be returned unless faulty.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Faulty or wrong items</h2>
        <p className="mt-2 text-xl leading-8 text-muted">Contact us within 7 days with your order number and photos. We will replace or refund.</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Refunds</h2>
        <p className="mt-2 text-xl leading-8 text-muted">Refunds are issued to the original payment method. For crypto payments, refunds are sent to a wallet address you provide. [YOUR TERMS]</p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">How to start a return</h2>
        <p className="mt-2 text-xl leading-8 text-muted">Use the <Link href="/contact" className="underline">contact form</Link> and include your order number.</p>
      </section>
    </div>
  );
}