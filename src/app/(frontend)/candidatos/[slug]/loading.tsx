import { Skeleton } from '@/components/ui/skeleton'

export default function CandidateLoading() {
  return (
    <section>
      {/* ── Mobile compact header skeleton ── */}
      <div className="mb-6 md:hidden">
        <div className="flex gap-4">
          {/* Square photo placeholder */}
          <Skeleton className="aspect-square w-28 shrink-0 rounded-lg" />

          {/* Name, party, metadata */}
          <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="mt-1 h-3 w-2/5" />
          </div>
        </div>

        {/* Action buttons row */}
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-9 flex-1 rounded-md" />
          <Skeleton className="h-9 flex-1 rounded-md" />
        </div>

        {/* Social links row */}
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-7 w-16 rounded-md" />
          <Skeleton className="h-7 w-20 rounded-md" />
          <Skeleton className="h-7 w-20 rounded-md" />
        </div>
      </div>

      {/* ── Desktop: sidebar + content grid ── */}
      <div className="grid gap-8 md:grid-cols-[minmax(260px,30%)_1fr]">
        {/* Sidebar skeleton — hidden on mobile */}
        <aside className="hidden overflow-hidden rounded-lg border border-border bg-card md:block md:self-start">
          <Skeleton className="aspect-[3/4] rounded-none" />
          <div className="space-y-3 p-5">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="mt-4 h-9 w-full" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-2/5" />
          </div>
        </aside>

        {/* Main content skeleton */}
        <div className="min-w-0 space-y-4">
          {/* Section nav skeleton — horizontal scrollable pills on mobile */}
          <div className="flex gap-2 overflow-hidden md:rounded-full md:border md:border-border md:bg-background md:p-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-24 shrink-0 rounded-full md:h-5 md:flex-1" />
            ))}
          </div>

          {/* Section cards skeleton */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <Skeleton className="mb-4 h-6 w-48" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
