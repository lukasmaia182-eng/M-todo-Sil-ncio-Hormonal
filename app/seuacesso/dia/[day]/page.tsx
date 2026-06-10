'use client'

import { getProgress, completeDay, getAnswer, saveAnswer } from '@/lib/progress'
import { desafioDias, getThemeImage } from '@/lib/desafio-data'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function SeuAcessoDiaPage() {
  const params = useParams()
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

  if (!mounted) return null

  if (!dia) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <p className="text-[var(--color-muted-foreground)]">Dia não encontrado.</p>
        <Link href="/seuacesso" className="text-sm text-[var(--color-brand)] hover:underline">Voltar ao início</Link>
      </div>
    )
  }

  const isDone = completed.includes(dayNum)
  const prevDay = dayNum > 1 ? dayNum - 1 : null
  const nextDay = dayNum < 90 ? dayNum + 1 : null
  const heroImage = dia.image ?? getThemeImage(dia.theme)
  const firstParagraph = dia.content.split('\n\n')[0]
  const restContent = dia.content.split('\n\n').slice(1).join('\n\n')

  function handleSaveAnswer() {
    saveAnswer(dayNum, answer)
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  function handleComplete() {
    const updated = completeDay(dayNum)
    setCompleted(updated)
    setJustDone(true)
    setTimeout(() => setJustDone(false), 3500)
  }

  function formatContent(text: string) {
    return text.split('\n\n').map((para, i) => {
      const parts = para.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="text-[var(--color-dark)] leading-relaxed text-[15px]">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="font-semibold text-[var(--color-brand)]">{part}</strong> : part
          )}
        </p>
      )
    })
  }

  return (
    <div className="flex flex-col gap-0 max-w-2xl mx-auto">

      {/* Voltar */}
      <div className="px-1 pb-4">
        <Link href="/seuacesso" className="flex items-center gap-1.5 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-brand)] transition-colors w-fit">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Painel
        </Link>
      </div>

      {/* HERO */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-xl mb-6" style={{ aspectRatio: '16/7' }}>
        <Image src={heroImage} alt={dia.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-4 right-4">
          {isDone ? (
            <span className="flex items-center gap-1.5 bg-[var(--color-brand)] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              Concluído
            </span>
          ) : (
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/30">{dia.theme}</span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white/70 text-sm font-medium mb-1 uppercase tracking-widest">Dia {dayNum} de 90</p>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-tight text-balance drop-shadow-lg">{dia.title}</h1>
        </div>
      </div>

      {/* Navegação rápida */}
      <div className="flex items-center gap-3 mb-6 px-1">
        {prevDay && (
          <Link href={`/seuacesso/dia/${prevDay}`} className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-brand)] transition-colors">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Dia {prevDay}
          </Link>
        )}
        <div className="flex-1 h-px bg-[var(--color-border)]" />
        <span className="text-xs font-semibold text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-3 py-1 rounded-full">{Math.round((dayNum / 90) * 100)}% do desafio</span>
        <div className="flex-1 h-px bg-[var(--color-border)]" />
        {nextDay && (
          <Link href={`/seuacesso/dia/${nextDay}`} className="flex items-center gap-1 text-xs text-[var(--color-muted-foreground)] hover:text-[var(--color-brand)] transition-colors">
            Dia {nextDay}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        )}
      </div>

      {/* Citação destaque */}
      <div className="relative bg-[var(--color-brand-muted)] rounded-3xl p-6 mb-5 border-l-4 border-[var(--color-brand)]">
        <svg className="absolute top-3 left-3 w-7 h-7 text-[var(--color-brand)]/20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-[var(--color-dark)] font-medium leading-relaxed text-[15px] pl-2 italic">{firstParagraph}</p>
      </div>

      {/* Banner semana */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-5 shadow-sm" style={{ aspectRatio: '3/1' }}>
        <Image src={heroImage} alt="" fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand)]/60 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6">
          <p className="text-white font-heading text-lg font-bold drop-shadow-md max-w-xs text-balance">{dia.theme} — Semana {Math.ceil(dayNum / 7)}</p>
        </div>
      </div>

      {/* Conteúdo */}
      {restContent && (
        <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4 mb-5">
          <div className="flex items-center gap-2 pb-3 border-b border-[var(--color-border)]">
            <div className="w-1 h-6 rounded-full bg-[var(--color-brand)]" />
            <h2 className="font-heading text-lg font-bold text-[var(--color-dark)]">Reflexão do dia</h2>
          </div>
          <div className="flex flex-col gap-4">{formatContent(restContent)}</div>
        </div>
      )}

      {/* Exercício */}
      <div className="relative overflow-hidden rounded-2xl mb-5">
        <div className="absolute inset-0">
          <Image src={heroImage} alt="" fill className="object-cover blur-sm scale-105 opacity-30" />
          <div className="absolute inset-0 bg-[var(--color-brand)]/85" />
        </div>
        <div className="relative p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/30">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </div>
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">Exercício prático</p>
              <h2 className="font-heading text-xl font-bold text-white">Faça agora</h2>
            </div>
          </div>
          <p className="text-white/90 leading-relaxed text-[15px]">{dia.exercise}</p>
        </div>
      </div>

      {/* Campo de resposta */}
      <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col gap-4 mb-5">
        <div className="flex items-center gap-3 pb-2 border-b border-[var(--color-border)]">
          <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[var(--color-brand)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
          </div>
          <div className="flex-1">
            <h2 className="font-heading text-base font-bold text-[var(--color-dark)]">Minha resposta</h2>
            <p className="text-xs text-[var(--color-muted-foreground)]">Salva só no seu dispositivo.</p>
          </div>
          {answer.length > 0 && <span className="text-xs font-semibold text-[var(--color-brand)] bg-[var(--color-brand)]/10 px-2 py-1 rounded-full">{answer.length} car.</span>}
        </div>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Escreva sua resposta aqui... Seja honesta consigo mesma."
          rows={6}
          className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 text-sm text-[var(--color-dark)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)]/30 focus:border-[var(--color-brand)]/40 leading-relaxed transition-all"
        />
        <button
          onClick={handleSaveAnswer}
          disabled={answer.length === 0}
          className="self-end flex items-center gap-2 rounded-xl bg-[var(--color-brand)] text-white font-semibold text-sm px-5 py-2.5 hover:bg-[oklch(0.52_0.22_350)] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
        >
          {saved ? (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>Salvo!</>
          ) : (
            <><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>Salvar resposta</>
          )}
        </button>
      </div>

      {/* Reflexões */}
      <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm mb-5">
        <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[var(--color-border)]">
          <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-[var(--color-gold-foreground)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="font-heading text-base font-bold text-[var(--color-dark)]">Perguntas para refletir</h2>
        </div>
        <ul className="flex flex-col gap-3">
          {dia.reflections.map((q, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[var(--color-muted)]/40">
              <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--color-gold)]/30 text-[var(--color-gold-foreground)] text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
              <p className="text-sm text-[var(--color-dark)] leading-relaxed">{q}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Banner motivacional */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-5 shadow-md" style={{ aspectRatio: '16/5' }}>
        <Image src="/membros/tema-futuro.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6">
          <p className="text-white font-heading text-base font-semibold max-w-xs text-balance drop-shadow">Cada dia e uma escolha por voce mesma.</p>
        </div>
      </div>

      {/* Botão concluir */}
      {!isDone && (
        <button onClick={handleComplete} className="w-full rounded-2xl bg-[var(--color-brand)] text-white font-bold py-4 text-base hover:bg-[oklch(0.52_0.22_350)] transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-[var(--color-brand)]/30 btn-pulse mb-4">
          Concluir Dia {dayNum}
        </button>
      )}

      {justDone && (
        <div className="rounded-2xl bg-[var(--color-brand)] text-white text-center py-5 px-5 mb-4 shadow-lg shadow-[var(--color-brand)]/30">
          <svg className="w-8 h-8 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <p className="font-bold text-lg">Dia {dayNum} concluido!</p>
          <p className="text-white/80 text-sm mt-1">Voce esta transformando sua vida. Continue amanha.</p>
        </div>
      )}

      {/* Navegação entre dias */}
      <div className="flex gap-3 pb-4">
        {prevDay && (
          <Link href={`/seuacesso/dia/${prevDay}`} className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-[var(--color-border)] bg-white text-sm font-semibold text-[var(--color-dark)] py-3 hover:border-[var(--color-brand)]/40 hover:shadow-sm transition-all">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Dia {prevDay}
          </Link>
        )}
        {nextDay && (
          <Link href={`/seuacesso/dia/${nextDay}`} className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-sm font-semibold py-3 hover:bg-[var(--color-brand)]/20 transition-all">
            Dia {nextDay}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </Link>
        )}
      </div>

    </div>
  )
}
