import { Suspense } from "react";
import { AgeGate } from "@/components/store/age-gate";

export const metadata = { title: "Age check · Store" };

export default function AgeCheckPage() {
  return (
    <Suspense>
      <AgeGate />
    </Suspense>
  );
}