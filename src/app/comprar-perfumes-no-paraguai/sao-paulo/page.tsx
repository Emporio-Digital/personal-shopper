import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

// =========================================================================
// 1. METADADOS (NEXT.JS APP ROUTER) - MATEMÁTICA PERFEITA SERP GOOGLE
// =========================================================================
export const metadata: Metadata = {
  title: "Comprar Perfumes Paraguai em São Paulo",
  description:
    "Compre perfumes no Paraguai sem sair de casa em São Paulo. Fragrâncias de grife e nicho 100% originais com batch code auditado ao vivo e envio segurado para SP.",
  alternates: {
    canonical: "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo",
  },
  openGraph: {
    title: "Comprar Perfumes Paraguai em São Paulo | Fragrâncias Originais",
    description:
      "Economize até 50% em perfumes importados e fragrâncias de luxo em São Paulo. Checagem de lote ao vivo e frete 100% segurado.",
    url: "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo",
    siteName: "EG Imports Paraguai",
    locale: "pt_BR",
    type: "website",
  },
};

// =========================================================================
// 2. GRAFO SEMÂNTICO SCHEMA.ORG (PERFUMES EM SÃO PAULO)
// =========================================================================
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo#service",
      "name": "Comprar Perfumes no Paraguai em São Paulo",
      "serviceType": "Compra Assistida de Perfumes Importados e Fragrâncias para São Paulo",
      "url": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo",
      "description":
        "Serviço especializado para comprar perfumes importados originais no Paraguai com entrega expressa e segurada em São Paulo. Perfumaria de designer e nicho com conferência de batch code.",
      "telephone": "+5511916053292",
      "priceRange": "$$",
      "provider": {
        "@id": "https://importsparaguai.com.br/#business"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-23.5505",
        "longitude": "-46.6333"
      },
      "hasMap": "https://share.google/ZEX1CMUlRAKlUPOPu",
      "areaServed": [
        { "@type": "City", "name": "São Paulo" },
        { "@type": "AdministrativeArea", "name": "Grande São Paulo" },
        { "@type": "City", "name": "Guarulhos" },
        { "@type": "City", "name": "Santo André" },
        { "@type": "City", "name": "São Bernardo do Campo" },
        { "@type": "City", "name": "São Caetano do Sul" },
        { "@type": "City", "name": "Campinas" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Catálogo de Perfumes do Paraguai para São Paulo",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Perfumaria de Designer (Dior, Chanel, Tom Ford, Creed) para SP" } },
          { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Perfumaria de Nicho e Casas Árabes Lacradas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoria de Batch Code e Lacre Celofane ao Vivo por Vídeo" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Envio Expresso com Seguro Integral de Carga para São Paulo" } }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://importsparaguai.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Comprar Perfumes no Paraguai", "item": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai" },
        { "@type": "ListItem", "position": 3, "name": "São Paulo", "item": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo" }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como garantir que os perfumes importados entregues em São Paulo são 100% originais?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Compramos exclusivamente nas grandes distribuidoras e importadoras oficiais homologadas pelas grifes em Ciudad del Este (como Monalisa, Elegancia e Cellshop). Nosso consultor valida o lacre celofane e audita o Batch Code impresso na caixa e no frasco em bancos de dados mundiais ao vivo via chamada de vídeo com você antes do envio para São Paulo."
          }
        },
        {
          "@type": "Question",
          "name": "Existe risco de quebra dos frascos de vidro durante o transporte para São Paulo?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zero risco para o seu bolso. Aplicamos blindagem física com plástico bolha industrial de tripla camada e caixas reforçadas anti-impacto. Além disso, todas as encomendas para São Paulo contam com seguro integral que indeniza 100% do valor do pedido em caso de sinistro ou avaria."
          }
        },
        {
          "@type": "Question",
          "name": "Qual é a economia ao comprar perfumes no Paraguai comparado aos shoppings de SP?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A economia atinge entre 40% e 65% em relação às boutiques e perfumarias de luxo de São Paulo (como as da Oscar Freire e shoppings Iguatemi/JK), especialmente em fragrâncias Eau de Parfum e perfumes de nicho como Creed, Parfums de Marly e Xerjoff, pagando o valor comercial oficial sem a cobrança de tributos estaduais inflacionados."
          }
        }
      ]
    }
  ]
};

export default function ComprarPerfumesSaoPauloPage() {
  const steps = [
    {
      number: "01",
      title: "Envie sua lista de fragrâncias",
      description: "Você nos passa o nome dos perfumes, volumetria e concentração para São Paulo. Mapeamos os estoques e encontramos as melhores cotações nas grandes importadoras oficiais de Ciudad del Este.",
      tag: "Cotação Imediata"
    },
    {
      number: "02",
      title: "Checagem de Batch Code ao vivo",
      description: "Nosso consultor vai fisicamente à importadora credenciada. Você acompanha a checagem do lacre celofane e a validação do lote de fabricação por vídeo chamada.",
      tag: "Transparência Total"
    },
    {
      number: "03",
      title: "Envio blindado até São Paulo",
      description: "Acondicionamento industrial reforçado contra impacto e variações térmicas, rastreamento ativo e seguro de 100% da carga até seu endereço em SP.",
      tag: "Garantia 100%"
    }
  ];

  const categories = [
    { name: "Perfumaria de Nicho", brand: "Creed • Parfums de Marly • Xerjoff", tagColor: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Grifes de Luxo", brand: "Dior • Tom Ford • Chanel • YSL", tagColor: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Perfumaria Árabe", brand: "Lattafa • Afnan • Linhas de Elite", tagColor: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { name: "Cosméticos & Cabelo", brand: "Kérastase • Skincare Importado", tagColor: "bg-amber-50 text-amber-800 border-amber-200" },
  ];

  const guarantees = [
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "100% Originais com Batch Code",
      description: "Adquirimos apenas em lojas oficiais. Conferência do código de lote impresso no frasco e na caixa."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Vídeo Chamada & Lacres Intactos",
      description: "Conferimos o lacre de fábrica e celofane ao vivo no balcão antes da preparação do pacote para SP."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Envio 100% Segurado para SP",
      description: "Proteção mecânica especial anti-impacto e blindagem com seguro total contra extravio ou avarias."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Economia Real de até 60%",
      description: "Preços de cotação direta de Ciudad del Este sem as taxas abusivas dos shoppings paulistanos."
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
            HERO SECTION (PERFUMES EM SÃO PAULO)
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
                    Perfumaria de Luxo • Atendimento São Paulo
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight leading-[1.12] text-neutral-950">
                  Comprar Perfumes no Paraguai{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                    sem sair de casa
                  </span>{" "}
                  em São Paulo com procedência 100%.
                </h1>

                {/* Imagem Mobile */}
                <div className="w-full mt-7 mb-3 block lg:hidden order-2">
                  <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 via-neutral-100 to-neutral-200/40 shadow-2xl shadow-neutral-950/10">
                    <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                      <img src="/categorias.jpg" alt="Comprar Perfumes no Paraguai em São Paulo" className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/65 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md border border-white/15 shadow-md text-white text-[9px] font-bold flex items-center gap-1">
                        <span className="text-amber-400">⚡</span> PERFUMES PARAGUAI • SP
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-2 rounded-xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-2">
                        <div className="min-w-0 text-left">
                          <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block truncate">
                            Fragrâncias de Grife
                          </span>
                          <span className="text-[11px] sm:text-xs font-extrabold text-neutral-950 block truncate">
                            Batch Code & Lacre em SP
                          </span>
                        </div>
                        <span className="shrink-0 text-[8px] sm:text-[9px] font-black uppercase text-blue-700 bg-blue-500/15 border border-blue-500/30 px-2 py-1 rounded-md">
                          COTAÇÃO SÃO PAULO
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-base sm:text-lg text-neutral-600 font-normal mt-5 lg:mt-6 max-w-xl leading-relaxed order-3">
                  Economize <span className="font-semibold text-neutral-900">até 50%</span> em perfumes de luxo de Dior, Chanel, Creed, Tom Ford, Xerjoff e perfumaria árabe. 
                  Compramos nas maiores importadoras oficiais de Ciudad del Este com teste de batch code ao vivo e entrega 100% segurada na sua porta em <strong>São Paulo</strong>.
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
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20S%C3%A3o%20Paulo%20da%20Imports%20Paraguai%20e%20gostaria%20de%20solicitar%20uma%20cota%C3%A7%C3%A3o%20para%20comprar%20perfumes%20no%20Paraguai."
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
                    <img src="/categorias.jpg" alt="Comprar Perfumes no Paraguai em São Paulo" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15 shadow-md text-white text-[10px] font-bold flex items-center gap-1.5">
                      <span className="text-amber-400">⚡</span> PERFUMES PARAGUAI • SP
                    </div>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                      <div className="min-w-0">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block truncate">
                          Fragrâncias de Grife
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-neutral-950 block truncate">
                          Batch Code & Lacre em SP
                        </span>
                      </div>
                      <span className="shrink-0 text-[10px] font-black uppercase text-blue-700 bg-blue-500/15 border border-blue-500/30 px-2.5 py-1 rounded-lg">
                        COTAÇÃO SÃO PAULO
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            HOW IT WORKS (PERFUMES EM SÃO PAULO NO H2)
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
                Como funciona comprar perfumes no Paraguai em São Paulo do{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  início ao fim
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal max-w-xl mx-auto leading-relaxed">
                Sem burocracia ou intermediários caros. Cuidamos de toda a conferência técnica do batch code nas importadoras e logística direta até suas mãos em São Paulo.
              </p>
            </div>

            {/* Banner Topo */}
            <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/60 to-neutral-200/20 shadow-2xl mb-14 sm:mb-20">
              <div className="relative min-h-[220px] h-60 sm:h-96 w-full rounded-[1.7rem] overflow-hidden group">
                <img src="/como-funciona.jpg" alt="Perfumes no Paraguai para São Paulo" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-7 left-3 sm:left-8 right-3 sm:right-8 flex flex-wrap items-end justify-between gap-2.5">
                  <span className="text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-neutral-900/85 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2 max-w-full leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span className="break-words">Dior • Creed • Tom Ford • Chanel • Lattafa • Xerjoff</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Imagem Quadrada + Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl group">
                  <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-neutral-950">
                    <img src="/como-funciona-quadrada.jpg" alt="Conferência de Perfumes para São Paulo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-950/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold flex items-center gap-1.5 border border-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      BATCH CODE AUDITADO PARA SP
                    </div>

                    <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl bg-white/90 sm:bg-white/70 backdrop-blur-md border border-white/60 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 transition-all duration-300 group-hover:bg-white/95">
                      <div className="min-w-0">
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-cyan-800 block">
                          Conferência Presencial
                        </span>
                        <span className="text-[11px] sm:text-xs md:text-sm font-extrabold text-neutral-950 block leading-snug break-words">
                          Lacre Celofane & Frasco Intacto
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
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Sou%20de%20S%C3%A3o%20Paulo%20e%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20comprar%20perfumes%20no%20Paraguai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 text-sm font-extrabold text-blue-700 transition-all duration-200 group"
                  >
                    <span>Falar com especialista em perfumaria</span>
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
            CATEGORIES (CROSS-LINKING COM OS OUTROS HUBS)
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
                Aproveite o mesmo envio para São Paulo com o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  menor valor do mercado
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 max-w-xl mx-auto font-normal leading-relaxed">
                Adicione eletrônicos ou cosméticos no mesmo frete dos seus perfumes para São Paulo e dilua o custo de envio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10 sm:mb-12">
              
              {/* CARD 1: IPHONES */}
              <Link href="/comprar-iphone-no-paraguai" className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden block">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
                  <img src="/hero.jpg" alt="Comprar iPhone no Paraguai" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                      Garantia Apple 1 Ano
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                    <div className="min-w-0">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-cyan-800 block truncate">
                        Linha Completa Apple
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-neutral-950 leading-tight truncate">
                        Comprar iPhone no Paraguai →
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

              {/* CARD 2: COSMÉTICOS */}
              <Link href="/comprar-cosmeticos-no-paraguai" className="group relative rounded-[2rem] p-1.5 bg-gradient-to-b from-neutral-200/70 to-neutral-200/30 shadow-xl overflow-hidden block">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[1.7rem] overflow-hidden bg-neutral-950">
                  <img src="/categorias.jpg" alt="Cosméticos e Skincare no Paraguai" className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-lg bg-neutral-950/50 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-200">
                      Tratamentos de Luxo
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 px-4 py-2.5 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between gap-3 transition-all duration-300 group-hover:bg-white/85">
                    <div className="min-w-0">
                      <span className="text-[9px] font-extrabold uppercase tracking-widest text-blue-800 block truncate">
                        Kérastase & Skincare
                      </span>
                      <h3 className="text-sm sm:text-base font-extrabold text-neutral-950 leading-tight truncate">
                        Comprar Cosméticos no Paraguai →
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>

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
                    href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Sou%20de%20S%C3%A3o%20Paulo%20e%20gostaria%20de%20consultar%20a%20disponibilidade%20e%20pre%C3%A7o%20de%20um%20perfume%20na%20Imports%20Paraguai."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full xl:w-auto inline-flex items-center justify-center gap-3.5 px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-neutral-950 hover:bg-neutral-900 rounded-full shadow-lg transition-all border border-neutral-800 group"
                  >
                    <span>Consultar Qualquer Fragrância</span>
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
                Comprar perfumes no Paraguai com{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600">
                  procedência garantida em SP
                </span>
              </h2>
              <p className="text-neutral-600 text-base sm:text-lg mt-4 font-normal leading-relaxed">
                Eliminamos todo o risco de réplicas e lotes adulterados. Você recebe seu perfume original na caixa intacta com comprovante oficial.
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
                      Atendimento Especializado para São Paulo
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-[1.75rem] font-bold text-white tracking-tight leading-snug">
                    Já tem um perfume em mente?{" "}
                    <span className="text-neutral-300 font-normal">Faça sua cotação sem compromisso.</span>
                  </h3>

                  <p className="text-neutral-400 text-xs sm:text-sm mt-2.5 font-normal max-w-md leading-relaxed">
                    Envie a foto ou nome da fragrância. Cotamos em tempo real nas maiores importadoras de Ciudad del Este para envio a SP.
                  </p>

                  <div className="mt-6 w-full sm:w-auto">
                    <a
                      href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20de%20S%C3%A3o%20Paulo%20e%20j%C3%A1%20tenho%20um%20perfume%20em%20mente%20para%20cota%C3%A7%C3%A3o."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-neutral-950 bg-white hover:bg-neutral-100 rounded-full shadow-lg transition-all group"
                    >
                      <div className="w-6 h-6 text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.861.174.086.275.072.376-.044.102-.115.434-.506.549-.68.116-.173.232-.144.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z" />
                        </svg>
                      </div>
                      <span>Cotar Perfumes no WhatsApp</span>
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
            FAQ SECTION (PERFUMES EM SÃO PAULO)
           ======================================================== */}
        <section id="faq" className="w-full py-16 md:py-24 px-5 lg:px-8 border-t border-neutral-200/80 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50/90 border border-cyan-200/70 px-3 py-1 rounded-full inline-block mb-3.5 shadow-2xs">
                Dúvidas Frequentes • Atendimento São Paulo
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-neutral-950 font-black tracking-tight leading-tight">
                Perguntas sobre Comprar Perfumes no Paraguai em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  São Paulo
                </span>
              </h2>
            </div>

            <div className="space-y-4">
              {/* FAQ 1 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>Como garantir que os perfumes importados entregues em São Paulo são 100% originais?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  Compramos exclusivamente nas grandes distribuidoras e importadoras oficiais homologadas pelas grifes em Ciudad del Este (como Monalisa, Elegancia e Cellshop). Nosso consultor valida o lacre celofane e audita o Batch Code impresso na caixa e no frasco em bancos de dados mundiais ao vivo via chamada de vídeo com você antes do envio para São Paulo.
                </p>
              </details>

              {/* FAQ 2 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>Existe risco de quebra dos frascos de vidro durante o transporte para São Paulo?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  Zero risco para o seu bolso. Aplicamos blindagem física com plástico bolha industrial de tripla camada e caixas reforçadas anti-impacto. Além disso, todas as encomendas para São Paulo contam com seguro integral que indeniza 100% do valor do pedido em caso de sinistro ou avaria.
                </p>
              </details>

              {/* FAQ 3 */}
              <details className="group rounded-2xl bg-white border border-neutral-200/80 p-5 sm:p-6 transition-all duration-200 hover:border-cyan-500/50 hover:shadow-md shadow-xs">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden font-extrabold text-sm sm:text-base text-neutral-950 gap-4">
                  <span>Qual é a economia ao comprar perfumes no Paraguai comparado aos shoppings de SP?</span>
                  <div className="w-8 h-8 rounded-full border border-neutral-200/90 flex items-center justify-center bg-neutral-50 shrink-0 group-hover:bg-cyan-50 group-open:border-cyan-500 group-open:bg-cyan-50 transition-all">
                    <svg className="w-4 h-4 text-cyan-700 transition-transform duration-300 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed mt-4 pt-4 border-t border-neutral-100">
                  A economia atinge entre 40% e 65% em relação às boutiques e perfumarias de luxo de São Paulo (como as da Oscar Freire e shoppings Iguatemi/JK), especialmente em fragrâncias Eau de Parfum e perfumes de nicho como Creed, Parfums de Marly e Xerjoff, pagando o valor comercial oficial sem a cobrança de tributos estaduais inflacionados.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* ========================================================
            TESE DE AUTORIDADE (12 PILARES COM SÃO PAULO MARTELADO)
            DISTRIBUIÇÃO DE LINK JUICE COMPLETA
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
                      Comprar Perfumes no Paraguai em São Paulo
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
                    A <strong>EG Imports Paraguai</strong> estabeleceu o mais seguro protocolo logístico e fiscal para colecionadores e entusiastas que buscam <strong>comprar perfumes no Paraguai em São Paulo</strong> sem correr riscos de fragrâncias falsificadas, contratipos ou quebras no transporte. Através da nossa assessoria presencial de <Link href="/personal-shopper" className="text-cyan-700 font-bold hover:underline">personal shopper no Paraguai</Link>, operamos diretamente nas maiores importadoras de luxo de Ciudad del Este sob 12 pilares técnicos essenciais para o mercado paulistano:
                  </p>

                  {/* Grid Responsivo 12 Pilares - PALAVRA-CHAVE MARTELADA: Comprar Perfumes no Paraguai em São Paulo */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    
                    {/* PILAR 1 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        1. Comprar Perfumes no Paraguai em São Paulo: Economia Frente ao Varejo Paulistano
                      </h3>
                      <p className="text-neutral-600">
                        O custo de perfumes importados nas boutiques dos shoppings de São Paulo e na Oscar Freire é excessivamente inflado por tributos e margens de luxo. A decisão de <strong>comprar perfumes no Paraguai em São Paulo</strong> proporciona economia direta de até 50% em frascos de 100ml e 200ml, liquidando a compra na cotação comercial oficial das importadoras sem repasses abusivos.
                      </p>
                    </div>

                    {/* PILAR 2 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        2. Comprar Perfumes no Paraguai em São Paulo com Batch Code Auditado
                      </h3>
                      <p className="text-neutral-600">
                        A garantia de originalidade exige validação do lote de fabricação. Quem opta por <strong>comprar perfumes no Paraguai em São Paulo</strong> conosco conta com a conferência do Batch Code gravado no frasco e na caixa diretamente em bancos de dados mundiais, comprovando a autenticidade e o tempo de maceração perfeito da fragrância.
                      </p>
                    </div>

                    {/* PILAR 3 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        3. Comprar Perfumes no Paraguai em São Paulo sem Riscos de Falsificações
                      </h3>
                      <p className="text-neutral-600">
                        O mercado paralelo paulistano sofre com réplicas idênticas e frascos adulterados vendidos em feiras e na internet. Ao <strong>comprar perfumes no Paraguai em São Paulo</strong> através da nossa assessoria, você tem a certeza de receber frascos celofanados de fábrica com selos oficiais, eliminando o perigo de formulações sintéticas de baixa fixação.
                      </p>
                    </div>

                    {/* PILAR 4 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        4. Comprar Perfumes no Paraguai em São Paulo nas Importadoras Credenciadas
                      </h3>
                      <p className="text-neutral-600">
                        Não compramos em bancas ou galerias desconhecidas. Toda a operação para <strong>comprar perfumes no Paraguai em São Paulo</strong> é conduzida estritamente nas distribuidoras mais tradicionais de Ciudad del Este, como Monalisa, Elegancia Perfumes, Charme e Cellshop, que representam oficialmente os conglomerados globais LVMH, Puig e Coty.
                      </p>
                    </div>

                    {/* PILAR 5 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        5. Comprar Perfumes no Paraguai em São Paulo com Vídeo Chamada ao Vivo
                      </h3>
                      <p className="text-neutral-600">
                        O comprador paulistano participa da inspeção do início ao fim. No ato de <strong>comprar perfumes no Paraguai em São Paulo</strong>, nosso especialista realiza uma chamada de vídeo no balcão da loja, permitindo que você confira o selo holográfico, o estado da caixa e a numeração do lote antes do despacho.
                      </p>
                    </div>

                    {/* PILAR 6 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        6. Comprar Perfumes no Paraguai em São Paulo: Perfumaria de Nicho e Árabe
                      </h3>
                      <p className="text-neutral-600">
                        Fragrâncias exclusivas de casas como Creed, Parfums de Marly, Xerjoff e os perfumes árabes mais procurados (Lattafa e Afnan) possuem distribuição restrita e caríssima no Brasil. Ao <strong>comprar perfumes no Paraguai em São Paulo</strong>, você tem acesso imediato a esses lançamentos mundiais com valores diretos de importadora.
                      </p>
                    </div>

                    {/* PILAR 7 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        7. Comprar Perfumes no Paraguai em São Paulo com Embalagem Blindada
                      </h3>
                      <p className="text-neutral-600">
                        O transporte interestadual de frascos de vidro exige cuidado logístico extremo. Para <strong>comprar perfumes no Paraguai em São Paulo</strong>, cada produto recebe blindagem em plástico bolha industrial de alta densidade e caixa rígida, contando com seguro integral contra quebra ou extravio monitorado passo a passo até o destino.
                      </p>
                    </div>

                    {/* PILAR 8 - LINK JUICE COSMÉTICOS */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        8. Comprar Perfumes no Paraguai em São Paulo e Unificar Frete com Cosméticos
                      </h3>
                      <p className="text-neutral-600">
                        Otimizar a logística de compras transfronteiriças é a estratégia mais inteligente. No mesmo frete dos seus perfumes para São Paulo, você pode incluir pedidos em nosso hub para <Link href="/comprar-cosmeticos-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar cosméticos no Paraguai</Link> (linhas profissionais Kérastase e skincare), recebendo tudo em uma única caixa com seguro total.
                      </p>
                    </div>

                    {/* PILAR 9 - LINK JUICE IPHONE & NOTEBOOK */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        9. Comprar Perfumes no Paraguai em São Paulo e Incluir Eletrônicos Lacrados
                      </h3>
                      <p className="text-neutral-600">
                        Nossa estrutura de compras assistidas opera pedidos multissetoriais. Enquanto você agenda o envio dos seus perfumes para São Paulo, pode cotar aparelhos em nosso hub para <Link href="/comprar-iphone-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar iPhone no Paraguai</Link> ou arrematar computadores de ponta em <Link href="/comprar-notebook-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar notebook no Paraguai</Link>.
                      </p>
                    </div>

                    {/* PILAR 10 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        10. Comprar Perfumes no Paraguai em São Paulo via PIX sem IOF
                      </h3>
                      <p className="text-neutral-600">
                        Economize sem taxas ocultas de cartão internacional. Ao <strong>comprar perfumes no Paraguai em São Paulo</strong> através da nossa assessoria, a transação é liquidada em Reais via PIX ou cartão de crédito parcelado, tomando como referência exata o câmbio comercial do dia informado pelas lojas de Ciudad del Este.
                      </p>
                    </div>

                    {/* PILAR 11 */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        11. Comprar Perfumes no Paraguai em São Paulo para Revenda e Boutiques
                      </h3>
                      <p className="text-neutral-600">
                        Lojistas, consultores de estilo e revendedores autônomos de São Paulo utilizam o serviço de <strong>comprar perfumes no Paraguai em São Paulo</strong> para manter seu mostruário abastecido com fragrâncias de altíssima liquidez, conquistando margens de lucro superiores a 40% nas praças paulistas.
                      </p>
                    </div>

                    {/* PILAR 12 - LINK HUB PAI */}
                    <div>
                      <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                        12. Contratar Assessoria para Comprar Perfumes no Paraguai em São Paulo
                      </h3>
                      <p className="text-neutral-600">
                        A rota mais rápida e segura para ter as melhores fragrâncias do mundo sem sair de casa é contar com consultores dedicados na fronteira. Visite nossa base completa em <Link href="/comprar-perfumes-no-paraguai" className="text-cyan-700 font-bold hover:underline">comprar perfumes no Paraguai</Link> e chame nosso time no WhatsApp para receber sua cotação gratuita para São Paulo.
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