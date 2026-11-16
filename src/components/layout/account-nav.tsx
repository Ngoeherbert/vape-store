"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { label: "Overview", href: "/account" },
  { label: "Orders", href: "/account/orders" },
  { label: "Addresses", href: "/account/addresses" },
  { label: "Wishlist", href: "/account/wishlist" },
  { label: "My reviews", href: "/account/reviews" },
  { label: "Notifications", href: "/account/notifications" },
  { label: "ID verification", href: "/account/verification" },
  { label: "Profile & password", href: "/account/profile" },
];

export function AccountNav() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Account"
      className="w-full overflow-hidden rounded-[3px] border border-[#e5e5e5] md:w-[240px]"
    >
      <ul className="divide-y divide-[#e5e5e5]">
        {items.map((item) => {
          const active =
            item.href === "/account"
              ? pathname === item.href
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`block px-4 py-[13px] text-[17px] text-[#111] hover:bg-[#fafafa] ${active ? "bg-[#f5f5f5] font-medium" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
