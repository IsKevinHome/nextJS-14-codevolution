export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Products (this is from layout.tsx)</h2>
    </>
  );
}
