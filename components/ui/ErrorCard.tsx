'use client';

import type { ReactNode } from 'react';

interface ErrorCardProps {
  code: '404' | '500';
  title: string;
  description: ReactNode;
  terminal: ReactNode;
  action: ReactNode;
  digest?: string;
}

export default function ErrorCard({
  code,
  title,
  description,
  terminal,
  action,
  digest,
}: ErrorCardProps) {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 md:py-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent-pink/5 blur-[150px] animate-drift" />
        <div
          className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent-olive/8 blur-[120px] animate-drift"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-8 h-16 w-16 border-t-2 border-l-2 border-foreground/10 sm:left-16 sm:top-16" />
        <div className="absolute bottom-24 right-8 h-16 w-16 border-b-2 border-r-2 border-accent-pink/20 sm:bottom-32 sm:right-16" />
        <div
          className="absolute right-[15%] top-[25%] h-3 w-3 bg-accent-pink/30 animate-float"
          style={{ borderRadius: '0' }}
        />
        <div
          className="absolute left-[10%] bottom-[30%] h-4 w-4 rotate-45 border border-accent-pink/10 animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div className="absolute left-0 top-[45%] h-[2px] w-[30%] bg-gradient-to-r from-accent-pink/20 to-transparent" />
      </div>

      <div className="pointer-events-none absolute left-0 top-0 h-[2px] w-full overflow-hidden">
        <div className="h-full w-full bg-accent-pink/10 animate-scan" />
      </div>

      <div className="pointer-events-none absolute right-4 top-0 hidden h-full w-[2px] overflow-hidden bg-foreground/5 sm:right-12 sm:block">
        <div className="h-20 w-full bg-accent-pink shadow-[0_0_20px_rgba(255,45,111,0.3)] animate-scan" />
      </div>

      <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-accent-pink/30 sm:top-8 sm:left-8" />
      <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-foreground/8 sm:top-8 sm:right-8" />
      <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-foreground/8 sm:bottom-8 sm:left-8" />
      <div className="absolute bottom-4 right-4 h-4 w-4 border-b-2 border-r-2 border-accent-pink/30 sm:bottom-8 sm:right-8" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.4em] text-accent-pink/50 sm:mb-6 sm:text-[10px]">
          Error_Code: {code}
        </div>

        <h1 className="mb-4 text-[25vw] font-bold leading-none uppercase tracking-[-0.04em] text-foreground/[0.06] sm:text-[20vw] md:text-[15vw]">
          {code}
        </h1>

        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-accent-pink/30 sm:w-16" />
          <div
            className="h-2 w-2 rotate-45 bg-accent-pink/40"
            style={{ borderRadius: '0' }}
          />
          <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-accent-pink/30 sm:w-16" />
        </div>

        <h2 className="mb-2 text-xl font-bold tracking-[-0.02em] uppercase sm:mb-3 sm:text-2xl md:text-3xl">
          {title}
        </h2>
        <p className="mb-8 max-w-xs text-xs font-light leading-relaxed text-muted sm:mb-10 sm:max-w-md sm:text-sm md:text-base">
          {description}
        </p>

        <div
          className="mb-8 w-full max-w-[280px] border-2 border-foreground/5 bg-foreground/[0.02] p-4 font-mono text-left text-[10px] sm:mb-10 sm:max-w-sm sm:text-[11px]"
          style={{ borderRadius: '0' }}
        >
          <div className="space-y-1 text-muted/50">
            {terminal}
            {digest && <p className="text-muted/30">digest: {digest}</p>}
          </div>
        </div>

        {action}
      </div>
    </section>
  );
}
