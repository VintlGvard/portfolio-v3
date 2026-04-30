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
    <div className={`mb-12 flex items-center gap-4 sm:mb-20 ${className}`}>
      <span className="font-mono text-xs tracking-[0.3em] text-accent-pink sm:text-sm">
        {index}
      </span>
      <div className="h-[2px] flex-1 bg-foreground/10" />
      <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}
