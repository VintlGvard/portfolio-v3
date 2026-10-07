'use client';

import { useEffect } from 'react';
import GlobalErrorShell, {
  GLOBAL_ERROR_STYLES,
} from '@/components/ui/GlobalErrorShell';

const BTN: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  borderRadius: 0,
  border: '2px solid rgba(240,235,227,0.1)',
  background: 'rgba(240,235,227,0.03)',
  padding: '10px 20px',
  fontFamily: 'monospace',
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: '#6b7b6b',
  cursor: 'pointer',
};

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <style>{GLOBAL_ERROR_STYLES}</style>
      </head>
      <body
        style={{
          background: '#0a0f0a',
          color: '#f0ebe3',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <GlobalErrorShell
          code="500"
          title="Something went wrong"
          description={
            <>
              An unexpected server error occurred.
              <br />
              Try refreshing the page.
              <br />
              <span style={{ color: 'rgba(107,123,107,0.6)' }}>
                Произошла непредвиденная ошибка. Попробуйте обновить страницу.
              </span>
            </>
          }
          terminal={
            <p>
              <span style={{ color: 'rgba(255,45,111,0.6)' }}>!</span>{' '}
              RuntimeError: Internal Server Error
            </p>
          }
          digest={error.digest}
          action={
            <button onClick={() => reset()} style={BTN}>
              <span>↻</span>
              <span>Try again · Попробовать снова</span>
            </button>
          }
        />
      </body>
    </html>
  );
}
