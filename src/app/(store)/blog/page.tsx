import Link from "next/link";

const posts = [
  { slug: "choosing-your-first-device", tag: "Guides", min: 5, title: "Choosing your first device", desc: "A short guide to pods, pens and mods." },
  { slug: "nic-salts-vs-freebase", tag: "Guides", min: 4, title: "Nic salts vs freebase", desc: "What the difference means in practice." },
  { slug: "when-to-change-your-coil", tag: "Care", min: 3, title: "When to change your coil", desc: "Signs it is time and how to extend life." },
];

export default function BlogPage() {
  return (
    <>
      <h1 className="text-5xl font-semibold tracking-tight">Blog</h1>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block border border-[#e5e5e5]">
            <div className="flex aspect-[16/10] items-center justify-center bg-[#f1f1f1] text-[#555]">Image</div>
            <div className="p-7">
              <p className="text-[15px] uppercase tracking-wider text-[#555]">{p.tag} · {p.min} min</p>
              <h2 className="mt-4 text-2xl font-semibold">{p.title}</h2>
              <p className="mt-3 text-lg text-[#555]">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}