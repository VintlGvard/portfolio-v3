'use client';

import { useEffect, useState } from 'react';

const GLITCH_CHARS = '!@#$%^&*()_+-=[]{}|;:<>?/~`';

function GlitchText({ text }: { text: string }) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    let frame = 0;
    const maxFrames = 20;
    const interval = setInterval(() => {
      frame++;
      if (frame >= maxFrames) {
        setDisplay(text);
        clearInterval(interval);
        return;
      }
      setDisplay(
        text
          .split('')
          .map((ch) =>
            Math.random() > 0.6
              ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
              : ch
          )
          .join('')
      );
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
}

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
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
        `}</style>
      </head>
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
              left: 0,
              height: 2,
              width: '100%',
              background: 'rgba(59,130,246,0.2)',
              boxShadow: '0 0 20px rgba(59,130,246,0.3)',
              top: `${scanY}%`,
              pointerEvents: 'none',
            }}
          />

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
              borderTop: '1px solid rgba(59,130,246,0.4)',
              borderLeft: '1px solid rgba(59,130,246,0.4)',
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
              borderBottom: '1px solid rgba(59,130,246,0.4)',
              borderRight: '1px solid rgba(59,130,246,0.4)',
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
                color: 'rgba(59,130,246,0.6)',
              }}
            >
              Error_Code: 404
            </div>

            <h1
              style={{
                position: 'relative',
                marginBottom: 8,
                fontSize: '25vw',
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: '-0.05em',
                color: 'rgba(255,255,255,0.05)',
              }}
            >
              <GlitchText text="404" />
              <span
                style={{
                  position: 'absolute',
                  left: 2,
                  top: 0,
                  color: 'rgba(239,68,68,0.2)',
                  mixBlendMode: 'screen',
                }}
              >
                <GlitchText text="404" />
              </span>
              <span
                style={{
                  position: 'absolute',
                  left: -2,
                  top: 0,
                  color: 'rgba(59,130,246,0.2)',
                  mixBlendMode: 'screen',
                }}
              >
                <GlitchText text="404" />
              </span>
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
                    'linear-gradient(to right, transparent, rgba(59,130,246,0.5))',
                }}
              />
              <div
                style={{
                  height: 6,
                  width: 6,
                  transform: 'rotate(45deg)',
                  background: '#3b82f6',
                }}
              />
              <div
                style={{
                  height: 1,
                  width: 48,
                  background:
                    'linear-gradient(to left, transparent, rgba(59,130,246,0.5))',
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
              Страница не найдена
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
              Запрашиваемый маршрут не существует или был перемещён.
              <br />
              Попробуйте вернуться на главную.
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
                  <span style={{ color: '#60a5fa' }}>$</span> navigate --to
                  requested_page
                </p>
                <p style={{ color: '#f87171' }}>
                  {'>'} Error: ENOENT — route not found
                </p>
                <p>
                  <span style={{ color: '#60a5fa' }}>$</span> navigate --to
                  <span
                    style={{ animation: 'pulse 1s infinite', color: '#fff' }}
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
                borderRadius: 9999,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                padding: '10px 20px',
                fontFamily: 'monospace',
                fontSize: 11,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.15em',
                color: 'rgb(156,163,175)',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <span>←</span>
              <span>Вернуться на главную</span>
            </a>
          </div>
        </section>
      </body>
    </html>
  );
}
