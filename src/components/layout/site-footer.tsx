import Link from "next/link";

const columns = [
  {
    title: "Shop",
    links: [
      ["Devices", "/categories/devices"],
      ["E-liquids", "/categories/e-liquids"],
      ["Bundles", "/bundles"],
    ],
  },
  {
    title: "Help",
    links: [
      ["Contact", "/contact"],
      ["FAQ", "/faq"],
      ["Track order", "/track-order"],
      ["Returns", "/returns"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Terms", "/terms"],
      ["Privacy", "/privacy"],
      ["Cookies", "/cookies"],
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-footer">
      <div className="mx-auto max-w-[1280px] px-6 pt-12 md:px-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr] md:gap-0">
          <div>
            <p className="text-[20px] font-bold tracking-[0.2em] text-ink wordmark">
              STORE
            </p>
            <p className="mt-4 max-w-[240px] text-[16px] leading-[21px] text-muted">
              Nicotine products for adults. Not for sale to anyone under 18.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-[16px] font-semibold text-ink">
                {col.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[16px] leading-[21px] text-muted hover:text-ink"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-line py-6 text-[14px] text-muted">
          WARNING: This product contains nicotine, a highly addictive substance.
          © 2026 Store
        </div>
      </div>
    </footer>
  );
}
