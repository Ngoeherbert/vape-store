export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md items-center px-6 py-12">
      <div className="w-full">{children}</div>
    </main>
  );
}
