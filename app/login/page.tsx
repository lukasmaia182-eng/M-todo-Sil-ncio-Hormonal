'use client'

import { login } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const TEST_EMAIL = process.env.NEXT_PUBLIC_MEMBER_EMAIL || 'acesso@21dias.com'
const TEST_PASSWORD = process.env.NEXT_PUBLIC_MEMBER_PASSWORD || 'libertar2024'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    await new Promise((r) => setTimeout(r, 600))
    const result = login(email, password)
    setLoading(false)

    if (result.ok) {
      router.push('/membros')
    } else {
      setError(result.error || 'Erro ao entrar.')
    }
  }

  async function handleQuickLogin() {
    setEmail(TEST_EMAIL)
    setPassword(TEST_PASSWORD)
    setError('')
    setLoading(true)
    await new Promise((r) => setTimeout(r, 500))
    const result = login(TEST_EMAIL, TEST_PASSWORD)
    setLoading(false)
    if (result.ok) {
      router.push('/membros')
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-brand-muted)] flex items-center justify-center p-4">
      {/* Fundo decorativo */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, oklch(0.88 0.08 350) 0%, transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.90 0.06 60) 0%, transparent 50%)',
        }}
      />

      <div className="relative w-full max-w-md">
        {/* Logo / Cabeçalho */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-brand)] mb-4 shadow-lg shadow-[var(--color-brand)]/30">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg>
          </div>
          <h1 className="font-heading text-3xl font-bold text-[var(--color-dark)] leading-tight">
            Área de Membros
          </h1>
          <p className="text-sm text-[var(--color-muted-foreground)] mt-1 leading-relaxed">
            Desafio 21 Dias Para Se Libertar
          </p>
        </div>

        {/* Card de login */}
        <div className="bg-white rounded-3xl shadow-xl shadow-[var(--color-brand)]/10 p-8 border border-[var(--color-border)]">
          <h2 className="text-lg font-semibold text-[var(--color-dark)] mb-6">
            Entre na sua conta
          </h2>

          {/* Credenciais de teste */}
          <div className="mb-6 rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-brand-muted)] p-4">
            <p className="text-xs font-semibold text-[var(--color-brand)] mb-2 uppercase tracking-wide">
              Acesso para teste
            </p>
            <div className="flex flex-col gap-1 mb-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted-foreground)]">E-mail:</span>
                <span className="text-xs font-mono font-semibold text-[var(--color-dark)] select-all">{TEST_EMAIL}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--color-muted-foreground)]">Senha:</span>
                <span className="text-xs font-mono font-semibold text-[var(--color-dark)] select-all">{TEST_PASSWORD}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleQuickLogin}
              disabled={loading}
              className="w-full rounded-xl border border-[var(--color-brand)]/30 bg-white text-[var(--color-brand)] font-semibold text-xs py-2 hover:bg-[var(--color-brand)] hover:text-white disabled:opacity-50 transition-all"
            >
              Entrar automaticamente com teste
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-[var(--color-dark)]">
                E-mail de acesso
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-3 text-sm text-[var(--color-dark)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-[var(--color-dark)]">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha de acesso"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-3 text-sm text-[var(--color-dark)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition-all"
              />
            </div>

            {error && (
              <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-xl bg-[var(--color-brand)] text-white font-semibold py-3.5 text-sm hover:bg-[oklch(0.52_0.22_350)] disabled:opacity-60 disabled:cursor-not-allowed transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-[var(--color-brand)]/30"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Entrando...
                </span>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          <p className="mt-6 text-xs text-center text-[var(--color-muted-foreground)] leading-relaxed">
            Acesse com o e-mail e senha fornecidos após a compra. Em caso de dúvidas, entre em contato pelo suporte.
          </p>
        </div>

        {/* Rodapé */}
        <p className="text-center text-xs text-[var(--color-muted-foreground)] mt-6">
          Projeto Renascer Emocional &copy; {new Date().getFullYear()}
        </p>
      </div>
    </div>
  )
}
