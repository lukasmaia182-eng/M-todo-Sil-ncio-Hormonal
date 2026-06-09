export function FrioFinalCTA() {
  return (
    <section className="bg-[var(--color-dark)] py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-white/50 text-xs uppercase tracking-widest mb-4">
          Você chegou até aqui por uma razão
        </p>

        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-balance leading-tight mb-3">
          Você não está aqui por acidente.
        </h2>
        <p className="font-heading text-xl italic text-[var(--color-gold)] mb-6">
          &ldquo;Honra o que te trouxe até aqui.&rdquo;
        </p>

        <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md mx-auto">
          Mais de 3.600 mulheres hesitaram antes de clicar. Todas elas agradecem por ter clicado.
          Nenhuma voltaria atrás.
        </p>

        <a
          href="#oferta-frio"
          className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand)] text-white font-bold rounded-full px-10 py-4 text-lg hover:bg-[oklch(0.52_0.22_350)] transition-all shadow-xl shadow-[var(--color-brand)]/40 btn-pulse w-full max-w-sm"
        >
          Quero me libertar — R$27,90
        </a>

        <p className="text-white/30 text-xs mt-4">
          Garantia de 7 dias · Acesso imediato · Pagamento único
        </p>

        {/* Nota final — Gary Halbert style */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-white/50 text-xs italic leading-relaxed max-w-md mx-auto">
            &ldquo;O vínculo que te prende a ele está, neste momento, tentando te convencer de que não é a hora certa.
            Esse pensamento não é seu. É o vínculo se defendendo. Não deixe ele ganhar mais esse dia.&rdquo;
          </p>
          <p className="text-white/20 text-xs mt-2">— Projeto Renascer Emocional</p>
        </div>

      </div>
    </section>
  )
}
