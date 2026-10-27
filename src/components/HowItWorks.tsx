export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Envie sua lista ou links",
      description: "Você nos diz exatamente o que procura. Buscamos o melhor preço nas principais lojas e importadoras oficiais de Ciudad del Este em tempo real.",
      tag: "Cotação Imediata"
    },
    {
      number: "02",
      title: "Compramos, filmamos e testamos",
      description: "Vamos pessoalmente até a loja física. Você recebe fotos em alta resolução e vídeos do produto sendo inspecionado e lacrado antes do envio.",
      tag: "Transparência Total"
    },
    {
      number: "03",
      title: "Receba na sua porta com seguro",
      description: "Embalagem industrial reforçada anti-impacto, documentação completa, rastreamento passo a passo e garantia total de entrega no Brasil.",
      tag: "Garantia 100%"
    }
  ];

  return (
    <section id="como-funciona" className="pt-6 sm:pt-10 pb-20 lg:pb-28 bg-white border-b border-neutral-200/80 relative overflow-hidden">
      
      {/* Luz ambiente sutil no background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        
        {/* ========================================================
            1. CABEÇALHO DA SEÇÃO
           ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50/90 border border-cyan-200/70 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
              Fluxo Seguro & Transparente
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
            Como funciona sua compra do{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              início ao fim
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal max-w-xl mx-auto leading-relaxed">
            Sem burocracia ou surpresas. Cuidamos de toda a negociação, conferência e logística direta até suas mãos.
          </p>
        </div>

        {/* ========================================================
            2. IMAGEM DO TOPO (BANNER EM DESTAQUE)
           ======================================================== */}
        <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 to-neutral-200/20 shadow-2xl mb-14 sm:mb-20">
          <div className="relative min-h-[220px] h-60 sm:h-96 w-full rounded-[1.7rem] overflow-hidden group">
            <img
              src="/como-funciona.jpg"
              alt="Produtos Paraguai"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            />
            {/* Vinheta fotográfica com contraste profissional */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
            
            <div className="absolute bottom-3 sm:bottom-7 left-3 sm:left-8 right-3 sm:right-8 flex flex-wrap items-end justify-between gap-2.5">
              <span className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-900/85 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2 max-w-full leading-snug">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span className="break-words">Eletrônicos • Perfumes • Cosméticos • Acessórios</span>
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            3. BLOCO INFERIOR: IMAGEM QUADRADA + TIMELINE VIVA
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LADO ESQUERDO: IMAGEM QUADRADA (SUTIL, SLIM E COM COPY REAL) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl group">
              <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-neutral-950">
                <img
                  src="/como-funciona-quadrada.jpg"
                  alt="Conferência de Pedidos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />

                {/* Badge Topo Sutil */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  SEU PERSONAL SHOPPER
                </div>

                {/* Micro-Card Slim Translúcido (Responsivo com Quebra Automática) */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/90 sm:bg-white/70 backdrop-blur-md border border-white/60 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all duration-300 group-hover:bg-white/95">
                  <div className="min-w-0">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block">
                      Conferência Presencial
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-neutral-950 block leading-snug break-words">
                      Número de Série & Caixa Lacrada
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO: TIMELINE FLUIDA */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-7 relative">
            
            {/* Linha vertical conectando os passos (alinhamento preciso no centro do ícone) */}
            <div className="hidden sm:block absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-neutral-200 -z-0" />

            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="relative flex items-start gap-5 sm:gap-6 group rounded-2xl p-3 -ml-3 sm:ml-0 transition-colors duration-200 hover:bg-neutral-50/80"
              >
                
                {/* Número vibrante com acabamento Dark Glass */}
                <div className="relative w-14 h-14 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-lg shadow-neutral-950/20 border border-neutral-800 ring-4 ring-white group-hover:border-cyan-500/80 group-hover:shadow-cyan-500/25 group-hover:scale-105 transition-all duration-300 z-10">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {step.number}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="flex-1 pt-0.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-lg sm:text-xl font-black text-neutral-950 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200/80 px-2 py-0.5 rounded-md shadow-2xs">
                      {step.tag}
                    </span>
                  </div>

                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mt-1.5 max-w-lg font-normal">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

            {/* Chamada para ação rápida no final da timeline */}
            <div className="pt-2 pl-0 sm:pl-20">
              <a
                href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20servi%C3%A7o%20de%20importa%C3%A7%C3%A3o%20da%20Imports%20Paraguai."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 text-sm font-extrabold text-blue-700 transition-all duration-200 group"
              >
                <span>Falar com especialista agora</span>
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}