const steps = ["Customer", "Address", "Shipping", "Payment", "Review"];

export function CheckoutSteps({ current }: { current: number }) {
  return (
    <ol className="flex flex-wrap gap-x-9 gap-y-2 text-lg">
      {steps.map((s, i) => (
        <li
          key={s}
          aria-current={i + 1 === current ? "step" : undefined}
          className={
            i + 1 === current ? "font-semibold text-[#111]" : "text-[#555]"
          }
        >
          {i + 1} {s}
        </li>
      ))}
    </ol>
  );
}
