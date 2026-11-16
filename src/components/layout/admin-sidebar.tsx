"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { label: string; href: string };
type Group = { title?: string; items: Item[] };

const groups: Group[] = [
  { items: [{ label: "Dashboard", href: "/admin" }] },
  {
    title: "Catalog",
    items: [
      { label: "Products", href: "/admin/products" },
      { label: "Categories", href: "/admin/categories" },
      { label: "Brands", href: "/admin/brands" },
      { label: "Attributes", href: "/admin/attributes" },
      { label: "Inventory", href: "/admin/inventory" },
    ],
  },
  {
    title: "Sales",
    items: [
      { label: "Orders", href: "/admin/orders" },
      { label: "Payments", href: "/admin/payments" },
      { label: "Customers", href: "/admin/customers" },
    ],
  },
  {
    title: "Growth",
    items: [
      { label: "Coupons", href: "/admin/marketing/coupons" },
      { label: "Promotions", href: "/admin/marketing/promotions" },
      { label: "Reviews", href: "/admin/marketing/reviews" },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Shipping", href: "/admin/shipping/zones" },
      { label: "Restrictions", href: "/admin/shipping/restrictions" },
      { label: "Tax", href: "/admin/shipping/tax" },
    ],
  },
  {
    title: "Content",
    items: [
      { label: "Pages", href: "/admin/content/pages" },
      { label: "Blog", href: "/admin/content/blog" },
      { label: "Homepage", href: "/admin/content/homepage" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Settings", href: "/admin/settings" },
      { label: "Staff", href: "/admin/team/staff" },
      { label: "Audit log", href: "/admin/audit-log" },
      { label: "Reports", href: "/admin/reports" },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/admin" ? pathname === href : pathname.startsWith(href);

  return (
    <aside className="sticky top-0 h-screen w-[240px] shrink-0 overflow-y-auto border-r border-[#e5e5e5] bg-white px-7 pb-10 pt-8">
      <Link href="/admin" className="flex items-baseline gap-2.5">
        <span className="text-[17px] font-bold tracking-[0.2em] text-[#111]">
          STORE
        </span>
        <span className="text-[13px] text-[#666]">Admin</span>
      </Link>
      <nav aria-label="Admin" className="mt-10 space-y-6">
        {groups.map((group, i) => (
          <div key={group.title ?? i}>
            {group.title && (
              <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-[#666]">
                {group.title}
              </p>
            )}
            <ul>
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`block py-[10px] text-[15px] text-[#111] hover:underline underline-offset-4 ${isActive(item.href) ? "font-semibold" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
