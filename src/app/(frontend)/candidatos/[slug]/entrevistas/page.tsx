import Link from 'next/link'
import { notFound } from 'next/navigation'

import { YouTubeCard } from '@/components/site/YouTubeCard'
import { getCandidateBySlug } from '@/lib/candidates'

type Props = {
  params: Promise<{ slug: string }>
}

/** Revalidate interview page every 5 minutes (ISR). */
export const revalidate = 300

export default async function EntrevistasPage({ params }: Props) {
  const { slug } = await params
  const candidate = await getCandidateBySlug(slug)

  if (!candidate) {
    notFound()
  }

  const interviews = candidate.interviewItems ?? []

  return (
    <div>
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground sm:mb-8">
        <Link
          href={`/candidatos/${candidate.slug}`}
          className="transition-colors hover:text-foreground"
        >
          ← {candidate.name}
        </Link>
        <span aria-hidden>/</span>
        <span className="text-foreground">Entrevistas</span>
      </nav>

      <header className="mb-8 border-b border-border pb-6 sm:mb-10 sm:pb-8">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Entrevistas
        </p>
        <h1 className="text-2xl leading-tight sm:text-3xl">{candidate.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground sm:text-base">{candidate.party}</p>
      </header>

      {interviews.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {interviews.map((item) => (
            <YouTubeCard
              key={item.id ?? item.youtubeUrl}
              title={item.title}
              youtubeUrl={item.youtubeUrl}
              description={item.description}
              publishedDate={item.publishedDate}
              channel={item.channel}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-card p-10 text-center">
          <p className="text-muted-foreground">
            No hay entrevistas registradas para este candidato aún.
          </p>
        </div>
      )}
    </div>
  )
}
