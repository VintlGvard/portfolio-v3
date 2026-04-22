interface SectionHeaderProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionHeader({
  index,
  label,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 flex items-center gap-4 opacity-50 sm:mb-16 ${className}`}
    >
      <span className="text-xs font-mono tracking-tighter sm:text-sm">
        {index}
      </span>
      <div className="h-[1px] flex-1 bg-white/20" />
      <span className="text-xs uppercase tracking-widest sm:text-sm">
        {label}
      </span>
    </div>
  );
}
