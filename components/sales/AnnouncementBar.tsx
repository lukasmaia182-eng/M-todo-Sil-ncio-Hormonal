'use client'

import { useState, useEffect } from 'react'

const DEADLINE_KEY = 'renascer_deadline_v3'
const VAGAS_KEY = 'renascer_vagas_v3'
const DURATION_MS = 24 * 60 * 60 * 1000 // 24 horas
const VAGAS_INICIAL = 47

function getDeadline(): number {
  if (typeof window === 'undefined') return Date.now() + DURATION_MS
  const stored = localStorage.getItem(DEADLINE_KEY)
  if (stored) {
    const ts = parseInt(stored, 10)
    if (ts > Date.now()) return ts
  }
  const ts = Date.now() + DURATION_MS
  localStorage.setItem(DEADLINE_KEY, String(ts))
  return ts
}

function getVagas(): number {
  if (typeof window === 'undefined') return VAGAS_INICIAL
  const stored = localStorage.getItem(VAGAS_KEY)
  if (stored) return parseInt(stored, 10)
  const tomadas = 3 + Math.floor(Math.random() * 10)
  const vagas = Math.max(VAGAS_INICIAL - tomadas, 28)
  localStorage.setItem(VAGAS_KEY, String(vagas))
  return vagas
}

export function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 })
  const [expired, setExpired] = useState(false)
  const [vagas, setVagas] = useState(VAGAS_INICIAL)

  useEffect(() => {
    const deadline = getDeadline()
    setVagas(getVagas())

    const tick = () => {
      const diff = deadline - Date.now()
      if (diff <= 0) { setExpired(true); return }
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const timer = setInterval(tick, 1000)

    // Decrementa 1 vaga a cada ~8 minutos simulando compras ao vivo
    const vagasTimer = setInterval(() => {
      setVagas((prev) => {
        const novo = Math.max(prev - 1, 3)
        localStorage.setItem(VAGAS_KEY, String(novo))
        return novo
      })
    }, 8 * 60 * 1000)

    return () => { clearInterval(timer); clearInterval(vagasTimer) }
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  if (expired) {
    return (
      <div className="bg-foreground text-background py-2.5 px-4 text-center text-sm font-medium">
        <span className="opacity-90">Oferta encerrada — entre na lista de espera para a próxima turma</span>
      </div>
    )
  }

  return (
    <div className="bg-[var(--color-brand)] text-white py-2.5 px-4 text-center text-sm font-medium">
      <span className="opacity-90">Oferta encerra em</span>{' '}
      <span className="font-bold text-[var(--color-gold)] tabular-nums">
        {pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}
      </span>{' '}
      <span className="opacity-60 mx-1">·</span>{' '}
      <span className="font-bold text-[var(--color-gold)]">Restam {vagas} vagas</span>{' '}
      <span className="opacity-90">nesta turma</span>
    </div>
  )
}
