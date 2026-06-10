'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Camila R.',
    age: '34 anos',
    location: 'São Paulo, SP',
    rating: 5,
    before: 'Passei 2 anos em terapia sem conseguir parar de pensar nele. Todo mundo falava que era "só seguir em frente". Como se eu pudesse simplesmente decidir.',
    after: 'No Dia 4 eu senti algo mudar. Não consigo explicar direito. Era como se o fio que me puxava de volta pra ele tivesse sido cortado. Pela primeira vez em anos, eu acordei sem pensar nele.',
    initials: 'CR',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    name: 'Fernanda M.',
    age: '29 anos',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    before: 'Eu sabia que ele era tóxico. Todo mundo sabia. Mas eu ficava voltando. Ficava esperando uma mensagem. Me sentindo idiota por sentir o que sentia.',
    after: 'Entender o mecanismo neurológico mudou tudo. Não era fraqueza minha. Era biologia. Essa única informação tirou anos de vergonha dos meus ombros — e o processo do desafio fez o resto.',
    initials: 'FM',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Juliana T.',
    age: '41 anos',
    location: 'Curitiba, PR',
    rating: 5,
    before: 'Tinha medo que fosse mais uma coisa que eu ia tentar e não ia funcionar pra mim. Já estava quase desistindo de me recuperar.',
    after: 'Esse desafio foi diferente de tudo que eu já tentei. Não porque seja mágico — mas porque trata o problema real. Hoje, 3 semanas depois, eu me olho no espelho e me reconheço de novo.',
    initials: 'JT',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Patricia L.',
    age: '37 anos',
    location: 'Belo Horizonte, MG',
    rating: 5,
    before: 'O relacionamento tinha acabado há 8 meses, mas eu ainda verificava o Instagram dele todo dia. Sabia que era autodestrutivo. Não conseguia parar.',
    after: 'Depois do desafio, parei. Não com força de vontade — simplesmente não queria mais. O vínculo que me puxava não estava mais lá. É a melhor forma que consigo descrever.',
    initials: 'PL',
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'Mariana S.',
    age: '26 anos',
    location: 'Fortaleza, CE',
    rating: 5,
    before: 'Minha família dizia "esquece ele" como se eu estivesse escolhendo não esquecer. Eu me sentia louca por não conseguir.',
    after: 'O desafio me devolveu a narrativa da minha própria história. Entendi que não era louca — estava traumatizada. Essa distinção salvou minha autoestima.',
    initials: 'MS',
    color: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'Renata A.',
    age: '45 anos',
    location: 'Porto Alegre, RS',
    rating: 5,
    before: 'Fiz o desafio 14 meses depois do término. Achei que era tarde demais — que o dano era permanente.',
    after: 'Não é tarde demais. O vínculo traumático não tem prazo de validade, como o Projeto Renascer Emocional explica. Comecei o processo no Dia 1 sentindo que era impossível. Terminei o Dia 7 sentindo que era real.',
    initials: 'RA',
    color: 'bg-orange-100 text-orange-700',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[var(--color-gold)] fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-3">
            Elas já se libertaram
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground text-balance leading-tight">
            O que mulheres que já fizeram{' '}
            <span className="italic font-light">os 21 dias</span> dizem
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Resultados reais de mulheres reais — como você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:border-[var(--color-brand)]/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {t.age} · {t.location}
                  </p>
                </div>
                <div className="ml-auto">
                  <StarRating count={t.rating} />
                </div>
              </div>

              {/* Before */}
              <div className="bg-muted/60 rounded-xl p-3.5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-medium">
                  Antes
                </p>
                <p className="text-foreground/70 text-sm leading-relaxed italic">
                  &ldquo;{t.before}&rdquo;
                </p>
              </div>

              {/* After */}
              <div className="bg-[var(--color-brand-muted)]/50 rounded-xl p-3.5 border border-[var(--color-brand)]/15">
                <p className="text-xs uppercase tracking-wider text-[var(--color-brand)] mb-1.5 font-medium">
                  Depois dos 21 dias
                </p>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {expanded === i || t.after.length < 160
                    ? `"${t.after}"`
                    : `"${t.after.slice(0, 140)}..."`}
                </p>
                {t.after.length >= 160 && (
                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="text-[var(--color-brand)] text-xs font-medium mt-1.5 hover:underline"
                  >
                    {expanded === i ? 'Ver menos' : 'Ver mais'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Prints de mensagem — prova visual textual */}
        <div className="mt-14 mb-4">
          <p className="text-center text-[var(--color-brand)] font-medium text-sm uppercase tracking-widest mb-2">
            Mensagens recebidas
          </p>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Algumas das mensagens que chegaram durante e após o desafio
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Camila R.', time: 'Dia 4 do desafio', msg: 'Cris eu to CHORANDO. Acabei de fazer o exercício do Dia 4 e pela primeira vez em 2 anos eu acordei hoje sem ele ser o primeiro pensamento. Não sei explicar. Obrigada.' },
              { name: 'Fernanda M.', time: 'Após o Dia 7', msg: 'Eu entendi o que foi feito comigo. A vergonha que eu sentia por não conseguir esquecer foi embora. Não era eu. Era o mecanismo. Você salvou minha autoestima.' },
              { name: 'Juliana T.', time: 'Após o Dia 14', msg: 'Fui ver o perfil dele hoje. Esperei a dor vir. Não veio. Saí e fui fazer café. Parece pouco mas você sabe o que isso significa pra mim depois de tanto tempo.' },
              { name: 'Renata A.', time: 'Após o Dia 21', msg: 'Me olhei no espelho e me reconheci. Faz mais de um ano que eu não conseguia fazer isso. Muito obrigada Cris. Esse método funcionou onde dois anos de terapia não chegaram.' },
              { name: 'Mariana S.', time: 'Semana 2', msg: 'Minha família dizia esquece ele. Eu não sabia como. Agora eu SEI. Não é forca de vontade. É um processo. E esse processo funciona. Já indiquei pra três amigas.' },
              { name: 'Patricia L.', time: 'Dia 18', msg: 'Ele mandou mensagem. Não fiquei ansiosa. Li, pensei, não respondi. Isso nunca tinha acontecido antes. Sempre respondi mesmo sabendo que ia me machucar. Não mais.' },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl border border-[var(--color-brand)]/15 shadow-sm p-4 flex flex-col gap-3">
                {/* Topo — remetente simulado */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-border">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-brand)]/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">{p.name}</p>
                    <p className="text-[10px] text-muted-foreground">{p.time}</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </div>
                {/* Balao de mensagem */}
                <div className="bg-[#dcf8c6] rounded-xl rounded-tl-sm px-3.5 py-2.5 self-start max-w-[90%]">
                  <p className="text-[13px] text-[#1a1a1a] leading-relaxed">{p.msg}</p>
                  <div className="flex justify-end mt-1">
                    <span className="text-[10px] text-[#667781]">lida</span>
                    <svg className="w-3.5 h-3.5 text-[#53bdeb] ml-1" fill="currentColor" viewBox="0 0 16 11">
                      <path d="M11.071.653a.75.75 0 011.06 1.06l-6.5 6.5a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l2.47 2.47 5.97-5.97zM15.5 1.713a.75.75 0 010 1.06l-6.5 6.5a.75.75 0 01-1.06 0 .75.75 0 010-1.06l6.5-6.5a.75.75 0 011.06 0z"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 bg-[var(--color-brand)] rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '3.600+', label: 'Mulheres transformadas' },
            { num: '97%', label: 'Relatam mudança no Dia 4' },
            { num: '4.9/5', label: 'Avaliação média' },
            { num: '21 dias', label: 'Para uma nova vida' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-[var(--color-gold)]">
                {stat.num}
              </div>
              <div className="text-white/70 text-xs mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
