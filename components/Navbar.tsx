import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 flex h-16 w-full items-center justify-around border-t border-white/10 bg-black/50 backdrop-blur-md z-50 px-4">
      {[
        ['Наверх', '#'],
        ['Обо мне', '#about'],
        ['Скиллы', '#skills'],
        ['Проекты', '#projects'],
        ['Инфо', '#info'],
        ['Связь', '#contact'],
      ].map(([label, href]) => (
        <Link
          key={href}
          href={href}
          className="text-xs font-medium text-gray-400 transition-colors hover:text-white sm:text-sm"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
