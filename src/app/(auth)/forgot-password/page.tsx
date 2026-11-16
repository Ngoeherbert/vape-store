"use client";
import Link from "next/link";

const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function ForgotPasswordPage() {
  return (
    <div className="grid min-h-screen bg-white font-sans text-[#111] md:grid-cols-2">
      <aside className="flex flex-col justify-between bg-[#111] px-10 py-12 text-white md:px-20">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">STORE</Link>
        <div className="py-16">
          <h2 className="max-w-md text-6xl font-semibold leading-[1.1] tracking-tight">Locked out? It happens.</h2>
          <p className="mt-6 max-w-md text-xl text-[#bbb]">We will email you a link to set a new password.</p>
        </div>
        <p className="text-[15px] text-[#bbb]">Adults 18+ only. Nicotine is addictive.</p>
      </aside>

      <main className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-[620px]">
          <h1 className="text-4xl font-semibold tracking-tight">Forgot your password?</h1>
          <p className="mt-3 text-xl text-[#555]">Enter your email and we will send you a reset link.</p>

          <form className="mt-10" onSubmit={(e) => { e.preventDefault(); /* TODO: authClient.requestPasswordReset */ }}>
            <label className="block text-[15px] text-[#555]">Email<input type="email" name="email" required autoComplete="email" className={input} /></label>
            <button type="submit" className="mt-6 h-[68px] w-full bg-[#111] text-xl text-white">Send reset link</button>
          </form>
          <Link href="/login" className="mt-8 inline-block text-xl underline">Back to log in</Link>
        </div>
      </main>
    </div>
  );
}