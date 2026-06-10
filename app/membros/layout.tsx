'use client'

import { getUser, logout } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MembrosLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [userName, setUserName] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const user = getUser()
    if (!user) {
      router.replace('/login')
      return
    }
    setUserName(user.name)
  }, [router])

  function handleLogout() {
    logout()
    router.push('/login')
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-[var(--color-brand-muted)]">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)] shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
              </svg>
            </div>
            <span className="font-heading text-base font-semibold text-[var(--color-dark)] leading-tight">
              21 Dias Para Se Libertar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-xs text-[var(--color-muted-foreground)]">
              {userName}
            </span>
            <button
              onClick={handleLogout}
              className="text-xs font-medium text-[var(--color-brand)] hover:underline"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
