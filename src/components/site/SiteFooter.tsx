import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border pt-6 pb-4 text-sm text-muted-foreground">
      <p className="mb-2 leading-relaxed">
        Este proyecto mantiene una línea editorial neutral y descriptiva. La información se publica
        con verificaciones y puede actualizarse cuando aparezcan nuevos datos confirmados.
      </p>
      <p className="mb-4 leading-relaxed">
        Este sitio no está asociado, afiliado ni respaldado por{' '}
        <a
          href="https://lasillavacia.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground underline underline-offset-2 hover:text-foreground"
        >
          La Silla Vacía
        </a>
        . Nos apoyamos de forma independiente en su trabajo periodístico como fuente de referencia.
      </p>
      <nav aria-label="Enlaces secundarios" className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <Link
          href="/acerca"
          className="text-muted-foreground no-underline transition-colors hover:text-foreground"
        >
          Acerca de
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/metodologia"
          className="text-muted-foreground no-underline transition-colors hover:text-foreground"
        >
          Metodología
        </Link>
        <span aria-hidden>·</span>
        <Link
          href="/correcciones"
          className="text-muted-foreground no-underline transition-colors hover:text-foreground"
        >
          Correcciones
        </Link>
      </nav>
    </footer>
  )
}
