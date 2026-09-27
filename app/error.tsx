'use client';

import { useEffect } from 'react';
import ErrorCard from '@/components/ui/ErrorCard';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[App Error]', error);
  }, [error]);

  return (
    <ErrorCard
      code="500"
      title="Что-то пошло не так"
      description={
        <>
          Произошла непредвиденная ошибка на сервере.
          <br />
          Попробуйте обновить страницу.
        </>
      }
      terminal={
        <p>
          <span className="text-accent-pink/60">!</span> RuntimeError: Internal
          Server Error
        </p>
      }
      digest={error.digest}
      action={
        <button
          onClick={() => reset()}
          className="group relative inline-flex items-center gap-2 border-2 border-foreground/10 bg-foreground/[0.03] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-all duration-300 hover:border-accent-pink/30 hover:bg-accent-pink/5 hover:text-foreground sm:gap-3 sm:px-6 sm:py-3 sm:text-xs"
          style={{ borderRadius: '0' }}
        >
          <span className="transition-transform duration-300 group-hover:rotate-180">
            ↻
          </span>
          <span>Попробовать снова</span>
        </button>
      }
    />
  );
}
