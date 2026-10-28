import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// =========================================================================
// 1. METADADOS DO HUB (NEXT.JS APP ROUTER)
// =========================================================================
export const metadata: Metadata = {
  title: "Personal Shopper Paraguai | Compras Assistidas & Importação",
  description:
    "Serviço oficial de Personal Shopper no Paraguai. Compras assistidas em Ciudad del Este, conferência ao vivo e envio 100% segurado para todo o Brasil.",
  alternates: {
    canonical: "https://importsparaguai.com.br/personal-shopper",
  },
  openGraph: {
    title: "Personal Shopper Paraguai | Compras Assistidas & Importação Segura",
    description:
      "Compre no Paraguai sem sair de casa com personal shopper presencial. Economize até 50% em eletrônicos e perfumes originais.",
    url: "https://importsparaguai.com.br/personal-shopper",
    siteName: "EG Imports Paraguai",
    locale: "pt_BR",
    type: "website",
  },
};

// =========================================================================
// 2. GRAFO SEMÂNTICO SCHEMA.ORG (HUB MATRIZ)
// =========================================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://importsparaguai.com.br/personal-shopper#service",
      "name": "Personal Shopper Paraguai Oficial",
      "serviceType": "Personal Shopper e Importação Assistida Transfronteiriça",
      "url": "https://importsparaguai.com.br/personal-shopper",
      "description":
        "Hub oficial de Personal Shopper no Paraguai. Assessoria presencial, compras em lojas credenciadas de Ciudad del Este, conferência de lacres e frete segurado em território nacional.",
      "telephone": "+5511916053292",
      "priceRange": "$$",
      "provider": {
        "@id": "https://importsparaguai.com.br/#business"
      },
      "areaServed": [
        { "@type": "Country", "name": "Brasil" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo do Serviço de Personal Shopper Paraguai",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Assessoria e Compra Assistida de Eletrônicos e Linha Apple" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aquisição de Fragrâncias Importadas e Cosméticos Oficiais" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Inspeção e Teste por Chamada de Vídeo ao Vivo no Balcão" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Despacho Nacional com Seguro Integral de Carga" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://importsparaguai.com.br/personal-shopper#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://importsparaguai.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Personal Shopper", "item": "https://importsparaguai.com.br/personal-shopper" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://importsparaguai.com.br/personal-shopper#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "O que é e como funciona o serviço de personal shopper no Paraguai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O personal shopper é o seu representante presencial no maior polo comercial da América Latina. Nós vamos até as importadoras autorizadas em Ciudad del Este, conferimos o produto fisicamente via vídeo chamada com você, emitimos comprovantes legais e realizamos o despacho via transportadora com seguro integral até a sua porta."
          }
        },
        {
          "@type": "Question",
          "name": "Qual a garantia de que receberei um produto original e lacrado?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Não atuamos com mercado informal. Compramos apenas em revendedoras credenciadas pelas próprias fabricantes. Dispositivos eletrônicos têm o serial checado em tempo real nos portais oficiais das marcas (como Apple) e perfumes mantêm lacres intactos e selos de importação oficial."
          }
        },
        {
          "@type": "Question",
          "name": "Como é calculado o pagamento e como funciona o câmbio das compras?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O valor é calculado com base na cotação oficial do dólar comercial das lojas no dia da compra, liquidado de forma simples em Reais via PIX ou cartão parcelado, sem taxas abusivas de IOF ou surpresas cambiais na fatura."
          }
        }
      ]
    }
  ]
};

export default function PersonalShopperHubPage() {
  const steps = [
    {
      number: "01",
      title: "Envie sua lista ou links",
      description: "Você nos passa os modelos exatos que deseja. Mapeamos os estoques e encontramos as melhores cotações nas grandes importadoras oficiais de Ciudad del Este.",
      tag: "Cotação Imediata"
    },
    {
      number: "02",
      title: "Compramos, filmamos e testamos",
      description: "Nosso consultor vai fisicamente à loja credenciada. Você acompanha a checagem por vídeo chamada e fotos de alta resolução do produto sendo testado e lacrado.",
      tag: "Transparência Total"
    },
    {
      number: "03",
      title: "Receba na sua porta com seguro",
      description: "Empacotamento industrial reforçado à prova de impacto, documentação regularizada, rastreamento ativo e seguro de 100% da carga até o destino.",
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
      description: "Adquirimos apenas em lojas oficiais e homologadas. A comprovação de aquisição legítima acompanha a mercadoria."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Vídeo Chamada & Testes",
      description: "Conferimos o lacre de fábrica e atestamos o funcionamento ao vivo antes da preparação do pacote."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Envio 100% Segurado no Brasil",
      description: "Blindagem logística com seguro total contra extravio ou danos até a porta da sua residência."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Economia Real em Dólar",
      description: "Conversão transparente em Reais com preços diretos de Ciudad del Este, sem impostos inflacionados."
    }
  ];

  // Regiões ativas para distribuição do link juice
  const localHubs = [
    {
      name: "São Paulo",
      path: "/personal-shopper/sao-paulo",
      desc: "Atendimento completo para a capital paulista.",
      badge: "Rota Expressa"
    },
    {
      name: "Teotônio Vilela",
      path: "/personal-shopper/teotonio-vilela",
      desc: "Estrutura dedicada para o eixo Sapopemba.",
      badge: "Zona Leste SP"
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
            HERO SECTION (HUB NACIONAL)
           ======================================================== */}
        <section className="relative pt-6 pb-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-tr from-cyan-200/30 via-blue-100/30 to-indigo-100/20 blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-5 lg:px-10">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Coluna Esquerda */}
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-1">
                
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200/70 shadow-xs mb-6 backdrop-blur-xs">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-600" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                    Hub Oficial • Assessoria Presencial
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.12] text-neutral-950">
                  Compre{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                    sem sair de casa
                  </span>{" "}
                  com Personal Shopper.
                </h1>

                {/* Imagem Mobile */}
                <div className="w-full mt-7 mb-3 block lg:hidden order-2">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <img src="/hero.jpg" alt="Personal Shopper Paraguai" className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md border border-white/15 shadow-md text-white text-[9px] font-bold flex items-center gap-1">
                        <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                      </div>

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

                <p className="text-base sm:text-lg text-neutral-600 font-normal mt-5 lg:mt-6 max-w-xl leading-relaxed order-3">
                  Economize <span className="font-semibold text-neutral-900">até 50%</span> em eletrônicos, perfumes e cosméticos originais. 
                  Operamos com compras assistidas diretamente nas maiores lojas autorizadas de Ciudad del Este com envio segurado para qualquer região do Brasil.
                </p>

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

                <div className="flex flex-col sm:flex-row items-center gap-3.5 mt-8 w-full sm:w-auto order-5">
                  <a
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20principal%20de%20Personal%20Shopper%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o."
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

              {/* Imagem Desktop */}
              <div className="hidden lg:block lg:col-span-5">
                <div className="relative w-full aspect-[4/5] rounded-[2.5rem] p-2 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                    <img src="/hero.jpg" alt="Personal Shopper Paraguai" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15 shadow-md text-white text-[10px] font-bold flex items-center gap-1.5">
                      <span className="text-amber-400">⚡</span> PERSONAL SHOPPER NO PARAGUAI
                    </div>

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
            HOW IT WORKS
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

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-950 leading-[1.15]">
                Como funciona o serviço de personal shopper do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  início ao fim
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal max-w-xl mx-auto leading-relaxed">
                Sem burocracia ou intermediários desnecessários. Cuidamos de toda a negociação, conferência técnica e logística direta até suas mãos.
              </p>
            </div>

            {/* Banner Topo */}
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

            {/* Imagem Quadrada + Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl group">
                  <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-neutral-950">
                    <img src="/como-funciona-quadrada.jpg" alt="Conferência de Pedidos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      SEU PERSONAL SHOPPER
                    </div>

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

              {/* Timeline */}
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
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20sobre%20o%20servi%C3%A7o%20de%20personal%20shopper%20no%20Paraguai."
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
            CATEGORIES (FOTOS COM ASPECT-[4/3] MOBILE)
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
              
              {/* IMAGEM 1 */}
              <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
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

              {/* IMAGEM 2 */}
              <div className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
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
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20disponibilidade%20e%20pre%C3%A7o%20de%20um%20produto%20na%20Imports%20Paraguai."
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
            GUARANTEES CTA
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
                      href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20J%C3%A1%20tenho%20um%20produto%20em%20mente%20para%20cota%C3%A7%C3%A3o."
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
            FAQ SECTION (PADRÃO REFINADO COM MAX-W-4XL)
           ======================================================== */}
        <section id="faq" className="w-full py-16 md:py-24 px-5 lg:px-8 border-t border-neutral-200/80 relative z-10">
          <div className="max-w-4xl mx-auto">
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

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>O que é e como funciona o serviço de personal shopper no Paraguai?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  O personal shopper é o seu representante presencial no maior polo comercial da América Latina. Nós vamos até as importadoras autorizadas em Ciudad del Este, conferimos o produto fisicamente via vídeo chamada com você, emitimos comprovantes legais e realizamos o despacho via transportadora com seguro integral até a sua porta.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>Qual a garantia de que receberei um produto original e lacrado?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  Não atuamos com mercado informal. Compramos apenas em revendedoras credenciadas pelas próprias fabricantes. Dispositivos eletrônicos têm o serial checado em tempo real nos portais oficiais das marcas (como Apple) e perfumes mantêm lacres intactos e selos de importação oficial.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>Como é calculado o pagamento e como funciona o câmbio das compras?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  O valor é calculado com base na cotação oficial do dólar comercial das lojas no dia da compra, liquidado de forma simples em Reais via PIX ou cartão parcelado, sem taxas abusivas de IOF ou surpresas cambiais na fatura.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ========================================================
            ⭐ MÓDULO EXPANSÍVEL: REGIÕES & SPOKES LOCAIS (LINK JUICE)
            Fica recolhido discretamente entre a FAQ e a Tese
           ======================================================== */}
        <section id="regioes-atendidas" className="w-full max-w-7xl mx-auto pt-2 pb-6 px-4 md:px-6 relative z-10 text-left border-t border-neutral-200/60">
          <details className="group w-full text-left">
            <summary className="w-full cursor-pointer py-4 select-none list-none [&::-webkit-details-marker]:hidden block text-left">
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-[10px] md:text-xs text-cyan-700 font-bold uppercase tracking-widest block mb-1">
                    Rede de Atendimento Regional
                  </span>
                  <h3 className="text-lg md:text-2xl font-black text-neutral-950 uppercase tracking-tight">
                    Rotas Personal Shopper
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-xs group-hover:border-cyan-500 transition-all shrink-0 ml-4">
                  <svg
                    className="w-4 h-4 text-cyan-600 transition-transform duration-500 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </summary>

            {/* Conteúdo Expansível com os Cards dos Links Locais */}
            <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
              <div className="overflow-hidden">
                <div className="pt-4 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-neutral-200/70 mt-3">
                  {localHubs.map((loc, idx) => (
                    <Link
                      key={idx}
                      href={loc.path}
                      className="group/card p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-cyan-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200/70 px-2 py-0.5 rounded-md">
                            {loc.badge}
                          </span>
                          <span className="text-neutral-400 group-hover/card:text-cyan-600 transition-colors text-xs font-bold">
                            Ver Rota →
                          </span>
                        </div>
                        <h4 className="font-extrabold text-base text-neutral-950 group-hover/card:text-cyan-700 transition-colors">
                          {loc.name}
                        </h4>
                        <p className="text-xs text-neutral-600 mt-2 font-normal leading-relaxed">
                          {loc.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </section>

        {/* ========================================================
            TESE DE AUTORIDADE NACIONAL (INÉDITA & ANTI-SPAM)
            COM LINK JUICE DISTRIBUÍDO PARA OS 4 HUBS OFICIAIS
           ======================================================== */}
        <section id="tese-autoridade" className="w-full max-w-7xl mx-auto pt-2 pb-10 px-4 md:px-6 relative z-10 text-left">
          <details className="group w-full text-left">
            <summary className="w-full cursor-pointer py-1 select-none list-none [&::-webkit-details-marker]:hidden block text-left">
              <div className="w-full flex flex-col items-start text-left">
                <span className="text-[10px] md:text-xs text-cyan-600 font-bold uppercase tracking-widest block mb-2 text-left">
                  Metodologia Exclusiva • EG Imports Paraguai
                </span>
                
                <div className="flex items-center gap-4 text-left">
                  <h2 className="text-2xl md:text-4xl text-neutral-900 font-extrabold uppercase tracking-tight leading-tight text-left">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                      Personal Shopper no Paraguai
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

            <div className="grid grid-rows-[0fr] group-open:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-in-out">
              <div className="overflow-hidden">
                <div className="py-8 text-neutral-700 text-sm md:text-base leading-relaxed text-justify font-normal border-t border-neutral-200 mt-4">
                  <p className="mb-8 text-neutral-800">
                    A <strong>EG Imports Paraguai</strong> não atua como mera intermediária de pacotes; nós operamos uma estrutura proprietária de compras assistidas em Ciudad del Este desenhada para proteger o capital do comprador e investidor brasileiro. Nossa metodologia une inspeção física, blindagem tributária e auditoria fiscal em 12 pilares técnicos fundamentais para quem busca economizar até 60% com procedência comprovada:
                  </p>

                  {/* Grid Responsivo 12 Pilares - PALAVRA-CHAVE MARTELADA: Personal Shopper */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    
                    {/* PILAR 1 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        1. Personal Shopper no Paraguai: Assessoria Presencial de Elite
                      </h3>
                      <p className="text-neutral-600">
                        Comprar além da fronteira exige presença física especializada. O serviço de <strong>personal shopper</strong> elimina viagens longas, custos com passagens e estadias em Foz do Iguaçu. Nossos consultores atuam in loco nos maiores polos comerciais de Ciudad del Este, mapeando estoques em tempo real e negociando diretamente com distribuidores autorizados para garantir sempre o menor preço com nota legal.
                      </p>
                    </div>

                    {/* PILAR 2 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        2. Personal Shopper com Segurança e Transparência Total
                      </h3>
                      <p className="text-neutral-600">
                        A dinâmica operacional de <strong>personal shopper</strong> é estruturada em etapas claras: recebimento da lista de desejos, cotação do dólar comercial em tempo real, compra em lojas credenciadas, conferência minuciosa de cada item e despacho com rastreamento integral. Esse fluxo remove qualquer incerteza e assegura que você receba exatamente o que contratou.
                      </p>
                    </div>

                    {/* PILAR 3 - LINK JUICE IPHONE */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        3. Personal Shopper para Importação de Eletrônicos e Linha Apple
                      </h3>
                      <p className="text-neutral-600">
                        A tecnologia de ponta lidera as buscas de quem contrata <strong>personal shopper</strong> no Paraguai. Para quem deseja <Link href="/comprar-iphone-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar iPhone no Paraguai</Link>, a diferença tarifária viabiliza modelos lacrados com economia expressiva frente ao varejo brasileiro. Cada aparelho conta com garantia mundial de 1 ano e número de série auditado no portal da Apple antes do fechamento.
                      </p>
                    </div>

                    {/* PILAR 4 - LINK JUICE PERFUMES & COSMÉTICOS */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        4. Personal Shopper para Perfumes Importados e Cosméticos Originais
                      </h3>
                      <p className="text-neutral-600">
                        O mercado paralelo está vulnerável a réplicas e lotes adulterados. Através do nosso serviço de <strong>personal shopper</strong>, direcionamos os pedidos ao nosso hub para <Link href="/comprar-perfumes-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar perfumes no Paraguai</Link> com batch code auditado no balcão, além de possibilitar <Link href="/comprar-cosmeticos-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar cosméticos no Paraguai</Link> (linhas capilares de luxo Kérastase e skincare) com lacre original intacto.
                      </p>
                    </div>

                    {/* PILAR 5 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        5. Personal Shopper com Validação por Chamada de Vídeo ao Vivo
                      </h3>
                      <p className="text-neutral-600">
                        A transparência é o alicerce do nosso atendimento. O processo de <strong>personal shopper</strong> permite que o cliente acompanhe a compra em tempo real: filmamos o produto no balcão da loja em Ciudad del Este, conferimos o selo holográfico, checamos o funcionamento e garantimos a conferência visual antes do despacho.
                      </p>
                    </div>

                    {/* PILAR 6 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        6. Personal Shopper em Lojas Oficiais e Homologadas
                      </h3>
                      <p className="text-neutral-600">
                        Não arriscamos seu capital em comércios informais. Nosso <strong>personal shopper</strong> opera unicamente em parceiros consolidados com décadas de mercado, como Cellshop, Nissei, Madrid Center e Mega Eletrônicos, garantindo respaldo legal, políticas de garantia legítimas e comprovante fiscal de compra.
                      </p>
                    </div>

                    {/* PILAR 7 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        7. Personal Shopper com Logística Segura e Envio com Seguro
                      </h3>
                      <p className="text-neutral-600">
                        A cadeia logística exige embalagens industriais de alta densidade anti-impacto. Toda encomenda intermediada pelo <strong>personal shopper</strong> conta com apólice de seguro integral de carga contra perdas, danos ou extravios, além de código de rastreamento oficial ativo para acompanhar cada movimentação até a sua porta.
                      </p>
                    </div>

                    {/* PILAR 8 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        8. Personal Shopper com Conformidade Aduaneira e Legalidade Fiscal
                      </h3>
                      <p className="text-neutral-600">
                        Atuar em estrita conformidade com as diretrizes aduaneiras brasileiras é indispensável. Nossa consultoria de <strong>personal shopper</strong> orienta os clientes sobre as cotas terrestres vigentes ($500 dólares por CPF), regras de trânsito de mercadorias e regularização aduaneira na Ponte da Amizade, garantindo segurança jurídica.
                      </p>
                    </div>

                    {/* PILAR 9 - LINK JUICE NOTEBOOKS */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        9. Personal Shopper B2B para Lojistas e Revendedores
                      </h3>
                      <p className="text-neutral-600">
                        Empreendedores, criadores de conteúdo e empresas utilizam nosso <strong>personal shopper</strong> para equipar suas estruturas operacionais e estoques. Auxiliamos profissionais a <Link href="/comprar-notebook-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar notebook no Paraguai</Link> (linhas Apple MacBook Silicon, Asus e gamers de alta performance), assegurando economia agressiva e ampliação direta das margens de rentabilidade.
                      </p>
                    </div>

                    {/* PILAR 10 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        10. Personal Shopper com Pagamento Facilitado em Reais via PIX
                      </h3>
                      <p className="text-neutral-600">
                        Elimine taxas cambiais abusivas e o IOF cobrado por operadoras de cartão internacional. Com o <strong>personal shopper</strong>, você realiza o pagamento diretamente em Reais via PIX ou cartão de crédito parcelado, com a cotação do dólar comercial do dia aplicada com absoluta clareza.
                      </p>
                    </div>

                    {/* PILAR 11 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        11. Personal Shopper Seguro contra Fraudes Virtuais
                      </h3>
                      <p className="text-neutral-600">
                        Em um ambiente digital infestado de perfis fakes prometendo mercadorias com valores ilusórios, contratar o <strong>personal shopper</strong> respaldado pela estrutura e governança técnica da <em>EG Empório Digital</em> protege seu patrimônio contra golpes de frete, réplicas e empresas fantasmas.
                      </p>
                    </div>

                    {/* PILAR 12 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        12. Contratar Personal Shopper com a EG Imports Oficial
                      </h3>
                      <p className="text-neutral-600">
                        Aliamos conferência presencial de balcão, frete segurado e atendimento consultivo humanizado. Converse diretamente com os consultores da <strong>EG Imports Paraguai</strong> pelo WhatsApp e solicite sua cotação gratuita em tempo real sem nenhum compromisso.
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