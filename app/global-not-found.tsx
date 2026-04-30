'use client';

import { useEffect, useState } from 'react';

export default function GlobalNotFound() {
  const [scanY, setScanY] = useState(0);

  useEffect(() => {
    let raf: number;
    let y = 0;
    const animate = () => {
      y = (y + 0.5) % 100;
      setScanY(y);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <html lang="ru">
      <head>
        <style>{`
          @keyframes scan {
            0% { transform: translateY(-10px); }
            100% { transform: translateY(800px); }
          }
          @keyframes drift {
            0% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(30px, -20px) scale(1.05); }
            100% { transform: translate(-20px, 10px) scale(0.95); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            33% { transform: translateY(-8px) rotate(0.5deg); }
            66% { transform: translateY(4px) rotate(-0.3deg); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
        `}</style>
      </head>
      <body
        style={{
          background: '#0a0f0a',
          color: '#f0ebe3',
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
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: '-10%',
                top: '10%',
                height: 500,
                width: 500,
                borderRadius: '50%',
                background: 'rgba(255,45,111,0.05)',
                filter: 'blur(150px)',
                animation: 'drift 12s ease-in-out infinite alternate',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-5%',
                left: '-5%',
                height: 400,
                width: 400,
                borderRadius: '50%',
                background: 'rgba(45,74,45,0.08)',
                filter: 'blur(120px)',
                animation: 'drift 12s ease-in-out infinite alternate',
                animationDelay: '-4s',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 32,
                top: 32,
                height: 64,
                width: 64,
                borderTop: '2px solid rgba(240,235,227,0.1)',
                borderLeft: '2px solid rgba(240,235,227,0.1)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 96,
                right: 32,
                height: 64,
                width: 64,
                borderBottom: '2px solid rgba(255,45,111,0.2)',
                borderRight: '2px solid rgba(255,45,111,0.2)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                right: '15%',
                top: '25%',
                height: 12,
                width: 12,
                background: 'rgba(255,45,111,0.3)',
                animation: 'float 6s ease-in-out infinite',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: '10%',
                bottom: '30%',
                height: 16,
                width: 16,
                transform: 'rotate(45deg)',
                border: '1px solid rgba(255,45,111,0.1)',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '-2s',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: '45%',
                height: 2,
                width: '30%',
                background:
                  'linear-gradient(to right, rgba(255,45,111,0.2), transparent)',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              left: 0,
              height: 2,
              width: '100%',
              background: 'rgba(255,45,111,0.1)',
              top: `${scanY}%`,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'absolute',
              right: 16,
              top: 0,
              height: '100%',
              width: 2,
              overflow: 'hidden',
              background: 'rgba(240,235,227,0.05)',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                height: 80,
                width: '100%',
                background: '#ff2d6f',
                boxShadow: '0 0 20px rgba(255,45,111,0.3)',
                animation: 'scan 8s linear infinite',
              }}
            />
          </div>

          <div
            style={{
              position: 'absolute',
              top: 16,
              left: 16,
              height: 16,
              width: 16,
              borderTop: '2px solid rgba(255,45,111,0.3)',
              borderLeft: '2px solid rgba(255,45,111,0.3)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              height: 16,
              width: 16,
              borderTop: '2px solid rgba(240,235,227,0.08)',
              borderRight: '2px solid rgba(240,235,227,0.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              left: 16,
              height: 16,
              width: 16,
              borderBottom: '2px solid rgba(240,235,227,0.08)',
              borderLeft: '2px solid rgba(240,235,227,0.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 16,
              right: 16,
              height: 16,
              width: 16,
              borderBottom: '2px solid rgba(255,45,111,0.3)',
              borderRight: '2px solid rgba(255,45,111,0.3)',
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
                color: 'rgba(255,45,111,0.5)',
              }}
            >
              Error_Code: 404
            </div>

            <h1
              style={{
                marginBottom: 8,
                fontSize: '25vw',
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'rgba(240,235,227,0.06)',
                textTransform: 'uppercase',
              }}
            >
              404
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
                  height: 2,
                  width: 48,
                  background:
                    'linear-gradient(to right, transparent, rgba(255,45,111,0.3))',
                }}
              />
              <div
                style={{
                  height: 8,
                  width: 8,
                  transform: 'rotate(45deg)',
                  background: 'rgba(255,45,111,0.4)',
                }}
              />
              <div
                style={{
                  height: 2,
                  width: 48,
                  background:
                    'linear-gradient(to left, transparent, rgba(255,45,111,0.3))',
                }}
              />
            </div>

            <h2
              style={{
                marginBottom: 8,
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#f0ebe3',
                textTransform: 'uppercase',
              }}
            >
              Страница не найдена
            </h2>
            <p
              style={{
                marginBottom: 32,
                maxWidth: 320,
                fontSize: 13,
                fontWeight: 300,
                lineHeight: 1.6,
                color: '#6b7b6b',
              }}
            >
              Запрашиваемый маршрут не существует или был перемещён.
              <br />
              Попробуйте вернуться на главную.
            </p>

            <div
              style={{
                marginBottom: 32,
                width: '100%',
                maxWidth: 320,
                border: '2px solid rgba(240,235,227,0.05)',
                background: 'rgba(240,235,227,0.02)',
                padding: 16,
                fontFamily: 'monospace',
                textAlign: 'left',
                fontSize: 11,
                borderRadius: 0,
              }}
            >
              <div style={{ color: 'rgba(107,123,107,0.5)', lineHeight: 1.6 }}>
                <p>
                  <span style={{ color: 'rgba(255,45,111,0.6)' }}>$</span>{' '}
                  navigate --to requested_page
                </p>
                <p style={{ color: 'rgba(255,45,111,0.4)' }}>
                  {'>'} Error: ENOENT — route not found
                </p>
                <p>
                  <span style={{ color: 'rgba(255,45,111,0.6)' }}>$</span>{' '}
                  navigate --to
                  <span
                    style={{
                      animation: 'pulse 1s infinite',
                      color: 'rgba(240,235,227,0.6)',
                    }}
                  >
                    {' '}
                    _
                  </span>
                </p>
              </div>
            </div>

            <a
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                borderRadius: 0,
                border: '2px solid rgba(240,235,227,0.1)',
                background: 'rgba(240,235,227,0.03)',
                padding: '10px 20px',
                fontFamily: 'monospace',
                fontSize: 11,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#6b7b6b',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <span>←</span>
              <span>На главную</span>
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
