import type { ReactNode } from 'react';

export const GLOBAL_ERROR_STYLES = `
  @keyframes scan {
    0% { transform: translateY(-10px); }
    100% { transform: translateY(800px); }
  }
  @keyframes scanline {
    0% { top: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
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
`;

interface GlobalErrorShellProps {
  code: '404' | '500';
  title: string;
  description: ReactNode;
  terminal: ReactNode;
  action: ReactNode;
  digest?: string;
}

export default function GlobalErrorShell({
  code,
  title,
  description,
  terminal,
  action,
  digest,
}: GlobalErrorShellProps) {
  return (
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
          left: 0,
          height: 2,
          width: '100%',
          background: 'rgba(255,45,111,0.1)',
          pointerEvents: 'none',
          animation: 'scanline 8s linear infinite',
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
          Error_Code: {code}
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
          {code}
        </h1>

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
          {title}
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
          {description}
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
            {terminal}
            {digest && (
              <p style={{ color: 'rgba(107,123,107,0.3)' }}>
                digest: {digest}
              </p>
            )}
          </div>
        </div>

        {action}
      </div>
    </section>
  );
}
