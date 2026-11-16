"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { GateCard } from "@/components/shared/gate-card";
import { btnOutline, btnPrimary } from "@/lib/utils";
import { AGE_COOKIE, setCookie } from "@/lib/region";

export function AgeGate() {
  const router = useRouter();
  const next = useSearchParams().get("next") ?? "/";

  function confirm() {
    setCookie(AGE_COOKIE, "1");
    router.replace(next.startsWith("/") ? next : "/");
  }

  return (
    <GateCard>
      <h1 className="text-[32px] font-semibold leading-tight text-[#111]">
        Are you 18 or older?
      </h1>
      <p className="mx-auto mt-3 max-w-[360px] text-[17px] leading-[1.5] text-[#555]">
        This website sells nicotine products and is for adults only.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={confirm} className={btnPrimary}>
          Yes, I am 18+
        </button>
        <a
          href="https://www.google.com"
          rel="noreferrer"
          className={btnOutline}
        >
          No, leave
        </a>
      </div>
      <p className="mt-9 text-[14px] text-[#555]">
        By entering you confirm you are of legal age where you live.
      </p>
    </GateCard>
  );
}
