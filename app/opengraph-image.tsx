import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          background: '#0a0f0a',
          color: '#f0ebe3',
          fontFamily: 'system-ui, sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 28,
            letterSpacing: '0.4em',
            color: '#ff2d6f',
            marginBottom: 24,
          }}
        >
          VINTLGVARD
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>
          Full-Stack
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1 }}>
          Developer
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: '#6b7b6b',
          }}
        >
          MVP · Prototypes · Production with Next.js / React / Node.js / Go / Python
        </div>
      </div>
    ),
    { ...size },
  );
}
