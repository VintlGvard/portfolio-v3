interface ProjectRowProps {
  id: string;
  title: string;
  desc: string;
  tech: string;
  link: string;
}

export default function ProjectRow({
  id,
  title,
  desc,
  tech,
  link,
}: ProjectRowProps) {
  return (
    <a
      href={link}
      className="group flex flex-col justify-between border-b border-white/10 py-10 transition-all hover:px-2 md:flex-row md:items-center"
    >
      <div className="flex items-start gap-8">
        <span className="mt-2 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          [{id}]
        </span>

        <div className="space-y-2">
          <h3 className="text-3xl font-medium tracking-tight transition-colors duration-300 group-hover:text-blue-500">
            {title}
          </h3>
          <p className="max-w-sm text-sm font-light leading-relaxed text-gray-500 transition-colors group-hover:text-gray-400">
            {desc}
          </p>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-12 md:mt-0">
        <div className="flex flex-col items-start font-mono md:items-end">
          <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-gray-600">
            Stack
          </span>
          <span className="text-xs text-gray-400 transition-colors group-hover:text-white">
            {tech}
          </span>
        </div>

        <div className="link-arrow">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="rotate-45"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </a>
  );
}
