export default function Categories() {
  const categories = [
    { 
      name: "Apple & Phones",  
      brand: "iPhones • iPads • Linha Mac",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    { 
      name: "Perfumes & Beleza",  
      brand: "Dior • Creed • Chanel",
      tagColor: "bg-rose-50 text-rose-700 border-rose-200"
    },
    { 
      name: "Games & Drones",  
      brand: "PS5 • DJI • Linha Pro",
      tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200"
    },
    { 
      name: "Áudio & Som",  
      brand: "JBL • Marshall • Fones",
      tagColor: "bg-amber-50 text-amber-800 border-amber-200"
    },
  ];

  return (
    <section id="categorias" className="py-20 lg:py-28 bg-neutral-50/60 relative overflow-hidden border-b border-neutral-200/80">
      
      {/* Luz ambiente suave de topo (Clean Tech) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
        
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
              Vitrine Oficial • Cotação ao Vivo
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
            Os produtos mais pedidos, com o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              menor valor do mercado
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-xl mx-auto font-normal leading-relaxed">
            Preços oficiais diretamente dos distribuidores e das maiores lojas de Ciudad del Este.
          </p>
        </div>

        {/* VITRINE DAS DUAS IMAGENS (SUTIS, COMPACTAS E ULTRA-TRANSPARENTES) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
          
          {/* IMAGEM 1: PERFUMES E COSMÉTICOS */}
          <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
              <img
                src="/categorias.jpg"
                alt="Perfumes e Cosméticos Importados"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Superior Sutil */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  Grifes Lacradas
                </span>
              </div>

              {/* Card Inferior Slim & Translúcido */}
              <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                <div className="min-w-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-cyan-800 block truncate">
                    Importação Exclusiva
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-950 leading-tight truncate">
                    Perfumes & Beleza
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGEM 2: ELETRÔNICOS E LINHA APPLE */}
          <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
              <img
                src="/categorias-2.jpg"
                alt="Eletrônicos e Linha Apple no Paraguai"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Superior Sutil */}
              <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                  Original com Garantia
                </span>
              </div>

              {/* Card Inferior Slim & Translúcido */}
              <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                <div className="min-w-0">
                  <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-800 block truncate">
                    Tecnologia Lacrada
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-neutral-950 leading-tight truncate">
                    Apple, Games & Drones
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            3. RÉGUA DE CONSULTA FLUIDA & MINIMALISTA (SEM CARA DE CARD)
           ======================================================== */}
        <div className="pt-8 sm:pt-10 border-t border-neutral-200/70">
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
            
            {/* Lista dos 4 Nichos integrada e limpa */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 flex-1">
              {categories.map((cat, i) => (
                <div key={i} className="flex flex-col">
                  {/* Pílula sutil de destaque por cor (linha elegante ao invés de badge pesado) */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className={`w-5 h-1 rounded-full border ${cat.tagColor.split(' ')[0]} ${cat.tagColor.split(' ')[2]}`} />
                  </div>
                  
                  <div className="text-sm sm:text-base font-extrabold text-neutral-950 tracking-tight">
                    {cat.name}
                  </div>
                  <div className="text-xs text-neutral-500 font-normal mt-0.5 leading-relaxed">
                    {cat.brand}
                  </div>
                </div>
              ))}
            </div>

            {/* Ação rápida e premium */}
            <div className="pt-2 xl:pt-0 shrink-0">
              <a
                href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20e%20pre%C3%A7o%20de%20um%20produto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xl:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-900 rounded-full shadow-lg shadow-neutral-950/15 hover:scale-[1.02] active:scale-[0.98] transition-all border border-neutral-800 group"
              >
                <span>Consultar Qualquer Produto</span>
                <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <svg className="w-3 h-3 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
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