'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react';

export type Lang = 'en' | 'ru';

const STORAGE_KEY = 'portfolio-lang';
export const DEFAULT_LANG: Lang = 'en';

interface Dictionary {
  skipLink: string;
  nav: { label: string; href: string }[];
  navAria: string;
  hero: {
    name: string;
    i: string;
    build: string;
    words: string[];
    spacer: string;
    from: string;
    scratch: string;
    subtitle1: string;
    subtitle2: string;
    projectsCta: string;
    contactCta: string;
    sectionsNavAria: string;
  };
  skills: {
    header: string;
    titleA: string;
    titleB: string;
    desc: string;
    loading: string;
    listAria: string;
    statusLabel: string;
    statusText: string;
    fitLabel: string;
    fitValue: string;
    fitNote: string;
    categories: { label: string; tech: string }[];
  };
  projects: {
    header: string;
    titleA: string;
    titleB: string;
    openProject: string;
    external: string;
    stack: string;
    inProgressBadge: string;
  };
  info: {
    header: string;
    titleA: string;
    titleB: string;
    p1: string;
    p2: string;
    points: { title: string; text: string }[];
    quote: string;
  };
  contact: {
    header: string;
    badge: string;
    titleA: string;
    titleB: string;
    desc: string;
    location: string;
    locationValue: string;
    time: string;
    primaryContact: string;
    copy: string;
    copied: string;
    openMail: string;
  };
  loading: { text: string };
  error: {
    notFoundTitle: string;
    notFoundDesc: string;
    notFoundAction: string;
    crashTitle: string;
    crashDesc: string;
    crashAction: string;
  };
  switcherAria: string;
}

const en: Dictionary = {
  skipLink: 'Skip to content',
  nav: [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#info' },
    { label: 'Contact', href: '#contact' },
  ],
  navAria: 'Main navigation',
  hero: {
    name: 'Vitaly Smirnov | VintlGvard',
    i: 'I',
    build: 'build',
    words: ['PRODUCTS', 'ARCHITECTURE', 'PROTOTYPES', 'SOLUTIONS'],
    spacer: 'ARCHITECTURE',
    from: 'FROM',
    scratch: 'SCRATCH',
    subtitle1: 'End-to-end full-stack developer',
    subtitle2: 'From idea to deploy',
    projectsCta: 'Projects',
    contactCta: 'Contact',
    sectionsNavAria: 'Section navigation',
  },
  skills: {
    header: 'Tech stack',
    titleA: 'Solution',
    titleB: 'architecture',
    desc: 'My stack is not just a list of tools — it is a tuned ecosystem for shipping products fast',
    loading: 'Loading_modules...',
    listAria: 'Tech stack as a list',
    statusLabel: 'System_Status',
    statusText: 'Picking stack for a new project',
    fitLabel: 'Solution fit for a new project',
    fitValue: 'Optimal',
    fitNote: 'Stack tuned for an ultra-fast MVP approach',
    categories: [
      { label: 'Frontend', tech: 'Next.js, React, TypeScript, Tailwind' },
      { label: 'Backend', tech: 'Go, Fiber, Node.js, Python, Django' },
      { label: 'Data', tech: 'PostgreSQL, MongoDB, Supabase' },
      { label: 'DevOps', tech: 'Docker, GitLab CI, Nginx' },
    ],
  },
  projects: {
    header: 'Projects',
    titleA: 'Projects',
    titleB: '& Cases',
    openProject: 'Open project',
    external: '(external link)',
    stack: 'Stack',
    inProgressBadge: 'In progress',
  },
  info: {
    header: 'About',
    titleA: 'Full-stack developer focused on',
    titleB: 'results',
    p1: 'I focus on the launch and active growth stage of a product. As a full-stack developer I build working solutions you can test and show to users early',
    p2: 'For me development is first of all a tool to bring new ideas to life. I keep looking for ambitious tasks and new tools, helping abstract concepts take shape',
    points: [
      {
        title: 'MVP & Prototyping',
        text: 'I specialise in architecture and fast prototypes. My job is turning a concept into a working product for tests in the shortest time',
      },
      {
        title: 'Ultra-fast Adaptive',
        text: 'If an idea needs an unfamiliar stack, I pick it up on the go with no loss of pace or implementation quality',
      },
      {
        title: 'R&D Engineer',
        text: 'I work well under uncertainty, when you need to quickly validate a hypothesis or assemble a complex technical concept',
      },
      {
        title: 'Modern practices',
        text: 'I bring a fresh view and modern tech into a project, laying the foundation for future scaling',
      },
    ],
    quote:
      'My approach is built on flexibility and finding the most effective ways to implement an idea',
  },
  contact: {
    header: 'Contact',
    badge: 'Available for projects',
    titleA: 'Open to new',
    titleB: 'challenges and ideas.',
    desc: 'If you have a project that needs fast prototyping or fresh ideas — reach out in whatever messenger suits you',
    location: 'Location:',
    locationValue: 'RU / Tatarstan',
    time: 'Time:',
    primaryContact: 'Primary Contact',
    copy: '⎘ Copy',
    copied: '✓ Copied',
    openMail: 'Open mail…',
  },
  loading: { text: 'loading' },
  error: {
    notFoundTitle: 'Page not found',
    notFoundDesc:
      'The requested route does not exist or has been moved. Try going back home.',
    notFoundAction: 'Home',
    crashTitle: 'Something went wrong',
    crashDesc: 'An unexpected server error occurred. Try refreshing the page.',
    crashAction: 'Try again',
  },
  switcherAria: 'Language switcher',
};

const ru: Dictionary = {
  skipLink: 'К основному содержимому',
  nav: [
    { label: 'Старт', href: '#hero' },
    { label: 'Скиллы', href: '#skills' },
    { label: 'Проекты', href: '#projects' },
    { label: 'Инфо', href: '#info' },
    { label: 'Связь', href: '#contact' },
  ],
  navAria: 'Основная навигация',
  hero: {
    name: 'Смирнов Виталий | VintlGvard',
    i: 'Я',
    build: 'собираю',
    words: ['ПРОДУКТ', 'АРХИТЕКТУРУ', 'ПРОТОТИПЫ', 'РЕШЕНИЯ'],
    spacer: 'АРХИТЕКТУРУ',
    from: 'С',
    scratch: 'НУЛЯ',
    subtitle1: 'Фуллстек разработчик полного цикла',
    subtitle2: 'От идеи до деплоя',
    projectsCta: 'Проекты',
    contactCta: 'Связаться',
    sectionsNavAria: 'Навигация по секциям',
  },
  skills: {
    header: 'Технологический стек',
    titleA: 'Архитектура',
    titleB: 'решений',
    desc: 'Мой стек — это не просто список инструментов, а выверенная экосистема для быстрого запуска продуктов',
    loading: 'Загрузка_модулей...',
    listAria: 'Технологический стек списком',
    statusLabel: 'System_Status',
    statusText: 'Выбираю стек для нового проекта',
    fitLabel: 'Подбор решения для нового проекта',
    fitValue: 'Оптимально',
    fitNote: 'Адаптированный стек под сверхбыстрый MVP подход',
    categories: [
      { label: 'Frontend', tech: 'Next.js, React, TypeScript, Tailwind' },
      { label: 'Backend', tech: 'Go, Fiber, Node.js, Python, Django' },
      { label: 'Data', tech: 'PostgreSQL, MongoDB, Supabase' },
      { label: 'DevOps', tech: 'Docker, GitLab CI, Nginx' },
    ],
  },
  projects: {
    header: 'Проекты',
    titleA: 'Проекты',
    titleB: '& Кейсы',
    openProject: 'Открыть проект',
    external: '(внешняя ссылка)',
    stack: 'Stack',
    inProgressBadge: 'В работе',
  },
  info: {
    header: 'Обо мне',
    titleA: 'Фуллстек разработчик с фокусом на',
    titleB: 'результат',
    p1: 'В своей практике я фокусируюсь на этапе запуска и активного развития продукта. Как фуллстек разработчик, я создаю рабочие решения, которые можно тестировать и показывать пользователям уже на ранних стадиях',
    p2: 'Для меня разработка — это прежде всего инструмент для воплощения новых идей. Я постоянно нахожусь в поиске амбициозных задач и новых инструментов, помогая абстрактным концептам обретать форму',
    points: [
      {
        title: 'MVP & Прототипирование',
        text: 'Специализируюсь на создании архитектуры и быстрых прототипов. Моя задача — в кратчайшие сроки превратить концепт в функциональный продукт для тестов',
      },
      {
        title: 'Сверхбыстрый Adaptive',
        text: 'Если для реализации идеи требуется незнакомый стек, я осваиваю его в процессе работы без потери темпа и качества реализации',
      },
      {
        title: 'R&D Инженер',
        text: 'Эффективно работаю в условиях неопределенности, когда нужно быстро проверить гипотезу или собрать сложный технический концепт',
      },
      {
        title: 'Актуальные практики',
        text: 'Стремлюсь привнести в проект свежий взгляд и современные технологии, закладывая фундамент для будущего масштабирования',
      },
    ],
    quote:
      'Мой подход строится на гибкости и поиске наиболее эффективных путей реализации идеи',
  },
  contact: {
    header: 'Контакты',
    badge: 'Доступен для проектов',
    titleA: 'Готов к новым',
    titleB: 'вызовам и идеям.',
    desc: 'Если у вас есть проект, требующий быстрого прототипирования или свежих идей — пишите в удобном вам мессенджере',
    location: 'Локация:',
    locationValue: 'РФ / Татарстан',
    time: 'Время:',
    primaryContact: 'Основной контакт',
    copy: '⎘ Копировать',
    copied: '✓ Скопировано',
    openMail: 'Открыть почту…',
  },
  loading: { text: 'загрузка' },
  error: {
    notFoundTitle: 'Страница не найдена',
    notFoundDesc:
      'Запрашиваемый маршрут не существует или был перемещён. Попробуйте вернуться на главную.',
    notFoundAction: 'На главную',
    crashTitle: 'Что-то пошло не так',
    crashDesc:
      'Произошла непредвиденная ошибка на сервере. Попробуйте обновить страницу.',
    crashAction: 'Попробовать снова',
  },
  switcherAria: 'Переключатель языка',
};

const dictionaries: Record<Lang, Dictionary> = { en, ru };

let currentLang: Lang = DEFAULT_LANG;
const langListeners = new Set<() => void>();

function readStoredLang(): Lang | null {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'ru') return saved;
  } catch {
    void 0;
  }
  return null;
}

function setStoredLang(l: Lang) {
  currentLang = l;
  try {
    window.localStorage.setItem(STORAGE_KEY, l);
  } catch {
    void 0;
  }
  langListeners.forEach((listener) => listener());
}

let storageListening = false;

function ensureStorageListener() {
  if (storageListening) return;
  storageListening = true;
  window.addEventListener('storage', (e) => {
    if (e.key !== STORAGE_KEY) return;
    if (e.newValue === 'en' || e.newValue === 'ru') {
      currentLang = e.newValue;
      langListeners.forEach((listener) => listener());
    }
  });
}

function subscribeLang(listener: () => void) {
  langListeners.add(listener);
  ensureStorageListener();
  return () => {
    langListeners.delete(listener);
  };
}

function getLangSnapshot(): Lang {
  return currentLang;
}

function getLangServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

interface LangContextValue {
  lang: Lang;
  t: Dictionary;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: DEFAULT_LANG,
  t: en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(
    subscribeLang,
    getLangSnapshot,
    getLangServerSnapshot,
  );

  useEffect(() => {
    const stored = readStoredLang();
    if (stored && stored !== currentLang) setStoredLang(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({ lang, t: dictionaries[lang], setLang: setStoredLang }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
