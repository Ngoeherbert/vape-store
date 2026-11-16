const sections = [
  { h: "Delivery times", p: "Standard delivery takes 3–5 business days. Express takes 1–2 business days. [YOUR TIMES]" },
  { h: "Rates", p: "Free standard shipping on orders over $60. Otherwise rates are shown at checkout." },
  { h: "Age check on delivery", p: "An adult signature is required. We cannot leave parcels unattended." },
  { h: "Where we ship", p: "We ship only to regions where our products can be legally sold. See the region selector for details." },
];

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-[760px]">
      <nav className="text-lg text-[#555]">Home / Shipping &amp; delivery</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">Shipping &amp; delivery policy</h1>
      <p className="mt-10 text-lg text-[#555]">Last updated [DATE]</p>
      {sections.map((s) => (
        <section key={s.h} className="mt-10">
          <h2 className="text-2xl font-semibold">{s.h}</h2>
          <p className="mt-2 text-xl leading-8 text-[#555]">{s.p}</p>
        </section>
      ))}
    </div>
  );
}