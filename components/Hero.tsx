'use client';

import { useEffect, useState } from 'react';

const words = ['MVP', 'АРХИТЕКТУРУ', 'ПРОТОТИПЫ', 'РЕШЕНИЯ'] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const getShift = (i: number): string => {
    if (i !== index) return 'translate-x-0';
    const shifts = [
      'translate-x-2',
      '-translate-x-2',
      'translate-x-0',
    ] as const;
    return shifts[i % shifts.length];
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background p-6 pt-[15vh] text-foreground"
    >
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.015]">
        <h2 className="text-[20vw] font-black uppercase tracking-tighter animate-pulse sm:text-[45vw]">
          DEV
        </h2>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1600px]">
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="mb-4 text-center font-mono text-xs uppercase tracking-[0.4em] text-blue-600 sm:text-left sm:text-sm">
            Смирнов Виталий | VintlGvard
          </h2>

          <h1 className="text-[13vw] font-black leading-[0.8] tracking-tighter uppercase italic sm:text-[11vw]">
            Я <span className="text-gray-800 not-italic">собираю</span> <br />
            <span className="relative inline-flex h-[1.1em] w-full overflow-hidden text-white not-italic">
              {words.map((word, i) => {
                const isActive = i === index;

                return (
                  <span
                    key={word}
                    className={`absolute left-0 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isActive
                        ? `translate-y-0 opacity-100 ${getShift(i)}`
                        : i < index
                          ? '-translate-y-full rotate-2 opacity-0 blur-md'
                          : 'translate-y-full -rotate-2 opacity-0 blur-md'
                    }`}
                  >
                    <span
                      className={
                        isActive
                          ? 'bg-gradient-to-r from-white via-white to-blue-900 bg-clip-text'
                          : ''
                      }
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
              <span className="opacity-0 tracking-tighter" aria-hidden="true">
                АРХИТЕКТУРУ
              </span>
            </span>
          </h1>

          <h1 className="mt-2 self-center sm:self-end text-[13vw] font-black leading-[0.8] tracking-tighter uppercase sm:text-[11vw]">
            С <span className="text-blue-600">НУЛЯ</span>
          </h1>
        </div>

        <div className="mt-20 max-w-xl text-center sm:border-l sm:border-blue-600/30 sm:pl-6 sm:text-left">
          <p className="text-lg font-light leading-relaxed text-gray-400 sm:text-xl">
            Фуллстек разработчик полного цикла <br />
            <span className="text-white">От идеи до деплоя</span>
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute right-4 top-0 hidden h-full w-[1px] overflow-hidden bg-white/5 sm:right-12 sm:block">
        <div className="h-20 w-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-scan" />
      </div>
    </section>
  );
}
