const sections = [
  { h: "Delivery times", p: "Standard delivery takes 3–5 business days. Express takes 1–2 business days. [YOUR TIMES]" },
  { h: "Rates", p: "Free standard shipping on orders over $60. Otherwise rates are shown at checkout." },
  { h: "Age check on delivery", p: "An adult signature is required. We cannot leave parcels unattended." },
  { h: "Where we ship", p: "We ship only to regions where our products can be legally sold. See the region selector for details." },
];

export default function ShippingPolicyPage() {
  return (
    <div className="page pt-14 pb-24">
      <nav className="text-lg text-muted">Home / Shipping &amp; delivery</nav>
      <h1 className="mt-10 text-h1">Shipping &amp; delivery policy</h1>
      <p className="mt-10 text-lg text-muted">Last updated [DATE]</p>
      {sections.map((s) => (
        <section key={s.h} className="mt-10">
          <h2 className="text-2xl font-semibold">{s.h}</h2>
          <p className="mt-2 text-xl leading-8 text-muted">{s.p}</p>
        </section>
      ))}
    </div>
  );
}