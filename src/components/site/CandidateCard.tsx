import Image from 'next/image'
import Link from 'next/link'

type CandidateCardProps = {
  href: string
  imageUrl: string | null
  name: string
  party: string
  /** Mark as LCP candidate — adds `priority` and `fetchPriority="high"` to the image. */
  priority?: boolean
}

export function CandidateCard({ href, imageUrl, name, party, priority }: CandidateCardProps) {
  return (
    <Link
      className="group relative block aspect-[3/4] min-h-[280px] overflow-hidden rounded-lg border border-border bg-secondary no-underline transition-shadow hover:shadow-md"
      href={href}
    >
      {imageUrl ? (
        <Image
          alt={`Foto de ${name}`}
          src={imageUrl}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
          className="object-cover"
          priority={priority}
        />
      ) : (
        <div className="h-full w-full bg-secondary" aria-hidden />
      )}

      {/* Gradient overlay — always visible on mobile, hover-only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-transparent opacity-100 transition-opacity duration-200 sm:from-foreground/75 sm:to-foreground/10 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100" />

      {/* Name & party — always visible on mobile, slide-up on desktop */}
      <div className="absolute inset-0 grid content-end p-5 opacity-100 translate-y-0 transition-all duration-200 sm:opacity-0 sm:translate-y-1.5 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:group-focus-visible:opacity-100 sm:group-focus-visible:translate-y-0">
        <h3 className="m-0 font-sans text-lg font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-white/70">{party}</p>
      </div>
    </Link>
  )
}
