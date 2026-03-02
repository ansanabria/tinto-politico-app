import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <section className="flex flex-col gap-8 lg:gap-12">
      {/* IntroPanel skeleton — mirrors: relative mx-auto w-full max-w-4xl px-4 py-16 text-center lg:py-24 */}
      <div className="relative mx-auto w-full max-w-4xl px-4 py-16 text-center lg:py-24">
        {/* Decorative top rule: two lines + label */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-border" />
          <Skeleton className="h-3 w-36" />
          <span className="h-px w-12 bg-border" />
        </div>

        {/* h1 headline — two lines at large scale */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <Skeleton className="h-12 w-64 lg:h-20 lg:w-80 xl:h-24 xl:w-96" />
          <Skeleton className="h-12 w-48 lg:h-20 lg:w-64 xl:h-24 xl:w-80" />
        </div>

        {/* Thin divider */}
        <div className="mx-auto mb-8 h-px w-16 bg-border" />

        {/* Body copy — two paragraphs, each two lines */}
        <div className="mx-auto max-w-2xl space-y-4">
          <div className="space-y-2">
            <Skeleton className="mx-auto h-5 w-full lg:h-6" />
            <Skeleton className="mx-auto h-5 w-5/6 lg:h-6" />
          </div>
          <div className="space-y-2">
            <Skeleton className="mx-auto h-5 w-full lg:h-6" />
            <Skeleton className="mx-auto h-5 w-4/6 lg:h-6" />
          </div>
        </div>

        {/* Decorative bottom 5-dot accent */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
        </div>
      </div>

      {/* Candidate card grid skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="aspect-[3/4] min-h-[280px] rounded-lg" />
        ))}
      </div>
    </section>
  )
}
