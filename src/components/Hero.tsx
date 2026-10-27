export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
      {/* Background Tech: Grid sutil + Glow degradê */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-tr from-cyan-200/30 via-blue-100/30 to-indigo-100/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* ========================================================
              1. COLUNA ESQUERDA (Conteúdo & Conversão)
             ======================================================== */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
            
            {/* Badge Superior */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200/70 shadow-xs mb-6 backdrop-blur-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                Personal Shopper • Importação Direta
              </span>
            </div>

            {/* Título Principal de Alto Impacto */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.12] text-neutral-950">
              Compre no Paraguai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                sem sair de casa
              </span>{" "}
              e com total segurança.
            </h1>

            {/* ========================================================
                2. IMAGEM NO MOBILE (Posicionada estrategicamente)
               ======================================================== */}
            <div className="w-full mt-7 mb-3 block lg:hidden order-2">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                  <img
                    src="/hero.jpg"
                    alt="Personal Shopper Paraguai"
                    className="w-full h-full object-cover object-center"
                  />
                  
                  {/* Vinheta escura na base para leitura do card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-transparent pointer-events-none" />

                  {/* Badge Flutuante Topo Direita */}
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md border border-white/15 shadow-md text-white text-[9px] font-bold flex items-center gap-1">
                    <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                  </div>

                  {/* Card Inferior Slim Idêntico ao Desktop */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-2">
                    <div className="min-w-0 text-left">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block truncate">
                        Personal Shopper Oficial
                      </span>
                      <span className="text-[11px] sm:text-xs font-extrabold text-neutral-950 block truncate">
                        Você Escolhe. Nós Buscamos
                      </span>
                    </div>
                    
                    <span className="shrink-0 text-[8px] sm:text-[9px] font-black uppercase text-blue-700 bg-blue-500/15 border border-blue-500/30 px-2 py-1 rounded-md">
                      COTAÇÃO PERSONALIZADA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================
                3. CONTEÚDO DESCRITIVO
               ======================================================== */}
            <p className="text-base sm:text-lg text-neutral-600 font-normal mt-5 lg:mt-6 max-w-xl leading-relaxed order-3">
              Economize <span className="font-semibold text-neutral-900">até 50%</span> em eletrônicos, perfumes e cosméticos originais. 
              Realizamos compras assistidas nas maiores lojas oficiais de Ciudad del Este com envio segurado até a sua porta.
            </p>

            {/* Badges de Confiança em Estilo Card Pills */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-neutral-200/80 w-full max-w-lg order-4">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/60 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-700 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-neutral-800">100% Originais</span>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-50 border border-neutral-200/60 shadow-2xs">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-700 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-neutral-800">Envio com Seguro</span>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto order-5">
              <a
                href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20gr%C3%A1tis."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-950/20 hover:shadow-cyan-950/10 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 border border-neutral-800 group"
              >
                <div className="w-6 h-6 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 fill-current text-[#25D366]" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                  </svg>
                </div>
                <span>Solicitar Cotação Grátis</span>
              </a>
            </div>

          </div>

          {/* ========================================================
              4. IMAGEM NO DESKTOP (Coluna Direita Vitrine)
             ======================================================== */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative w-full aspect-[4/5] rounded-[2.5rem] p-2 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                <img
                  src="/hero.jpg"
                  alt="Personal Shopper Paraguai"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Vinheta escura sutil na base da foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Badge Flutuante Topo Direita Sutil */}
                <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15 shadow-md text-white text-[10px] font-bold flex items-center gap-1.5">
                  <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                </div>

                {/* Card Inferior Slim Translúcido */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                  <div className="min-w-0">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block truncate">
                      Personal Shopper Oficial
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold text-neutral-950 block truncate">
                      Você Escolhe. Nós Buscamos
                    </span>
                  </div>
                  
                  <span className="shrink-0 text-[10px] font-black uppercase text-blue-700 bg-blue-500/15 border border-blue-500/30 px-2.5 py-1 rounded-lg">
                    COTAÇÃO PERSONALIZADA
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}