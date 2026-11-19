"use client";
import { btnPrimary } from "@/lib/utils";

const label = "block text-[15px] text-muted";
const input = "mt-2 h-[68px] w-full border border-[#d4d4d4] px-4 text-lg";

export default function ProfilePage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">Profile &amp; password</h1>
      <div className="mt-14 max-w-[1000px] space-y-8">
        <form className="card" onSubmit={(e) => { e.preventDefault(); /* TODO: update profile */ }}>
          <h2 className="text-3xl font-semibold">Personal details</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className={label}>
              First name<input name="firstName" autoComplete="given-name" className={input} />
            </label>
            <label className={label}>
              Last name<input name="lastName" autoComplete="family-name" className={input} />
            </label>
          </div>
          <label className={`${label} mt-6`}>
            Email<input type="email" name="email" autoComplete="email" className={input} />
          </label>
          <label className={`${label} mt-6`}>
            Phone<input type="tel" name="phone" autoComplete="tel" className={input} />
          </label>
          <button type="submit" className={btnPrimary}>
            Save changes
          </button>
        </form>

        <form className="card" onSubmit={(e) => { e.preventDefault(); /* TODO: change password */ }}>
          <h2 className="text-3xl font-semibold">Change password</h2>
          <label className={`${label} mt-6`}>
            Current password<input type="password" name="current" autoComplete="current-password" className={input} />
          </label>
          <label className={`${label} mt-6`}>
            New password<input type="password" name="next" autoComplete="new-password" className={input} />
          </label>
          <label className={`${label} mt-6`}>
            Confirm new password<input type="password" name="confirm" autoComplete="new-password" className={input} />
          </label>
          <button type="submit" className={btnPrimary}>
            Update password
          </button>
        </form>

        <section className="card">
          <h2 className="text-2xl font-semibold">Delete account</h2>
          <p className="mt-4 text-xl text-muted">This permanently removes your data and order history.</p>
          <button type="button" className="mt-5 border border-line px-6 py-4 text-lg hover:border-ink">
            Delete my account
          </button>
        </section>
      </div>
    </div>
  );
}
