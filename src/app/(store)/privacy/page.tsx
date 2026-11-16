const sections = [
  { h: "What we collect", p: "Contact details, delivery address, order history and, where required, age verification documents." },
  { h: "How we use it", p: "To process orders, deliver parcels, verify age and provide support." },
  { h: "Your rights", p: "You can access, correct or delete your data by contacting us. [YOUR LEGAL BASIS]" },
  { h: "Retention", p: "[YOUR RETENTION PERIODS]" },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px]">
      <nav className="text-lg text-[#555]">Home / Privacy policy</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">Privacy policy</h1>
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