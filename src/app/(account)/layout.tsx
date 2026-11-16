import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { AccountNav } from "@/components/layout/account-nav";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader cartCount={2} />
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 pt-10 md:flex-row md:px-16">
        <AccountNav />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <SiteFooter />
    </>
  );
}
