'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import ArrowIcon from '@/components/ui/ArrowIcon';

const CONTACTS = [
  {
    label: 'Telegram',
    value: '@VintlGvard',
    url: 'https://t.me/VintlGvard',
    accent: 'group-hover:text-[#2AABEE]',
    hoverBg: 'rgba(42,171,238,0.03)',
  },
  {
    label: 'GitHub',
    value: 'vintlgvard',
    url: 'https://github.com/VintlGvard',
    accent: 'group-hover:text-foreground',
    hoverBg: 'rgba(240,235,227,0.02)',
  },
  {
    label: 'GitLab',
    value: 'vintlgvard',
    url: 'https://gitlab.com/vintlgvard',
    accent: 'group-hover:text-orange-500',
    hoverBg: 'rgba(249,115,22,0.03)',
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
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

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
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(var(--foreground) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="pointer-events-none absolute right-[5%] top-[8%] select-none" aria-hidden="true">
        <span className="font-mono text-[18vw] font-bold leading-none text-foreground/[0.012]">
          04
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute right-[10%] top-[20%] h-32 w-32 border-2 border-accent-pink/5 rotate-12 animate-float"
          style={{ borderRadius: '0' }}
        />
        <div
          className="absolute bottom-[15%] left-[5%] h-20 w-20 border border-accent-olive/8 -rotate-6 animate-float"
          style={{ borderRadius: '0', animationDelay: '-3s' }}
        />
        <div className="absolute -left-10 top-[60%] h-[2px] w-[50%] origin-left rotate-[8deg] bg-gradient-to-r from-accent-olive/5 to-transparent" />
        <div className="absolute left-[15%] top-[10%]">
          <div className="h-[2px] w-5 bg-accent-pink/5" />
          <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-accent-pink/5" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader index="04" label="Контакты" />

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="space-y-8 sm:space-y-10"
          >
            <div className="space-y-6">
              <div
                className="inline-flex items-center gap-2 border border-accent-pink/20 bg-accent-pink/[0.03] px-4 py-1.5"
                style={{ borderRadius: '0' }}
              >
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span
                    className="absolute inline-flex h-full w-full animate-ping bg-accent-pink/60"
                    style={{ borderRadius: '0' }}
                  />
                  <span
                    className="relative inline-flex h-2 w-2 bg-accent-pink"
                    style={{ borderRadius: '0' }}
                  />
                </span>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-pink/70">
                  Доступен для проектов
                </span>
              </div>

              <motion.h2
                variants={fadeUp}
                className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] uppercase sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Готов к новым <br />
                <span
                  className="font-mono font-light italic text-accent-pink"
                  style={{ letterSpacing: '0.02em' }}
                >
                  вызовам и идеям.
                </span>
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-md text-base font-light leading-relaxed text-muted sm:text-lg">
                Если у вас есть проект, требующий быстрого прототипирования или
                свежих идей — пишите в удобном вам мессенджере
              </motion.p>
            </div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 border-t-2 border-foreground/5 pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted/50 sm:gap-8 sm:pt-8">
              <div>
                Локация:{' '}
                <span className="text-foreground/40">РФ / Татарстан</span>
              </div>
              <div>
                Время: <span className="text-foreground/40">UTC+3</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="flex flex-col"
          >
            <motion.button
              variants={fadeUp}
              type="button"
              onClick={copyEmail}
              className="group relative flex items-center justify-between border-b-2 border-foreground/10 px-2 py-5 transition-all duration-300 md:hover:bg-accent-pink/[0.02] sm:px-4 sm:py-6 md:py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pink"
            >
              <div
                className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(255,45,111,0.03), transparent)',
                }}
              />

              <div className="relative z-10 flex flex-col items-start transition-transform duration-300 md:group-hover:translate-x-2">
                <span className="mb-1 text-[9px] font-mono uppercase tracking-[0.25em] text-accent-pink/60">
                  Primary Contact
                </span>
                <span className="text-lg font-medium tracking-tight text-foreground transition-colors sm:text-xl md:text-2xl md:group-hover:text-accent-pink">
                  me@vintlgvard.com
                </span>
              </div>
              <div
                aria-live="polite"
                className="relative z-10 border-2 border-foreground/10 bg-background px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/50 transition-all group-hover:border-accent-pink/30"
                style={{ borderRadius: '0' }}
              >
                {copied ? (
                  <span className="text-accent-pink">✓ Скопировано</span>
                ) : (
                  <span className="transition-colors md:group-hover:text-foreground">
                    ⎘ Копировать
                  </span>
                )}
              </div>
            </motion.button>

            {CONTACTS.map((s) => (
              <motion.a
                key={s.label}
                variants={fadeUp}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between border-b-2 border-foreground/10 px-2 py-5 transition-all duration-300 sm:px-4 sm:py-6 md:py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pink"
              >
                <div
                  className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, ${s.hoverBg}, transparent)`,
                  }}
                />

                <div className="relative z-10 flex flex-col items-start transition-transform duration-300 md:group-hover:translate-x-2">
                  <span className="mb-1 text-[9px] font-mono uppercase tracking-[0.25em] text-muted/40">
                    {s.label}
                  </span>
                  <span
                    className={`text-lg font-medium tracking-tight transition-colors sm:text-xl md:text-2xl ${s.accent}`}
                  >
                    {s.value}
                  </span>
                </div>
                <div className="relative z-10 translate-x-4 text-accent-pink opacity-0 transition-all duration-300 md:group-hover:translate-x-0 md:group-hover:opacity-100 md:group-hover:rotate-0 rotate-45" aria-hidden="true">
                  <ArrowIcon />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
