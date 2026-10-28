import type { Metadata } from 'next';
import { PortfolioThemeProvider } from '@portfolio/ui';

export const metadata: Metadata = {
  title: 'Taha Asadullah — Systems & Full-Stack Software Engineer',
  description:
    'Engineering portfolio of Taha Asadullah. Specialized in high-performance Rust cores, low-latency architectures, distributed data engines, and clean full-stack web applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&family=Inter:wght@200;300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          width: '100%',
          backgroundColor: '#F9F9F8',
          color: '#141413',
          fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        <PortfolioThemeProvider>{children}</PortfolioThemeProvider>
      </body>
    </html>
  );
}
