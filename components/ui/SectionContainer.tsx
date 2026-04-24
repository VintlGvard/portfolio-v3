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
      className={`min-h-[80vh] bg-background px-4 py-16 text-foreground sm:px-6 sm:py-20 md:min-h-screen md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
