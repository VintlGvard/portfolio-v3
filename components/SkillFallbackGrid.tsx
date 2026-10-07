'use client';

import { memo } from 'react';
import { TECH_ICONS } from '@/lib/tech-icons';
import { useLang } from '@/lib/i18n';

const GRID_ITEMS = TECH_ICONS.map((icon) => (
  <li
    key={icon.slug}
    className="border border-foreground/10 bg-foreground/[0.02] px-2 py-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-accent-pink/40 hover:text-foreground sm:text-[11px]"
  >
    {icon.title}
  </li>
));

const SkillFallbackGrid = memo(function SkillFallbackGrid() {
  const { t } = useLang();

  return (
    <ul
      className="grid max-w-full grid-cols-3 gap-2 p-6 sm:grid-cols-4 sm:gap-3 sm:p-8"
      aria-label={t.skills.listAria}
    >
      {GRID_ITEMS}
    </ul>
  );
});

export default SkillFallbackGrid;
