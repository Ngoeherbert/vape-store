"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [digits, setDigits] = useState<string[]>(Array(6).fill(""));
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const setAt = (i: number, v: string) => {
    const d = v.replace(/\D/g, "").slice(-1);
    setDigits((a) => a.map((x, j) => (j === i ? d : x)));
    if (d && i < 5) refs.current[i + 1]?.focus();
  };

  return (
    <div className="grid min-h-screen bg-white font-sans text-[#111] md:grid-cols-2">
      <aside className="flex flex-col justify-between bg-[#111] px-10 py-12 text-white md:px-20">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">STORE</Link>
        <div className="py-16">
          <h2 className="max-w-md text-6xl font-semibold leading-[1.1] tracking-tight">One last step.</h2>
          <p className="mt-6 max-w-md text-xl text-[#bbb]">Confirm your email so we can keep your account secure.</p>
        </div>
        <p className="text-[15px] text-[#bbb]">Adults 18+ only. Nicotine is addictive.</p>
      </aside>

      <main className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-[620px]">
          <h1 className="text-4xl font-semibold tracking-tight">Check your email</h1>
          <p className="mt-3 text-xl text-[#555]">We sent a 6-digit code to you@example.com.</p>

          <form className="mt-10" onSubmit={(e) => { e.preventDefault(); if (digits.join("").length < 6) return; /* TODO: authClient.emailOtp.verifyEmail */ router.push("/account"); }}>
            <div
              className="flex gap-3"
              onPaste={(e) => {
                const t = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                if (!t) return;
                e.preventDefault();
                setDigits(Array.from({ length: 6 }, (_, i) => t[i] ?? ""));
                refs.current[Math.min(t.length, 5)]?.focus();
              }}
            >
              {digits.map((d, i) => (
                <input
                  key={i}
                  ref={(el) => { refs.current[i] = el; }}
                  value={d}
                  inputMode="numeric"
                  autoComplete={i === 0 ? "one-time-code" : "off"}
                  aria-label={`Digit ${i + 1}`}
                  onChange={(e) => setAt(i, e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Backspace" && !digits[i] && i > 0) refs.current[i - 1]?.focus(); }}
                  className="h-[68px] w-[74px] border border-[#d4d4d4] text-center text-2xl"
                />
              ))}
            </div>
            <button type="submit" className="mt-8 h-[68px] w-full bg-[#111] text-xl text-white">Verify</button>
          </form>
          <p className="mt-8 text-xl text-[#555]">Didn&apos;t get it? <button type="button" className="text-[#111] underline">Resend code</button></p>
        </div>
      </main>
    </div>
  );
}