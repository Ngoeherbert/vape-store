/** Placeholder box. Swap the body for a real QR render (e.g. the `qrcode` package) using `value`. */
export function QrCode({ value }: { value: string }) {
  return (
    <div
      role="img"
      aria-label="Payment QR code"
      data-value={value}
      className="flex aspect-square w-full max-w-[272px] items-center justify-center border border-[#d4d4d4] text-[#555]"
    >
      QR code
    </div>
  );
}
