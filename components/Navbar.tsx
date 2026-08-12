'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Старт', href: '#hero' },
  { label: 'Скиллы', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Инфо', href: '#info' },
  { label: 'Связь', href: '#contact' },
] as const;

type NavHref = (typeof NAV_ITEMS)[number]['href'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<NavHref | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id) setActiveSection(`#${id}` as NavHref);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 z-[100] flex w-full justify-center px-2 font-sans sm:bottom-10 sm:px-4">
      <nav
        aria-label="Основная навигация"
        className="pointer-events-auto relative flex items-center gap-0 border-2 border-foreground/10 bg-background/80 p-1 backdrop-blur-xl transition-all duration-500 hover:border-foreground/20 sm:gap-0 sm:p-1"
        style={{ borderRadius: '0' }}
      >
        <div className="absolute inset-x-0 -top-[2px] h-[2px] bg-gradient-to-r from-transparent via-accent-pink/40 to-transparent" />

        {NAV_ITEMS.map((item) => {
          const isActive =
            activeSection === item.href ||
            (activeSection === null && item.href === '#hero');
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'location' : undefined}
              className={`group relative px-3 py-2 transition-all duration-300 sm:px-5 sm:py-2.5 ${
                isActive
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
              style={{ borderRadius: '0' }}
            >
              <span className="relative z-10 font-mono text-[9px] font-medium uppercase tracking-[0.2em] sm:text-[10px] sm:tracking-[0.25em]">
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="nav-active-indicator"
                  className="absolute inset-0 z-0 bg-foreground/[0.06] border-b-2 border-accent-pink"
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 380, damping: 30 }
                  }
                />
              )}

              <div
                className={`absolute bottom-0 left-0 right-0 z-0 bg-accent-pink/10 transition-all duration-500 ${
                  isActive ? 'h-full' : 'h-0 group-hover:h-full'
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-20 w-64 -translate-x-1/2 bg-accent-pink/5 blur-[50px] opacity-40" />
    </div>
  );
}
