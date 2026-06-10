'use client'

import { DayList } from '@/components/membros/DayList'
import { ProgressBar } from '@/components/membros/ProgressBar'
import { getProgress } from '@/lib/progress'
import { ebookCapitulos } from '@/lib/desafio-data'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SeuAcessoPage() {
  const [completed, setCompleted] = useState<number[]>([])
  const [view, setView] = useState<'desafio' | 'ebook' | 'bonus'>('desafio')
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
          Seu Desafio 21 Dias começa agora.
        </h1>
        <p className="text-sm text-[var(--color-muted-foreground)] mt-1.5 leading-relaxed">
          Avance no seu proprio ritmo. Depois dos 21 dias, continue com o conteudo bonus disponivel para voce.
        </p>
      </div>

      {/* Barra de progresso — baseada nos 21 dias principais */}
      <ProgressBar completed={Math.min(completed.filter((d) => d <= 21).length, 21)} total={21} />

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
          Desafio 21 Dias
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
          Ebook
        </button>
        <button
          onClick={() => setView('bonus')}
          className={`flex-1 flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
            view === 'bonus'
              ? 'bg-[var(--color-brand)] text-white shadow-sm'
              : 'text-[var(--color-muted-foreground)] hover:text-[var(--color-dark)]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          Bonus
        </button>
      </div>

      {/* Conteúdo da tab */}
      {view === 'desafio' ? (
        <DayListSeuAcesso completed={completed} />
      ) : view === 'ebook' ? (
        <EbookSection />
      ) : (
        <BonusSection />
      )}
    </div>
  )
}

function DayListSeuAcesso({ completed }: { completed: number[] }) {  return <DayList completed={completed} baseUrl="/seuacesso/dia" />
}

function BonusSection() {
  const bonuses = [
    {
      num: 1,
      badge: 'Protecao futura',
      title: 'Checklist: 21 Sinais de Narcisista',
      desc: 'A ferramenta de protecao para o resto da vida. Aprenda a reconhecer os padroes narcisistas antes de ser capturada — em relacionamentos romanticos, amizades e no trabalho.',
      value: 'R$47',
      tipo: 'PDF para download',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      num: 2,
      badge: 'Pratica guiada',
      title: 'Meditacao de Corte Energetico',
      desc: 'Pratica guiada de 20 minutos desenvolvida para desativar o vinculo no nivel mais profundo — energetico e somatico. Uma das ferramentas mais poderosas do processo.',
      value: 'R$67',
      tipo: 'Audio guiado · 20 min',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
        </svg>
      ),
    },
    {
      num: 3,
      badge: 'Passo a passo',
      title: 'Guia de Reconstrucao da Autoestima',
      desc: 'O passo a passo para reconstruir a autoestima destruida pelo relacionamento narcisista — nao com afirmacoes vazias, mas com um processo estruturado e real.',
      value: 'R$97',
      tipo: 'Guia em PDF',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
    {
      num: 4,
      badge: 'Suporte continuo',
      title: 'Comunidade Exclusiva de Mulheres',
      desc: 'Um espaco seguro com mulheres que entendem exatamente o que voce viveu. Sem julgamento. Com acolhimento real de quem passou pelo mesmo processo.',
      value: 'Impagavel',
      tipo: 'Grupo privado',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col gap-3">
      {/* Cabecalho */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <p className="text-xs text-[var(--color-brand)] font-medium uppercase tracking-wide mb-1">
          Incluidos no seu acesso
        </p>
        <h2 className="font-heading text-xl font-bold text-[var(--color-dark)]">
          Seus 4 bonus
        </h2>
        <p className="text-sm text-[var(--color-muted-foreground)] mt-1 leading-relaxed">
          Todos os materiais extras estao disponiveis para voce agora. Acesse quando quiser, no seu ritmo.
        </p>
      </div>

      {bonuses.map((b) => (
        <div
          key={b.num}
          className="bg-white rounded-2xl border border-[var(--color-brand)]/20 shadow-sm p-4 flex items-start gap-4"
        >
          {/* Numero */}
          <div className="w-10 h-10 rounded-full bg-[var(--color-brand)]/10 text-[var(--color-brand)] flex items-center justify-center flex-shrink-0 font-bold text-sm">
            {b.num}
          </div>

          {/* Conteudo */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-xs font-medium text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded-full">
                {b.badge}
              </span>
              <span className="text-xs text-[var(--color-muted-foreground)] line-through">{b.value}</span>
              <span className="text-xs font-bold text-[var(--color-brand)]">GRATIS</span>
            </div>
            <h3 className="font-semibold text-sm text-[var(--color-dark)] leading-snug">
              {b.title}
            </h3>
            <p className="text-sm text-[var(--color-muted-foreground)] mt-1 leading-relaxed">
              {b.desc}
            </p>
            {/* Tipo de material */}
            <div className="flex items-center gap-1.5 mt-2.5">
              <div className="text-[var(--color-brand)]">{b.icon}</div>
              <span className="text-xs text-[var(--color-muted-foreground)]">{b.tipo}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Nota de acesso */}
      <div className="bg-[var(--color-brand-muted)]/50 border border-[var(--color-brand)]/15 rounded-2xl p-4 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
        <strong className="text-[var(--color-dark)]">Como acessar os materiais?</strong>{' '}
        Os arquivos PDF e o audio guiado serao disponibilizados dentro da plataforma do curso apos a confirmacao do pagamento. Se voce ainda nao recebeu o link de acesso, verifique seu e-mail ou entre em contato pelo suporte.
      </div>
    </div>
  )
}

function EbookSection() {  return (
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
