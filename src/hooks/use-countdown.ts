"use client";
import { useEffect, useState } from "react";

/** Counts down from `seconds` and returns "mm:ss" plus an `expired` flag. */
export function useCountdown(seconds: number) {
  const [left, setLeft] = useState(seconds);
  useEffect(() => {
    if (left <= 0) return;
    const t = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [left]);
  const mm = String(Math.floor(left / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");
  return { label: `${mm}:${ss}`, expired: left <= 0 };
}
