export const metadata = {
  title: 'Codevolution',
  description: 'Following youtube tutorials by Codevolution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: 'lightgrey', padding: '1rem' }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
