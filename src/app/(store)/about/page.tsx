const values = [
  { h: "Curated range", p: "Only products we would use ourselves." },
  { h: "Adults only", p: "Strict age checks on every order." },
  { h: "Private checkout", p: "Pay with crypto, discreet packaging." },
];

export default function AboutPage() {
  return (
    <>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="text-base uppercase tracking-wider text-[#555]">About us</p>
          <h1 className="mt-6 max-w-[720px] text-6xl font-semibold leading-[1.1] tracking-tight">A simpler way to buy vaping products.</h1>
          <p className="mt-8 text-2xl text-[#555]">[YOUR STORY: who you are, what you sell and why.]</p>
        </div>
        <div className="flex aspect-[4/3] items-center justify-center bg-[#f1f1f1] text-[#555]">Image</div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <section key={v.h} className="border border-[#e5e5e5] p-9">
            <h2 className="text-2xl font-semibold">{v.h}</h2>
            <p className="mt-4 text-xl text-[#555]">{v.p}</p>
          </section>
        ))}
      </div>
    </>
  );
}