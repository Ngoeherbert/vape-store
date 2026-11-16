"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const label = "block text-[15px] text-[#555]";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const valid = pw.length >= 8 && /\d/.test(pw) && /[A-Z]/.test(pw) && pw === confirm;

  return (
    <div className="grid min-h-screen bg-white font-sans text-[#111] md:grid-cols-2">
      <aside className="flex flex-col justify-between bg-[#111] px-10 py-12 text-white md:px-20">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">STORE</Link>
        <div className="py-16">
          <h2 className="max-w-md text-6xl font-semibold leading-[1.1] tracking-tight">Choose a new password.</h2>
          <p className="mt-6 max-w-md text-xl text-[#bbb]">Pick something you have not used before.</p>
        </div>
        <p className="text-[15px] text-[#bbb]">Adults 18+ only. Nicotine is addictive.</p>
      </aside>

      <main className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-[620px]">
          <h1 className="text-4xl font-semibold tracking-tight">Set a new password</h1>
          <p className="mt-3 text-xl text-[#555]">For you@example.com</p>

          <form className="mt-10" onSubmit={(e) => { e.preventDefault(); if (!valid) return; /* TODO: authClient.resetPassword with token */ router.push("/login"); }}>
            <label className={label}>New password<input type="password" value={pw} onChange={(e) => setPw(e.target.value)} autoComplete="new-password" className={input} /></label>
            <label className={`${label} mt-6`}>Confirm new password<input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" className={input} /></label>
            <ul className="mt-6 list-disc space-y-1.5 pl-6 text-lg text-[#555]">
              <li>At least 8 characters</li>
              <li>One number</li>
              <li>One uppercase letter</li>
            </ul>
            <button type="submit" disabled={!valid} className="mt-8 h-[68px] w-full bg-[#111] text-xl text-white disabled:opacity-40">Update password</button>
          </form>
          <Link href="/login" className="mt-8 inline-block text-xl underline">Back to log in</Link>
        </div>
      </main>
    </div>
  );
}