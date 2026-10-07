'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import ArrowIcon from '@/components/ui/ArrowIcon';
import { PROJECTS } from '@/lib/projects';
import { useLang } from '@/lib/i18n';

export default function Projects() {
  const { lang, t } = useLang();

  return (
    <SectionContainer id="projects">
      <div className="pointer-events-none absolute right-[5%] top-[10%] select-none">
        <span className="font-mono text-[20vw] font-bold leading-none text-foreground/[0.015]">
          02
        </span>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <SectionHeader index="02" label={t.projects.header} />
        </div>

        <h2 className="mb-12 text-3xl font-bold tracking-[-0.03em] uppercase sm:mb-20 sm:text-5xl">
          {t.projects.titleA}{' '}
          <span className="font-mono font-light italic text-accent-pink">
            {t.projects.titleB}
          </span>
        </h2>

        <div className="flex flex-col border-t-2 border-foreground/10">
          {PROJECTS.map((p, idx) => {
            const isExternal = p.link.startsWith('http');
            const isPlaceholder = p.link === '#';
            const rowClass =
              'group relative flex flex-col justify-between border-b-2 border-foreground/10 py-8 transition-all duration-300 md:hover:pl-4 md:flex-row md:items-center md:py-10';
            return (
              <div key={p.id} className={rowClass}>
                <div
                  className="absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background:
                      idx % 2 === 0
                        ? 'linear-gradient(90deg, rgba(255,45,111,0.03), transparent)'
                        : 'linear-gradient(90deg, rgba(45,74,45,0.04), transparent)',
                  }}
                />

                <div className="relative z-10 flex items-start gap-4 sm:gap-8">
                  <span className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-accent-pink/50">
                    [{p.id}]
                  </span>

                  <div className="space-y-2">
                    <h3 className="flex flex-wrap items-center gap-3 text-2xl font-medium tracking-[-0.02em] transition-all duration-300 group-hover:text-accent-pink group-hover:tracking-[0.02em] sm:text-3xl">
                      {isPlaceholder ? (
                        p.title[lang]
                      ) : (
                        <a
                          href={p.link}
                          {...(isExternal
                            ? { target: '_blank', rel: 'noopener noreferrer' }
                            : {})}
                          aria-label={`${t.projects.openProject} «${p.title[lang]}»${isExternal ? ` ${t.projects.external}` : ''}`}
                          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-pink"
                        >
                          {p.title[lang]}
                        </a>
                      )}
                      {p.status === 'in_progress' && (
                        <span className="border border-accent-olive/40 bg-accent-olive/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                          {t.projects.inProgressBadge}
                        </span>
                      )}
                    </h3>
                    <p className="max-w-sm text-sm font-light leading-relaxed text-muted transition-colors group-hover:text-foreground/60">
                      {p.desc[lang]}
                    </p>
                    {p.secondaryLinks && (
                      <span className="flex flex-wrap gap-x-4 gap-y-1">
                        {p.secondaryLinks.map((s) => (
                          <a
                            key={s.href}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="swiss-underline relative z-20 inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-accent-pink/80 hover:text-accent-pink"
                          >
                            {s.label[lang]} ↗
                          </a>
                        ))}
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-6 md:mt-0 md:gap-12">
                  <div className="flex flex-col items-start font-mono md:items-end">
                    <span className="mb-1 text-[9px] uppercase tracking-[0.25em] text-muted/40">
                      {t.projects.stack}
                    </span>
                    <span className="text-xs text-muted/60 transition-colors group-hover:text-foreground">
                      {p.tech}
                    </span>
                  </div>

                  {!isPlaceholder && (
                    <div
                      aria-hidden="true"
                      className="translate-x-4 text-accent-pink opacity-20 transition-all duration-300 rotate-45 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100"
                    >
                      <ArrowIcon />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
