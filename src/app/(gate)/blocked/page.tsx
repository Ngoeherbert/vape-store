import Link from "next/link";
import { GateCard } from "@/components/shared/gate-card";
import { btnOutline } from "@/lib/utils";

export const metadata = { title: "Unavailable in your region · Store" };

export default function BlockedPage() {
  return (
    <GateCard>
      <h1 className="text-[32px] font-semibold leading-tight text-[#111]">
        We can&apos;t ship to your location
      </h1>
      <p className="mx-auto mt-3 max-w-[330px] text-[17px] leading-[1.5] text-[#555]">
        Due to local regulations, we are unable to sell or deliver our products
        in your region.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4">
        <Link href="/region" className={btnOutline}>
          Choose another region
        </Link>
        <Link href="/contact" className={btnOutline}>
          Contact support
        </Link>
      </div>
    </GateCard>
  );
}
