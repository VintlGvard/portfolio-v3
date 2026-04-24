'use client';

import { memo, useEffect, useState } from 'react';
import { Cloud, fetchSimpleIcons, type ICloud } from 'react-icon-cloud';
import SectionContainer from '@/components/ui/SectionContainer';
import SectionHeader from '@/components/ui/SectionHeader';

interface SimpleIcon {
  slug: string;
  title: string;
}

interface IconData {
  simpleIcons: Record<string, SimpleIcon>;
}

const SLUGS = [
  'javascript',
  'typescript',
  'python',
  'php',
  'nextdotjs',
  'react',
  'nodedotjs',
  'django',
  'flask',
  'fastapi',
  'postgresql',
  'mysql',
  'mongodb',
  'supabase',
  'docker',
  'gitlab',
  'nginx',
  'tailwindcss',
  'bootstrap',
  'sass',
  'vite',
  'webpack',
  'jest',
  'intellijidea',
  'pycharm',
  'webstorm',
  'postman',
  'sublimetext',
  'figma',
  'notion',
  'unity',
];

const StaticCloud = memo(function StaticCloud({ data }: { data: IconData }) {
  const cloudProps: Omit<ICloud, 'children'> = {
    containerProps: {
      className: 'flex items-center justify-center w-full h-full',
    },
    canvasProps: {
      style: {
        width: '100%',
        maxWidth: '100%',
      },
    },
    options: {
      reverse: true,
      depth: 0.8,
      wheelZoom: false,
      imageScale: 2.4,
      activeCursor: 'default',
      initial: [0.1, -0.1],
      outlineColour: '#0000',
      maxSpeed: 0.02,
      minSpeed: 0.01,
      dragControl: true,
      dragThreshold: 4,
      pinchZoom: true,
      freezeActive: true,
      shuffleTags: true,
    },
  };

  const icons = Object.values(data.simpleIcons).map((icon) => (
    <a key={icon.slug} href="#" onClick={(e) => e.preventDefault()}>
      <img
        height={52}
        width={52}
        src={`https://cdn.simpleicons.org/${icon.slug}/3b82f6`}
        alt={icon.title}
        loading="eager"
      />
    </a>
  ));

  return <Cloud {...cloudProps}>{icons}</Cloud>;
});

export default function Skills() {
  const [data, setData] = useState<IconData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSimpleIcons({ slugs: SLUGS })
      .then((res) => setData(res as IconData))
      .catch(() => setError(true));
  }, []);

  return (
    <SectionContainer
      id="skills"
      className="relative flex items-center overflow-hidden font-sans"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader index="01" label="Технологический стек" />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="group relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.01] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px]">
            <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
              <div className="absolute h-[1px] w-full bg-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-scan" />
            </div>

            <div className="absolute top-0 left-0 z-20 h-2 w-2 border-t border-l border-blue-500" />
            <div className="absolute top-0 right-0 z-20 h-2 w-2 border-t border-r border-white/20" />
            <div className="absolute bottom-0 left-0 z-20 h-2 w-2 border-b border-l border-white/20" />
            <div className="absolute bottom-0 right-0 z-20 h-2 w-2 border-b border-r border-blue-500" />

            <div className="relative z-0 flex h-full w-full items-center justify-center">
              {data ? (
                <StaticCloud data={data} />
              ) : error ? (
                <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.4em] opacity-30">
                  Ошибка загрузки
                </div>
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.4em] opacity-20">
                  Загрузка_модулей...
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-30 hidden font-mono text-right sm:block">
              <div className="flex flex-col items-end gap-1">
                <p className="text-[9px] uppercase tracking-widest text-blue-500 opacity-50">
                  System_Status
                </p>
                <p className="border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[11px] uppercase tracking-tighter text-white">
                  Выбираю стек для нового проекта
                  <span className="animate-pulse">...</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 py-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight uppercase sm:text-4xl">
                  Архитектура <br />
                  <span className="font-serif font-light italic text-blue-500">
                    решений
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-base font-light leading-relaxed text-gray-400 sm:text-lg">
                  Мой стек — это не просто список инструментов, а выверенная
                  экосистема для быстрого запуска продуктов
                </p>
              </div>

              <div className="space-y-5 font-mono">
                {[
                  {
                    label: 'Frontend',
                    tech: 'Next.js, React, TypeScript, Tailwind',
                  },
                  { label: 'Backend', tech: 'Node.js, PHP, Python, Django' },
                  { label: 'Data', tech: 'PostgreSQL, MongoDB, Supabase' },
                  { label: 'DevOps', tech: 'Docker, GitLab CI, Nginx' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="group flex items-start gap-3"
                  >
                    <div className="mt-1.5 h-1.5 w-1.5 rotate-45 bg-blue-500 transition-transform duration-300 group-hover:scale-150" />
                    <div>
                      <p className="mb-0.5 text-[10px] uppercase tracking-widest text-gray-500">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium italic tracking-tight text-white/90">
                        {item.tech}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-3 border-l border-blue-500/50 bg-blue-500/5 p-5 font-mono text-[10px] uppercase tracking-widest sm:mt-8">
              <div className="flex justify-between text-blue-400">
                <span>Подбор решения для нового проекта</span>
                <span className="text-white">Оптимально</span>
              </div>
              <div className="relative h-[1px] w-full overflow-hidden bg-white/10">
                <div className="absolute left-0 top-0 h-full w-full bg-blue-500 shadow-[0_0_10px_#3b82f6] animate-pulse" />
              </div>
              <p className="text-[9px] leading-tight tracking-tighter text-gray-500 normal-case italic">
                Адаптированный стек под сверхбыстрый MVP подход
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
