'use client';

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
] as const;

export default function Projects() {
  return (
    <SectionContainer id="projects">
      <div className="mx-auto w-full max-w-5xl">
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <SectionHeader index="02" label="Проекты" />
        </div>

        <h2 className="mb-20 text-4xl font-semibold tracking-tighter sm:text-5xl">
          Проекты <span className="font-light italic text-blue-500">&</span>{' '}
          Кейсы
        </h2>

        <div className="flex flex-col border-t border-white/10">
          {PROJECTS.map((p) => (
            <a
              key={p.id}
              href={p.link}
              className="group flex flex-col justify-between border-b border-white/10 py-10 transition-all hover:px-2 md:flex-row md:items-center"
            >
              <div className="flex items-start gap-8">
                <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
                  [{p.id}]
                </span>

                <div className="space-y-2">
                  <h3 className="text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-blue-500">
                    {p.title}
                  </h3>
                  <p className="max-w-sm text-sm font-light leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-12 md:mt-0">
                <div className="flex flex-col items-start font-mono md:items-end">
                  <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-gray-600">
                    Stack
                  </span>
                  <span className="text-xs text-gray-400 transition-colors group-hover:text-white">
                    {p.tech}
                  </span>
                </div>

                <div className="translate-x-4 text-blue-500 opacity-20 transition-all group-hover:translate-x-0 group-hover:opacity-100">
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
