export default function GateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-soft px-4 py-10">
      {children}
    </main>
  );
}
