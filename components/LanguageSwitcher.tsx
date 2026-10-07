'use client';

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
        className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pink ${
          active
            ? 'bg-accent-pink/15 text-accent-pink'
            : 'text-muted hover:text-foreground'
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div
      role="group"
      aria-label={t.switcherAria}
      className="pointer-events-auto fixed right-3 top-3 z-[200] flex items-center gap-0 border-2 border-foreground/10 bg-background/80 p-1 backdrop-blur-xl sm:right-6 sm:top-6"
      style={{ borderRadius: '0' }}
    >
      {btn('en', 'EN')}
      <span aria-hidden="true" className="h-4 w-[1px] bg-foreground/15" />
      {btn('ru', 'RU')}
    </div>
  );
}
