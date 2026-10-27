export default function GuaranteesCTA() {
  const guarantees = [
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Originais com Nota de Compra",
      description: "Adquirimos apenas em lojas oficiais e autorizadas em Ciudad del Este. Comprovante fiscal entregue junto."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Vídeo Chamada & Testes",
      description: "Conferimos o lacre, ligamos e filmamos tudo em tempo real na loja antes de qualquer embalagem ser despachada."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Envio 100% Segurado no Brasil",
      description: "Pacote reforçado contra extravio e danos. Você acompanha o código de rastreamento do envio até sua casa."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Economia Real em Dólar",
      description: "Pagamento facilitado em Reais (PIX/Cartão) com conversão direta da cotação local do Paraguai, sem taxas ocultas."
    }
  ];

  return (
    <section id="metodo" className="scroll-mt-24 py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-tr from-cyan-100/30 via-blue-50/40 to-indigo-100/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        
        {/* ========================================================
            1. TÍTULO E INTRO
           ======================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50/90 border border-cyan-200/70 shadow-2xs mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-600" />
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
              Segurança Absoluta
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
            Sua tranquilidade é a nossa{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
              prioridade máxima
            </span>
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
            Eliminamos todo o risco da importação. Você recebe seu produto em mãos exatamente como comprou na loja.
          </p>
        </div>

        {/* ========================================================
            2. GRADE MODERNA (2 EM 2 NO MOBILE, 4 NO DESKTOP)
           ======================================================== */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-14 sm:mb-20">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="group relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-cyan-500/40 shadow-xs hover:shadow-xl hover:shadow-cyan-950/5 transition-all duration-300 flex flex-col"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform shrink-0">
                {item.icon}
              </div>
              <h3 className="text-xs sm:text-base font-extrabold text-neutral-950 mb-1 sm:mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-neutral-500 font-normal leading-relaxed mt-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ========================================================
            3. BANNER SLIM COM ÍCONE DE DESTAQUE NO WHATSAPP
           ======================================================== */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-px bg-gradient-to-b from-white/20 via-neutral-700/40 to-neutral-800/10 shadow-xl shadow-neutral-950/15 overflow-hidden">
          <div className="relative rounded-[23px] bg-gradient-to-b from-neutral-900 to-neutral-950 px-5 py-7 sm:px-10 sm:py-10 text-center overflow-hidden">
            
            {/* Glows sutis e controlados */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 right-10 w-60 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              
              {/* Badge Minimalista */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                  Atendimento Personal Shopper
                </span>
              </div>

              {/* Título mais refinado e compacto */}
              <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white tracking-tight leading-snug">
                Já tem um produto em mente?{" "}
                <span className="text-neutral-300 font-normal">Faça sua cotação sem compromisso.</span>
              </h3>

              {/* Descrição curta */}
              <p className="text-neutral-400 text-xs sm:text-sm mt-2.5 font-normal max-w-md leading-relaxed">
                Envie a foto ou link da loja. Cotamos em tempo real nas maiores importadoras de Ciudad del Este.
              </p>

              {/* Botão Pílula com Ícone WhatsApp Grande */}
              <div className="mt-6 w-full sm:w-auto">
                <a
                  href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20j%C3%A1%20tenho%20um%20produto%20em%20mente%20para%20cota%C3%A7%C3%A3o."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-100 rounded-full shadow-lg shadow-white/5 hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  <div className="w-6 h-6 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                    </svg>
                  </div>
                  <span>Falar com Personal Shopper</span>
                </a>
              </div>

              {/* Micro-prova social refinada */}
              <div className="mt-5 flex items-center justify-center gap-3 text-[11px] text-neutral-400 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  Cotação 100% gratuita
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}