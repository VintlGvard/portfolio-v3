'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Старт', href: '#hero' },
  { label: 'Скиллы', href: '#skills' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Инфо', href: '#info' },
  { label: 'Связь', href: '#contact' },
] as const;

type NavHref = (typeof NAV_ITEMS)[number]['href'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<NavHref | '#'>('#');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as NavHref | '';
            setActiveSection(id ? (`#${id}` as NavHref) : '#');
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-10 left-0 z-[100] flex w-full justify-center px-4 font-sans">
      <nav className="pointer-events-auto relative flex items-center gap-1 rounded-full border border-white/10 bg-[#050505]/60 p-1.5 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-white/20">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {NAV_ITEMS.map((item) => {
          const isActive =
            activeSection === item.href ||
            (activeSection === '#' && item.href === '#hero');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative rounded-full px-5 py-2.5 transition-all duration-500 ${
                isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="relative z-10 font-mono text-[10px] font-medium uppercase tracking-[0.2em]">
                {item.label}
              </span>

              {isActive && (
                <div className="absolute inset-0 z-0 rounded-full border border-white/5 bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-500" />
              )}

              <div
                className={`absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6] transition-all duration-500 ${
                  isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
              />
            </Link>
          );
        })}
      </nav>

      <div className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-20 w-64 -translate-x-1/2 bg-blue-500/5 blur-[50px] opacity-40" />
    </div>
  );
}
