'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const words = ['ПРОДУКТ', 'АРХИТЕКТУРУ', 'ПРОТОТИПЫ', 'РЕШЕНИЯ'] as const;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const duration = prefersReducedMotion ? 0 : 0.6;
  const ease = [0.23, 1, 0.32, 1];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden bg-background p-6 pt-[15vh] text-foreground"
    >
      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center opacity-[0.02]">
        <h2
          aria-hidden="true"
          className="text-[25vw] font-black uppercase tracking-[0.2em] animate-pulse-slow sm:text-[50vw]"
          style={{ transform: 'rotate(-5deg)' }}
        >
          DEV
        </h2>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent-pink/5 blur-[150px] animate-drift" />
        <div
          className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent-olive/8 blur-[120px] animate-drift"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="absolute left-[30%] top-[60%] h-[300px] w-[300px] rounded-full bg-accent-pink/[0.03] blur-[100px] animate-drift"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-8 h-16 w-16 border-t-2 border-l-2 border-foreground/10 sm:left-16 sm:top-16" />
        <div className="absolute bottom-24 right-8 h-16 w-16 border-b-2 border-r-2 border-accent-pink/20 sm:bottom-32 sm:right-16" />
        <div
          className="absolute right-[15%] top-[25%] h-3 w-3 bg-accent-pink/30 animate-float"
          style={{ borderRadius: '0' }}
        />
        <div
          className="absolute left-[10%] bottom-[30%] h-4 w-4 rotate-45 border border-accent-pink/10 animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div className="absolute left-0 top-[45%] h-[2px] w-[30%] bg-gradient-to-r from-accent-pink/20 to-transparent" />
        <div className="absolute left-[25%] top-0 h-full w-[1px] border-l border-dashed border-foreground/[0.03]" />
        <div
          className="absolute left-[20%] bottom-[15%] h-2 w-2 bg-accent-olive/20 animate-float"
          style={{ borderRadius: '0', animationDelay: '-4s' }}
        />
        <div
          className="absolute right-[30%] top-[15%] h-5 w-5 border border-accent-pink/10 rotate-12 animate-float"
          style={{ borderRadius: '0', animationDelay: '-1s' }}
        />
        <div className="absolute right-[8%] bottom-[40%]">
          <div className="h-[2px] w-4 bg-accent-pink/10" />
          <div className="absolute left-1/2 top-1/2 h-4 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-accent-pink/10" />
        </div>
        <div className="absolute left-[40%] top-[8%] flex gap-1">
          <div
            className="h-1 w-1 bg-foreground/5"
            style={{ borderRadius: '0' }}
          />
          <div
            className="h-1 w-1 bg-foreground/5"
            style={{ borderRadius: '0' }}
          />
          <div
            className="h-1 w-1 bg-foreground/5"
            style={{ borderRadius: '0' }}
          />
        </div>
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[1600px]"
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="flex min-w-0 flex-col items-center sm:items-start">
          <motion.h2
            className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.6em] text-accent-pink sm:text-left sm:text-xs"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration, ease }}
          >
            Смирнов Виталий | VintlGvard
          </motion.h2>

          <h1
            className="max-w-full text-center text-[clamp(2rem,14vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase sm:text-left sm:text-[clamp(3rem,12vw,10rem)]"
            style={{ letterSpacing: '-0.04em' }}
          >
            <motion.span
              className="inline-block mr-[0.3em]"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration,
                ease,
                delay: prefersReducedMotion ? 0 : 0.08,
              }}
            >
              Я
            </motion.span>
            <span className="text-muted not-italic">собираю</span>{' '}
            <br />
            <span className="relative flex h-[1.3em] w-full max-w-full items-center justify-center overflow-hidden text-foreground not-italic">
              <span className="sr-only" aria-live="polite" aria-atomic="true">
                {words[index]}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  aria-hidden="true"
                  key={words[index]}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' }
                      : { y: 40, opacity: 0, rotate: 3, filter: 'blur(8px)' }
                  }
                  animate={{
                    y: 0,
                    opacity: 1,
                    rotate: 0,
                    filter: 'blur(0px)',
                  }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 1, y: 0, rotate: 0, filter: 'blur(0px)' }
                      : { y: -40, opacity: 0, rotate: -3, filter: 'blur(8px)' }
                  }
                  transition={{ duration, ease }}
                  className="absolute left-1/2 -translate-x-1/2"
                >
                  <span className="bg-gradient-to-r from-foreground via-foreground to-accent-pink bg-clip-text text-transparent">
                    {words[index]}
                  </span>
                </motion.span>
              </AnimatePresence>
              <span className="opacity-0 tracking-tighter" aria-hidden="true">
                АРХИТЕКТУРУ
              </span>
            </span>
          </h1>

          <motion.h1
            className="mt-4 min-w-0 self-center text-[clamp(2rem,14vw,10rem)] font-bold leading-[0.85] tracking-[-0.04em] uppercase sm:self-end sm:text-[clamp(3rem,12vw,10rem)]"
            style={{ transform: 'skewX(-3deg)', letterSpacing: '-0.04em' }}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.6,
              ease,
              delay: prefersReducedMotion ? 0 : 0.16,
            }}
          >
            С <span className="text-accent-pink">НУЛЯ</span>
          </motion.h1>
        </div>

          <motion.div
            className="mt-20 max-w-xl min-w-0 overflow-hidden text-center sm:border-l-2 sm:border-accent-pink/30 sm:pl-8 sm:text-left"
          style={{ transform: 'rotate(-0.3deg)' }}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.6,
            ease,
            delay: prefersReducedMotion ? 0 : 0.28,
          }}
        >
          <p className="text-lg font-light leading-relaxed text-muted sm:text-xl">
            Фуллстек разработчик полного цикла <br />
            <span className="text-foreground font-medium">
              От идеи до деплоя
            </span>
          </p>
          <nav className="mt-6 flex items-center justify-center gap-4 sm:justify-start" aria-label="Навигация по секциям">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-sm border border-accent-pink/30 bg-accent-pink/10 px-5 py-2.5 text-sm font-medium text-accent-pink transition-colors hover:bg-accent-pink/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pink"
            >
              Проекты
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-5 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
            >
              Связаться
            </a>
          </nav>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute right-4 top-0 hidden h-full w-[2px] overflow-hidden bg-foreground/5 sm:right-12 sm:block">
        <div className="h-20 w-full bg-accent-pink shadow-[0_0_20px_rgba(255,45,111,0.3)] animate-scan" />
      </div>

      <div className="pointer-events-none absolute left-4 top-[20%] hidden h-[30%] w-[2px] bg-accent-olive/20 sm:left-12 sm:block" />
    </section>
  );
}
