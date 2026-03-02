'use client'

import { useState } from 'react'

/**
 * Extracts the YouTube video ID from common URL formats:
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?.*v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }

  return null
}

type YouTubeCardProps = {
  title: string
  youtubeUrl: string
  description?: string | null
  publishedDate?: string | null
  channel?: string | null
}

export function YouTubeCard({
  title,
  youtubeUrl,
  description,
  publishedDate,
  channel,
}: YouTubeCardProps) {
  const videoId = extractYouTubeId(youtubeUrl)
  const [isPlaying, setIsPlaying] = useState(false)

  if (!videoId) return null

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors duration-150 hover:border-primary/30">
      <div className="relative aspect-video w-full bg-secondary">
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            aria-label={`Reproducir: ${title}`}
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
          >
            {/* YouTube thumbnail — loaded as a lightweight image instead of full iframe */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Play button overlay */}
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-transform duration-150 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="white" className="ml-1 h-7 w-7" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground">{title}</h3>

        {(channel || publishedDate) && (
          <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
            {channel && <span>{channel}</span>}
            {channel && publishedDate && (
              <span className="text-border" aria-hidden>
                &middot;
              </span>
            )}
            {publishedDate && <span>{publishedDate}</span>}
          </div>
        )}

        {description && (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </article>
  )
}
