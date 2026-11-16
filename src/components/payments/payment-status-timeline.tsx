export type TimelineStep = { label: string; state: "done" | "now" | "next" };

export function PaymentStatusTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="border border-[#e5e5e5] px-9 py-6">
      {steps.map((s) => (
        <li key={s.label} className="flex items-center gap-4 border-b border-[#e5e5e5] py-5 last:border-b-0">
          <span className={`border px-3 py-1.5 text-[15px] ${s.state === "next" ? "border-[#d4d4d4] bg-white text-[#111]" : "border-[#111] bg-[#111] text-white"}`}>
            {s.state === "done" ? "Done" : s.state === "now" ? "Now" : "Next"}
          </span>
          <span className={`text-2xl ${s.state === "next" ? "text-[#777]" : ""}`}>{s.label}</span>
        </li>
      ))}
    </ol>
  );
}