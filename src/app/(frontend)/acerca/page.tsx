export default function AboutPage() {
  return (
    <section className="rounded-lg border border-border bg-card p-6">
      <h1 className="mb-3 text-3xl">Acerca de</h1>
      <p className="leading-relaxed text-muted-foreground">
        Esta plataforma publica información descriptiva y verificable sobre candidatos
        presidenciales de Colombia para facilitar decisiones informadas de voto.
      </p>
      <p className="mt-3 leading-relaxed text-muted-foreground">
        La línea editorial es neutral: no hay puntajes, rankings ni recomendaciones de voto.
      </p>

      <div className="mt-8 rounded-lg border-2 border-primary/40 bg-primary/5 p-6">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-primary">
          Aviso importante sobre las fuentes
        </p>
        <p className="text-2xl font-serif leading-snug text-foreground">
          Gran parte de la información presentada en esta plataforma proviene de investigación de
          terceros, en especial del trabajo periodístico de{' '}
          <a
            href="https://lasillavacia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80"
          >
            La Silla Vacía
          </a>
          .
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          La Silla Vacía es un medio independiente de referencia en Colombia. Nos apoyamos en su
          cobertura porque cumple con estándares rigurosos de verificación y transparencia. Sin
          embargo, esta plataforma es un proyecto independiente y no tiene ningún tipo de vínculo,
          afiliación ni respaldo oficial por parte de La Silla Vacía.
        </p>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Siempre que sea posible, cada dato incluye el enlace directo a la fuente original para que
          el lector pueda verificarlo por su cuenta.
        </p>
      </div>
    </section>
  )
}
