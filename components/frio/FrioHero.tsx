import Image from 'next/image'

export function FrioHero() {
  return (
    <section className="bg-[var(--color-brand-muted)] py-10 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">

        {/* Badge de credibilidade */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 bg-white border border-[var(--color-brand)]/20 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--color-brand)] shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] animate-pulse inline-block" />
            +3.600 mulheres já se libertaram com esse método
          </span>
        </div>

        {/* Headline — para o scroll */}
        <h1 className="font-heading text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight mb-4">
          Você saiu do relacionamento.
          <br />
          <span className="text-[var(--color-brand)]">Mas não consegue parar de pensar nele.</span>
        </h1>

        {/* Subheadline — mecanismo + tempo */}
        <p className="text-center text-foreground/70 text-base sm:text-lg leading-relaxed mb-6 max-w-lg mx-auto">
          Isso não é fraqueza. É o vínculo traumático agindo no seu sistema nervoso.{' '}
          <strong className="text-foreground">Em 21 dias, você quebra esse vínculo de vez</strong>{' '}
          — com um método estruturado, passo a passo.
        </p>

        {/* Imagem antes/depois */}
        <div className="relative mb-6">
          <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden shadow-xl max-w-sm mx-auto">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/before.png"
                alt="Antes — dor emocional"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Antes
                </span>
              </div>
            </div>
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/after.png"
                alt="Depois — liberdade emocional"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)]/70 via-[var(--color-brand)]/10 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <span className="bg-[var(--color-brand)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Depois
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA principal — preço visível logo aqui */}
        <div className="flex flex-col items-center gap-3">
          <a
            href="https://go.perfectpay.com.br/PPU38CQD1EK"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-[oklch(0.52_0.22_350)] transition-all shadow-lg shadow-[var(--color-brand)]/30 btn-pulse"
          >
            Quero me libertar — R$19,90
          </a>
          <p className="text-foreground/50 text-xs text-center">
            <span className="line-through text-foreground/30 mr-1">R$197</span>
            Pagamento único · Acesso imediato · Garantia de 7 dias
          </p>
        </div>

      </div>
    </section>
  )
}
