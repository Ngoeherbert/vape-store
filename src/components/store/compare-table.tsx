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
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f1f1f1] text-sm text-[#555]">
                  {i.imageUrl ? (
                    <Image src={i.imageUrl} alt={i.name} fill className="object-cover" sizes="240px" />
                  ) : (
                    "Image"
                  )}
                </div>
                <div className="mt-6 font-medium">{i.name}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-[#e5e5e5]">
            <th className="py-6 pl-6 font-normal text-[#555]">Price</th>
            {items.map((i) => (
              <td key={i.name} className="py-6">
                {money(i.price)}
              </td>
            ))}
          </tr>
          {rows.map((r) => (
            <tr key={r} className="border-t border-[#e5e5e5]">
              <th className="py-6 pl-6 font-normal text-[#555]">{r}</th>
              {items.map((i) => (
                <td key={i.name} className="py-6">
                  {i.specs[r]}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-y border-[#e5e5e5]">
            <td />
            {items.map((i) => (
              <td key={i.name} className="py-6">
                <button
                  type="button"
                  onClick={() => onAdd?.(i.name)}
                  className="bg-[#111] px-7 py-4 font-medium text-white"
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
