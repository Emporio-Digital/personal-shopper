"use client";

import { useState } from "react";

export default function AuthorityPillars() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="tese-autoridade" className="pt-2 pb-6 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
      
      {/* HEADER CLICÁVEL DO ACORDEON (ADAPTADO PARA FUNDO CLARO) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer py-1 select-none group inline-block text-left"
      >
        <span className="text-[10px] md:text-xs text-cyan-600 font-bold uppercase tracking-widest block mb-2">
          Metodologia Exclusiva • EG Imports Paraguai
        </span>
        
        <div className="flex items-center gap-4">
          <h2 className="text-2xl md:text-4xl text-neutral-900 font-extrabold uppercase tracking-tight leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              Autoridade em Importação
            </span>
          </h2>

          <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center bg-white shadow-sm group-hover:border-cyan-500 transition-all">
            <svg
              className={`w-5 h-5 text-cyan-600 transition-transform duration-500 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* CONTEÚDO EXPANDÍVEL (12 PILARES FAT CONTENT - CONTRASTE PERFEITO) */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[8000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-8 text-neutral-700 text-sm md:text-base leading-relaxed text-justify font-normal border-t border-neutral-200 mt-4">
          
          <p className="mb-8 text-neutral-800">
            A <strong>EG Imports Paraguai</strong> não atua como mera intermediária de pacotes; nós operamos uma estrutura proprietária de compras assistidas em Ciudad del Este desenhada para proteger o capital do comprador brasileiro. Nossa metodologia une inspeção física, blindagem tributária e auditoria fiscal em 12 pilares técnicos fundamentais para quem busca economizar até 60% com procedência comprovada.
          </p>

          {/* GRID RESPONSIVO: 1 COLUNA MOBILE / 2 COLUNAS PC */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">

            {/* PILAR 1 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                1. Personal Shopper e Importação no Paraguai: Assessoria Presencial de Elite
              </h3>
              <p className="text-neutral-600">
                Comprar além da fronteira exige presença física especializada. O serviço de <strong>personal shopper e importação no Paraguai</strong> elimina o turismo desnecessário e os custos com passagens aéreas e hospedagem. Nossos consultores atuam in loco nos maiores polos comerciais de Ciudad del Este, mapeando estoques em tempo real e negociando diretamente com distribuidores autorizados para garantir sempre o menor preço com nota legal.
              </p>
            </div>

            {/* PILAR 2 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                2. Como Funciona o Personal Shopper para Importação no Paraguai com Segurança
              </h3>
              <p className="text-neutral-600">
                A dinâmica operacional de <strong>personal shopper para importação no Paraguai</strong> é estruturada em etapas claras: recebimento da lista de desejos, cotação do dólar comercial em tempo real, compra em lojas credenciadas, conferência minuciosa de cada item e despacho nacional com rastreamento integral. Esse fluxo remove a incerteza do processo e assegura que você receba exatamente o que contratou.
              </p>
            </div>

            {/* PILAR 3 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                3. Vantagens do Serviço de Personal Shopper na Importação no Paraguai de Eletrônicos
              </h3>
              <p className="text-neutral-600">
                A tecnologia lidera as buscas de quem contrata <strong>personal shopper na importação no Paraguai</strong>. A diferença tributária torna iPhones, MacBooks, consoles de última geração, placas de vídeo e câmeras profissionais até 60% mais baratos do que no varejo nacional. O comprador adquire equipamentos lacrados, com garantia global e número de série auditado antes do pagamento.
              </p>
            </div>

            {/* PILAR 4 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                4. Personal Shopper e Importação no Paraguai: Como Garantir Produtos 100% Originais
              </h3>
              <p className="text-neutral-600">
                A proliferação de réplicas e lotes refurbished é o maior pesadelo do comprador desavisado. Através do <strong>personal shopper e importação no Paraguai</strong>, cada produto é adquirido exclusivamente em importadoras oficiais e revendas homologadas pelas fabricantes (Apple, Sony, DJI, JBL). Realizamos a conferência de selos holográficos, lacres e ativação de garantia diretamente no balcão da loja.
              </p>
            </div>

            {/* PILAR 5 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                5. Economia Real com Personal Shopper na Importação no Paraguai vs Compras no Brasil
              </h3>
              <p className="text-neutral-600">
                Ao calcular a paridade entre o imposto sobre consumo brasileiro e a política de isenções paraguaia, o ganho financeiro proporcionado pelo <strong>personal shopper na importação no Paraguai</strong> supera qualquer programa de cashback nacional. Mesmo considerando as taxas operacionais de serviço e frete interestadual, o comprador economiza milhares de reais em compras pessoais ou reposição de ferramentas corporativas.
              </p>
            </div>

            {/* PILAR 6 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                6. Personal Shopper para Importação no Paraguai: Validação por Chamada de Vídeo ao Vivo
              </h3>
              <p className="text-neutral-600">
                A transparência é a base da nossa governança operacional. O processo de <strong>personal shopper para importação no Paraguai</strong> permite que o cliente acompanhe a compra em tempo real via chamada de vídeo e fotos em alta definição. O equipamento é testado, a caixa é aberta na presença virtual do cliente (quando solicitado) e a aprovação final é dada antes do item deixar a loja física.
              </p>
            </div>

            {/* PILAR 7 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                7. Logística Segura de Personal Shopper e Importação no Paraguai com Rastreamento
              </h3>
              <p className="text-neutral-600">
                O despacho de mercadorias no ecossistema de <strong>personal shopper e importação no Paraguai</strong> requer embalagens reforçadas, plástico bolha industrial de alta densidade e caixas anônimas para inibir extravios. Todas as remessas contam com seguro de carga e código de rastreamento oficial dos Correios ou transportadoras parceiras, operando do centro de distribuição até a porta da sua casa.
              </p>
            </div>

            {/* PILAR 8 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                8. Cota Legal e Tributação com Personal Shopper na Importação no Paraguai (Receita Federal)
              </h3>
              <p className="text-neutral-600">
                Trabalhar em conformidade com as normas aduaneiras é indispensável. A consultoria de <strong>personal shopper na importação no Paraguai</strong> orienta o comprador acerca do limite de cota terrestre vigente ($500 dólares por CPF), regras de declaração de bagagem acompanhada (e-DBV) e procedimentos legais de desembaraço aduaneiro na Ponte da Amizade, prevenindo retenções fiscais arbitrárias.
              </p>
            </div>

            {/* PILAR 9 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                9. Personal Shopper e Importação no Paraguai para Revendedores e Lojistas B2B
              </h3>
              <p className="text-neutral-600">
                Empreendedores digitais e lojistas físicos utilizam o serviço de <strong>personal shopper e importação no Paraguai</strong> como alavanca de margem de lucro. Através da compra consolidada de perfumaria de nicho, suplementos e periféricos de alta demanda, estruturamos pedidos fracionados recorrentes que abastecem lojas brasileiras sem a necessidade de deslocamento mensal dos proprietários.
              </p>
            </div>

            {/* PILAR 10 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                10. Comparativo de Lojas Oficiais com Personal Shopper na Importação no Paraguai em Ciudad del Este
              </h3>
              <p className="text-neutral-600">
                Nem toda loja do Paraguai oferece os mesmos termos de garantia. O <strong>personal shopper na importação no Paraguai</strong> atua com um catálogo criterioso de parceiros tradicionais como Cellshop, Nissei, Madrid Center e Mega Eletrônicos. Comparamos variações cambiais entre estabelecimentos e taxas de cartão, garantindo que o cliente usufrua das melhores cotações sem surpresas na fatura.
              </p>
            </div>

            {/* PILAR 11 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                11. Redução de Riscos com Personal Shopper na Importação no Paraguai sem Golpes
              </h3>
              <p className="text-neutral-600">
                A internet está saturada de falsos intermediadores e perfis fakes de redes sociais. Contratar uma empresa séria de <strong>personal shopper na importação no Paraguai</strong> com infraestrutura e validação técnica da <em>EG Empório Digital</em> blinda seu patrimônio contra os golpes do falso frete, depósitos antecipados sem envio e troca de produtos lacrados por versões inferiores.
              </p>
            </div>

            {/* PILAR 12 */}
            <div>
              <h3 className="text-neutral-900 font-bold uppercase text-base md:text-lg mb-3 border-l-4 border-cyan-500 pl-4">
                12. Contratar Personal Shopper para Importação no Paraguai com a EG Imports Paraguai
              </h3>
              <p className="text-neutral-600">
                A união entre tecnologia de ponta, rastreamento ativo e integridade comercial faz da contratação do <strong>personal shopper para importação no Paraguai</strong> a rota mais inteligente para compras transfronteiriças. Converse diretamente com nossos especialistas no WhatsApp e receba um orçamento detalhado com cotação do dia, custos discriminados e prazo exato de entrega.
              </p>
            </div>

          </div>

          <p className="mt-8 border-l-4 border-cyan-500 pl-4 italic text-neutral-500 text-xs md:text-sm">
            Aviso de Transparência: A EG Imports Paraguai atua sob governança técnica da EG Empório Digital. Todas as operações respeitam as diretrizes de importação e trânsito aduaneiro dos órgãos competentes.
          </p>

        </div>
      </div>
    </section>
  );
}