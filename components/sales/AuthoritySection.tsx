import Image from 'next/image'

export function AuthoritySection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-brand-muted)]/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative order-2 md:order-1">
            <div className="relative max-w-sm mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-[var(--color-brand)]/15 translate-x-3 translate-y-3" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-[var(--color-brand)]/20 shadow-2xl">
                <Image
                  src="/images/dr-jane.png"
                  alt="Cris Andrade — fundadora do Projeto Renascer Emocional"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            {/* Credential card */}
            <div className="absolute -bottom-6 -right-2 md:right-0 bg-white rounded-2xl shadow-xl p-4 max-w-[200px] border border-border">
              <div className="font-heading text-3xl font-bold text-[var(--color-brand)]">3.600+</div>
              <div className="text-xs text-muted-foreground leading-tight mt-1">
                mulheres que chegaram destruidas e saíram do outro lado
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 md:order-2">
            <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
              Quem está por trás desse método
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight mb-1">
              Cris Andrade
            </h2>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Fundadora do Projeto Renascer Emocional · Especialista em trauma narcisista e vínculo traumático
            </p>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg font-medium text-foreground">
                Esse método não nasceu de uma teoria. Nasceu de uma dor real — e de uma necessidade urgente que ninguém estava respondendo.
              </p>
              <p>
                Depois de sair de um relacionamento com um narcisista — e de tentar durante dois anos se recuperar com terapia convencional sem sucesso — Cris percebeu que o problema não estava nela. Estava na ferramenta.{' '}
                <strong className="text-foreground">
                  Terapia convencional trata dor emocional. O que ela tinha era diferente: era uma reprogramação do sistema nervoso.
                </strong>
              </p>
              <p>
                Ao mergulhar nos estudos sobre trauma complexo, neurociência do apego e vínculo traumático, Cris desenvolveu o método que ela mesma precisava — e que ninguém tinha criado ainda. Um processo específico para desfazer o que o narcisista instalou no nível mais profundo: o sistema nervoso.
              </p>
              <p>
                Desde então, mais de{' '}
                <strong className="text-foreground">3.600 mulheres</strong> passaram pelo processo. Mulheres que achavam que o dano era permanente. Que tinham tentado de tudo. Que estavam prestes a desistir de si mesmas.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-8 border-l-4 border-[var(--color-brand)] pl-5">
              <p className="font-heading text-xl md:text-2xl italic text-foreground font-medium leading-snug">
                &ldquo;Eu precisava criar esse método porque o que existia não era suficiente para o que eu vi — em mim e em tantas outras. Não era fraqueza. Era biologia sendo usada contra nós. E biologia tem solução.&rdquo;
              </p>
              <p className="text-muted-foreground text-sm mt-2">— Cris Andrade, Projeto Renascer Emocional</p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                'Sobrevivente de relacionamento narcisista',
                'Especialista em Trauma Narcisista',
                'Método próprio e testado',
                '+3.600 mulheres transformadas',
              ].map((c) => (
                <span
                  key={c}
                  className="text-xs bg-[var(--color-brand)]/10 text-[var(--color-brand)] border border-[var(--color-brand)]/20 rounded-full px-3 py-1.5 font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
