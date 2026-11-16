import Link from "next/link";

export function ReviewCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href: string;
}) {
  return (
    <section className="flex items-start justify-between border border-[#e5e5e5] px-10 py-9">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-xl text-[#555]">{value}</p>
      </div>
      <Link href={href} className="text-lg underline">
        Edit
      </Link>
    </section>
  );
}
