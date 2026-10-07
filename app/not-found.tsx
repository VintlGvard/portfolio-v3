'use client';

import Link from 'next/link';
import ErrorCard from '@/components/ui/ErrorCard';
import { useLang } from '@/lib/i18n';

export default function NotFound() {
  const { t } = useLang();

  return (
    <ErrorCard
      code="404"
      title={t.error.notFoundTitle}
      description={<>{t.error.notFoundDesc}</>}
      terminal={
        <>
          <p>
            <span className="text-accent-pink/60">$</span> navigate --to
            requested_page
          </p>
          <p className="text-accent-pink/40">
            {'>'} Error: ENOENT — route not found
          </p>
          <p>
            <span className="text-accent-pink/60">$</span> navigate --to
            <span className="animate-pulse text-foreground/60"> _</span>
          </p>
        </>
      }
      action={
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 border-2 border-foreground/10 bg-foreground/[0.03] px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-all duration-300 hover:border-accent-pink/30 hover:bg-accent-pink/5 hover:text-foreground sm:gap-3 sm:px-6 sm:py-3 sm:text-xs"
          style={{ borderRadius: '0' }}
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">
            ←
          </span>
          <span>{t.error.notFoundAction}</span>
        </Link>
      }
    />
  );
}
