import Image from 'next/image'
import Link from 'next/link'
import logoHorizontal from '@/assets/logo-horizontal.svg'

const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/comparar', label: 'Comparar' },
  { href: '/acerca', label: 'Acerca de' },
]

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-border pb-4 mb-8">
      <Link className="inline-flex items-center no-underline" href="/">
        <Image src={logoHorizontal} alt="Elecciones Colombia" height={50} loading="eager" />
      </Link>

      {/* Desktop nav */}
      <nav aria-label="Navegación principal" className="hidden items-center gap-1 sm:flex">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-sm text-foreground no-underline transition-colors hover:bg-secondary"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile nav — <details> dropdown, no JS needed */}
      <details className="relative sm:hidden" aria-label="Menú de navegación">
        <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md transition-colors hover:bg-secondary [&::-webkit-details-marker]:hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </summary>
        <nav className="absolute right-0 top-12 z-50 min-w-[10rem] rounded-lg border border-border bg-card p-2 shadow-md">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-4 py-2.5 text-sm text-foreground no-underline transition-colors hover:bg-secondary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </details>
    </header>
  )
}
