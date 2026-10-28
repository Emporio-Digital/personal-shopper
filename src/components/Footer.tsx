import Link from "next/link";

export default function Footer() {
  const hubs = [
    { name: "Personal Shopper Paraguai", href: "/personal-shopper" },
    { name: "Comprar iPhone no Paraguai", href: "/comprar-iphone-no-paraguai" },
    { name: "Comprar Perfumes no Paraguai", href: "/comprar-perfumes-no-paraguai" },
    { name: "Comprar Cosméticos no Paraguai", href: "/comprar-cosmeticos-no-paraguai" },
    { name: "Comprar Notebook no Paraguai", href: "/comprar-notebook-no-paraguai" },
  ];

  return (
    <footer className="relative w-full bg-neutral-950 text-white overflow-hidden border-t border-neutral-850">
      
      {/* Luz ambiente de profundidade + Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 pt-10 pb-8">
        
        {/* PARTE PRINCIPAL (LINHA ÚNICA CONECTADA E COMPACTA) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 text-center lg:text-left">
          
          {/* IDENTIDADE DA MARCA */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
              <img 
                src="/logo.png" 
                alt="Logo Paraguai Express" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <div className="text-lg font-black tracking-tight text-white leading-none">
                  IMPORTS <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">PARAGUAI</span>
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-400 mt-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Personal Shopper Oficial
                </span>
              </div>
            </a>

            <div className="hidden sm:block h-8 w-px bg-white/10 mx-2" />

            
          </div>

          {/* NAVEGAÇÃO INTERNA SLIM */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-neutral-300">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Início
            </Link>
            <a href="#como-funciona" className="hover:text-cyan-400 transition-colors">
              Como Funciona
            </a>
            <a href="#categorias" className="hover:text-cyan-400 transition-colors">
              Categorias
            </a>
            <a href="#metodo" className="hover:text-cyan-400 transition-colors">
              Método
            </a>
          </nav>

          {/* BOTÃO WHATSAPP TECH */}
          <div className="shrink-0">
            <a
              href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20tirar%20d%C3%BAvidas%20no%20atendimento%20direto."
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 text-xs uppercase tracking-wider font-extrabold text-neutral-950 bg-white hover:bg-neutral-200 rounded-full shadow-lg shadow-white/10 hover:scale-105 active:scale-95 transition-all group"
            >
              <div className="w-4 h-4 text-[#25D366]">
                <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                </svg>
              </div>
              <span>Atendimento Direto</span>
            </a>
          </div>

        </div>

        {/* NAVEGAÇÃO DOS HUBS EM FORMATO VERTICAL (COLUNAS ELEGANTES) */}
        <div className="py-6 border-b border-white/5 text-center sm:text-left">
          <div className="mb-3 flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
              Páginas Oficiais
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-2.5 gap-x-8 text-xs font-medium text-neutral-400">
            {hubs.map((hub, idx) => (
              <Link 
                key={idx} 
                href={hub.href} 
                className="hover:text-cyan-400 transition-colors duration-200 flex items-center justify-center sm:justify-start gap-2 group"
              >
                <span className="text-neutral-600 group-hover:text-cyan-400 transition-colors">›</span>
                <span>{hub.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* PARTE INFERIOR: GRID ALINHADO COM LINK 100% CENTRALIZADO */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-xs text-neutral-400">
          
          {/* LADO ESQUERDO: COPYRIGHT */}
          <div className="text-[11px] text-center md:text-left">
            © <span className="text-white font-semibold">EG Imports Paraguai</span>.
          </div>

          {/* CENTRO EXATO: DESTAQUE CORPORATIVO EG EMPÓRIO DIGITAL */}
          <div className="flex justify-center">
            <a 
              href="https://egemporiodigital.com.br/" 
              target="_blank" 
              rel="noopener"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[11px] text-neutral-400">Operado por</span>
              <span className="text-[11px] font-black text-white group-hover:text-cyan-400 transition-colors">
                EG Empório Digital
              </span>
              <svg className="w-3 h-3 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* LADO DIREITO (INVISÍVEL NO DESKTOP PARA BALANCEAR O GRID PERFEITAMENTE) */}
          <div className="hidden md:block" />

        </div>

      </div>
    </footer>
  );
}