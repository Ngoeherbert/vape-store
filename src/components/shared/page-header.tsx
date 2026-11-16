import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-muted">
      {items.map((c, i) => (
        <span key={c.label}>
          {i > 0 && " / "}
          {c.href ? (
            <Link href={c.href} className="hover:text-ink">
              {c.label}
            </Link>
          ) : (
            c.label
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHeader({
  title,
  crumbs,
  children,
}: {
  title: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <div className="pt-14">
      {crumbs && <Breadcrumbs items={crumbs} />}
      <div className="mt-6 flex items-end justify-between gap-6">
        <h1 className="text-5xl font-semibold tracking-tight">{title}</h1>
        {children}
      </div>
    </div>
  );
}
