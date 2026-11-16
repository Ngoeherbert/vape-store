"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const label = "block text-[15px] text-[#555]";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="grid min-h-screen bg-white font-sans text-[#111] md:grid-cols-2">
      <aside className="flex flex-col justify-between bg-[#111] px-10 py-12 text-white md:px-20">
        <Link href="/" className="text-xl font-semibold tracking-[0.25em]">
          STORE
        </Link>
        <div className="py-16">
          <h2 className="text-6xl font-semibold leading-[1.1] tracking-tight">
            Welcome back.
          </h2>
          <p className="mt-6 max-w-md text-xl text-[#bbb]">
            Log in to see your orders, wishlist and saved details.
          </p>
        </div>
        <p className="text-[15px] text-[#bbb]">
          Adults 18+ only. Nicotine is addictive.
        </p>
      </aside>

      <main className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-[620px]">
          <h1 className="text-4xl font-semibold tracking-tight">Log in</h1>
          <p className="mt-3 text-xl text-[#555]">
            New here?{" "}
            <Link href="/register" className="text-[#111] underline">
              Create an account
            </Link>
          </p>

          <form
            className="mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              /* TODO: authClient.signIn.email */ router.push("/account");
            }}
          >
            <label className={label}>
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
              Password
              <input
                type="password"
                name="password"
                required
                autoComplete="current-password"
                className={input}
              />
            </label>
            <div className="mt-6 flex items-center justify-between text-lg">
              <label className="flex items-center gap-3">
                <input type="checkbox" name="remember" className="h-5 w-5" />{" "}
                Remember me
              </label>
              <Link href="/forgot-password" className="underline">
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="mt-8 h-[68px] w-full bg-[#111] text-xl text-white"
            >
              Log in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
