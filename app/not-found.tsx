'use client';

import Link from 'next/link';
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

export default function NotFound() {
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
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-12 text-foreground sm:px-6 md:py-16">
      <div
        className="pointer-events-none absolute left-0 h-[2px] w-full bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
        style={{ top: `${scanY}%` }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="absolute top-4 left-4 h-3 w-3 border-t border-l border-blue-500/40 sm:top-8 sm:left-8 sm:h-4 sm:w-4" />
      <div className="absolute top-4 right-4 h-3 w-3 border-t border-r border-white/10 sm:top-8 sm:right-8 sm:h-4 sm:w-4" />
      <div className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-white/10 sm:bottom-8 sm:left-8 sm:h-4 sm:w-4" />
      <div className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-blue-500/40 sm:bottom-8 sm:right-8 sm:h-4 sm:w-4" />

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-blue-500/60 sm:mb-6 sm:text-[10px] sm:tracking-[0.4em]">
          Error_Code: 404
        </div>

        <h1 className="relative mb-2 text-[25vw] font-black leading-none tracking-tighter text-white/5 sm:text-[20vw] md:text-[15vw]">
          <GlitchText text="404" />
          <span className="absolute left-[2px] top-0 text-red-500/20 mix-blend-screen">
            <GlitchText text="404" />
          </span>
          <span className="absolute left-[-2px] top-0 text-blue-500/20 mix-blend-screen">
            <GlitchText text="404" />
          </span>
        </h1>

        <div className="mb-6 flex items-center gap-3 sm:mb-8 sm:gap-4">
          <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-blue-500/50 sm:w-16" />
          <div className="h-1.5 w-1.5 rotate-45 bg-blue-500" />
          <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-blue-500/50 sm:w-16" />
        </div>

        <h2 className="mb-2 text-xl font-semibold tracking-tight sm:mb-3 sm:text-2xl md:text-3xl">
          Страница не найдена
        </h2>
        <p className="mb-8 max-w-xs text-xs font-light leading-relaxed text-gray-500 sm:mb-10 sm:max-w-md sm:text-sm md:text-base">
          Запрашиваемый маршрут не существует или был перемещён.
          <br />
          Попробуйте вернуться на главную.
        </p>

        <div className="mb-8 w-full max-w-[280px] rounded-lg border border-white/5 bg-white/[0.02] p-3 font-mono text-left text-[10px] sm:mb-10 sm:max-w-sm sm:p-4 sm:text-[11px]">
          <div className="mb-2 flex items-center gap-1.5 sm:gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/60 sm:h-2 sm:w-2" />
          </div>
          <div className="space-y-1 text-gray-500">
            <p>
              <span className="text-blue-400">$</span> navigate --to
              requested_page
            </p>
            <p className="text-red-400">
              {'>'} Error: ENOENT — route not found
            </p>
            <p>
              <span className="text-blue-400">$</span> navigate --to
              <span className="animate-pulse text-white"> _</span>
            </p>
          </div>
        </div>

        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-white sm:gap-3 sm:px-6 sm:py-3 sm:text-xs sm:tracking-[0.2em]"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span>Вернуться на главную</span>
        </Link>
      </div>
    </section>
  );
}
