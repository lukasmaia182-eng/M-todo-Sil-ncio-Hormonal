'use client'

import { ebookCapitulos } from '@/lib/desafio-data'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function EbookChapterPage() {
  const params = useParams()
  const chapterNum = Number(params.chapter)

  const cap = ebookCapitulos.find((c) => c.chapter === chapterNum)
  const prevCap = chapterNum > 1 ? chapterNum - 1 : null
  const nextCap = chapterNum < ebookCapitulos.length ? chapterNum + 1 : null

  if (!cap) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-[var(--color-muted-foreground)]">Capítulo não encontrado.</p>
        <Link href="/membros" className="text-sm text-[var(--color-brand)] hover:underline">
          Voltar ao início
        </Link>
      </div>
    )
  }

  function formatContent(text: string) {
    return text.split('\n\n').map((block, i) => {
      // Título de seção bold sozinho na linha
      if (block.startsWith('**') && block.endsWith('**')) {
        return (
          <h3 key={i} className="font-heading text-xl font-bold text-[var(--color-dark)] mt-6 mb-1">
            {block.replace(/\*\*/g, '')}
          </h3>
        )
      }
      // Itálico *texto*
      const parts = block.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-[var(--color-dark)] leading-relaxed text-base">
          {parts.map((part, j) =>
            j % 2 === 1 ? (
              <strong key={j} className="font-semibold">
                {part}
              </strong>
            ) : (
              // parse italic *text*
              part.split(/\*(.*?)\*/g).map((s, k) =>
                k % 2 === 1 ? <em key={k}>{s}</em> : s
              )
            )
          )}
        </p>
      )
    })
  }

  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto">
      {/* Volta */}
      <Link
        href="/membros"
        className="flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-brand)] transition-colors w-fit"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Voltar ao painel
      </Link>

      {/* Header */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-12 h-12 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center font-bold text-base flex-shrink-0">
            {cap.chapter}
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">
              Capítulo {cap.chapter} de {ebookCapitulos.length}
            </p>
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-dark)] leading-tight text-balance">
              {cap.title}
            </h1>
          </div>
        </div>

        {/* Progresso de leitura */}
        <div className="mt-3">
          <div className="relative h-1.5 rounded-full bg-[var(--color-muted)] overflow-hidden">
            <div
              className="h-full rounded-full bg-[var(--color-brand)]"
              style={{ width: `${(cap.chapter / ebookCapitulos.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[var(--color-muted-foreground)] mt-1">
            {cap.chapter}/{ebookCapitulos.length} capítulos
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <article className="bg-white rounded-2xl p-5 sm:p-7 border border-[var(--color-border)] shadow-sm">
        <div className="flex flex-col gap-4 text-sm leading-relaxed">
          {formatContent(cap.content)}
        </div>
      </article>

      {/* Navegação */}
      <div className="flex gap-3">
        {prevCap && (
          <Link
            href={`/membros/ebook/${prevCap}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-dark)] py-3 hover:border-[var(--color-brand)]/40 hover:shadow-sm transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Cap. {prevCap}
          </Link>
        )}
        {nextCap && (
          <Link
            href={`/membros/ebook/${nextCap}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm font-semibold py-3 hover:bg-[var(--color-brand)]/20 transition-all"
          >
            Cap. {nextCap}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
