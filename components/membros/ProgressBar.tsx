'use client'

interface ProgressBarProps {
  completed: number
  total: number
}

export function ProgressBar({ completed, total }: ProgressBarProps) {
  const percent = Math.round((completed / total) * 100)

  return (
    <div className="bg-white rounded-2xl p-5 border border-[var(--color-border)] shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div>
          <p className="text-xs font-medium text-[var(--color-muted-foreground)] uppercase tracking-wide">
            Progresso do Desafio
          </p>
          <p className="font-heading text-2xl font-bold text-[var(--color-dark)] leading-none mt-0.5">
            {completed} de {total} dias
          </p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-[var(--color-brand)]">{percent}%</span>
        </div>
      </div>

      {/* Barra de progresso */}
      <div className="relative h-3 rounded-full bg-[var(--color-muted)] overflow-hidden">
        <div
          className="h-full rounded-full bg-[var(--color-brand)] transition-all duration-700 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>

      {percent > 0 && percent < 100 && (
        <p className="text-xs text-[var(--color-muted-foreground)] mt-2">
          Faltam {total - completed} dia{total - completed !== 1 ? 's' : ''} para completar o desafio. Continue!
        </p>
      )}
      {percent === 100 && (
        <p className="text-xs text-[var(--color-brand)] font-semibold mt-2">
          Parabéns! Você completou o desafio!
        </p>
      )}
      {percent === 0 && (
        <p className="text-xs text-[var(--color-muted-foreground)] mt-2">
          Comece pelo Dia 1 e avance no seu ritmo.
        </p>
      )}
    </div>
  )
}
