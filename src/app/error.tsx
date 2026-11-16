"use client";

import { StatusPage } from "@/components/shared/status-page";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <StatusPage
      code="500"
      title="Something went wrong"
      message="An error occurred on our side. Please try again in a moment."
      onRetry={reset}
    />
  );
}
