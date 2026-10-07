'use client';

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
          code="404"
          title="Page not found"
          description={
            <>
              The requested route does not exist or has been moved.
              <br />
              Try going back home.
              <br />
              <span style={{ color: 'rgba(107,123,107,0.6)' }}>
                Маршрут не найден. Вернитесь на главную.
              </span>
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
          action={
            <a href="/" style={LINK}>
              <span>←</span>
              <span>Home · На главную</span>
            </a>
          }
        />
      </body>
    </html>
  );
}
