'use client';

import { useEffect, useRef, useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import ArrowIcon from '@/components/ui/ArrowIcon';

const CONTACTS = [
  {
    label: 'Telegram',
    value: '@VintlGvard',
    url: 'https://t.me/VintlGvard',
    accent: 'group-hover:text-blue-400',
  },
  {
    label: 'GitHub',
    value: 'vintlgvard',
    url: 'https://github.com/VintlGvard',
    accent: 'group-hover:text-white',
  },
  {
    label: 'GitLab',
    value: 'vintlgvard',
    url: 'https://gitlab.com/vintlgvard',
    accent: 'group-hover:text-orange-500',
  },
] as const;

async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const copyEmail = async () => {
    const ok = await copyToClipboard('me@vintlgvard.com');
    if (!ok) return;

    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <SectionContainer
      id="contact"
      className="relative flex items-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader index="04" label="Контакты" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                  Доступен для проектов
                </span>
              </div>

              <h2 className="text-3xl font-semibold leading-[1.1] tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Готов к новым <br />
                <span className="font-light italic text-blue-500">
                  вызовам и идеям.
                </span>
              </h2>
              <p className="max-w-md text-base font-light leading-relaxed text-gray-400 sm:text-lg">
                Если у вас есть проект, требующий быстрого прототипирования или
                свежих идей — пишите в удобном вам мессенджере
              </p>
            </div>

            <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6 font-mono text-[10px] uppercase tracking-widest text-gray-500 sm:gap-8 sm:pt-8">
              <div>
                Локация: <span className="text-white/60">РФ / Татарстан</span>
              </div>
              <div>
                Время: <span className="text-white/60">UTC+3</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <button
              onClick={copyEmail}
              className="group relative flex items-center justify-between border-b border-white/10 px-2 py-5 transition-all md:hover:bg-white/[0.01] sm:px-4 sm:py-6 md:py-8"
            >
              <div className="relative z-10 flex flex-col items-start transition-transform md:group-hover:translate-x-1">
                <span className="mb-1 text-[9px] font-mono uppercase tracking-[0.2em] text-blue-500">
                  Primary Contact
                </span>
                <span className="text-lg font-medium tracking-tight text-white transition-colors sm:text-xl md:text-2xl md:group-hover:text-blue-400">
                  me@vintlgvard.com
                </span>
              </div>
              <div className="relative z-10 rounded border border-white/5 bg-[#050505] px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-gray-600">
                {copied ? (
                  <span className="text-green-500">[ Скопировано ]</span>
                ) : (
                  <span className="transition-colors md:group-hover:text-white">
                    [ Копировать ]
                  </span>
                )}
              </div>
            </button>

            {CONTACTS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between border-b border-white/10 px-2 py-5 transition-all md:hover:bg-white/[0.01] sm:px-4 sm:py-6 md:py-8"
              >
                <div className="flex flex-col items-start transition-transform md:group-hover:translate-x-1">
                  <span className="mb-1 text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500">
                    {s.label}
                  </span>
                  <span
                    className={`text-lg font-medium tracking-tight transition-colors sm:text-xl md:text-2xl ${s.accent}`}
                  >
                    {s.value}
                  </span>
                </div>
                <div className="translate-x-4 text-blue-500 opacity-0 transition-all md:group-hover:translate-x-0 md:group-hover:opacity-100">
                  <ArrowIcon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
