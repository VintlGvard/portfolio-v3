'use client';
import { useState } from 'react';

const CONTACTS = [
  {
    label: 'Telegram',
    value: '@VintlGvard',
    url: 'https://t.me/VintlGvard',
    color: 'hover:border-blue-500/50 hover:bg-blue-500/10',
  },
  {
    label: 'GitHub',
    value: 'vintlgvard',
    url: 'https://github.com/VintlGvard',
    color: 'hover:border-white/50 hover:bg-white/10',
  },
  {
    label: 'GitLab',
    value: 'vintlgvard',
    url: 'https://gitlab.com/vintlgvard',
    color: 'hover:border-blue-600/50 hover:bg-blue-600/10',
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('me@vintlgvard.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4 text-center"
    >
      <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
        Связаться со мной
      </h1>
      <p className="mb-12 text-gray-400">Выберите удобный канал связи.</p>

      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={copyEmail}
          className="group relative flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
        >
          <span className="mr-2 text-[10px] font-bold uppercase text-gray-500 group-hover:text-cyan-400">
            Email
          </span>
          <span className="text-sm font-medium">me@vintlgvard.com</span>
          {copied && (
            <span className="absolute inset-0 flex items-center justify-center bg-cyan-500 text-xs font-bold text-black rounded-xl">
              СКОПИРОВАНО!
            </span>
          )}
        </button>
        {CONTACTS.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener"
            className={`group flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-all ${s.color}`}
          >
            <span className="mr-2 text-[10px] font-bold uppercase text-gray-500 group-hover:text-inherit">
              {s.label}
            </span>
            <span className="text-sm font-medium">{s.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
