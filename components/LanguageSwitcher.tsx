'use client';

import { motion } from 'motion/react';
import { useLang, type Lang } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang();

  const btn = (l: Lang, label: string) => {
    const active = lang === l;
    return (
      <button
        key={l}
        type="button"
        onClick={() => setLang(l)}
        aria-pressed={active}
        aria-label={`${t.switcherAria}: ${label}`}
        className={`group relative cursor-pointer px-3 py-2 transition-all duration-300 sm:px-5 sm:py-2.5 ${
          active ? 'text-foreground' : 'text-muted hover:text-foreground'
        }`}
        style={{ borderRadius: '0' }}
      >
        <span className="relative z-10 font-mono text-[9px] font-medium uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.25em]">
          {label}
        </span>

        {active && (
          <motion.div
            layoutId="lang-active-indicator"
            className="absolute inset-0 z-0 border-b-2 border-accent-pink bg-foreground/[0.06]"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}

        <div
          className={`absolute bottom-0 left-0 right-0 z-0 bg-accent-pink/10 transition-all duration-500 ${
            active ? 'h-full' : 'h-0 group-hover:h-full'
          }`}
        />
      </button>
    );
  };

  return (
    <div className="pointer-events-none fixed right-3 top-3 z-[200] flex justify-end sm:right-6 sm:top-6">
      <div
        role="group"
        aria-label={t.switcherAria}
        className="pointer-events-auto relative flex items-center gap-0 border-2 border-foreground/10 bg-background/80 p-1 backdrop-blur-xl transition-all duration-500 hover:border-foreground/20"
        style={{ borderRadius: '0' }}
      >
        <div className="absolute inset-x-0 -top-[2px] h-[2px] bg-gradient-to-r from-transparent via-accent-pink/40 to-transparent" />
        {btn('en', 'EN')}
        {btn('ru', 'RU')}
      </div>
    </div>
  );
}
