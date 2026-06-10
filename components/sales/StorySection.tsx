'use client'

import { useState } from 'react'

const diary = [
  {
    day: 'Dia 1',
    label: 'A chegada',
    quote: 'Entrei com vergonha. Achei que meu caso era diferente, mais grave, mais complicado que o de todo mundo. O primeiro módulo me fez chorar — não de dor. De alívio. Tinha nome para o que aconteceu comigo.',
  },
  {
    day: 'Dia 3',
    label: 'O mecanismo',
    quote: 'Entender o vínculo traumático foi como acender a luz num quarto que eu tentava arrumar no escuro há dois anos. Não era falta de força de vontade. Era neurociência. Tirou anos de culpa dos meus ombros numa tarde.',
  },
  {
    day: 'Dia 4',
    label: 'A virada',
    quote: 'Acordei e percebi que não tinha sido o primeiro pensamento que tive ao abrir os olhos. Parece pequeno. Mas pra mim foi enorme. Fui trabalhar sem aquele peso no peito que eu já nem sabia que era ele.',
  },
  {
    day: 'Dia 7',
    label: 'A primeira semana',
    quote: 'Fiz o exercício de integração e fiquei duas horas escrevendo. Contei a minha história pra mim mesma — como se fosse outra pessoa. Pela primeira vez não me senti idiota por ter ficado. Entendi o que foi feito com a minha cabeça.',
  },
  {
    day: 'Dia 11',
    label: 'O luto',
    quote: 'O dia do luto foi o mais difícil. Mas era diferente de antes. Antes eu chorava por ele. Nesse dia chorei por mim — pela versão de mim que acreditou nele tanto. Essa é uma dor que cura. A outra só consumia.',
  },
  {
    day: 'Dia 14',
    label: 'A metade',
    quote: 'Passaram duas semanas. Fui ver o perfil dele no Instagram — que eu verificava todo dia, às vezes umas dez vezes — e não senti nada. Fiquei esperando a dor. Ela não veio. Saí da tela e fui fazer outra coisa.',
  },
  {
    day: 'Dia 18',
    label: 'As fronteiras',
    quote: 'Ele mandou mensagem. Pela primeira vez em dois anos, eu não respondi com ansiedade. Li, pensei, e decidi não responder. Não porque fui forte. Porque simplesmente não precisava. Não havia mais urgência.',
  },
  {
    day: 'Dia 21',
    label: 'O outro lado',
    quote: 'Terminei o Dia 21 e fui me olhar no espelho. Me reconheci. Não era perfeita. Não estava totalmente curada. Mas era eu. Uma eu que entende o que aconteceu, que não tem mais vergonha, e que sabe o que não vai mais tolerar.',
  },
]

export function StorySection() {
  const [active, setActive] = useState(0)

  const entry = diary[active]

  return (
    <section className="py-20 md:py-28 bg-[var(--color-brand-muted)]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Uma historia real
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Patricia entrou no Dia 1.{' '}
            <span className="italic font-light text-[var(--color-brand)]">Veja o que aconteceu.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3 max-w-xl mx-auto">
            Extratos do diario dela durante os 21 dias do desafio. Com a permissao dela.
          </p>
        </div>

        {/* Timeline — dias como abas */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {diary.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-xs font-semibold rounded-full px-3.5 py-1.5 transition-all border ${
                active === i
                  ? 'bg-[var(--color-brand)] text-white border-[var(--color-brand)] shadow-md shadow-[var(--color-brand)]/25'
                  : 'bg-white text-[var(--color-brand)] border-[var(--color-brand)]/30 hover:border-[var(--color-brand)]/60'
              }`}
            >
              {d.day}
            </button>
          ))}
        </div>

        {/* Card do diario */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl border border-[var(--color-brand)]/20 shadow-xl overflow-hidden">
            {/* Header — nota de diario */}
            <div className="bg-[var(--color-brand)] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-white/70 text-xs font-medium uppercase tracking-widest">
                  {entry.day}
                </span>
                <p className="text-[var(--color-gold)] font-heading text-xl font-semibold mt-0.5">
                  {entry.label}
                </p>
              </div>
              {/* Icone de diario */}
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
            </div>

            {/* Corpo — entrada do diario */}
            <div className="px-6 py-7">
              <p className="font-heading text-xl sm:text-2xl text-foreground leading-relaxed italic">
                &ldquo;{entry.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                  PL
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Patricia L.</p>
                  <p className="text-xs text-muted-foreground">37 anos · Belo Horizonte, MG</p>
                </div>
              </div>
            </div>

            {/* Navegacao */}
            <div className="border-t border-border px-6 py-4 flex items-center justify-between">
              <button
                onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
                disabled={active === 0}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-brand)] disabled:opacity-30 disabled:cursor-not-allowed hover:underline"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Anterior
              </button>
              <span className="text-xs text-muted-foreground">{active + 1} de {diary.length}</span>
              <button
                onClick={() => setActive((prev) => Math.min(prev + 1, diary.length - 1))}
                disabled={active === diary.length - 1}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-brand)] disabled:opacity-30 disabled:cursor-not-allowed hover:underline"
              >
                Próximo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Nota de contexto */}
          <p className="text-center text-muted-foreground text-xs mt-4 leading-relaxed">
            Patricia entrou achando que seu caso era &ldquo;mais grave que o de todo mundo&rdquo;.
            Ela autorizou compartilhar esses extratos para que outras mulheres soubessem que a mudanca e possivel.
          </p>
        </div>
      </div>
    </section>
  )
}
