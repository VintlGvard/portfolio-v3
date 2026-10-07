'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import SkillFallbackGrid from '@/components/SkillFallbackGrid';
import { TechCloudErrorBoundary } from '@/components/TechCloudErrorBoundary';
import { useLang } from '@/lib/i18n';

const TechCloud = dynamic(() => import('@/components/TechCloud'), {
  ssr: false,
  loading: () => <SkillFallbackGrid />,
});

const TECH_CATEGORIES_META = [
  {
    color: 'bg-accent-pink',
    labelColor: 'text-accent-pink/60',
  },
  {
    color: 'bg-accent-olive',
    labelColor: 'text-accent-olive/60',
  },
  {
    color: 'bg-accent-pink/70',
    labelColor: 'text-accent-pink/60',
  },
  {
    color: 'bg-accent-olive/70',
    labelColor: 'text-accent-olive/60',
  },
] as const;

export default function Skills() {
  const { t } = useLang();
  const [loadCloud, setLoadCloud] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  useEffect(() => {
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined')
      return;
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadCloud(true);
          io.disconnect();
        }
      },
      { rootMargin: '300px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  const showStaticGrid = prefersReducedMotion || !loadCloud;

  return (
    <SectionContainer
      id="skills"
      className="relative flex items-center overflow-hidden font-sans"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader index="01" label={t.skills.header} />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <motion.div
            ref={boxRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="group relative flex min-h-[250px] items-center justify-center overflow-hidden border-2 border-foreground/10 bg-foreground/[0.01] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px]"
            style={{ borderRadius: '0' }}
          >
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
              <div className="absolute h-[2px] w-full bg-gradient-to-r from-accent-pink/20 via-accent-olive/15 to-accent-pink/20 shadow-[0_0_15px_rgba(255,45,111,0.1)] animate-scan" />
            </div>

            <div className="absolute top-0 left-0 z-20 h-4 w-4 border-t-2 border-l-2 border-accent-pink" aria-hidden="true" />
            <div className="absolute top-0 right-0 z-20 h-4 w-4 border-t-2 border-r-2 border-accent-olive/40" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 z-20 h-4 w-4 border-b-2 border-l-2 border-accent-olive/40" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 z-20 h-4 w-4 border-b-2 border-r-2 border-accent-pink" aria-hidden="true" />

            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-accent-pink/[0.04] blur-[60px]" />
              <div className="absolute bottom-[15%] right-[15%] h-28 w-28 rounded-full bg-accent-olive/[0.05] blur-[50px]" />
              <div className="absolute left-[50%] top-[60%] h-24 w-24 rounded-full bg-accent-pink/[0.03] blur-[40px]" />
            </div>

            <div className="relative z-0 flex h-full w-full items-center justify-center">
              {showStaticGrid ? (
                <SkillFallbackGrid />
              ) : (
                <TechCloudErrorBoundary>
                  <TechCloud />
                </TechCloudErrorBoundary>
              )}
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-30 hidden font-mono text-right sm:block" aria-hidden="true">
              <div className="flex flex-col items-end gap-1">
                <p className="text-[9px] uppercase tracking-widest text-accent-pink/50">
                  {t.skills.statusLabel}
                </p>
                <p className="border border-accent-pink/20 bg-accent-pink/5 px-3 py-1.5 text-[11px] uppercase tracking-tighter text-foreground">
                  {t.skills.statusText}
                  <span className="animate-pulse">...</span>
                </p>
              </div>
            </div>

            <div className="pointer-events-none absolute left-0 top-[20%] h-[40%] w-[2px]" aria-hidden="true">
              <div className="h-1/2 w-full bg-accent-pink/20" />
              <div className="h-1/2 w-full bg-accent-olive/20" />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="flex flex-col justify-between gap-10 py-2"
          >
            <div className="space-y-8">
              <motion.div variants={fadeUp}>
                <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] uppercase sm:text-4xl">
                  {t.skills.titleA} <br />
                  <span
                    className="font-mono font-light italic text-accent-pink"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {t.skills.titleB}
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted sm:text-lg">
                  {t.skills.desc}
                </p>
              </motion.div>

              <div className="space-y-5 font-mono">
                {t.skills.categories.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                  >
                    <div
                      className={`mt-1.5 h-2 w-2 ${TECH_CATEGORIES_META[i % TECH_CATEGORIES_META.length].color} transition-transform duration-300 group-hover:scale-150 group-hover:rotate-45`}
                      style={{ borderRadius: '0' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className={`mb-0.5 text-[10px] uppercase tracking-[0.3em] ${TECH_CATEGORIES_META[i % TECH_CATEGORIES_META.length].labelColor}`}
                      >
                        {item.label}
                      </p>
                      <p className="text-sm font-medium italic tracking-tight text-foreground/80">
                        {item.tech}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              className="mt-4 space-y-3 border-l-2 border-accent-pink/30 bg-accent-pink/[0.03] p-5 font-mono text-[10px] uppercase tracking-widest sm:mt-8"
              style={{ borderRadius: '0' }}
            >
              <div className="flex justify-between text-accent-pink/70">
                <span>{t.skills.fitLabel}</span>
                <span className="text-foreground">{t.skills.fitValue}</span>
              </div>
              <div className="relative h-[2px] w-full overflow-hidden bg-foreground/10">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-accent-pink via-accent-olive to-accent-pink shadow-[0_0_10px_rgba(255,45,111,0.2)] animate-pulse" />
              </div>
              <p className="text-[9px] leading-tight tracking-tighter text-muted/50 normal-case italic">
                {t.skills.fitNote}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
