'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Meu caso é mais grave que o das outras. Isso vai funcionar pra mim?',
    a: 'Essa é exatamente a objeção que quase todas as 3.600 mulheres tiveram antes de entrar. "Minha história é diferente. Meu relacionamento foi mais longo. O abuso foi mais intenso. Fui mais destruída." E sabe o que aconteceu? O método funcionou justamente por tratar o mecanismo neurológico — não os detalhes da história. O vínculo traumático funciona da mesma forma, independente da duração ou intensidade. Você não é um caso especial de impossibilidade. Você é um caso especial de merecedora de cura.',
  },
  {
    q: 'E se eu já fiz terapia e não funcionou?',
    a: 'Terapia convencional não foi criada para trauma narcisista. Esse método foi. São abordagens diferentes para feridas diferentes. Mulheres que passaram anos em terapia sem resultado encontraram aqui o que faltava — não porque terapia seja ruim, mas porque esse método trata o que a terapia convencional não alcança: o vínculo traumático no sistema nervoso.',
  },
  {
    q: 'E se já faz muito tempo que saí do relacionamento?',
    a: 'O vínculo traumático não tem prazo de validade. Mulheres que fizeram o desafio anos depois do término relatam os mesmos resultados — porque o vínculo não enfraquece com o tempo. Ele enfraquece com o processo certo.',
  },
  {
    q: 'E se eu não tiver muito tempo no dia a dia?',
    a: 'O programa foi desenhado para caber na vida real. As aulas são gravadas e curtas — você pode assistir no horário que for melhor para você. Não há compromisso com horários fixos, encontros ao vivo ou prazo de conclusão. O acesso é permanente: você faz no seu ritmo, sem pressão.',
  },
  {
    q: 'E se não funcionar para mim especificamente?',
    a: 'Você tem 7 dias de garantia incondicional. Se não funcionar, você recebe tudo de volta. Sem perguntas. Sem formulários complexos. Sem julgamento. O risco é nosso, não seu.',
  },
  {
    q: 'Será que estou pronta?',
    a: 'Você nunca vai se sentir completamente pronta — e tudo bem. Nenhuma das 3.600 mulheres que fizeram esse desafio se sentiu pronta antes de entrar. A prontidão não vem antes do processo. Vem durante. O único requisito é estar cansada o suficiente para querer mudar.',
  },
  {
    q: 'Ainda tenho contato com ele. Isso é um problema?',
    a: 'Não. O desafio foi projetado para funcionar independentemente do seu status atual. Seja você que terminou recentemente, que ainda tem contato por necessidade, ou que saiu há anos — o processo trabalha no vínculo interno, não nas circunstâncias externas.',
  },
  {
    q: 'Em qual formato acontece o programa?',
    a: 'O programa é 100% online e gravado. São aulas em vídeo que você acessa imediatamente após a confirmação do pagamento — pelo celular ou computador, no seu próprio ritmo, sem horário fixo. Você tem acesso permanente ao conteúdo: pode assistir quando quiser, pausar, rever quantas vezes precisar. Não há encontros ao vivo obrigatórios.',
  },
]

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Dúvidas comuns
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Perguntas que você{' '}
            <span className="italic font-light">provavelmente está se fazendo</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-medium text-foreground text-sm sm:text-base leading-snug pr-4">
                  {faq.q}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border border-[var(--color-brand)]/30 flex items-center justify-center transition-transform duration-200 ${open === i ? 'rotate-45 bg-[var(--color-brand)] border-[var(--color-brand)]' : 'bg-transparent'}`}>
                  <svg
                    className={`w-4 h-4 transition-colors ${open === i ? 'text-white' : 'text-[var(--color-brand)]'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
