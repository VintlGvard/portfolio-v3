interface DividerVerticalProps {
  className?: string;
}

export default function DividerVertical({
  className = '',
}: DividerVerticalProps) {
  return (
    <div className={`hidden md:block w-[2px] bg-foreground/10 ${className}`}>
      <div className="h-1/3 w-full bg-accent-pink/30" />
    </div>
  );
}
