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
      className={`relative min-h-[80vh] bg-background px-4 py-16 text-foreground sm:px-8 sm:py-20 md:min-h-screen md:py-24 ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent-olive/5 blur-[120px] animate-drift" />
        <div
          className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-accent-pink/[0.03] blur-[150px] animate-drift"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="absolute left-[50%] top-[10%] h-[300px] w-[300px] rounded-full bg-accent-pink/[0.03] blur-[100px] animate-drift"
          style={{ animationDelay: '-3s' }}
        />
        <div
          className="absolute right-[20%] bottom-[5%] h-[250px] w-[250px] rounded-full bg-accent-olive/[0.03] blur-[80px] animate-drift"
          style={{ animationDelay: '-9s' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[8%] top-[12%]">
          <div className="h-[2px] w-6 bg-foreground/5" />
          <div className="absolute left-1/2 top-1/2 h-6 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-foreground/5" />
        </div>
        <div className="absolute bottom-[15%] left-[5%] flex gap-1.5">
          <div
            className="h-1 w-1 bg-accent-pink/10"
            style={{ borderRadius: '0' }}
          />
          <div
            className="h-1 w-1 bg-accent-olive/15"
            style={{ borderRadius: '0' }}
          />
          <div
            className="h-1 w-1 bg-accent-pink/8"
            style={{ borderRadius: '0' }}
          />
        </div>
        <div className="absolute right-[3%] top-[55%] h-[2px] w-12 bg-accent-pink/5" />
      </div>

      {children}
    </section>
  );
}
