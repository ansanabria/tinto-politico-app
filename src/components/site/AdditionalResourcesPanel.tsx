import Image from 'next/image'

type NewsLinkResource = {
  url: string
  candidateName: string
  outletLogoUrl?: string | null
}

type AdditionalResourcesPanelProps = {
  newsLink?: NewsLinkResource | null
}

export function AdditionalResourcesPanel({ newsLink }: AdditionalResourcesPanelProps) {
  if (!newsLink) return null

  return (
    <div className="flex flex-col gap-2">
      <a
        href={newsLink.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all duration-150 hover:border-primary hover:text-primary"
      >
        {newsLink.outletLogoUrl ? (
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-sm">
            <Image
              src={newsLink.outletLogoUrl}
              alt=""
              fill
              sizes="40px"
              className="object-contain"
            />
          </span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width={18}
            height={18}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6Z" />
          </svg>
        )}
        <span className="flex-1">Noticias de {newsLink.candidateName}</span>
        <span className="text-muted-foreground transition-colors duration-150 group-hover:text-primary">
          →
        </span>
      </a>
    </div>
  )
}
