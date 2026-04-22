interface DividerVerticalProps {
  className?: string;
}

export default function DividerVertical({
  className = '',
}: DividerVerticalProps) {
  return <div className={`hidden md:block w-[1px] bg-white/10 ${className}`} />;
}
