'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import DividerVertical from '@/components/ui/DividerVertical';
import { useLang } from '@/lib/i18n';

const COLORS = [
  {
    color: 'text-accent-pink',
    indexColor: 'text-accent-pink/40',
    borderColor: 'group-hover:border-accent-pink/40',
  },
  {
    color: 'text-accent-olive',
    indexColor: 'text-accent-olive/40',
    borderColor: 'group-hover:border-accent-olive/40',
  },
  {
    color: 'text-accent-pink/70',
    indexColor: 'text-accent-pink/40',
    borderColor: 'group-hover:border-accent-pink/30',
  },
  {
    color: 'text-accent-olive/70',
    indexColor: 'text-accent-olive/40',
    borderColor: 'group-hover:border-accent-olive/30',
  },
] as const;

export default function Info() {
  const { t } = useLang();

  return (
    <SectionContainer id="info">
      <div className="pointer-events-none absolute left-[3%] bottom-[10%] select-none">
        <span className="font-mono text-[25vw] font-bold leading-none text-foreground/[0.012]">
          03
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-[20%] h-[2px] w-[60%] origin-right rotate-[25deg] bg-gradient-to-l from-accent-pink/5 to-transparent" />
        <div className="absolute -left-20 bottom-[30%] h-[2px] w-[40%] origin-left -rotate-[15deg] bg-gradient-to-r from-accent-olive/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl">
        <SectionHeader index="03" label={t.info.header} />

        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.02em] uppercase sm:text-4xl">
              {t.info.titleA}{' '}
              <span className="text-accent-pink">{t.info.titleB}</span>
            </h2>
            <div className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
              <p>{t.info.p1}</p>
              <p>{t.info.p2}</p>
            </div>
          </div>

          <DividerVertical />

          <div className="flex flex-col justify-center space-y-8 md:space-y-10">
            {t.info.points.map((point, index) => (
              <div
                key={point.title}
                className="group transition-all duration-300 hover:translate-x-1"
              >
                <h3 className="mb-2 flex items-center gap-2 font-medium">
                  <span
                    className={`font-mono text-[10px] ${COLORS[index % COLORS.length].indexColor}`}
                  >
                    [{index + 1}]
                  </span>
                  <span className={COLORS[index % COLORS.length].color}>
                    {point.title}
                  </span>
                </h3>
                <p
                  className={`border-l-2 border-foreground/5 pl-4 text-sm leading-relaxed text-foreground/50 transition-colors ${COLORS[index % COLORS.length].borderColor} group-hover:text-foreground/70`}
                >
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative mt-12 border-2 border-foreground/5 bg-foreground/[0.02] p-8 text-center sm:mt-20 sm:p-10"
          style={{ borderRadius: '0', transform: 'rotate(-0.3deg)' }}
        >
          <div className="absolute -left-[2px] -top-[2px] h-3 w-3 border-t-2 border-l-2 border-accent-pink/30" />
          <div className="absolute -bottom-[2px] -right-[2px] h-3 w-3 border-b-2 border-r-2 border-accent-olive/30" />
          <p className="font-mono text-sm italic text-muted">
            &ldquo;{t.info.quote}&rdquo;
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
