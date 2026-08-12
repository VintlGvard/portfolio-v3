import Navbar from '@/components/Navbar';
import ClientCursorWrapper from '@/components/ui/ClientCursorWrapper';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10000] focus:rounded focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-pink)]"
      >
        К основному содержимому
      </a>
      <ClientCursorWrapper />
      <main id="main" className="pb-[80px]">
        {children}
      </main>
      <Navbar />
    </>
  );
}
