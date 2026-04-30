import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['300', '400', '500', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'VintlGvard — Смирнов Виталий, Full‑Stack разработчик',
  description:
    'Портфолио VintlGvard (Смирнов Виталий) — Full‑Stack разработчик. Проектирую архитектуру, собираю MVP, прототипы и продакшен‑решения на Next.js, React, Node.js, Python и современном стеке.',
  openGraph: {
    title: 'VintlGvard — Смирнов Виталий, Full‑Stack разработчик',
    description:
      'Портфолио VintlGvard — Full‑Stack разработчик. MVP, прототипы и продакшен‑решения на Next.js, React, Node.js, Python.',
    url: 'https://vintlgvard.com',
    siteName: 'VintlGvard',
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VintlGvard — Full‑Stack разработчик',
    description: 'Портфолио VintlGvard — MVP, прототипы и продакшен‑решения.',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="ru"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
