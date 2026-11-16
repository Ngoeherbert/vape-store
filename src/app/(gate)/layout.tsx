export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fafafa] px-4 py-10">
      {children}
    </main>
  );
}
