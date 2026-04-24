export default function Loading() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-foreground sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute left-0 h-[2px] w-full bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.3)] animate-scan" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-1 sm:mb-8">
          <div
            className="h-1 w-6 animate-pulse bg-blue-500 sm:w-8"
            style={{ animationDelay: '0ms' }}
          />
          <div
            className="h-1 w-6 animate-pulse bg-blue-500 sm:w-8"
            style={{ animationDelay: '150ms' }}
          />
          <div
            className="h-1 w-6 animate-pulse bg-blue-500 sm:w-8"
            style={{ animationDelay: '300ms' }}
          />
        </div>

        <div className="w-full max-w-[280px] rounded-lg border border-white/5 bg-white/[0.02] p-3 font-mono text-left text-[10px] sm:max-w-sm sm:p-4 sm:text-[11px]">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-500/60 sm:h-2 sm:w-2" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-500/60 sm:h-2 sm:w-2" />
          </div>
          <div className="space-y-1 text-gray-500">
            <p>
              <span className="text-blue-400">$</span> loading modules...
            </p>
            <p className="text-gray-600">[████████░░] 80%</p>
            <p>
              <span className="text-blue-400">$</span> initializing
              <span className="animate-pulse text-white"> _</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
