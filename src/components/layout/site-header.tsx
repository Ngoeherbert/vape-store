import Link from "next/link";

const nav = [
  { label: "Devices", href: "/categories/devices" },
  { label: "E-liquids", href: "/categories/e-liquids" },
  { label: "Pods & coils", href: "/categories/pods" },
  { label: "Disposables", href: "/categories/disposables" },
  { label: "Brands", href: "/brands" },
  { label: "Deals", href: "/deals" },
];

const iconProps = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function SiteHeader({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <header className="w-full">
      <div className="bg-[#111] px-4 py-[7px] text-center text-[14px] leading-5 text-white">
        Free shipping on orders over $60 · Adults 18+ only
      </div>
      <div className="border-b border-[#e5e5e5]">
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-center px-6 md:px-16">
          <Link
            href="/"
            className="mr-8 text-[20px] font-bold tracking-[0.2em] text-[#111]"
          >
            STORE
          </Link>
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] text-[#111] hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-7 text-[#111]">
            <Link href="/search" aria-label="Search">
              <svg {...iconProps}>
                <circle cx="11" cy="11" r="7.5" />
                <path d="m20.5 20.5-4-4" />
              </svg>
            </Link>
            <Link href="/account" aria-label="Account">
              <svg {...iconProps}>
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.2 3.6-7 8-7s8 2.8 8 7" />
              </svg>
            </Link>
            <Link href="/cart" className="flex items-center gap-3 text-[16px]">
              <svg {...iconProps}>
                <path d="M5 8h14l-1 13H6L5 8Z" />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" />
              </svg>
              <span>Cart ({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
