import { Skeleton } from '@/components/ui/skeleton'

export default function HomeLoading() {
  return (
    <section className="flex flex-col gap-8 lg:gap-12">
      {/* IntroPanel skeleton — mirrors updated mobile-responsive IntroPanel */}
      <div className="relative mx-auto w-full max-w-4xl px-4 py-10 text-center sm:py-16 lg:py-24">
        {/* Decorative top rule: two lines + label */}
        <div className="mb-6 flex items-center justify-center gap-4 sm:mb-8">
          <span className="h-px w-12 bg-border" />
          <Skeleton className="h-3 w-36" />
          <span className="h-px w-12 bg-border" />
        </div>

        {/* h1 headline — responsive sizing */}
        <div className="mb-6 flex flex-col items-center gap-3 sm:mb-8">
          <Skeleton className="h-10 w-56 sm:h-12 sm:w-64 lg:h-20 lg:w-80 xl:h-24 xl:w-96" />
          <Skeleton className="h-10 w-40 sm:h-12 sm:w-48 lg:h-20 lg:w-64 xl:h-24 xl:w-80" />
        </div>

        {/* Thin divider */}
        <div className="mx-auto mb-6 h-px w-16 bg-border sm:mb-8" />

        {/* Body copy — two paragraphs, each two lines */}
        <div className="mx-auto max-w-2xl space-y-3 sm:space-y-4">
          <div className="space-y-2">
            <Skeleton className="mx-auto h-4 w-full sm:h-5 lg:h-6" />
            <Skeleton className="mx-auto h-4 w-5/6 sm:h-5 lg:h-6" />
          </div>
          <div className="space-y-2">
            <Skeleton className="mx-auto h-4 w-full sm:h-5 lg:h-6" />
            <Skeleton className="mx-auto h-4 w-4/6 sm:h-5 lg:h-6" />
          </div>
        </div>

        {/* Decorative bottom 5-dot accent */}
        <div className="mt-8 flex items-center justify-center gap-2 sm:mt-12">
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
