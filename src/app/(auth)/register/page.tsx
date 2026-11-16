"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const label = "block text-[15px] text-[#555]";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function RegisterPage() {
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  return (
    <div className="grid min-h-screen bg-white font-sans text-[#111] md:grid-cols-2">
      <aside className="flex flex-col justify-between bg-[#111] px-10 py-12 text-white md:px-20">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">
          STORE
        </Link>
        <div className="py-16">
          <h2 className="max-w-md text-6xl font-semibold leading-[1.1] tracking-tight">
            Create your account in a minute.
          </h2>
          <p className="mt-6 max-w-md text-xl text-[#bbb]">
            Track orders, save addresses and check out faster.
          </p>
        </div>
        <p className="text-[15px] text-[#bbb]">
          Adults 18+ only. Nicotine is addictive.
        </p>
      </aside>

      <main className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-[620px]">
          <h1 className="text-4xl font-semibold tracking-tight">
            Create account
          </h1>
          <p className="mt-3 text-xl text-[#555]">
            Already registered?{" "}
            <Link href="/login" className="text-[#111] underline">
              Log in
            </Link>
          </p>

          <form
            className="mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              if (!agreed) return;
              /* TODO: authClient.signUp.email */ router.push("/verify-email");
            }}
          >
            <label className={label}>
              First name
              <input
                name="firstName"
                required
                autoComplete="given-name"
                className={input}
              />
            </label>
            <label className={`${label} mt-6`}>
              Last name
              <input
                name="lastName"
                required
                autoComplete="family-name"
                className={input}
              />
            </label>
            <label className={`${label} mt-6`}>
              Email
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className={input}
              />
            </label>
            <label className={`${label} mt-6`}>
              Date of birth
              <input
                type="date"
                name="dob"
                required
                autoComplete="bday"
                className={input}
              />
            </label>
            <label className={`${label} mt-6`}>
              Password
              <input
                type="password"
                name="password"
                required
                minLength={8}
                autoComplete="new-password"
                className={input}
              />
            </label>
            <label className="mt-6 flex items-center gap-3 text-lg">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-5 w-5"
              />
              <span>
                I am 18 or older and agree to the{" "}
                <Link href="/terms">Terms</Link> and{" "}
                <Link href="/privacy">Privacy Policy</Link>
              </span>
            </label>
            <button
              type="submit"
              disabled={!agreed}
              className="mt-8 h-[68px] w-full bg-[#111] text-xl text-white disabled:opacity-40"
            >
              Create account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
