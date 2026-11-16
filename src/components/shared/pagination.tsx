import Link from "next/link";

const base = "border border-line px-4 py-2.5 text-base hover:border-ink";

export function Pagination({
  page,
  totalPages,
  basePath,
}: {
  page: number;
  totalPages: number;
  basePath: string;
}) {
  const href = (p: number) => `${basePath}?page=${p}`;
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-3"
    >
      <Link
        href={href(Math.max(1, page - 1))}
        aria-disabled={page === 1}
        className={`${base} ${page === 1 ? "pointer-events-none opacity-40" : ""}`}
      >
        Previous
      </Link>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
        <Link
          key={p}
          href={href(p)}
          aria-current={p === page ? "page" : undefined}
          className={`${base} min-w-12 text-center ${
            p === page ? "border-ink bg-ink text-white" : ""
          }`}
        >
          {p}
        </Link>
      ))}
      <Link
        href={href(Math.min(totalPages, page + 1))}
        aria-disabled={page === totalPages}
        className={`${base} ${page === totalPages ? "pointer-events-none opacity-40" : ""}`}
      >
        Next
      </Link>
    </nav>
  );
}
