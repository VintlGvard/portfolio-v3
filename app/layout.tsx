import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { LanguageProvider } from '@/lib/i18n';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0f0a',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://vintlgvard.com'),
  title: 'VintlGvard — Vitaly Smirnov, Full-Stack Developer',
  description:
    'Portfolio of VintlGvard (Vitaly Smirnov) — Full-Stack developer. I design architecture and ship MVPs, prototypes and production solutions with Next.js, React, Node.js, Go, Python and a modern stack.',
  openGraph: {
    title: 'VintlGvard — Vitaly Smirnov, Full-Stack Developer',
    description:
      'Portfolio of VintlGvard — Full-Stack developer. MVPs, prototypes and production solutions with Next.js, React, Node.js, Go, Python.',
    url: 'https://vintlgvard.com',
    siteName: 'VintlGvard',
    locale: 'en_US',
    alternateLocale: ['ru_RU'],
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VintlGvard — Full-Stack Developer',
    description: 'Portfolio of VintlGvard — MVPs, prototypes and production solutions.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: '/',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vitaly Smirnov',
              alternateName: 'VintlGvard',
              url: 'https://vintlgvard.com',
              jobTitle: 'Full-Stack developer',
              address: { '@type': 'PostalAddress', addressCountry: 'RU' },
              sameAs: [
                'https://github.com/VintlGvard',
                'https://gitlab.com/vintlgvard',
                'https://t.me/VintlGvard',
              ],
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
