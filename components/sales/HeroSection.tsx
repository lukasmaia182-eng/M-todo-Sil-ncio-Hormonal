import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative bg-[var(--color-brand-muted)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen py-16 md:py-20">

          {/* Left — copy */}
          <div className="relative z-10 order-2 md:order-1">
            {/* Badge — social proof imediato */}
            <div className="inline-flex items-center gap-2 bg-[var(--color-brand)]/15 border border-[var(--color-brand)]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-brand)] animate-pulse inline-block" />
              <span className="text-[var(--color-brand)] text-sm font-medium tracking-wide">
                +3.600 mulheres já se libertaram
              </span>
            </div>

            {/* Headline principal */}
            <h1 className="font-heading text-foreground text-balance mb-5">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Você já sabe que ele era tóxico.
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[var(--color-brand)]">
                Então por que não consegue parar de pensar nele?
              </span>
            </h1>

            {/* Subheadline — mecanismo + revelacao */}
            <p className="text-foreground/75 text-lg sm:text-xl max-w-xl leading-relaxed mb-3">
              A resposta está no seu sistema nervoso — não na sua força de vontade. Em <strong className="text-foreground">21 dias</strong>, um método estruturado vai onde o vínculo realmente vive e corta isso de uma vez por todas.
            </p>
            <p className="text-foreground/60 text-base max-w-xl leading-relaxed mb-8">
              Sem precisar reviver o trauma. Sem anos de terapia. Com um processo criado especificamente para <strong className="text-foreground/70">dependência neurológica</strong> — que é o que você tem.
            </p>

            {/* Mini proof */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {['CR', 'FM', 'JT', 'PL', 'MS'].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[var(--color-brand)] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-foreground/60 text-sm leading-tight">
                <strong className="text-foreground">Camila, Fernanda, Juliana</strong> e mais 3.597 já estão do outro lado
              </p>
            </div>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <a
                href="https://go.perfectpay.com.br/PPU38CQD1EK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand)] text-white font-bold rounded-full px-8 py-4 text-lg hover:bg-[oklch(0.52_0.22_350)] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--color-brand)]/30 btn-pulse"
              >
                Sim — quero entender o que aconteceu comigo
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <div className="text-foreground/55 text-sm">
                <span className="line-through text-foreground/30">R$197</span>{' '}
                <span className="text-[var(--color-brand)] font-bold">R$19,90</span>
                {' '}· pagamento único
              </div>
            </div>

            {/* Micro-copy de risco zero */}
            <p className="text-foreground/40 text-xs flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Garantia incondicional de 7 dias · Acesso imediato · Pix, Cartão ou Boleto
            </p>
          </div>

          {/* Right — antes e depois */}
          <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-none">
              <div className="absolute inset-0 rounded-[2rem] bg-[var(--color-brand)]/20 translate-x-4 translate-y-4 -z-10" />

              <div className="relative grid grid-cols-2 gap-2 rounded-[2rem] overflow-hidden shadow-2xl">
                {/* ANTES */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/before.png"
                    alt="Antes — dor emocional do relacionamento narcisista"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center z-10">
                    <span className="bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Antes
                    </span>
                  </div>
                </div>

                {/* DEPOIS */}
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/images/after.png"
                    alt="Depois — liberdade e renascimento emocional"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand)]/70 via-[var(--color-brand)]/10 to-transparent" />
                  <div className="absolute bottom-3 left-0 right-0 text-center z-10">
                    <span className="bg-[var(--color-brand)] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Depois
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-5 left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border z-20">
                <div className="font-heading text-2xl font-bold text-[var(--color-brand)]">21 dias</div>
                <div className="text-xs text-muted-foreground leading-tight mt-0.5">para uma nova você</div>
              </div>
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[var(--color-gold)] opacity-80 blur-sm" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-gold)]" />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
