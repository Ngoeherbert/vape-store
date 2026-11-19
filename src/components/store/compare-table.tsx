"use client";
import Image from "next/image";
import { money } from "./product-card";

export type CompareItem = {
  name: string;
  price: number;
  imageUrl?: string;
  specs: Record<string, string>;
};

export function CompareTable({
  items,
  rows,
  onAdd,
}: {
  items: CompareItem[];
  rows: string[];
  onAdd?: (name: string) => void;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr>
            <th className="w-[18%]" />
            {items.map((i) => (
              <th
                key={i.name}
                className="px-0 pb-4 pr-8 align-bottom font-normal"
              >
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-soft text-sm text-muted">
                  {i.imageUrl ? (
                    <Image src={i.imageUrl} alt={i.name} fill className="object-cover" sizes="240px" />
                  ) : (
                    "Image"
                  )}
                </div>
                <div className="mt-6 font-medium text-ink">{i.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-line">
            <th className="py-6 pl-6 font-normal text-muted">Price</th>
            {items.map((i) => (
              <td key={i.name} className="py-6 text-ink">
                {money(i.price)}
              </td>
            ))}
          </tr>
          {rows.map((r) => (
            <tr key={r} className="border-t border-line">
              <th className="py-6 pl-6 font-normal text-muted">{r}</th>
              {items.map((i) => (
                <td key={i.name} className="py-6 text-ink">
                  {i.specs[r]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-y border-line">
            <td />
            {items.map((i) => (
              <td key={i.name} className="py-6">
                <button
                  type="button"
                  onClick={() => onAdd?.(i.name)}
                  className="btn-primary flex-1"
                >
                  Add to cart
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
