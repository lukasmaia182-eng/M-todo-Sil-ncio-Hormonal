const deliverables = [
  { label: '21 dias de aulas ao vivo gravadas', sub: 'Acesso imediato e permanente' },
  { label: '3 semanas estruturadas', sub: 'Entender → Desativar → Renascer' },
  { label: 'Bônus: Guia de No Contact Emocional', sub: 'Para quem ainda tem contato com ele' },
  { label: 'Bônus: Mapa da Manipulação Narcisista', sub: 'Reconheça os padrões para nunca mais cair' },
  { label: 'Bônus: Protocolo de Crise às 3h da Manhã', sub: 'Para quando a saudade atacar sem aviso' },
  { label: 'Acesso à comunidade privada', sub: 'Mulheres que estão na mesma jornada' },
]

export function FrioOffer() {
  return (
    <section id="oferta-frio" className="bg-white py-10 px-4 sm:px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">

        <p className="text-center text-xs uppercase tracking-widest text-[var(--color-brand)] font-medium mb-3">
          O que você recebe hoje
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground text-balance leading-tight mb-6 text-center">
          21 Dias Para Se Libertar de um Narcisista
        </h2>

        <div className="flex flex-col gap-3 mb-8">
          {deliverables.map((d, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--color-brand)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-medium text-sm">{d.label}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{d.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparacao de preco */}
        <div className="bg-[var(--color-brand-muted)]/40 border border-[var(--color-brand)]/15 rounded-2xl p-5 mb-6">
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-4">
            {[
              { label: '1 sessão de terapia', price: 'R$150–300', neutral: true },
              { label: 'Coaching individual', price: 'R$500+/mês', neutral: true },
              { label: 'Este programa', price: 'R$27,90', highlight: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl p-3 ${item.highlight ? 'bg-[var(--color-brand)] text-white' : 'bg-white border border-border'}`}
              >
                <p className={`text-xs leading-tight mb-1 ${item.highlight ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {item.label}
                </p>
                <p className={`font-heading text-base font-bold ${item.highlight ? 'text-[var(--color-gold)]' : 'text-foreground'}`}>
                  {item.price}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground">
            Pagamento único · Sem mensalidade · Acesso permanente
          </p>
        </div>

        {/* CTA */}
        <a
          href="https://pay.hotmart.com/seu-link"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-[oklch(0.52_0.22_350)] transition-all shadow-lg shadow-[var(--color-brand)]/30 btn-pulse"
        >
          Quero me libertar — R$27,90
        </a>
        <p className="text-center text-muted-foreground text-xs mt-3">
          Acesso imediato após o pagamento · Pix, Cartão ou Boleto
        </p>

      </div>
    </section>
  )
}
