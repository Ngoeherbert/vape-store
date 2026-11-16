import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: replace with the count from cart-store / server cart
  return (
    <>
      <SiteHeader cartCount={2} />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}
