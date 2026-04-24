'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error('[App Error]', error);
  }, [error]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 md:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-4 left-4 h-3 w-3 border-t border-l border-red-500/40 sm:top-8 sm:left-8 sm:h-4 sm:w-4" />
      <div className="absolute top-4 right-4 h-3 w-3 border-t border-r border-white/10 sm:top-8 sm:right-8 sm:h-4 sm:w-4" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/10 sm:bottom-8 sm:left-8 sm:h-4 sm:w-4" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-red-500/40 sm:bottom-8 sm:right-8 sm:h-4 sm:w-4" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-red-500/60 sm:mb-6 sm:text-[10px] sm:tracking-[0.4em]">
          Error_Code: 500
        </div>

        <h1 className="mb-2 text-[25vw] font-black leading-none tracking-tighter text-white/5 sm:text-[20vw] md:text-[15vw]">
          500
        </h1>

        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-red-500/50 sm:w-16" />
          <div className="h-1.5 w-1.5 rotate-45 bg-red-500" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-red-500/50 sm:w-16" />
        </div>

        <h2 className="mb-2 text-xl font-semibold tracking-tight sm:mb-3 sm:text-2xl md:text-3xl">
          Что-то пошло не так
        </h2>
        <p className="mb-8 max-w-xs text-xs font-light leading-relaxed text-gray-500 sm:mb-10 sm:max-w-md sm:text-sm md:text-base">
          Произошла непредвиденная ошибка на сервере.
          <br />
          Попробуйте обновить страницу.
        </p>

        <div className="mb-8 w-full max-w-[280px] rounded-lg border border-white/5 bg-white/[0.02] p-3 font-mono text-left text-[10px] sm:mb-10 sm:max-w-sm sm:p-4 sm:text-[11px]">
          <div className="mb-2 flex items-center gap-1.5 sm:gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/60 sm:h-2 sm:w-2" />
          </div>
          <div className="space-y-1 text-gray-500">
            <p>
              <span className="text-red-400">!</span> RuntimeError: Internal
              Server Error
            </p>
            {error.digest && (
              <p className="text-gray-600">digest: {error.digest}</p>
            )}
            <p className="text-gray-600">
              timestamp: {new Date().toISOString()}
            </p>
          </div>
        </div>

        <button
          onClick={() => unstable_retry()}
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400 transition-all duration-300 hover:border-red-500/30 hover:bg-red-500/5 hover:text-white sm:gap-3 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.2em]"
        >
          <span className="transition-transform duration-300 group-hover:rotate-180">
            ↻
          </span>
          <span>Попробовать снова</span>
        </button>
      </div>
    </section>
  );
}
