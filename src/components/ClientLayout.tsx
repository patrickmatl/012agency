export default function ClientLayout({
  children,
  spaceGrotesk,
  syne,
}: {
  children: React.ReactNode;
  spaceGrotesk: { variable: string };
  syne: { variable: string };
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${syne.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
