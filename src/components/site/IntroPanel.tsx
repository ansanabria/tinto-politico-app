export function IntroPanel() {
  return (
    <div className="relative mx-auto w-full max-w-4xl px-4 py-10 text-center sm:py-16 lg:py-24">
      {/* Decorative top rule */}
      <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8">
        <span className="h-px w-12 bg-primary opacity-60" />
        <span className="text-xs font-medium tracking-widest uppercase text-primary">
          Colombia · Elecciones 2026
        </span>
        <span className="h-px w-12 bg-primary opacity-60" />
      </div>

      {/* Main headline */}
      <h1 className="mb-6 text-4xl leading-[1.08] tracking-tight sm:mb-8 sm:text-5xl lg:text-7xl xl:text-8xl">
        Vota a <em>conciencia</em>
      </h1>

      {/* Thin divider */}
      <div className="mx-auto mb-6 h-px w-16 bg-border sm:mb-8" />

      {/* Body copy */}
      <div className="mx-auto max-w-2xl space-y-3 sm:space-y-4">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          Explora los perfiles de cada candidato presidencial con información factual y verificable,
          redactada en lenguaje claro.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
          Revisa trayectoria, propuestas y antecedentes en un solo lugar, y compara dos candidatos
          lado a lado antes de tomar una decisión.
        </p>
      </div>

      {/* Decorative bottom accent */}
      <div className="mt-8 flex items-center justify-center gap-2 sm:mt-12">
        <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-40" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-primary opacity-40" />
      </div>
    </div>
  )
}
