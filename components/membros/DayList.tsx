'use client'

import { desafioDias } from '@/lib/desafio-data'
import Link from 'next/link'

interface DayListProps {
  completed: number[]
}

const themeColors: Record<string, string> = {
  'Consciência': 'bg-purple-50 text-purple-700 border-purple-200',
  'Compreensão': 'bg-blue-50 text-blue-700 border-blue-200',
  'Corporalidade': 'bg-green-50 text-green-700 border-green-200',
  'Expressão': 'bg-orange-50 text-orange-700 border-orange-200',
  'Limites': 'bg-red-50 text-red-700 border-red-200',
  'Luto': 'bg-slate-50 text-slate-700 border-slate-200',
  'Autocompaixão': 'bg-pink-50 text-pink-700 border-pink-200',
  'Autoconhecimento': 'bg-indigo-50 text-indigo-700 border-indigo-200',
  'Desapego': 'bg-cyan-50 text-cyan-700 border-cyan-200',
  'Identidade': 'bg-violet-50 text-violet-700 border-violet-200',
  'Emoções': 'bg-amber-50 text-amber-700 border-amber-200',
  'Realidade': 'bg-teal-50 text-teal-700 border-teal-200',
  'Conexão': 'bg-sky-50 text-sky-700 border-sky-200',
  'Gratidão': 'bg-yellow-50 text-yellow-700 border-yellow-200',
  'Crenças': 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200',
  'Autoestima': 'bg-rose-50 text-rose-700 border-rose-200',
  'Perdão': 'bg-lime-50 text-lime-700 border-lime-200',
  'Relações': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Propósito': 'bg-orange-50 text-orange-700 border-orange-200',
  'Transformação': 'bg-purple-50 text-purple-700 border-purple-200',
  'Liberdade': 'bg-pink-50 text-pink-700 border-pink-200',
}

export function DayList({ completed }: DayListProps) {
  return (
    <div className="flex flex-col gap-2">
      {desafioDias.map((dia) => {
        const isDone = completed.includes(dia.day)
        const isNext = !isDone && (dia.day === 1 || completed.includes(dia.day - 1))
        const themeClass = themeColors[dia.theme] || 'bg-gray-50 text-gray-700 border-gray-200'

        return (
          <Link
            key={dia.day}
            href={`/membros/dia/${dia.day}`}
            className={`group flex items-center gap-4 rounded-2xl p-4 border transition-all duration-200 ${
              isDone
                ? 'bg-[var(--color-brand-muted)] border-[var(--color-brand)]/30 hover:border-[var(--color-brand)]/60'
                : isNext
                ? 'bg-white border-[var(--color-border)] hover:border-[var(--color-brand)]/40 shadow-sm hover:shadow-md'
                : 'bg-white/60 border-[var(--color-border)] hover:bg-white hover:border-[var(--color-brand)]/30'
            }`}
          >
            {/* Círculo do dia */}
            <div
              className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm transition-all ${
                isDone
                  ? 'bg-[var(--color-brand)] text-white shadow-sm shadow-[var(--color-brand)]/30'
                  : isNext
                  ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)] ring-2 ring-[var(--color-brand)]/30'
                  : 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]'
              }`}
            >
              {isDone ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                dia.day
              )}
            </div>

            {/* Conteúdo */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-medium text-[var(--color-muted-foreground)]">
                  Dia {dia.day}
                </span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${themeClass}`}>
                  {dia.theme}
                </span>
                {isNext && !isDone && (
                  <span className="text-xs font-semibold text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded-full">
                    Próximo
                  </span>
                )}
              </div>
              <p className="font-semibold text-sm text-[var(--color-dark)] mt-0.5 leading-snug truncate">
                {dia.title}
              </p>
            </div>

            {/* Seta */}
            <svg
              className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${
                isDone ? 'text-[var(--color-brand)]' : 'text-[var(--color-muted-foreground)]'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )
      })}
    </div>
  )
}
