'use client'

export const AUTH_KEY = 'membros_auth'

export interface AuthUser {
  email: string
  name: string
}

export function getUser(): AuthUser | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(AUTH_KEY)
    if (!raw) return null
    return JSON.parse(raw) as AuthUser
  } catch {
    return null
  }
}

export function login(email: string, password: string): { ok: boolean; error?: string } {
  // Credenciais simples — em produção real, substituir por autenticação real
  const validEmail = process.env.NEXT_PUBLIC_MEMBER_EMAIL || 'acesso@21dias.com'
  const validPassword = process.env.NEXT_PUBLIC_MEMBER_PASSWORD || 'libertar2024'

  if (email.trim().toLowerCase() !== validEmail.toLowerCase()) {
    return { ok: false, error: 'E-mail ou senha incorretos.' }
  }
  if (password !== validPassword) {
    return { ok: false, error: 'E-mail ou senha incorretos.' }
  }

  const user: AuthUser = { email: email.trim().toLowerCase(), name: 'Bem-vinda' }
  localStorage.setItem(AUTH_KEY, JSON.stringify(user))
  return { ok: true }
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY)
}
