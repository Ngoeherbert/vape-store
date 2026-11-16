"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const nav = [
  ["Overview", "/account"],
  ["Orders", "/account/orders"],
  ["Addresses", "/account/addresses"],
  ["Wishlist", "/account/wishlist"],
  ["My reviews", "/account/reviews"],
  ["Notifications", "/account/notifications"],
  ["ID verification", "/account/verification"],
  ["Profile & password", "/account/profile"],
];

export default function VerificationPage() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooBig = !!file && file.size > 10 * 1024 * 1024;

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-[#111]">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-6 pb-24 pt-14">
        <h1 className="text-5xl font-semibold tracking-tight">ID verification</h1>
        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          <nav aria-label="Account" className="self-start border border-[#e5e5e5]">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="block border-b border-[#e5e5e5] px-6 py-5 text-lg last:border-b-0">{label}</Link>
            ))}
          </nav>

          <div className="max-w-[1000px]">
            <section className="flex items-center justify-between border border-[#e5e5e5] p-9">
              <div>
                <h2 className="text-2xl font-semibold">Status</h2>
                <p className="mt-1 text-xl text-[#555]">Upload a government ID to confirm your age.</p>
              </div>
              <span className="border border-[#d4d4d4] px-4 py-2 text-base">Not submitted</span>
            </section>

            <form className="mt-8 border border-[#e5e5e5] p-9" onSubmit={(e) => { e.preventDefault(); if (!file || tooBig) return; /* TODO: presigned upload to /api/uploads/presign, then submit for review */ }}>
              <h2 className="text-3xl font-semibold">Upload your document</h2>
              <label className="mt-6 block text-[15px] text-[#555]">Document type
                <select name="docType" defaultValue="Passport" className="mt-2 h-[68px] w-full border border-[#d4d4d4] bg-white px-4 text-lg text-[#111]">
                  <option>Passport</option>
                  <option>Driving licence</option>
                  <option>National ID card</option>
                </select>
              </label>

              <div
                className="mt-6 flex min-h-[300px] flex-col items-center justify-center border border-dashed border-[#999] bg-[#fafafa] px-6 text-center"
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => { e.preventDefault(); setFile(e.dataTransfer.files?.[0] ?? null); }}
              >
                <p className="text-xl">Drag a file here or</p>
                <button type="button" onClick={() => inputRef.current?.click()} className="mt-4 border border-[#d4d4d4] bg-white px-6 py-4 text-lg">Choose file</button>
                <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.pdf" hidden onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                <p className="mt-4 text-[15px] text-[#555]">JPG, PNG or PDF · max 10 MB</p>
                {file && <p className={`mt-3 text-lg ${tooBig ? "text-red-700" : ""}`}>{file.name}{tooBig ? " is larger than 10 MB" : ""}</p>}
              </div>

              <div className="mt-6 border border-[#e5e5e5] bg-[#fafafa] p-6">
                <p className="font-semibold">Tips</p>
                <p className="mt-1 text-lg text-[#555]">Make sure your date of birth is clearly visible and the image is not blurred.</p>
              </div>

              <button type="submit" disabled={!file || tooBig} className="mt-6 bg-[#111] px-9 py-5 text-xl text-white disabled:opacity-40">Submit for review</button>
            </form>

            <p className="mt-8 text-lg text-[#555]">Your document is stored securely and used only to verify your age.</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}