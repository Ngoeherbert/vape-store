"use client";
import Image from "next/image";
import { QuantityInput } from "./quantity-input";
import { money } from "./product-card";

export type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  qty: number;
  imageUrl?: string;
};

export function CartLine({
  item,
  onQty,
  onRemove,
}: {
  item: CartItem;
  onQty: (n: number) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex gap-6 border-t border-[#e5e5e5] py-8">
      <div className="relative h-[150px] w-[150px] shrink-0 overflow-hidden bg-[#f1f1f1]">
        {item.imageUrl ? (
          <Image src={item.imageUrl} alt={item.name} fill className="object-cover" sizes="150px" />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-sm text-[#555]">Image</span>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl">{item.name}</h3>
        <p className="mt-1 text-[#555]">{item.variant}</p>
        <button
          type="button"
          onClick={onRemove}
          className="mt-2 text-[#555] underline"
        >
          Remove
        </button>
      </div>
      <div className="shrink-0 self-start">
        <QuantityInput value={item.qty} onChange={onQty} />
      </div>
      <div className="w-24 shrink-0 text-right text-xl">
        {money(item.price * item.qty)}
      </div>
    </div>
  );
}
