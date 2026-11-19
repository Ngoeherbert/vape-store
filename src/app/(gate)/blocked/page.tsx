import Link from "next/link";
import { GateCard } from "@/components/shared/gate-card";

export default function BlockedPage() {
  return (
    <GateCard>
      <h1 className="text-[32px] font-semibold leading-tight text-ink">
        We can&apos;t ship to your region
      </h1>
      <p className="mx-auto mt-3 max-w-[330px] text-[17px] leading-[1.5] text-muted">
        Due to local regulations, we&apos;re unable to sell or ship nicotine
        products to your selected location.
      </p>
      <p className="mt-8 text-[15px] text-muted">
        Selected the wrong region?{" "}
        <Link href="/region" className="text-ink underline">
          Change location
        </Link>
      </p>
    </GateCard>
  );
}
