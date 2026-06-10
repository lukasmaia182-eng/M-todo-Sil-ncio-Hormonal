import { CTAButton } from './CTAButton'

const weeks = [
  {
    week: 'Semana 1',
    theme: 'ENTENDER',
    color: 'brand-muted',
    tagline: 'Você não pode sair de um labirinto sem entender como entrou.',
    days: [
      { day: 'Dia 1', title: 'O Ciclo Narcisista', desc: 'Você entende o mecanismo completo do que foi feito com você — não para ficar presa no passado, mas para parar de repetir sem saber por quê.' },
      { day: 'Dia 2', title: 'A Manipulação Psicológica', desc: 'Gaslighting. Hoovering. Erosão de identidade. Você aprende a nomear cada ferramenta usada contra você. Nomear é o começo de tirar o poder delas.' },
      { day: 'Dia 3', title: 'O Vínculo Traumático', desc: 'A explicação neurológica e emocional de por que você não consegue esquecer — e por que força de vontade nunca foi suficiente.' },
      { day: 'Dia 4', title: 'O Mapa da Sua Dor', desc: 'Você identifica exatamente os pontos de ativação do vínculo na sua vida — os gatilhos, os padrões, as situações que te puxam de volta.' },
      { day: 'Dia 5', title: 'A Arquitetura do Abuso', desc: 'Como o narcisista construiu o controle sobre você metodicamente. Entender isso remove a vergonha e devolve a narrativa da sua própria história.' },
      { day: 'Dia 6', title: 'Decodificando a Saudade', desc: 'A saudade que você sente não é dele — é da versão idealizada que ele nunca foi. Esse dia transforma completamente como você experimenta os pensamentos.' },
      { day: 'Dia 7', title: 'Consolidação e Revisão', desc: 'Revisão profunda da semana. Exercício de integração. Você fecha a Semana 1 com clareza total do que aconteceu com você e por quê.' },
    ],
  },
  {
    week: 'Semana 2',
    theme: 'DESATIVAR',
    color: 'brand',
    tagline: 'O dia da virada. 97% das participantes descrevem a Semana 2 como o momento em que algo realmente mudou.',
    days: [
      { day: 'Dia 8', title: 'Regulação do Sistema Nervoso', desc: 'Técnicas específicas para interromper a resposta de estresse ativada pelo vínculo traumático — no momento em que ela acontece.' },
      { day: 'Dia 9', title: 'Quebrando o Vínculo', desc: 'O coração do método. O processo prático de desativar o vínculo traumático no nível onde ele realmente existe: o sistema nervoso. Não na cabeça.' },
      { day: 'Dia 10', title: 'Processando o Trauma', desc: 'Técnicas baseadas em evidências para processar as memórias traumáticas sem reviver o trauma — liberando a carga emocional que elas carregam.' },
      { day: 'Dia 11', title: 'O Luto Real', desc: 'Você não está de luto por ele. Está de luto pela versão de você que acreditou nele. Esse dia honra e libera esse luto de uma forma que a maioria nunca faz.' },
      { day: 'Dia 12', title: 'No Contact Neurológico', desc: 'Como quebrar o contato não só na vida real — mas na sua mente. As técnicas específicas para interromper o ciclo de pensamentos obsessivos.' },
      { day: 'Dia 13', title: 'Desarmando os Gatilhos', desc: 'Cada gatilho identificado na Semana 1 é trabalhado diretamente — transformando os pontos de ativação em pontos neutros.' },
      { day: 'Dia 14', title: 'Consolidação e Integração', desc: 'A semana mais intensa do processo chega ao fim. Você consolida as mudanças e prepara o terreno para a reconstrução.' },
    ],
  },
  {
    week: 'Semana 3',
    theme: 'RENASCER',
    color: 'brand-muted',
    tagline: 'Com o vínculo desativado, começa o verdadeiro trabalho: ser você de novo.',
    days: [
      { day: 'Dia 15', title: 'Quem Você Era Antes Dele', desc: 'Escavação arqueológica da sua identidade real — removendo as camadas de dúvida, culpa e confusão colocadas em cima de quem você sempre foi.' },
      { day: 'Dia 16', title: 'Reconstrução da Autoestima', desc: 'Não com afirmações vazias — com um processo estruturado de reconexão com seu valor real, que existia antes e continua existindo agora.' },
      { day: 'Dia 17', title: 'Seu Corpo Depois do Trauma', desc: 'O trauma narcisista vive no corpo. Nesse dia você trabalha a reconexão somática — aprendendo a habitar seu corpo de volta.' },
      { day: 'Dia 18', title: 'Fronteiras Que Protegem', desc: 'Como construir fronteiras que não vêm do medo — mas da clareza de quem você é e do que você merece. Para que isso nunca mais aconteça.' },
      { day: 'Dia 19', title: 'Prosperidade e Propósito', desc: 'Como o trauma narcisista afeta sua capacidade de prosperar — e como recuperar a energia vital que estava sendo consumida pelo vínculo.' },
      { day: 'Dia 20', title: 'Seus Novos Relacionamentos', desc: 'Você aprende a reconhecer os padrões narcisistas antes de ser capturada. Como escolher diferente — porque você é diferente agora.' },
      { day: 'Dia 21', title: 'Renascimento Emocional', desc: 'Não é final. É começo. Você fecha esse dia sabendo quem você é, o que aconteceu com você, e quem você vai ser a partir de agora.' },
    ],
  },
]

export function ScheduleSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            O método completo
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            21 dias que podem{' '}
            <span className="italic font-light">mudar tudo</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            3 semanas · 3 fases · 1 transformação completa
          </p>
        </div>

        <div className="space-y-10">
          {weeks.map((week, wi) => (
            <div key={wi}>
              {/* Week header */}
              <div className={`rounded-2xl p-5 mb-4 ${wi === 1 ? 'bg-[var(--color-brand)] text-white' : 'bg-[var(--color-brand-muted)]/60 border border-[var(--color-brand)]/15'}`}>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${wi === 1 ? 'bg-white/20 text-white' : 'bg-[var(--color-brand)]/15 text-[var(--color-brand)]'}`}>
                    {week.week}
                  </span>
                  <span className={`font-heading text-2xl font-bold ${wi === 1 ? 'text-[var(--color-gold)]' : 'text-[var(--color-brand)]'}`}>
                    {week.theme}
                  </span>
                  {wi === 1 && (
                    <span className="ml-auto bg-[var(--color-gold)] text-[var(--color-gold-foreground)] text-xs font-bold px-2.5 py-1 rounded-full">
                      A virada
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${wi === 1 ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {week.tagline}
                </p>
              </div>

              {/* Days accordion-style list */}
              <div className="space-y-2 pl-2">
                {week.days.map((d, di) => (
                  <div key={di} className="flex gap-4 group">
                    <div className="flex flex-col items-center pt-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 ${wi === 1 ? 'bg-[var(--color-brand)] text-white shadow-md shadow-[var(--color-brand)]/30' : 'bg-[var(--color-brand-muted)] text-[var(--color-brand)] border border-[var(--color-brand)]/20'}`}>
                        {wi * 7 + di + 1}
                      </div>
                      {di < week.days.length - 1 && (
                        <div className="w-0.5 flex-1 bg-[var(--color-brand)]/15 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 pb-3">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-[var(--color-brand)] text-xs font-medium">{d.day}</span>
                        <h3 className="text-foreground font-semibold text-base">{d.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="mt-14 text-center bg-[var(--color-brand-muted)]/50 border border-[var(--color-brand)]/15 rounded-2xl p-8">
          <p className="text-foreground font-semibold text-lg mb-1">
            Pronta para começar essa jornada?
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Acesso imediato assim que o pagamento for confirmado
          </p>
          <CTAButton size="lg" />
          <p className="text-muted-foreground text-xs mt-3">
            De <span className="line-through">R$197</span> por{' '}
            <span className="text-[var(--color-brand)] font-bold">R$19,90</span>
            {' '}· Garantia de 7 dias · Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  )
}
