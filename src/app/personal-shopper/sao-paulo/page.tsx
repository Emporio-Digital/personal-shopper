import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// =========================================================================
// 1. METADADOS (NEXT.JS APP ROUTER)
// =========================================================================
export const metadata: Metadata = {
  // Encurtamos para que, quando o layout somar "| EG Imports Paraguai", fique em 59 caracteres (limite perfeito do Google)
  title: "Personal Shopper Paraguai em São Paulo",
  description:
    "Compre no Paraguai sem sair de casa em São Paulo com total segurança. Economize até 50% em eletrônicos e perfumes originais com compras assistidas.",
  alternates: {
    canonical: "https://importsparaguai.com.br/personal-shopper/sao-paulo",
  },
  openGraph: {
    title: "Personal Shopper Paraguai em São Paulo | Importação Segura",
    description:
      "Compre no Paraguai sem sair de casa em São Paulo e com total segurança. Economize até 50% com compras assistidas.",
    url: "https://importsparaguai.com.br/personal-shopper/sao-paulo",
    siteName: "EG Imports Paraguai",
    locale: "pt_BR",
    type: "website",
  },
};

// =========================================================================
// 2. GRAFO SEMÂNTICO SCHEMA.ORG (SEM FAQ - 100% FIEL À HOME E AMARRADO)
// =========================================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://importsparaguai.com.br/personal-shopper/sao-paulo#service",
      "name": "Personal Shopper Paraguai em São Paulo",
      "serviceType": "Personal Shopper e Importação Assistida",
      "url": "https://importsparaguai.com.br/personal-shopper/sao-paulo",
      "description":
        "Serviço especializado de Personal Shopper no Paraguai, compras assistidas e importação segura para clientes de São Paulo e região.",
      "provider": {
        "@id": "https://importsparaguai.com.br/#business"
      },
      "areaServed": [
        { "@type": "City", "name": "São Paulo" },
        { "@type": "AdministrativeArea", "name": "Grande São Paulo" },
        { "@type": "City", "name": "Guarulhos" },
        { "@type": "City", "name": "Santo André" },
        { "@type": "City", "name": "São Bernardo do Campo" },
        { "@type": "City", "name": "São Caetano do Sul" },
        { "@type": "City", "name": "Campinas" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://importsparaguai.com.br/personal-shopper/sao-paulo#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://importsparaguai.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Personal Shopper", "item": "https://importsparaguai.com.br/" },
        { "@type": "ListItem", "position": 3, "name": "São Paulo", "item": "https://importsparaguai.com.br/personal-shopper/sao-paulo" }
      ]
    }
  ]
};

export default function SaoPauloPage() {
  const steps = [
    {
      number: "01",
      title: "Envie sua lista ou links",
      description: "Você nos diz exatamente o que procura em São Paulo. Buscamos o melhor preço nas principais lojas e importadoras oficiais de Ciudad del Este em tempo real.",
      tag: "Cotação Imediata"
    },
    {
      number: "02",
      title: "Compramos, filmamos e testamos",
      description: "Vamos pessoalmente até a loja física. Você recebe fotos em alta resolução e vídeos do produto sendo inspecionado e lacrado antes do envio para SP.",
      tag: "Transparência Total"
    },
    {
      number: "03",
      title: "Receba na sua porta com seguro",
      description: "Embalagem industrial reforçada anti-impacto, documentação completa, rastreamento passo a passo e garantia total de entrega em São Paulo.",
      tag: "Garantia 100%"
    }
  ];

  const categories = [
    { name: "Apple & Phones", brand: "iPhones • iPads • Linha Mac", tagColor: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Perfumes & Beleza", brand: "Dior • Creed • Chanel", tagColor: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Games & Drones", brand: "PS5 • DJI • Linha Pro", tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { name: "Áudio & Som", brand: "JBL • Marshall • Fones", tagColor: "bg-amber-50 text-amber-800 border-amber-200" },
  ];

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
      description: "Conferimos o lacre, ligamos e filmamos tudo em tempo real na loja antes de qualquer embalagem ser despachada para São Paulo."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Envio 100% Segurado no Brasil",
      description: "Pacote reforçado contra extravio e danos. Você acompanha o código de rastreamento do envio até sua casa em São Paulo."
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
    <div className="min-h-screen bg-[#fafafa] flex flex-col text-neutral-900 selection:bg-cyan-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ========================================================
            HERO SECTION (PADRÃO 100% COM SÃO PAULO INJETADO NO H1)
           ======================================================== */}
        <section className="relative pt-6 pb-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-tr from-cyan-200/30 via-blue-100/30 to-indigo-100/20 blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Coluna Esquerda */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
                
                {/* Badge Superior IDÊNTICA */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200/70 shadow-xs mb-6 backdrop-blur-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                    Personal Shopper • Importação Direta
                  </span>
                </div>

                {/* H1 IDÊNTICO + EM SÃO PAULO */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.12] text-neutral-950">
                  Compre no Paraguai{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                    sem sair de casa
                  </span>{" "}
                  em São Paulo e com total segurança.
                </h1>

                {/* Imagem Mobile (COM TODOS OS CARDS E BADGES ORIGINAIS) */}
                <div className="w-full mt-7 mb-3 block lg:hidden order-2">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <img src="/hero.jpg" alt="Personal Shopper Paraguai" className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-transparent pointer-events-none" />

                      {/* Badge Topo Direita IDÊNTICA */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md border border-white/15 shadow-md text-white text-[9px] font-bold flex items-center gap-1">
                        <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                      </div>

                      {/* Card Inferior IDÊNTICO */}
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

                {/* Conteúdo Descritivo com Injeção de SP */}
                <p className="text-base sm:text-lg text-neutral-600 font-normal mt-5 lg:mt-6 max-w-xl leading-relaxed order-3">
                  Economize <span className="font-semibold text-neutral-900">até 50%</span> em eletrônicos, perfumes e cosméticos originais. 
                  Realizamos compras assistidas nas maiores lojas oficiais de Ciudad del Este com envio segurado até a sua porta em <strong>São Paulo</strong>.
                </p>

                {/* Badges de Confiança IDÊNTICAS */}
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

                {/* Botão de Ação IDÊNTICO */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto order-5">
                  <a
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20S%C3%A3o%20Paulo%20da%20Imports%20Paraguai%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20gr%C3%A1tis."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-900 rounded-2xl shadow-xl shadow-neutral-950/20 transition-all duration-200 transform hover:-translate-y-0.5 border border-neutral-800 group"
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

              {/* Imagem Desktop (COM TODOS OS CARDS E BADGES ORIGINAIS) */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] p-2 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                    <img src="/hero.jpg" alt="Personal Shopper Paraguai" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Badge Topo Direita IDÊNTICA */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15 shadow-md text-white text-[10px] font-bold flex items-center gap-1.5">
                      <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                    </div>

                    {/* Card Inferior IDÊNTICO */}
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

        {/* ========================================================
            HOW IT WORKS (PADRÃO 100% COM SÃO PAULO NO H2)
           ======================================================== */}
        <section id="como-funciona" className="pt-6 sm:pt-10 pb-20 lg:pb-28 bg-white border-b border-neutral-200/80 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10">
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

              {/* H2 IDÊNTICO + EM SÃO PAULO */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
                Como funciona sua compra em São Paulo do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  início ao fim
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal max-w-xl mx-auto leading-relaxed">
                Sem burocracia ou surpresas. Cuidamos de toda a negociação, conferência e logística direta até suas mãos em São Paulo.
              </p>
            </div>

            {/* Banner Topo IDÊNTICO */}
            <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 to-neutral-200/20 shadow-2xl mb-14 sm:mb-20">
              <div className="relative min-h-[220px] h-60 sm:h-96 w-full rounded-[1.7rem] overflow-hidden group">
                <img src="/como-funciona.jpg" alt="Produtos Paraguai" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-7 left-3 sm:left-8 right-3 sm:right-8 flex flex-wrap items-end justify-between gap-2.5">
                  <span className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-900/85 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2 max-w-full leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="break-words">Eletrônicos • Perfumes • Cosméticos • Acessórios</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Imagem Quadrada + Timeline IDÊNTICA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl group">
                  <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-neutral-950">
                    <img src="/como-funciona-quadrada.jpg" alt="Conferência de Pedidos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />

                    {/* Badge Topo IDÊNTICO */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SEU PERSONAL SHOPPER
                    </div>

                    {/* Micro-Card IDÊNTICO */}
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

              {/* Lado Direito: Timeline */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-7 relative">
                <div className="hidden sm:block absolute left-7 top-7 bottom-7 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-neutral-200 -z-0" />

                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex items-start gap-5 sm:gap-6 group rounded-2xl p-3 -ml-3 sm:ml-0 transition-colors duration-200 hover:bg-neutral-50/80">
                    <div className="relative w-14 h-14 rounded-2xl bg-neutral-950 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-lg border border-neutral-800 ring-4 ring-white group-hover:border-cyan-500/80 group-hover:scale-105 transition-all duration-300 z-10">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        {step.number}
                      </span>
                    </div>

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

                <div className="pt-2 pl-0 sm:pl-20">
                  <a
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Sou%20de%20S%C3%A3o%20Paulo%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20servi%C3%A7o%20de%20importa%C3%A7%C3%A3o%20da%20Imports%20Paraguai."
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

        {/* ========================================================
            CATEGORIES (PADRÃO 100% COM SÃO PAULO NO H2)
           ======================================================== */}
        <section id="categorias" className="py-20 lg:py-28 bg-neutral-50/60 relative overflow-hidden border-b border-neutral-200/80">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10 relative z-10">
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

              {/* H2 IDÊNTICO + EM SÃO PAULO */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
                Os produtos mais pedidos em São Paulo, com o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  menor valor do mercado
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-xl mx-auto font-normal leading-relaxed">
                Preços oficiais diretamente dos distribuidores e das maiores lojas de Ciudad del Este entregues em São Paulo.
              </p>
            </div>

            {/* Vitrine das 2 Imagens (CARDS E TEXTOS IDÊNTICOS À HOME) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
              
              {/* IMAGEM 1 IDÊNTICA */}
              <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
                  <img src="/categorias.jpg" alt="Perfumes e Cosméticos Importados" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                      Grifes Lacradas
                    </span>
                  </div>
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

              {/* IMAGEM 2 IDÊNTICA */}
              <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
                  <img src="/categorias-2.jpg" alt="Eletrônicos e Linha Apple no Paraguai" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                      Original com Garantia
                    </span>
                  </div>
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

            {/* Régua de Consulta IDÊNTICA */}
            <div className="pt-8 sm:pt-10 border-t border-neutral-200/70">
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 flex-1">
                  {categories.map((cat, i) => (
                    <div key={i} className="flex flex-col">
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

                <div className="pt-2 xl:pt-0 shrink-0">
                  <a
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Sou%20de%20S%C3%A3o%20Paulo%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20e%20pre%C3%A7o%20de%20um%20produto%20na%20Imports%20Paraguai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xl:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-900 rounded-full shadow-lg transition-all border border-neutral-800 group"
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

        {/* ========================================================
            GUARANTEES CTA (PADRÃO 100% IDÊNTICO À HOME)
           ======================================================== */}
        <section id="metodo" className="scroll-mt-24 py-20 lg:py-28 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[450px] bg-gradient-to-tr from-cyan-100/30 via-blue-50/40 to-indigo-100/30 blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10">
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

              {/* H2 IDÊNTICO */}
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

            {/* 4 Cards de Garantia IDÊNTICOS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 mb-14 sm:mb-20">
              {guarantees.map((item, index) => (
                <div key={index} className="group relative p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200/80 hover:border-cyan-500/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
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

            {/* Banner Slim Dark IDÊNTICO */}
            <div className="relative max-w-4xl mx-auto rounded-3xl p-px bg-gradient-to-b from-white/20 via-neutral-700/40 to-neutral-800/10 shadow-xl shadow-neutral-950/15 overflow-hidden">
              <div className="relative rounded-[23px] bg-gradient-to-b from-neutral-900 to-neutral-950 px-5 py-7 sm:px-10 sm:py-10 text-center overflow-hidden">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-16 right-10 w-60 h-28 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-300">
                      Atendimento Personal Shopper
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white tracking-tight leading-snug">
                    Já tem um produto em mente?{" "}
                    <span className="text-neutral-300 font-normal">Faça sua cotação sem compromisso.</span>
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm mt-2.5 font-normal max-w-md leading-relaxed">
                    Envie a foto ou link da loja. Cotamos em tempo real nas maiores importadoras de Ciudad del Este.
                  </p>

                  <div className="mt-6 w-full sm:w-auto">
                    <a
                      href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20S%C3%A3o%20Paulo%20da%20Imports%20Paraguai%20e%20j%C3%A1%20tenho%20um%20produto%20em%20mente%20para%20cota%C3%A7%C3%A3o."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-100 rounded-full shadow-lg transition-all group"
                    >
                      <div className="w-6 h-6 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                        </svg>
                      </div>
                      <span>Falar com Personal Shopper</span>
                    </a>
                  </div>

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

        {/* ========================================================
            AUTHORITY PILLARS (ACORDEON IDÊNTICO À HOME)
           ======================================================== */}
        <section id="tese-autoridade" className="w-full max-w-7xl mx-auto pt-2 pb-6 px-4 md:px-6 relative z-10 text-left">
          <details className="group w-full text-left">
            <summary className="w-full cursor-pointer py-1 select-none list-none [&::-webkit-details-marker]:hidden block text-left">
              <div className="w-full flex flex-col items-start text-left">
                <span className="text-[10px] md:text-xs text-cyan-600 font-bold uppercase tracking-widest block mb-2 text-left">
                  Metodologia Exclusiva • EG Imports Paraguai
                </span>
                
                <div className="flex items-center gap-4 text-left">
                  <h2 className="text-2xl md:text-4xl text-neutral-900 font-extrabold uppercase tracking-tight leading-tight text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                      Autoridade em Importação em São Paulo
                    </span>
                  </h2>

                  <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm group-hover:border-cyan-500 transition-all shrink-0">
                    <svg
                      className="w-5 h-5 text-cyan-600 transition-transform duration-500 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </summary>

            {/* ENVELOPE QUE FAZ O EFEITO DESLIZAR SUAVE DE 0 A 100% */}
            <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
              <div className="overflow-hidden">
                <div className="py-8 text-neutral-700 text-sm md:text-base leading-relaxed text-justify font-normal border-t border-neutral-200 mt-4">
              <p className="mb-8 text-neutral-800">
                A <strong>EG Imports Paraguai</strong> não atua como mera intermediária de pacotes; nós operamos uma estrutura proprietária de compras assistidas em Ciudad del Este desenhada para proteger o capital do comprador de <strong>São Paulo</strong>. Nossa metodologia une inspeção física, blindagem tributária e auditoria fiscal em 12 pilares técnicos fundamentais para quem busca economizar até 60% com procedência comprovada:
              </p>

              {/* Grid Responsivo 12 Pilares - PALAVRA-CHAVE MARTELADA: Personal Shopper Paraguai */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                
                {/* PILAR 1 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    1. Personal Shopper Paraguai em São Paulo: Assessoria Presencial de Elite
                  </h3>
                  <p className="text-neutral-600">
                    Comprar além da fronteira exige presença física especializada. O serviço de <strong>personal shopper Paraguai</strong> elimina o turismo desnecessário saindo de São Paulo e os custos com passagens aéreas e hospedagem. Nossos consultores atuam in loco nos maiores polos comerciais de Ciudad del Este, mapeando estoques em tempo real e negociando diretamente com distribuidores autorizados para garantir sempre o menor preço com nota legal.
                  </p>
                </div>

                {/* PILAR 2 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    2. Personal Shopper Paraguai em São Paulo com Segurança e Transparência
                  </h3>
                  <p className="text-neutral-600">
                    A dinâmica operacional de <strong>personal shopper Paraguai</strong> é estruturada em etapas claras: recebimento da lista de desejos do cliente de São Paulo, cotação do dólar comercial em tempo real, compra em lojas credenciadas, conferência minuciosa de cada item e despacho nacional com rastreamento integral. Esse fluxo remove a incerteza do processo e assegura que você receba exatamente o que contratou.
                  </p>
                </div>

                {/* PILAR 3 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    3. Personal Shopper Paraguai em São Paulo para Importação de Eletrônicos
                  </h3>
                  <p className="text-neutral-600">
                    A tecnologia lidera as buscas de quem contrata <strong>personal shopper Paraguai</strong> na capital paulista. A diferença tributária torna iPhones, MacBooks, consoles de última geração, placas de vídeo e câmeras profissionais até 60% mais baratos do que no varejo de SP. O comprador adquire equipamentos lacrados, com garantia global e número de série auditado antes do pagamento.
                  </p>
                </div>

                {/* PILAR 4 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    4. Personal Shopper Paraguai em São Paulo: Produtos 100% Originais
                  </h3>
                  <p className="text-neutral-600">
                    A proliferação de réplicas no mercado paralelo paulistano é o maior pesadelo do comprador. Através do nosso <strong>personal shopper Paraguai</strong>, cada produto é adquirido exclusivamente em importadoras oficiais e revendas homologadas pelas fabricantes (Apple, Sony, DJI, JBL). Realizamos a conferência de selos holográficos, lacres e ativação de garantia diretamente no balcão da loja.
                  </p>
                </div>

                {/* PILAR 5 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    5. Personal Shopper Paraguai em São Paulo: Economia Real vs Compras no Brasil
                  </h3>
                  <p className="text-neutral-600">
                    Ao calcular a paridade entre o imposto sobre consumo brasileiro e a política de isenções paraguaia, o ganho financeiro proporcionado pelo <strong>personal shopper Paraguai</strong> supera qualquer programa de cashback dos shoppings de São Paulo. Mesmo considerando o frete interestadual, o comprador economiza milhares de reais em compras pessoais ou reposição de ferramentas corporativas.
                  </p>
                </div>

                {/* PILAR 6 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    6. Personal Shopper Paraguai em São Paulo: Validação por Chamada de Vídeo ao Vivo
                  </h3>
                  <p className="text-neutral-600">
                    A transparência é a base da nossa governança operacional. O processo de <strong>personal shopper Paraguai</strong> permite que o cliente de São Paulo acompanhe a compra em tempo real via chamada de vídeo e fotos em alta definição. O equipamento é testado, a caixa é inspecionada na presença virtual do cliente e a aprovação final é dada antes do item deixar a loja física.
                  </p>
                </div>

                {/* PILAR 7 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    7. Personal Shopper Paraguai em São Paulo com Logística Segura e Rastreamento
                  </h3>
                  <p className="text-neutral-600">
                    O despacho de mercadorias no ecossistema de <strong>personal shopper Paraguai</strong> para a capital paulista e Grande SP requer embalagens reforçadas, plástico bolha industrial de alta densidade e caixas anônimas para inibir extravios. Todas as remessas contam com seguro de carga e código de rastreamento oficial para você monitorar até a porta da sua casa.
                  </p>
                </div>

                {/* PILAR 8 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    8. Personal Shopper Paraguai em São Paulo: Conformidade Aduaneira e Legalidade
                  </h3>
                  <p className="text-neutral-600">
                    Trabalhar em conformidade com as normas aduaneiras é indispensável. A consultoria de <strong>personal shopper Paraguai</strong> orienta o comprador acerca do limite de cota terrestre vigente ($500 dólares por CPF), regras de declaração de bagagem e procedimentos legais de desembaraço aduaneiro na Ponte da Amizade, prevenindo qualquer problema fiscal.
                  </p>
                </div>

                {/* PILAR 9 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    9. Personal Shopper Paraguai em São Paulo para Lojistas e Revendedores B2B
                  </h3>
                  <p className="text-neutral-600">
                    Empreendedores e lojistas em São Paulo utilizam o serviço de <strong>personal shopper Paraguai</strong> como alavanca de margem de lucro. Através da compra consolidada de perfumaria de nicho, suplementos e periféricos de alta demanda, estruturamos pedidos fracionados recorrentes que abastecem comércios paulistanos sem a necessidade de deslocamento dos proprietários.
                  </p>
                </div>

                {/* PILAR 10 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    10. Personal Shopper Paraguai em São Paulo: Lojas Oficiais em Ciudad del Este
                  </h3>
                  <p className="text-neutral-600">
                    Nem toda loja do Paraguai oferece os mesmos termos de garantia. O <strong>personal shopper Paraguai</strong> atua com um catálogo criterioso de parceiros tradicionais como Cellshop, Nissei, Madrid Center e Mega Eletrônicos. Comparamos variações cambiais entre estabelecimentos, garantindo que o cliente de SP usufrua das melhores cotações sem surpresas.
                  </p>
                </div>

                {/* PILAR 11 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    11. Personal Shopper Paraguai em São Paulo sem Riscos de Golpes Virtuais
                  </h3>
                  <p className="text-neutral-600">
                    A internet está saturada de falsos intermediadores e perfis fakes de redes sociais. Contratar uma empresa séria de <strong>personal shopper Paraguai</strong> com infraestrutura e validação técnica da <em>EG Empório Digital</em> blinda seu patrimônio contra golpes de frete falso, depósitos antecipados sem envio e troca de produtos lacrados por versões inferiores.
                  </p>
                </div>

                {/* PILAR 12 */}
                <div>
                  <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                    12. Contratar Personal Shopper Paraguai em São Paulo com a EG Imports Oficial
                  </h3>
                  <p className="text-neutral-600">
                    A união entre tecnologia de ponta, rastreamento ativo e integridade comercial faz da contratação do <strong>personal shopper Paraguai</strong> a rota mais inteligente para compras transfronteiriças. Converse diretamente com nossos especialistas no WhatsApp e receba um orçamento detalhado com cotação do dia, custos discriminados e prazo exato de entrega em São Paulo.
                  </p>
                </div>

              </div>

              <p className="mt-8 border-l-4 border-cyan-500 pl-4 italic text-neutral-500 text-xs md:text-sm">
                Aviso de Transparência: A EG Imports Paraguai atua sob governança técnica da EG Empório Digital. Todas as operações respeitam as diretrizes de importação e trânsito aduaneiro dos órgãos competentes.
              </p>

                </div>
              </div>
            </div>
          </details>
        </section>

      </main>

      <Footer />
    </div>
  );
}