import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';
import ArrowIcon from '@/components/ui/ArrowIcon';

const PROJECTS = [
  {
    id: '01',
    title: 'Заглушка 1',
    desc: 'Заглушка',
    link: '#',
    tech: 'Заглушка',
  },
  {
    id: '02',
    title: 'Заглушка 2',
    desc: 'Заглушка',
    link: '#',
    tech: 'Заглушка',
  },
  {
    id: '03',
    title: 'Заглушка 3',
    desc: 'Заглушка',
    link: '#',
    tech: 'Заглушка',
  },
];

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="pointer-events-none absolute right-[5%] top-[10%] select-none">
        <span className="font-mono text-[20vw] font-bold leading-none text-foreground/[0.015]">
          02
        </span>
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <SectionHeader index="02" label="Проекты" />
        </div>

        <h2
          className="mb-12 text-3xl font-bold tracking-[-0.03em] uppercase sm:mb-20 sm:text-5xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          Проекты{' '}
          <span className="font-mono font-light italic text-accent-pink">
            &
          </span>{' '}
          Кейсы
        </h2>

        <div className="flex flex-col border-t-2 border-foreground/10">
          {PROJECTS.map((p, idx) => (
            <a
              key={p.id}
              href={p.link}
              className="group relative flex flex-col justify-between border-b-2 border-foreground/10 py-8 transition-all duration-300 md:hover:pl-4 md:flex-row md:items-center md:py-10"
            >
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
                  <h3 className="text-2xl font-medium tracking-[-0.02em] transition-all duration-300 group-hover:text-accent-pink group-hover:tracking-[0.02em] sm:text-3xl">
                    {p.title}
                  </h3>
                  <p className="max-w-sm text-sm font-light leading-relaxed text-muted transition-colors group-hover:text-foreground/60">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-6 flex items-center gap-6 md:mt-0 md:gap-12">
                <div className="flex flex-col items-start font-mono md:items-end">
                  <span className="mb-1 text-[9px] uppercase tracking-[0.25em] text-muted/40">
                    Stack
                  </span>
                  <span className="text-xs text-muted/60 transition-colors group-hover:text-foreground">
                    {p.tech}
                  </span>
                </div>

                <div className="translate-x-4 text-accent-pink opacity-20 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:rotate-0 rotate-45">
                  <ArrowIcon />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
