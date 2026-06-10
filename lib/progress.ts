'use client'

export const PROGRESS_KEY = 'desafio_progresso'

export function getProgress(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(PROGRESS_KEY)
    if (!raw) return []
    return JSON.parse(raw) as number[]
  } catch {
    return []
  }
}

export function completeDay(day: number): number[] {
  const current = getProgress()
  if (!current.includes(day)) {
    const updated = [...current, day].sort((a, b) => a - b)
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(updated))
    return updated
  }
  return current
}

export function resetProgress(): void {
  localStorage.removeItem(PROGRESS_KEY)
}

export const ANSWERS_KEY = 'desafio_respostas'

export function getAnswer(day: number): string {
  if (typeof window === 'undefined') return ''
  try {
    const raw = localStorage.getItem(ANSWERS_KEY)
    if (!raw) return ''
    const answers = JSON.parse(raw) as Record<string, string>
    return answers[day] ?? ''
  } catch {
    return ''
  }
}

export function saveAnswer(day: number, text: string): void {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(ANSWERS_KEY)
    const answers: Record<string, string> = raw ? JSON.parse(raw) : {}
    answers[day] = text
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers))
  } catch {}
}
