'use client'

import type { SectionConfig } from '@/lib/candidates'

type SectionNavProps = {
  sections: SectionConfig[]
}

export function SectionNav({ sections }: SectionNavProps) {
  return (
    <div className="sticky top-6 z-5 mb-5 rounded-lg border border-border bg-background p-1">
      {/* Desktop — tabs */}
      <nav aria-label="Secciones del perfil" className="hidden w-full md:flex">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="flex-1 rounded-lg px-2 py-1 text-center text-sm text-muted-foreground no-underline transition-colors hover:bg-secondary hover:text-foreground"
          >
            {section.navLabel}
          </a>
        ))}
      </nav>

      {/* Mobile — horizontally scrollable pills */}
      <nav
        aria-label="Secciones del perfil"
        className="flex gap-1.5 overflow-x-auto md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="shrink-0 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground no-underline transition-colors hover:bg-secondary hover:text-foreground"
          >
            {section.navLabel}
          </a>
        ))}
      </nav>
    </div>
  )
}
