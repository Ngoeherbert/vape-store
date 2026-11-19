import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { btnOutline, btnPrimary } from "@/lib/utils";

type Props = {
  code: string;
  title: string;
  message: string;
  onRetry?: () => void;
};

export function StatusPage({ code, title, message, onRetry }: Props) {
  return (
    <>
      <SiteHeader cartCount={2} />
      <main className="mx-auto flex min-h-[calc(100vh-420px)] max-w-[640px] flex-col items-center px-6 pb-24 pt-24 text-center md:pt-48">
        <p className="text-[96px] font-bold leading-none tracking-tight text-ink">{code}</p>
        <h1 className="mt-8 text-[28px] font-semibold text-ink">{title}</h1>
        <p className="mt-3 text-[17px] text-muted">{message}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {onRetry ? (
            <button type="button" onClick={onRetry} className={btnPrimary}>Try again</button>
          ) : (
            <Link href="/" className={btnPrimary}>Back to home</Link>
          )}
          <Link href="/contact" className={btnOutline}>Contact support</Link>
        </div>
        <p className="mt-14 max-w-[480px] text-[16px] leading-[1.6] text-muted">
          Something broke on our side? Error pages (500, maintenance) use this same layout.
        </p>
      </main>
      <SiteFooter />
    </>
  );
}
