export type ProjectStatus = 'live' | 'in_progress';

export interface Project {
  id: string;
  title: { en: string; ru: string };
  desc: { en: string; ru: string };
  tech: string;
  link: string;
  secondaryLinks?: { label: { en: string; ru: string }; href: string }[];
  status: ProjectStatus;
}

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: { en: 'BreweryX Recipe Generator', ru: 'BreweryX Recipe Generator' },
    desc: {
      en: 'YAML recipe generator for BreweryX: form, live preview and config export right in the browser',
      ru: 'Генератор YAML-рецептов для BreweryX: форма, live preview и экспорт конфигурации прямо в браузере',
    },
    tech: 'Next.js · TypeScript · Tailwind',
    link: 'https://github.com/VintlGvard/breweryx-recipe-gen',
    status: 'live',
  },
  {
    id: '02',
    title: { en: 'Steam PricePerHour', ru: 'Steam PricePerHour' },
    desc: {
      en: 'Browser extension: price-per-hour badges on game pages, search, bundles and the Steam front page. Supports every official Steam currency',
      ru: 'Браузерное расширение: бейджи цены за час игры на страницах игр, в поиске, бандлах и на главной Steam. Поддержка всех официальных валют Steam',
    },
    tech: 'JavaScript · CSS · WebExtensions',
    link: 'https://github.com/VintlGvard/Steam_PricePerHour',
    secondaryLinks: [
      {
        label: { en: 'Chrome Web Store', ru: 'Chrome Web Store' },
        href: 'https://chromewebstore.google.com/detail/steam-priceperhour/pkpenhdpcdkmhelhlbbdddedipkmngco',
      },
      {
        label: { en: 'Firefox Add-ons', ru: 'Firefox Add-ons' },
        href: 'https://addons.mozilla.org/en-US/firefox/addon/steam-priceperhour/',
      },
    ],
    status: 'live',
  },
  {
    id: '03',
    title: { en: 'Next case', ru: 'Следующий кейс' },
    desc: {
      en: 'Currently in development. Follow updates on GitHub.',
      ru: 'Сейчас в разработке. Следите за обновлениями на GitHub.',
    },
    tech: 'TBD',
    link: '#',
    status: 'in_progress',
  },
];
