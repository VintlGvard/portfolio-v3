import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VintlGvard — Смирнов Виталий, Full‑Stack разработчик',
  description:
    'Портфолио VintlGvard (Смирнов Виталий) — Full‑Stack разработчик. Проектирую архитектуру, собираю MVP, прототипы и продакшен‑решения на Next.js, React, Node.js, Python и современном стеке.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={inter.className}>
        <main className="pb-[60px]">{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
