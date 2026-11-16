"use client";
import Link from "next/link";
import { use, useState } from "react";
import { CoinPicker } from "@/components/payments/coin-picker";
import { QrCode } from "@/components/payments/qr-code";
import { CopyButton } from "@/components/payments/copy-button";
import { PaymentCountdown } from "@/components/payments/payment-countdown";

// Mock quotes. Replace with the response from POST /api/payments/create (NOWPayments).
const quotes: Record<
  string,
  { label: string; amount: string; address: string; network: string }
> = {
  usdt: {
    label: "USDT (TRC20)",
    amount: "50.99 USDT",
    address: "T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb",
    network: "Tron (TRC20)",
  },
  btc: {
    label: "BTC",
    amount: "[AMOUNT] BTC",
    address: "[WALLET ADDRESS]",
    network: "Bitcoin",
  },
  eth: {
    label: "ETH",
    amount: "[AMOUNT] ETH",
    address: "[WALLET ADDRESS]",
    network: "Ethereum (ERC20)",
  },
  ltc: {
    label: "LTC",
    amount: "[AMOUNT] LTC",
    address: "[WALLET ADDRESS]",
    network: "Litecoin",
  },
  usdc: {
    label: "USDC",
    amount: "[AMOUNT] USDC",
    address: "[WALLET ADDRESS]",
    network: "Ethereum (ERC20)",
  },
};

export default function PayPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const { orderId } = use(params);
  const [coin, setCoin] = useState("usdt");
  const q = quotes[coin];

  return (
    <div className="mx-auto max-w-[1050px]">
      <p className="text-[15px] uppercase tracking-wider text-[#555]">
        Order #{orderId}
      </p>
      <h1 className="mt-2 text-5xl font-semibold tracking-tight">
        Complete your payment
      </h1>

      <section className="mt-9 border border-[#d4d4d4] p-9">
        <CoinPicker
          coins={Object.entries(quotes).map(([id, v]) => ({
            id,
            label: v.label,
          }))}
          value={coin}
          onChange={setCoin}
        />

        <div className="mt-8 grid gap-8 border-t border-[#e5e5e5] pt-9 md:grid-cols-[272px_1fr]">
          <QrCode value={q.address} />
          <div className="space-y-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[#555]">Amount to send</p>
                <p className="mt-2 text-3xl font-semibold">{q.amount}</p>
              </div>
              <CopyButton value={q.amount.split(" ")[0]} />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[#555]">Wallet address</p>
                <p className="mt-2 break-all font-mono text-lg">{q.address}</p>
              </div>
              <CopyButton value={q.address} />
            </div>
            <div>
              <p className="text-[#555]">Network</p>
              <p className="mt-1 text-xl">{q.network}</p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex items-center justify-between border-t border-[#e5e5e5] pt-9">
          <PaymentCountdown seconds={19 * 60 + 42} />
          <Link
            href={`/pay/${orderId}/status`}
            className="bg-[#111] px-10 py-5 text-xl text-white"
          >
            I have sent the payment
          </Link>
        </div>
      </section>

      <p className="mt-6 text-lg text-[#555]">
        Send only the exact amount on the selected network. Payments are
        confirmed automatically.
      </p>
    </div>
  );
}
