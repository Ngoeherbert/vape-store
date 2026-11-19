import Link from "next/link";
import { btnOutline } from "@/lib/utils";

type Props = {
  title: string;
  value: string;
  href: string;
};

export function ReviewCard({ title, value, href }: Props) {
  return (
    <section className="flex items-start justify-between border border-line px-10 py-9">
      <div>
        <p className="text-xl">{title}</p>
        <p className="mt-2 text-xl text-muted">{value}</p>
      </div>
      <Link href={href} className={btnOutline}>
        Change
      </Link>
    </section>
  );
}
