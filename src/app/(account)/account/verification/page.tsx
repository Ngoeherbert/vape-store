"use client";
import { useRef, useState } from "react";
import { btnPrimary } from "@/lib/utils";

export default function VerificationPage() {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const tooBig = !!file && file.size > 10 * 1024 * 1024;

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 pt-14">
      <h1 className="text-h1">ID verification</h1>
      <div className="mt-14 max-w-[1000px]">
        <section className="card">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Status</h2>
              <p className="mt-1 text-xl text-muted">Upload a government ID to confirm your age.</p>
            </div>
            <span className="border border-line px-4 py-2 text-base">Not submitted</span>
          </div>
        </section>

        <form className="mt-8 card" onSubmit={(e) => { e.preventDefault(); if (!file || tooBig) return; /* TODO: presigned upload to /api/uploads/presign, then submit for review */ }}>
          <h2 className="text-3xl font-semibold">Upload your document</h2>
          <label className="mt-6 block text-[15px] text-muted">Document type
            <select name="docType" defaultValue="Passport" className="mt-2 h-[3rem] w-full border border-line bg-canvas px-4 text-lg text-ink">
              <option>Passport</option>
              <option>Driving licence</option>
              <option>National ID card</option>
            </select>
          </label>

          <div
            className="mt-6 flex min-h-[300px] flex-col items-center justify-center border border-dashed border-[#999] bg-soft px-6 text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); setFile(e.dataTransfer.files?.[0] ?? null); }}
          >
            <p className="text-xl">Drag a file here or</p>
            <button type="button" onClick={() => inputRef.current?.click()} className="mt-4 border border-line bg-canvas px-6 py-4 text-lg">
              Choose file
            </button>
            <input ref={inputRef} type="file" accept=".jpg,.jpeg,.png,.pdf" hidden onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            <p className="mt-4 text-[15px] text-muted">JPG, PNG or PDF · max 10 MB</p>
            {file && <p className={`mt-3 text-lg ${tooBig ? "text-red-700" : ""}`}>{file.name}{tooBig ? " is larger than 10 MB" : ""}</p>}
          </div>

          <div className="card">
            <p className="font-semibold">Tips</p>
            <p className="mt-1 text-lg text-muted">Make sure your date of birth is clearly visible and the image is not blurred.</p>
          </div>

          <button type="submit" disabled={!file || tooBig} className={btnPrimary}>
            Submit for review
          </button>
        </form>

        <p className="mt-8 text-lg text-muted">Your document is stored securely and used only to verify your age.</p>
      </div>
    </div>
  );
}
