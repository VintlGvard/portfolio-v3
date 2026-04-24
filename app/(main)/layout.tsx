import Navbar from '@/components/Navbar';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <main className="pb-[60px]">{children}</main>
      <Navbar />
    </>
  );
}
