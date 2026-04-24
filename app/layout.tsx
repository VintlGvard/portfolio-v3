import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
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
    <html lang="ru" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
