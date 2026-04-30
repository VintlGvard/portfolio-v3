import Navbar from '@/components/Navbar';
import ClientCursorWrapper from '@/components/ui/ClientCursorWrapper';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ClientCursorWrapper />
      <main className="pb-[80px]">{children}</main>
      <Navbar />
    </>
  );
}
