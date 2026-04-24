'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error('[Global Error]', error);
  }, [error]);

  return (
    <html lang="ru">
      <body
        style={{
          background: '#050505',
          color: '#ededed',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <section
          style={{
            position: 'relative',
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '16px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.03,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              height: 12,
              width: 12,
              borderTop: '1px solid rgba(239,68,68,0.4)',
              borderLeft: '1px solid rgba(239,68,68,0.4)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              height: 12,
              width: 12,
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderRight: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              height: 12,
              width: 12,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              borderLeft: '1px solid rgba(255,255,255,0.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              height: 12,
              width: 12,
              borderBottom: '1px solid rgba(239,68,68,0.4)',
              borderRight: '1px solid rgba(239,68,68,0.4)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 512,
              width: '100%',
            }}
          >
            <div
              style={{
                marginBottom: 16,
                fontFamily: 'monospace',
                fontSize: 10,
                textTransform: 'uppercase',
                letterSpacing: '0.4em',
                color: 'rgba(239,68,68,0.6)',
              }}
            >
              Error_Code: 500
            </div>

            <h1
              style={{
                marginBottom: 8,
                fontSize: '25vw',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.05em',
                color: 'rgba(255,255,255,0.05)',
              }}
            >
              500
            </h1>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  height: 1,
                  width: 48,
                  background:
                    'linear-gradient(to right, transparent, rgba(239,68,68,0.5))',
                }}
              />
              <div
                style={{
                  height: 6,
                  width: 6,
                  transform: 'rotate(45deg)',
                  background: '#ef4444',
                }}
              />
              <div
                style={{
                  height: 1,
                  width: 48,
                  background:
                    'linear-gradient(to left, transparent, rgba(239,68,68,0.5))',
                }}
              />
            </div>

            <h2
              style={{
                marginBottom: 8,
                fontSize: 20,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#ededed',
              }}
            >
              Что-то пошло не так
            </h2>
            <p
              style={{
                marginBottom: 32,
                maxWidth: 320,
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgb(107,114,128)',
              }}
            >
              Произошла непредвиденная ошибка на сервере.
              <br />
              Попробуйте обновить страницу.
            </p>

            <div
              style={{
                marginBottom: 32,
                width: '100%',
                maxWidth: 320,
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.05)',
                background: 'rgba(255,255,255,0.02)',
                padding: 12,
                fontFamily: 'monospace',
                textAlign: 'left',
                fontSize: 11,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    height: 6,
                    width: 6,
                    borderRadius: '50%',
                    background: 'rgba(239,68,68,0.6)',
                  }}
                />
                <span
                  style={{
                    height: 6,
                    width: 6,
                    borderRadius: '50%',
                    background: 'rgba(234,179,8,0.6)',
                  }}
                />
                <span
                  style={{
                    height: 6,
                    width: 6,
                    borderRadius: '50%',
                    background: 'rgba(34,197,94,0.6)',
                  }}
                />
              </div>
              <div style={{ color: 'rgb(107,114,128)', lineHeight: 1.6 }}>
                <p>
                  <span style={{ color: '#f87171' }}>!</span> RuntimeError:
                  Internal Server Error
                </p>
                {error.digest && (
                  <p style={{ color: 'rgb(75,85,99)' }}>
                    digest: {error.digest}
                  </p>
                )}
                <p style={{ color: 'rgb(75,85,99)' }}>
                  timestamp: {new Date().toISOString()}
                </p>
              </div>
            </div>

            <button
              onClick={() => unstable_retry()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                padding: '10px 20px',
                fontFamily: 'monospace',
                fontSize: 11,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.15em',
                color: 'rgb(156,163,175)',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <span>↻</span>
              <span>Попробовать снова</span>
            </button>
          </div>
        </section>
      </body>
    </html>
  );
}
