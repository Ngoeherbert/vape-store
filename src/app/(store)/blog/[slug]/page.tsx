const titles: Record<string, string> = {
  "choosing-your-first-device": "Choosing your first device",
  "nic-salts-vs-freebase": "Nic salts vs freebase",
  "when-to-change-your-coil": "When to change your coil",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // TODO: load the post from the database / CMS.
  const title = titles[slug] ?? slug.replace(/-/g, " ");

  return (
    <article className="max-w-[860px]">
      <p className="text-base uppercase tracking-wider text-[#555]">
        Blog post
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-8 text-xl text-[#555]">[AUTHOR] · [DATE]</p>
      <div className="mt-8 flex aspect-[16/10] items-center justify-center bg-[#f1f1f1] text-[#555]">
        Image
      </div>
      <p className="mt-8 text-2xl text-[#555]">[Article body appears here.]</p>
    </article>
  );
}
