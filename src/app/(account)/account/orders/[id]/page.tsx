const stages = [
  ["Placed", true], ["Paid", true], ["Shipped", true], ["Out for delivery", false], ["Delivered", false],
] as const;

const items = [
  { name: "Nic Salt 30ml", meta: "Mint · 20mg · ×1", price: "$12.00" },
  { name: "Pod Device Kit", meta: "Matte black · ×1", price: "$34.00" },
];

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // TODO: load the real order for the signed-in user.

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <div className="flex items-center justify-between">
        <h1 className="text-h1">Order #{id}</h1>
        <a href={`/api/invoices/${id}`} className="border border-line px-7 py-4 text-lg hover:border-ink">Download invoice</a>
      </div>
      <div className="mt-14 space-y-8">
        <section className="card">
          <h2 className="text-2xl font-semibold">Tracking</h2>
          <ol className="mt-6 flex flex-wrap gap-3">
            {stages.map(([label, done]) => (
              <li key={label} className={`border px-4 py-2 text-base ${done ? "border-ink bg-ink text-canvas" : "border-line"}`}>{label}</li>
            ))}
          </ol>
          <p className="mt-6 text-xl text-muted">Carrier: [CARRIER] · Tracking: <a href="#" className="text-ink underline">[TRACKING NUMBER]</a></p>
        </section>

        <section className="card">
          <h2 className="text-2xl font-semibold">Items</h2>
          <ul className="mt-6">
            {items.map((i) => (
              <li key={i.name} className="flex items-center gap-5 border-b border-line py-4">
                <div className="flex h-[100px] w-[100px] shrink-0 items-center justify-center bg-soft text-muted">Img</div>
                <div className="flex-1">
                  <p className="text-2xl">{i.name}</p>
                  <p className="text-lg text-muted">{i.meta}</p>
                </div>
                <p className="text-2xl">{i.price}</p>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-4 text-xl">
            <div className="flex justify-between text-muted">
              <dt>Shipping</dt>
              <dd className="text-ink">$4.99</dd>
            </div>
            <div className="flex justify-between font-semibold">
              <dt>Total</dt>
              <dd>$50.99</dd>
            </div>
          </dl>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <section className="card">
            <h2 className="text-xl font-semibold">Shipping address</h2>
            <p className="mt-5 text-xl leading-9 text-muted">[Name]<br />[Street]<br />[City], [Postcode]</p>
          </section>
          <section className="card">
            <h2 className="text-xl font-semibold">Payment</h2>
            <p className="mt-5 text-xl leading-9 text-muted">Cryptocurrency<br />50.99 USDT · Paid</p>
          </section>
        </div>
      </div>
    </div>
  );
}
