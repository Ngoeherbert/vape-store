import { money } from "./product-card";

type Props = {
  title?: string;
  itemCount?: number; // "2 items" row (checkout steps 1-2)
  lines?: [label: string, amount: number][]; // itemised rows (review)
  subtotal: number;
  shipping?: string | number;
  total?: number; // defaults to subtotal
  children?: React.ReactNode; // e.g. discount code + checkout button
};

export function OrderSummary({
  title,
  itemCount,
  lines,
  subtotal,
  shipping,
  total,
  children,
}: Props) {
  const heading =
    title ?? (itemCount === undefined && !lines ? "Order summary" : "Summary");
  return (
    <aside className="border border-[#e5e5e5] p-9">
      <h2 className="text-2xl font-semibold">{heading}</h2>
      {children}

      {lines && (
        <dl className="mt-6 space-y-4 border-b border-[#e5e5e5] pb-6">
          {lines.map(([l, a]) => (
            <div key={l} className="flex justify-between">
              <dt>{l}</dt>
              <dd>{money(a)}</dd>
            </div>
          ))}
        </dl>
      )}

      <dl className="mt-6 space-y-4 text-[#555]">
        <div className="flex justify-between">
          <dt>{itemCount !== undefined ? `${itemCount} items` : "Subtotal"}</dt>
          <dd className="text-[#111]">{money(subtotal)}</dd>
        </div>
        {shipping !== undefined && (
          <div className="flex justify-between">
            <dt>Shipping</dt>
            <dd className="text-[#111]">
              {typeof shipping === "number" ? money(shipping) : shipping}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-6 flex justify-between border-t border-[#e5e5e5] pt-6 font-semibold">
        <span>Total</span>
        <span>{money(total ?? subtotal)}</span>
      </div>
    </aside>
  );
}
