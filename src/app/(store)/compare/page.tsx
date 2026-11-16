"use client";
import {
  CompareTable,
  type CompareItem,
} from "@/components/store/compare-table";

const items: CompareItem[] = [
  {
    name: "Pod Device Kit",
    price: 34,
    specs: {
      Battery: "800 mAh",
      Type: "Pod",
      Capacity: "2 ml",
      Charging: "USB-C",
      Rating: "4.6",
    },
  },
  {
    name: "Mod Starter Kit",
    price: 58,
    specs: {
      Battery: "2000 mAh",
      Type: "Mod",
      Capacity: "5 ml",
      Charging: "USB-C",
      Rating: "4.8",
    },
  },
  {
    name: "Slim Pen Kit",
    price: 26,
    specs: {
      Battery: "400 mAh",
      Type: "Pen",
      Capacity: "1.5 ml",
      Charging: "Micro USB",
      Rating: "4.3",
    },
  },
];

export default function ComparePage() {
  return (
    <>
      <nav className="text-lg text-[#555]">Home / Compare</nav>
      <h1 className="mt-10 text-5xl font-semibold tracking-tight">
        Compare products
      </h1>
      <div className="mt-14">
        <CompareTable
          items={items}
          rows={["Battery", "Type", "Capacity", "Charging", "Rating"]}
        />
      </div>
    </>
  );
}
