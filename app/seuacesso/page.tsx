'use client'

import { DayList } from '@/components/membros/DayList'
import { ProgressBar } from '@/components/membros/ProgressBar'
import { getProgress } from '@/lib/progress'
import { ebookCapitulos } from '@/lib/desafio-data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SeuAcessoPage() {
  const [completed, setCompleted] = useState<number[]>([])
  const [view, setView] = useState<'desafio' | 'ebook'>('desafio')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCompleted(getProgress())
  }, [])

  if (!mounted) return null

  return (
    <div className="flex flex-col gap-6">
      {/* Boas-vindas */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <p className="text-xs text-[var(--color-muted-foreground)] font-medium uppercase tracking-wide mb-1">
          Bem-vinda ao seu acesso completo
        </p>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-dark)] leading-tight text-balance">
          Sua jornada de 90 dias começa agora.
        </h1>
        <p className="text-sm text-[var(--color-muted-foreground)] mt-1.5 leading-relaxed">
          Avance no seu próprio ritmo. Cada dia é um passo em direção à sua liberdade.
        </p>
      </div>

      {/* Barra de progresso */}
      <ProgressBar completed={completed.length} total={90} />

      {/* Tabs */}
      <div className="flex gap-2 bg-white p-1.5 rounded-2xl border border-[var(--color-border)] shadow-sm">
        <button
          onClick={() => setView('desafio')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            view === 'desafio'
              ? 'bg-[var(--color-brand)] text-white shadow-sm'
              : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-dark)]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Desafio 90 Dias
        </button>
        <button
          onClick={() => setView('ebook')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            view === 'ebook'
              ? 'bg-[var(--color-brand)] text-white shadow-sm'
              : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-dark)]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Ebook Completo
        </button>
      </div>

      {/* Conteúdo da tab */}
      {view === 'desafio' ? (
        <DayListSeuAcesso completed={completed} />
      ) : (
        <EbookSection />
      )}
    </div>
  )
}

function DayListSeuAcesso({ completed }: { completed: number[] }) {
  // Reutiliza o componente DayList mas precisamos dos links apontando para /seuacesso/dia/
  // Usamos um wrapper que re-renderiza via URL base prop
  return <DayList completed={completed} baseUrl="/seuacesso/dia" />
}

function EbookSection() {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <h2 className="font-heading text-xl font-bold text-[var(--color-dark)]">
          Ebook: Método Silêncio Hormonal
        </h2>
        <p className="text-sm text-[var(--color-muted-foreground)] mt-1 leading-relaxed">
          Leitura aprofundada para complementar sua jornada. Avance nos capítulos no seu ritmo.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        {ebookCapitulos.map((cap) => (
          <Link
            key={cap.chapter}
            href={`/seuacesso/ebook/${cap.chapter}`}
            className="group flex items-center gap-4 rounded-2xl p-4 bg-white border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 hover:shadow-md transition-all duration-200 shadow-sm"
          >
            <div className="w-11 h-11 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center font-bold text-sm flex-shrink-0">
              {cap.chapter}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[var(--color-muted-foreground)] font-medium">Capítulo {cap.chapter}</p>
              <p className="font-semibold text-sm text-[var(--color-dark)] leading-snug truncate">{cap.title}</p>
            </div>
            <svg
              className="w-4 h-4 text-[var(--color-muted-foreground)] flex-shrink-0 transition-transform group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  )
}
