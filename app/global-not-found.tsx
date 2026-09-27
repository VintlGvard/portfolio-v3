'use client';

import { useEffect, useState } from 'react';
import GlobalErrorShell, {
  GLOBAL_ERROR_STYLES,
} from '@/components/ui/GlobalErrorShell';

const LINK: React.CSSProperties = {
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
  textDecoration: 'none',
};

export default function GlobalNotFound() {
  const [timestamp, setTimestamp] = useState('');
  useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);

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
          code="404"
          title="Страница не найдена"
          description={
            <>
              Запрашиваемый маршрут не существует или был перемещён.
              <br />
              Попробуйте вернуться на главную.
            </>
          }
          terminal={
            <>
              <p>
                <span style={{ color: 'rgba(255,45,111,0.6)' }}>$</span>{' '}
                navigate --to requested_page
              </p>
              <p style={{ color: 'rgba(255,45,111,0.4)' }}>
                {'>'} Error: ENOENT — route not found
              </p>
              <p>
                <span style={{ color: 'rgba(255,45,111,0.6)' }}>$</span>{' '}
                navigate --to _
              </p>
            </>
          }
          timestamp={timestamp}
          action={
            <a href="/" style={LINK}>
              <span>←</span>
              <span>На главную</span>
            </a>
          }
        />
      </body>
    </html>
  );
}
