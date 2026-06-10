import Image from 'next/image'
import { CTAButton } from './CTAButton'

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-32 bg-[var(--color-brand)] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/transformation.png"
          alt="Transformação emocional"
          fill
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)] via-[var(--color-brand)]/80 to-[var(--color-brand)]/90" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Duas opções — sem vs com */}
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-left">
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white/60 mb-3">Sem o programa</h3>
            <ul className="space-y-2 text-white/50 text-sm leading-relaxed">
              {[
                'O mesmo loop noturno de pensamentos',
                'O mesmo peso que não vai embora',
                'A mesma exaustão sem explicação',
                'O vínculo consumindo sua energia',
                'A mesma você daqui a 21 dias',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/20 border border-white/40 rounded-2xl p-6 text-left">
            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/30 flex items-center justify-center mb-4">
              <svg className="w-4 h-4 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-semibold text-white mb-3">Em 21 dias</h3>
            <ul className="space-y-2 text-white/85 text-sm leading-relaxed">
              {[
                'Clareza total de tudo que aconteceu com você',
                'Vínculo traumático desativado no sistema nervoso',
                'Autoestima e identidade reconstruídas',
                'Fronteiras que protegem sem esforço',
                'Você no papel principal da sua própria vida',
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <svg className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mensagem principal */}
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-white font-light leading-relaxed mb-4 text-balance">
          Você leu até aqui porque uma parte de você{' '}
          <strong className="font-semibold">reconheceu a própria história</strong>{' '}
          nessas palavras.
        </p>
        <p className="font-heading text-xl sm:text-2xl text-[var(--color-gold)] font-semibold italic mb-3">
          Essa parte está certa. Honra ela.
        </p>
        <p className="text-white/75 text-base mb-3 max-w-lg mx-auto">
          Amanhã você vai acordar exatamente onde acordou hoje — a menos que algo mude hoje.
        </p>
        <p className="text-white/65 text-base mb-10 max-w-lg mx-auto">
          Mais de 3.600 mulheres tomaram essa decisão. Todas hesitaram. Nenhuma se arrependeu.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://go.perfectpay.com.br/PPU38CQD1EK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-bold rounded-full px-10 py-5 text-xl bg-[var(--color-gold)] text-foreground hover:brightness-105 transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-xl btn-pulse"
          >
            <span>Sim, quero começar o Dia 1 agora</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-white/60 text-sm">
            De <span className="line-through">R$197</span> por apenas{' '}
            <span className="text-[var(--color-gold)] font-semibold">R$19,90</span>
            {' '}· Acesso imediato · Garantia de 7 dias
          </p>
        </div>

        {/* Nota final */}
        <div className="mt-16 border-t border-white/20 pt-10">
          <p className="text-white/65 text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto">
            &ldquo;O vínculo que te prendeu a ele está, neste exato momento, tentando te convencer de que não é a hora certa. Que você pode esperar. Que talvez amanhã. Esse pensamento não é seu — é o vínculo se defendendo. Não deixe ele ganhar mais esse dia.&rdquo;
          </p>
          <p className="text-white/30 text-xs mt-3">— Projeto Renascer Emocional</p>
          <p className="text-white/40 text-xs mt-4 max-w-sm mx-auto">
            O único risco real é não entrar — e daqui a 21 dias estar exatamente onde você está agora.
          </p>
        </div>
      </div>
    </section>
  )
}
