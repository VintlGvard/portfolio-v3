'use client';

import { useEffect, useState } from 'react';
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
  const [timestamp, setTimestamp] = useState('');
  useEffect(() => {
    console.error('[Global Error]', error);
    setTimestamp(new Date().toISOString());
  }, [error]);

  return (
    <html lang="ru">
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
              <span style={{ color: 'rgba(255,45,111,0.6)' }}>!</span>{' '}
              RuntimeError: Internal Server Error
            </p>
          }
          digest={error.digest}
          timestamp={timestamp}
          action={
            <button onClick={() => reset()} style={BTN}>
              <span>↻</span>
              <span>Попробовать снова</span>
            </button>
          }
        />
      </body>
    </html>
  );
}
