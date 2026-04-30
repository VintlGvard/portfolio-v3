export default function Loading() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-foreground sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-accent-pink/5 blur-[150px] animate-drift" />
        <div
          className="absolute bottom-[-5%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent-olive/8 blur-[120px] animate-drift"
          style={{ animationDelay: '-4s' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-8 top-8 h-16 w-16 border-t-2 border-l-2 border-foreground/10 sm:left-16 sm:top-16" />
        <div className="absolute bottom-24 right-8 h-16 w-16 border-b-2 border-r-2 border-accent-pink/20 sm:bottom-32 sm:right-16" />
        <div
          className="absolute right-[15%] top-[25%] h-3 w-3 bg-accent-pink/30 animate-float"
          style={{ borderRadius: '0' }}
        />
        <div
          className="absolute left-[10%] bottom-[30%] h-4 w-4 rotate-45 border border-accent-pink/10 animate-float"
          style={{ animationDelay: '-2s' }}
        />
        <div className="absolute left-0 top-[45%] h-[2px] w-[30%] bg-gradient-to-r from-accent-pink/20 to-transparent" />
      </div>

      <div className="pointer-events-none absolute right-4 top-0 hidden h-full w-[2px] overflow-hidden bg-foreground/5 sm:right-12 sm:block">
        <div className="h-20 w-full bg-accent-pink shadow-[0_0_20px_rgba(255,45,111,0.3)] animate-scan" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8 flex items-center gap-2">
          <div
            className="h-2 w-2 animate-pulse bg-accent-pink"
            style={{ borderRadius: '0', animationDelay: '0ms' }}
          />
          <div
            className="h-2 w-2 animate-pulse bg-accent-olive"
            style={{ borderRadius: '0', animationDelay: '200ms' }}
          />
          <div
            className="h-2 w-2 animate-pulse bg-accent-pink/60"
            style={{ borderRadius: '0', animationDelay: '400ms' }}
          />
        </div>

        <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted/40">
          <span className="text-accent-pink/50">$</span> загрузка
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </section>
  );
}
