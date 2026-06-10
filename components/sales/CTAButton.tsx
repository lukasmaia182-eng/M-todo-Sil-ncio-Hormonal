import { cn } from '@/lib/utils'

interface CTAButtonProps {
  size?: 'default' | 'lg' | 'xl'
  className?: string
  variant?: 'primary' | 'secondary'
}

export function CTAButton({ size = 'default', className, variant = 'primary' }: CTAButtonProps) {
  const sizeClasses = {
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  if (variant === 'secondary') {
    return (
      <a
        href="https://go.perfectpay.com.br/PPU38CQD1EK"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'inline-flex items-center justify-center gap-3 font-bold rounded-full transition-all duration-300',
          'bg-white/10 text-white border-2 border-white/30 hover:bg-white/20',
          sizeClasses[size],
          className
        )}
      >
        Quero me libertar — R$19,90
      </a>
    )
  }

  return (
    <a
      href="https://go.perfectpay.com.br/PPU38CQD1EK"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center gap-3 font-bold rounded-full transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-xl',
        'bg-[var(--color-brand)] text-white hover:bg-[oklch(0.52_0.22_350)]',
        sizeClasses[size],
        className
      )}
    >
      <span>Quero me libertar em 21 dias</span>
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  )
}
