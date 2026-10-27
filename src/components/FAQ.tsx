export default function FAQ() {
  return (
    <section id="faq" className="w-full py-16 md:py-24 px-5 lg:px-8 border-t border-neutral-200/80 relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Header com respiro refinado */}
        <div className="mb-10 text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50/90 border border-cyan-200/70 px-3 py-1 rounded-full inline-block mb-3.5 shadow-2xs">
            Dúvidas Frequentes • Atendimento Brasil
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-950 font-black tracking-tight leading-tight">
            Perguntas sobre a compra com{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Personal Shopper
            </span>
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {/* FAQ 1 */}
          <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
            <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
              <span>Como funciona o serviço de personal shopper no Paraguai?</span>
              <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
              Você envia a lista ou fotos dos produtos pelo WhatsApp. Nossa equipe realiza a cotação em tempo real nas maiores lojas e distribuidoras autorizadas de Ciudad del Este, conferimos o item por chamada de vídeo e despachamos com seguro total até o seu endereço em qualquer lugar do Brasil.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
            <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
              <span>Como funciona o envio e o seguro de carga para todo o Brasil?</span>
              <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
              Todas as encomendas saem devidamente embaladas em material industrial reforçado e possuem seguro integral contra extravio ou danos. O envio é feito via Correios (Sedex/PAC) ou transportadoras homologadas, com código de rastreamento para você acompanhar cada etapa.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
            <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
              <span>Os produtos são 100% originais e possuem garantia?</span>
              <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </summary>
            <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
              Sim. Adquirimos produtos exclusivamente em distribuidores oficiais e redes renomadas (como Cellshop, Nissei, Mega Eletrônicos). Eletrônicos possuem garantia oficial das fabricantes (como 1 ano de garantia mundial Apple) e todos os itens acompanham comprovante legal de compra.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}