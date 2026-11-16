export default function HealthWarningPage() {
  return (
    <div className="max-w-[760px]">
      <nav className="text-lg text-[#555]">Home / Health information</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">
        Health &amp; nicotine warning
      </h1>

      <p className="mt-10 border border-[#111] p-9 text-2xl font-semibold">
        WARNING: This product contains nicotine, a highly addictive substance.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">
          Who should not use our products
        </h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">
          Anyone under 18, pregnant or breastfeeding women, and people who do
          not already use nicotine.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Safe use</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">
          Keep devices and e-liquids out of reach of children and pets. Use only
          the charger supplied.
        </p>
      </section>
      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Getting help to quit</h2>
        <p className="mt-2 text-xl leading-8 text-[#555]">
          [LINK TO YOUR REGION&apos;S STOP-SMOKING SERVICE]
        </p>
      </section>
    </div>
  );
}
