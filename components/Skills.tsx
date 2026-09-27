'use client';

import { memo, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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

const SLUG_TITLES: Record<string, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  php: 'PHP',
  nextdotjs: 'Next.js',
  react: 'React',
  nodedotjs: 'Node.js',
  django: 'Django',
  flask: 'Flask',
  fastapi: 'FastAPI',
  postgresql: 'PostgreSQL',
  mysql: 'MySQL',
  mongodb: 'MongoDB',
  supabase: 'Supabase',
  docker: 'Docker',
  gitlab: 'GitLab',
  nginx: 'Nginx',
  tailwindcss: 'Tailwind CSS',
  bootstrap: 'Bootstrap',
  sass: 'Sass',
  vite: 'Vite',
  webpack: 'Webpack',
  jest: 'Jest',
  intellijidea: 'IntelliJ IDEA',
  pycharm: 'PyCharm',
  webstorm: 'WebStorm',
  postman: 'Postman',
  sublimetext: 'Sublime Text',
  figma: 'Figma',
  notion: 'Notion',
  unity: 'Unity',
};

const CACHE_KEY = 'skills-simple-icons-v1';
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function buildFallbackData(): IconData {
  const simpleIcons: Record<string, SimpleIcon> = {};
  for (const slug of SLUGS) {
    simpleIcons[slug] = { slug, title: SLUG_TITLES[slug] ?? slug };
  }
  return { simpleIcons };
}

function readCache(): IconData | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { ts: number; data: IconData };
    if (!parsed?.data?.simpleIcons || Date.now() - parsed.ts > CACHE_TTL_MS) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed.data;
  } catch {
    return null;
  }
}

function writeCache(data: IconData) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), data }));
  } catch {
    void 0;
  }
}

async function fetchWithTimeout(ms = 8000): Promise<IconData> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('simple-icons timeout')), ms),
  );
  const res = await Promise.race([fetchSimpleIcons({ slugs: SLUGS }), timeout]);
  return res as IconData;
}

const ICON_COLORS = [
  'ff2d6f',
  'ff6b9d',
  'e8457a',
  '4a8c5c',
  '6ba38a',
  'ff8ab5',
  '2d4a2d',
];

function getIconColor(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return ICON_COLORS[Math.abs(hash) % ICON_COLORS.length];
}

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
    <a
      key={icon.slug}
      href={`https://simpleicons.org/?q=${icon.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={icon.title}
    >
      <img
        height={52}
        width={52}
        src={`https://cdn.simpleicons.org/${icon.slug}/${getIconColor(icon.slug)}`}
        alt={icon.title}
        loading="lazy"
        decoding="async"
        draggable={false}
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
    </a>
  ));

  return <Cloud {...cloudProps}>{icons}</Cloud>;
});

const SkillFallbackGrid = memo(function SkillFallbackGrid() {
  return (
    <ul
      className="grid max-w-full grid-cols-3 gap-2 p-6 sm:grid-cols-4 sm:gap-3 sm:p-8"
      aria-label="Технологический стек списком"
    >
      {SLUGS.map((slug) => (
        <li
          key={slug}
          className="border border-foreground/10 bg-foreground/[0.02] px-2 py-2 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70 transition-colors hover:border-accent-pink/40 hover:text-foreground sm:text-[11px]"
        >
          {SLUG_TITLES[slug] ?? slug}
        </li>
      ))}
    </ul>
  );
});

const TECH_CATEGORIES = [
  {
    label: 'Frontend',
    tech: 'Next.js, React, TypeScript, Tailwind',
    color: 'bg-accent-pink',
    textColor: 'text-accent-pink',
  },
  {
    label: 'Backend',
    tech: 'Node.js, PHP, Python, Django',
    color: 'bg-accent-olive',
    textColor: 'text-accent-olive',
  },
  {
    label: 'Data',
    tech: 'PostgreSQL, MongoDB, Supabase',
    color: 'bg-accent-pink/70',
    textColor: 'text-accent-pink/70',
  },
  {
    label: 'DevOps',
    tech: 'Docker, GitLab CI, Nginx',
    color: 'bg-accent-olive/70',
    textColor: 'text-accent-olive/70',
  },
] as const;

export default function Skills() {
  const [data, setData] = useState<IconData | null>(null);
  const [failed, setFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  useEffect(() => {
    let cancelled = false;

    const cached = readCache();
    if (cached) setData(cached);

    (async () => {
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const fresh = await fetchWithTimeout(8000);
          if (!cancelled && fresh?.simpleIcons) {
            setData(fresh);
            setFailed(false);
            writeCache(fresh);
            return;
          }
        } catch {
          if (attempt === 1 && !cancelled) {
            if (!readCache()) {
              setData(buildFallbackData());
            }
            setFailed(true);
          }
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const showStaticGrid = shouldReduceMotion || failed;

  return (
    <SectionContainer
      id="skills"
      className="relative flex items-center overflow-hidden font-sans"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SectionHeader index="01" label="Технологический стек" />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <motion.div
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
              ) : data ? (
                <StaticCloud data={data} />
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-[10px] uppercase tracking-[0.4em] text-muted/30">
                  Загрузка_модулей...
                </div>
              )}
            </div>

            <div className="pointer-events-none absolute bottom-4 right-4 z-30 hidden font-mono text-right sm:block" aria-hidden="true">
              <div className="flex flex-col items-end gap-1">
                <p className="text-[9px] uppercase tracking-widest text-accent-pink/50">
                  System_Status
                </p>
                <p className="border border-accent-pink/20 bg-accent-pink/5 px-3 py-1.5 text-[11px] uppercase tracking-tighter text-foreground">
                  Выбираю стек для нового проекта
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
                <h2
                  className="text-3xl font-bold leading-tight tracking-[-0.02em] uppercase sm:text-4xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Архитектура <br />
                  <span
                    className="font-mono font-light italic text-accent-pink"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    решений
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-base font-light leading-relaxed text-muted sm:text-lg">
                  Мой стек — это не просто список инструментов, а выверенная
                  экосистема для быстрого запуска продуктов
                </p>
              </motion.div>

              <div className="space-y-5 font-mono">
                {TECH_CATEGORIES.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeUp}
                    className="group flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                  >
                    <div
                      className={`mt-1.5 h-2 w-2 ${item.color} transition-transform duration-300 group-hover:scale-150 group-hover:rotate-45`}
                      style={{ borderRadius: '0' }}
                      aria-hidden="true"
                    />
                    <div>
                      <p
                        className={`mb-0.5 text-[10px] uppercase tracking-[0.3em] ${item.textColor}/60`}
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
                <span>Подбор решения для нового проекта</span>
                <span className="text-foreground">Оптимально</span>
              </div>
              <div className="relative h-[2px] w-full overflow-hidden bg-foreground/10">
                <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-accent-pink via-accent-olive to-accent-pink shadow-[0_0_10px_rgba(255,45,111,0.2)] animate-pulse" />
              </div>
              <p className="text-[9px] leading-tight tracking-tighter text-muted/50 normal-case italic">
                Адаптированный стек под сверхбыстрый MVP подход
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
