export default function AuthCenterLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen">
      {children}
    </main>
  );
}
