import { money } from "./product-card";

type Props = {
  title?: string;
  itemCount?: number;
  lines?: [label: string, amount: number][];
  subtotal: number;
  shipping?: string | number;
  total?: number;
  children?: React.ReactNode;
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
    <aside className="card">
      <h2 className="text-2xl font-semibold text-ink">{heading}</h2>
      {children}

      {lines && (
        <dl className="mt-6 space-y-4 border-b border-line pb-6">
          {lines.map(([l, a]) => (
            <div key={l} className="flex justify-between">
              <dt className="text-muted">{l}</dt>
              <dd className="text-ink">{money(a)}</dd>
            </div>
          ))}
        </dl>
      )}

      <dl className="mt-6 space-y-4 text-muted">
        <div className="flex justify-between">
          <dt className="text-ink">{itemCount !== undefined ? `${itemCount} items` : "Subtotal"}</dt>
          <dd className="text-ink">{money(subtotal)}</dd>
        </div>
        {shipping !== undefined && (
          <div className="flex justify-between">
            <dt className="text-muted">Shipping</dt>
            <dd className="text-ink">
              {typeof shipping === "number" ? money(shipping) : shipping}
            </dd>
          </div>
        )}
      </dl>

      <div className="mt-6 flex justify-between border-t border-line pt-6 font-semibold text-ink">
        <span>Total</span>
        <span>{money(total ?? subtotal)}</span>
      </div>
    </aside>
  );
}
