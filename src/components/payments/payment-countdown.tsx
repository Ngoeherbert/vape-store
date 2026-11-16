"use client";
import { useCountdown } from "@/hooks/use-countdown";

export function PaymentCountdown({ seconds }: { seconds: number }) {
  const { label, expired } = useCountdown(seconds);
  return (
    <div>
      <p className="text-[#555]">Time remaining</p>
      <p className="mt-1 text-3xl font-semibold tabular-nums">{expired ? "Expired" : label}</p>
    </div>
  );
}