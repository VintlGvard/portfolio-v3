import type { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionContainer({
  id,
  className = '',
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`min-h-screen bg-[#050505] px-6 py-20 text-white sm:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
