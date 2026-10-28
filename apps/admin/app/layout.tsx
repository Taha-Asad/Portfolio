import type { Metadata } from 'next';
import { PortfolioThemeProvider } from '@portfolio/ui';

export const metadata: Metadata = {
  title: 'Portfolio Manager // Taha Asadullah',
  description: 'Content management terminal for personal software engineering portfolio.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, overflow: 'hidden', height: '100vh', width: '100vw' }}>
        <PortfolioThemeProvider>{children}</PortfolioThemeProvider>
      </body>
    </html>
  );
}
