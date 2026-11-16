export function GateCard({
  children,
  align = "center",
}: {
  children: React.ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className="w-full max-w-[440px] border border-[#e5e5e5] bg-white px-6 py-10 sm:px-10">
      <p className="text-center text-[18px] font-bold tracking-[0.2em] text-[#111]">
        STORE
      </p>
      <div
        className={`mt-12 ${align === "center" ? "text-center" : "text-left"}`}
      >
        {children}
      </div>
    </div>
  );
}
