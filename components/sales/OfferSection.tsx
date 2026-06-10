import Image from 'next/image'
import { CTAButton } from './CTAButton'

const bonuses = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Checklist: 21 Sinais de Narcisista',
    desc: 'A ferramenta de proteção para o resto da vida. Você aprende a reconhecer os padrões narcisistas antes de ser capturada — em relacionamentos românticos, amizades e no trabalho.',
    value: 'R$47',
    badge: 'Proteção futura',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Meditação de Corte Energético',
    desc: 'Prática guiada de 20 minutos desenvolvida para desativar o vínculo no nível mais profundo — energético e somático. Uma das ferramentas mais poderosas do processo.',
    value: 'R$67',
    badge: 'Prática guiada',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Guia de Reconstrução da Autoestima',
    desc: 'O passo a passo para reconstruir a autoestima destruída pelo relacionamento narcisista — não com afirmações vazias, mas com um processo estruturado e real.',
    value: 'R$97',
    badge: 'Passo a passo',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Comunidade Exclusiva de Mulheres',
    desc: 'Um espaço seguro com mulheres que entendem exatamente o que você viveu. Sem julgamento. Com acolhimento real de quem passou pelo mesmo processo.',
    value: 'Impagável',
    badge: 'Suporte contínuo',
  },
]

export function OfferSection() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[var(--color-brand)] blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--color-gold)] blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Tudo que você recebe
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            Muito mais do que{' '}
            <span className="italic font-light text-[var(--color-brand)]">você esperava</span>
          </h2>
        </div>

        {/* Bonuses */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {bonuses.map((bonus, i) => (
            <div
              key={i}
              className="bg-white border border-[var(--color-brand)]/15 rounded-2xl p-5 hover:border-[var(--color-brand)]/40 hover:shadow-lg transition-all shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 flex items-center justify-center text-[var(--color-brand)] flex-shrink-0">
                  {bonus.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs bg-[var(--color-brand)]/10 text-[var(--color-brand)] rounded-full px-2.5 py-0.5 font-medium">
                      {bonus.badge}
                    </span>
                    <span className="text-muted-foreground text-xs line-through">{bonus.value}</span>
                  </div>
                  <h3 className="text-foreground font-semibold text-base mb-1.5">{bonus.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{bonus.desc}</p>
                  <p className="text-[var(--color-brand)] font-bold text-sm mt-2.5">GRÁTIS</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ancoragem de preço */}
        <div className="mb-10 max-w-2xl mx-auto">
          <div className="bg-[var(--color-brand-muted)]/60 border border-[var(--color-brand)]/15 rounded-2xl p-6">
            <p className="text-foreground/70 text-sm text-center mb-4 uppercase tracking-wider font-medium">
              Compare antes de decidir
            </p>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              {[
                { label: '1 sessão de terapia', price: 'R$150–300', sub: 'sem garantia' },
                { label: 'Coaching individual', price: 'R$500+', sub: 'por mês' },
                { label: 'Este programa completo', price: 'R$19,90', sub: '21 dias + 4 bônus', highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl p-3 ${item.highlight ? 'bg-[var(--color-brand)] text-white' : 'bg-white border border-border'}`}
                >
                  <p className={`text-xs leading-tight mb-1 ${item.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>{item.label}</p>
                  <p className={`font-heading text-lg font-bold ${item.highlight ? 'text-[var(--color-gold)]' : 'text-foreground'}`}>{item.price}</p>
                  <p className={`text-xs mt-0.5 ${item.highlight ? 'text-white/70' : 'text-muted-foreground'}`}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offer box */}
        <div className="bg-white border-2 border-[var(--color-brand)]/30 rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto shadow-xl">
          <div className="text-center mb-8">
            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-2">O que você leva</p>
            <h3 className="font-heading text-2xl font-semibold text-foreground">Tudo isso por apenas</h3>
          </div>

          <div className="space-y-3 mb-6">
            {[
              { item: '21 dias de programa online — Projeto Renascer Emocional', value: 'R$197' },
              { item: 'Bônus 1 — Checklist 21 Sinais de Narcisista', value: 'R$47' },
              { item: 'Bônus 2 — Meditação de Corte Energético', value: 'R$67' },
              { item: 'Bônus 3 — Guia de Reconstrução da Autoestima', value: 'R$97' },
              { item: 'Bônus 4 — Comunidade Exclusiva de Mulheres', value: 'Impagável' },
            ].map((row) => (
              <div key={row.item} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-foreground/70 text-sm">
                  <svg className="w-4 h-4 text-[var(--color-brand)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {row.item}
                </div>
                <span className="text-muted-foreground text-sm line-through whitespace-nowrap">{row.value}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-6 text-center">
            <p className="text-muted-foreground text-sm mb-1">
              Valor total de mais de <span className="line-through">R$408</span>
            </p>
            <div className="font-heading text-5xl sm:text-6xl font-bold text-[var(--color-brand)] mb-1">
              R$ 19,90
            </div>
            <p className="text-muted-foreground text-sm mb-6">pagamento único · acesso imediato</p>

            <CTAButton size="xl" className="btn-pulse w-full justify-center" />
            <p className="text-[var(--color-brand)] font-medium text-sm mt-3">
              Acesso liberado assim que o pagamento for confirmado
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Vagas limitadas nesta turma · Bônus encerram junto com as vagas
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-5 text-muted-foreground text-xs">
              {['Pix', 'Cartão de crédito', 'Boleto', 'Pagamento 100% seguro'].map((m) => (
                <span key={m} className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Product image */}
        <div className="mt-12 max-w-xl mx-auto rounded-3xl overflow-hidden opacity-90">
          <Image
            src="/images/product-mockup.png"
            alt="21 Dias Para Se Libertar de um Narcisista — materiais incluídos"
            width={700}
            height={500}
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
