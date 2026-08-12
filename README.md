<div align="center">

# VintlGvard

**Full-Stack разработчик — от идеи до деплоя.**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-05F?logo=framer&logoColor=white)](https://www.framer.com/motion/)

Личный сайт-портфолио на Next.js App Router с Brutalist / Swiss-дизайном, интерактивным облаком технологий и плавными анимациями.

[Features](#-features) • [Quick Start](#-quick-start) • [Project Structure](#-project-structure) • [Tech Stack](#tech-stack) • [Site Sections](#-site-sections) • [Selected Project](#-selected-project-breweryx-recipe-generator) • [Links](#-links)

</div>

---

## 💡 Why?

Этот сайт — не просто шаблон. Он демонстрирует мой подход к разработке: от архитектурных решений до визуальных деталей. Каждая секция — это осознанный выбор: монохромная палитра с акцентами, интерактивное облако технологий, кастомные анимации — всё работает на впечатление.

Мой подход — **MVP-first + full-stack**. Начинаю с минимально жизнеспособного решения, затем итерирую: добавляю архитектуру, оптимизирую, довожу до продакшена. Проекты — от prototypes до production-ready приложений. Стек — TypeScript, Next.js, React, Tailwind CSS, Node.js. Интересуюсь R&D: экспериментирую с новыми фреймворками, паттернами и инструментами до того, как они станут мейнстримом.

Сайт постоянно развивается — новые проекты и кейсы будут добавляться по мере их завершения.

## ✨ Features

| | |
|---|---|
| 🎨 **Brutalist / Swiss UI** | Монохромная палитра с акцентными pink и olive, зернистая текстура, прямоугольные элементы |
| ☁️ **Icon Cloud** | Интерактивное 3D-облако технологий через `react-icon-cloud` с SimpleIcons CDN |
| 🖱 **Custom Cursor** | Кастомный курсор с анимацией следования (отключается на touch-устройствах и при `prefers-reduced-motion`) |
| 🎬 **Smooth Animations** | Framer Motion-анимации (`motion`, `AnimatePresence`) + CSS keyframes (`scan`, `float`, `drift`, `pulse-slow`) |
| 📐 **Intersection Observer** | Навигация подсвечивает активную секцию при скролле автоматически |
| ⚡ **Streaming / Loading** | Анимированный скелетон загрузки (`loading.tsx`) с индикатором прогресса |
| 🔍 **SEO** | Метаданные Open Graph, Twitter Card, `lang="ru"`, viewport с кастомным `maximumScale` |
| 📱 **Responsive** | Адаптивная сетка, typography-скейлинг через `vw`, mobile-first |

## 🚀 Quick Start

> **Prerequisites:** Node.js >= 20.9.0 (Next.js 16)

```bash
# clone
git clone https://github.com/VintlGvard/portfolio-v3.git
cd portfolio-v3

# install & run
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — главная страница с Hero-секцией.

### Available scripts

```bash
npm run dev      # start development server
npm run build    # production build
npm start        # start production server
npm run lint     # run ESLint
```

## 📂 Project Structure

```
portfolio-v3/
├── app/
│   ├── layout.tsx              # root layout: Space Grotesk + JetBrains Mono, метаданные
│   ├── globals.css             # дизайн-система: цвета, анимации, grain-текстура, кастомный скроллбар
│   ├── error.tsx               # error boundary
│   ├── global-error.tsx        # глобальный error boundary
│   ├── not-found.tsx           # страница 404
│   ├── global-not-found.tsx    # глобальный not-found
│   └── (main)/
│       ├── layout.tsx          # layout маршрута (route group)
│       ├── page.tsx            # главная: Hero → Skills → Projects → Info → Contact
│       └── loading.tsx         # streaming loading skeleton
├── components/
│   ├── Hero.tsx                # Hero-секция: анимированный заголовок с ротацией слов
│   ├── Skills.tsx              # Icon Cloud технологий + категории стека
│   ├── Projects.tsx            # Список проектов с hover-эффектами и ссылками
│   ├── Info.tsx                # Блок «Обо мне»: MVP-подход, adaptive, R&D
│   ├── Contact.tsx             # Контакты: email, Telegram, GitHub, GitLab
│   ├── Navbar.tsx              # Фиксированная нижняя навигация (IntersectionObserver)
│   └── ui/
│       ├── ArrowIcon.tsx       # SVG-стрелка для ссылок
│       ├── ClientCursorWrapper.tsx  # клиентская обёртка для кастомного курсора
│       ├── CustomCursor.tsx    # кастомный курсор
│       ├── DividerVertical.tsx # вертикальный разделитель
│       ├── SectionContainer.tsx # обёртка секции с id-якорем
│       └── SectionHeader.tsx   # заголовок секции с индексом и лейблом
├── public/
│   ├── favicon.ico
│   └── ...                     # статические ассеты
├── eslint.config.mjs           # ESLint flat config + Prettier
├── postcss.config.mjs          # PostCSS / Tailwind CSS 4
├── next.config.ts              # strict mode, images remotePatterns
├── tsconfig.json
└── package.json
```

## Tech Stack

| Layer | Choice |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) — App Router, route groups `(main)`, streaming loading |
| **Language** | [TypeScript](https://www.typescriptlang.org) — strict mode |
| **UI Library** | [React 19](https://react.dev) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) — `@theme inline`, кастомные CSS-переменные |
| **Animations** | [Framer Motion 11](https://www.framer.com/motion/) — `motion`, `AnimatePresence`, `useReducedMotion` в Hero, Navbar, Skills, Contact + CSS keyframes (`scan`, `float`, `drift`, `pulse-slow`) |
| **Icons** | [react-icon-cloud](https://github.com/VintlGvard/react-icon-cloud) — 3D-облако иконок из [SimpleIcons CDN](https://simpleicons.org) |
| **Fonts** | [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (sans) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (mono) через `next/font` |
| **Linting** | [ESLint](https://eslint.org) + [Prettier](https://prettier.io) |

## 📐 Site Sections

Сайт состоит из 5 секций, объединённых в одну страницу:

| # | Section | ID | Описание |
|---|---|---|---|
| 00 | **Hero** | `#hero` | Анимированный заголовок «Я собираю [ПРОДУКТ / АРХИТЕКТУРУ / ПРОТОТИПЫ / РЕШЕНИЯ] С НУЛЯ» |
| 01 | **Skills** | `#skills` | 3D-облако технологий + категории: Frontend, Backend, Data, DevOps |
| 02 | **Projects** | `#projects` | Список проектов с hover-эффектами и ссылками |
| 03 | **Info** | `#info` | «Обо мне»: MVP-подход, adaptive, R&D, актуальные практики |
| 04 | **Contact** | `#contact` | Email, [Telegram](https://t.me/VintlGvard), [GitHub](https://github.com/VintlGvard), [GitLab](https://gitlab.com/vintlgvard) |

## 🔗 Links

| Resource | URL |
|---|---|
| **Website** | [vintlgvard.com](https://vintlgvard.com) |
| **Telegram** | [@VintlGvard](https://t.me/VintlGvard) |
| **GitHub** | [github.com/VintlGvard](https://github.com/VintlGvard) |
| **GitLab** | [gitlab.com/vintlgvard](https://gitlab.com/vintlgvard) |
| **Email** | me@vintlgvard.com |

## 🔗 Selected Project: BreweryX Recipe Generator

Первый опубликованный кейс в портфолио — полнофункциональный инструмент без бэкенда.

| | |
|---|---|
| 🍺 **BreweryX Recipe Generator** | Генератор YAML-рецептов для [BreweryX](https://github.com/BreweryTeam/BreweryX) — Minecraft-плагина для варки пива. Живой превью, валидация, импорт/экспорт, локализация EN/RU, темы light/dark, PWA. |
| **Repo** | [github.com/VintlGvard/breweryx-recipe-gen](https://github.com/VintlGvard/breweryx-recipe-gen) |
| **Stack** | Next.js 16, TypeScript, Tailwind CSS 4, js-yaml |
| **Approach** | Вся логика в браузере. Auto-save в localStorage, cookie-based theme, JSON-LD SEO. Решает конкретную задачу сообщества BreweryX. |

> Это первый кейс — список проектов будет пополняться по мере завершения новых продуктов.

---

<div align="center">

**If this project inspired you, consider giving it a ⭐**

Made with ❤️ by [VintlGvard](https://github.com/VintlGvard)

</div>
