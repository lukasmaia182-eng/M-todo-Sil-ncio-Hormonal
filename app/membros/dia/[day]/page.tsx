'use client'

import { getProgress, completeDay, getAnswer, saveAnswer } from '@/lib/progress'
import { desafioDias } from '@/lib/desafio-data'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DiaPage() {
  const params = useParams()
  const router = useRouter()
  const dayNum = Number(params.day)

  const dia = desafioDias.find((d) => d.day === dayNum)

  const [completed, setCompleted] = useState<number[]>([])
  const [justDone, setJustDone] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [answer, setAnswer] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    setMounted(true)
    setCompleted(getProgress())
    setAnswer(getAnswer(dayNum))
  }, [dayNum])

  if (!dia) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-[var(--color-muted-foreground)]">Dia não encontrado.</p>
        <Link href="/membros" className="text-sm text-[var(--color-brand)] hover:underline">
          Voltar ao início
        </Link>
      </div>
    )
  }

  const isDone = completed.includes(dayNum)
  const prevDay = dayNum > 1 ? dayNum - 1 : null
  const nextDay = dayNum < 21 ? dayNum + 1 : null

  function handleSaveAnswer() {
    saveAnswer(dayNum, answer)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function handleComplete() {
    const updated = completeDay(dayNum)
    setCompleted(updated)
    setJustDone(true)
    setTimeout(() => setJustDone(false), 3000)
  }

  function formatContent(text: string) {
    return text.split('\n\n').map((para, i) => {
      if (para.startsWith('**') && para.endsWith('**')) {
        return (
          <h3 key={i} className="font-heading text-lg font-bold text-[var(--color-dark)] mt-4">
            {para.replace(/\*\*/g, '')}
          </h3>
        )
      }
      // Bold inline
      const parts = para.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-[var(--color-dark)] leading-relaxed text-base">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="font-semibold">{part}</strong> : part
          )}
        </p>
      )
    })
  }

  if (!mounted) return null

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

      {/* Header do dia */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
              isDone
                ? 'bg-[var(--color-brand)] text-white shadow-sm shadow-[var(--color-brand)]/30'
                : 'bg-[var(--color-brand)]/10 text-[var(--color-brand)]'
            }`}
          >
            {isDone ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              dayNum
            )}
          </div>
          <div>
            <p className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">
              Dia {dayNum} de 21 · {dia.theme}
            </p>
            <h1 className="font-heading text-xl sm:text-2xl font-bold text-[var(--color-dark)] leading-tight text-balance">
              {dia.title}
            </h1>
          </div>
        </div>

        {isDone && (
          <div className="flex items-center gap-2 text-xs font-semibold text-[var(--color-brand)] bg-[var(--color-brand-muted)] rounded-xl px-3 py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Dia concluído
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm flex flex-col gap-3">
        <h2 className="font-heading text-lg font-bold text-[var(--color-dark)]">Reflexão do dia</h2>
        <div className="flex flex-col gap-3 text-sm leading-relaxed">
          {formatContent(dia.content)}
        </div>
      </div>

      {/* Exercício */}
      <div className="bg-[var(--color-brand-muted)] rounded-2xl p-5 border border-[var(--color-brand)]/20">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h2 className="font-heading text-lg font-bold text-[var(--color-dark)]">Exercício prático</h2>
        </div>
        <p className="text-sm text-[var(--color-dark)] leading-relaxed">{dia.exercise}</p>
      </div>

      {/* Campo de resposta do exercício */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm flex flex-col gap-3">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-[var(--color-dark)]">Minha resposta</h2>
            <p className="text-xs text-[var(--color-muted-foreground)]">Escreva aqui sua resposta ao exercício do dia — ela fica salva só para você.</p>
          </div>
        </div>

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Escreva sua resposta aqui... Seja honesta consigo mesma."
          rows={6}
          className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm text-[var(--color-dark)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/30 focus:border-[var(--color-brand)]/40 leading-relaxed transition-all"
        />

        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--color-muted-foreground)]">
            {answer.length > 0 ? `${answer.length} caracteres` : 'Ainda não respondida'}
          </span>
          <button
            onClick={handleSaveAnswer}
            disabled={answer.length === 0}
            className="flex items-center gap-2 rounded-xl bg-[var(--color-brand)] text-white font-semibold text-sm px-5 py-2.5 hover:bg-[oklch(0.52_0.22_350)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {saved ? (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Salvo!
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Salvar resposta
              </>
            )}
          </button>
        </div>
      </div>

      {/* Reflexões */}
      <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[var(--color-gold-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-heading text-lg font-bold text-[var(--color-dark)]">Perguntas de reflexão</h2>
        </div>
        <ul className="flex flex-col gap-2">
          {dia.reflections.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-dark)] leading-relaxed">
              <span className="mt-1 w-5 h-5 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold-foreground)] text-xs font-bold flex items-center justify-center flex-shrink-0">
                {i + 1}
              </span>
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* Botão concluir */}
      {!isDone && (
        <button
          onClick={handleComplete}
          className="w-full rounded-2xl bg-[var(--color-brand)] text-white font-bold py-4 text-base hover:bg-[oklch(0.52_0.22_350)] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-[var(--color-brand)]/30 btn-pulse"
        >
          Concluir Dia {dayNum}
        </button>
      )}

      {justDone && (
        <div className="rounded-2xl bg-[var(--color-brand)] text-white text-center py-4 px-5 font-semibold text-sm shadow-md shadow-[var(--color-brand)]/30 animate-bounce">
          Parabéns! Dia {dayNum} concluído! Continue amanhã.
        </div>
      )}

      {/* Navegação entre dias */}
      <div className="flex gap-3">
        {prevDay && (
          <Link
            href={`/membros/dia/${prevDay}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-dark)] py-3 hover:border-[var(--color-brand)]/40 hover:shadow-sm transition-all"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Dia {prevDay}
          </Link>
        )}
        {nextDay && (
          <Link
            href={`/membros/dia/${nextDay}`}
            className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm font-semibold py-3 hover:bg-[var(--color-brand)]/20 transition-all"
          >
            Dia {nextDay}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
