'use client'

import { desafioDias } from '@/lib/desafio-data'
import Link from 'next/link'
import { useState } from 'react'

interface DayListProps {
  completed: number[]
  baseUrl?: string
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
  'Marco': 'bg-[var(--color-brand)]/10 text-[var(--color-brand)] border-[var(--color-brand)]/20',
}

// Agrupa dias por semana
function groupByWeek(days: typeof desafioDias) {
  const weeks: Record<number, typeof desafioDias> = {}
  days.forEach((d) => {
    const week = Math.ceil(d.day / 7)
    if (!weeks[week]) weeks[week] = []
    weeks[week].push(d)
  })
  return weeks
}

export function DayList({ completed, baseUrl = '/membros/dia' }: DayListProps) {
  const weeks = groupByWeek(desafioDias)
  const weekNumbers = Object.keys(weeks).map(Number).sort((a, b) => a - b)

  // Descobre qual semana tem o próximo dia a fazer
  const nextDayNum = desafioDias.find((d) => !completed.includes(d.day))?.day ?? 1
  const activeWeek = Math.ceil(nextDayNum / 7)

  const [openWeeks, setOpenWeeks] = useState<number[]>([activeWeek])

  function toggleWeek(week: number) {
    setOpenWeeks((prev) =>
      prev.includes(week) ? prev.filter((w) => w !== week) : [...prev, week]
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {weekNumbers.map((week) => {
        const days = weeks[week]
        const weekDone = days.filter((d) => completed.includes(d.day)).length
        const isOpen = openWeeks.includes(week)
        const allDone = weekDone === days.length

        return (
          <div key={week} className="rounded-2xl border border-[var(--color-border)] bg-white overflow-hidden shadow-sm">
            {/* Header da semana */}
            <button
              onClick={() => toggleWeek(week)}
              className="w-full flex items-center justify-between px-4 py-3 hover:bg-[var(--color-muted)]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${allDone ? 'bg-[var(--color-brand)] text-white' : 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'}`}>
                  {allDone ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  ) : week}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[var(--color-dark)]">Semana {week}</p>
                  <p className="text-xs text-[var(--color-muted-foreground)]">Dias {days[0].day}–{days[days.length - 1].day} · {weekDone}/{days.length} concluídos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* Mini barra de progresso da semana */}
                <div className="w-16 h-1.5 rounded-full bg-[var(--color-muted)] overflow-hidden hidden sm:block">
                  <div className="h-full bg-[var(--color-brand)] rounded-full transition-all" style={{ width: `${(weekDone / days.length) * 100}%` }} />
                </div>
                <svg
                  className={`w-4 h-4 text-[var(--color-muted-foreground)] transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Lista de dias da semana */}
            {isOpen && (
              <div className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)]/50">
                {days.map((dia) => {
                  const isDone = completed.includes(dia.day)
                  const isNext = !isDone && (dia.day === 1 || completed.includes(dia.day - 1))
                  const themeClass = themeColors[dia.theme] || 'bg-gray-50 text-gray-700 border-gray-200'

                  return (
                    <Link
                      key={dia.day}
                      href={`${baseUrl}/${dia.day}`}
                      className={`group flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                        isDone ? 'bg-[var(--color-brand-muted)]/40' : isNext ? 'bg-white hover:bg-[var(--color-brand)]/5' : 'bg-white/60 hover:bg-white'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-xs transition-all ${
                        isDone ? 'bg-[var(--color-brand)] text-white' : isNext ? 'bg-[var(--color-brand)]/10 text-[var(--color-brand)] ring-2 ring-[var(--color-brand)]/30' : 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]'
                      }`}>
                        {isDone ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        ) : dia.day}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${themeClass}`}>{dia.theme}</span>
                          {isNext && !isDone && <span className="text-xs font-semibold text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-0.5 rounded-full">Próximo</span>}
                        </div>
                        <p className="font-semibold text-sm text-[var(--color-dark)] mt-0.5 leading-snug truncate">{dia.title}</p>
                      </div>
                      <svg className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 ${isDone ? 'text-[var(--color-brand)]' : 'text-[var(--color-muted-foreground)]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

