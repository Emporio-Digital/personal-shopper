import type { Metadata } from "next";
import "./globals.css";

// 1. CONFIGURAÇÃO OFICIAL DE METADADOS (NEXT.JS APP ROUTER)
export const metadata: Metadata = {
  metadataBase: new URL("https://importsparaguai.com.br"),
  title: {
    default: "Personal Shopper Paraguai | Importação Segura",
    template: "%s | EG Imports Paraguai",
  },
  description: "Compras assistidas e importação direta do Paraguai com máxima segurança, economia e procedência garantida.",
  applicationName: "EG Imports Paraguai",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://importsparaguai.com.br/",
  },
  openGraph: {
    title: "Personal Shopper Paraguai | Importação Segura",
    description: "Compras assistidas e importação direta do Paraguai com máxima segurança e procedência.",
    url: "https://importsparaguai.com.br/",
    siteName: "EG Imports Paraguai",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://importsparaguai.com.br/logo.png",
        width: 800,
        height: 800,
        alt: "EG Imports Paraguai - Personal Shopper Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EG Imports Paraguai | Personal Shopper & Importação Segura",
    description: "Compras assistidas e importação direta do Paraguai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 2. GRAFO SEMÂNTICO JSON-LD (AMARRAÇÃO GOOGLE + HIERARQUIA EG EMPÓRIO DIGITAL)
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    // Define o Nome que o Google exibe na SERP (Site Name)
    {
      "@type": "WebSite",
      "@id": "https://importsparaguai.com.br/#website",
      "url": "https://importsparaguai.com.br/",
      "name": "EG Imports Paraguai",
      "alternateName": ["EG Imports", "Imports Paraguai", "Personal Shopper Paraguai"],
      "inLanguage": "pt-BR",
      "publisher": {
        "@id": "https://egemporiodigital.com.br/#organization"
      }
    },
    // Entidade do Serviço / Negócio Local
    {
      "@type": "ProfessionalService",
      "@id": "https://importsparaguai.com.br/#business",
      "name": "EG Imports Paraguai",
      "url": "https://importsparaguai.com.br/",
      "image": "https://importsparaguai.com.br/logo.png",
      "logo": "https://importsparaguai.com.br/logo.png",
      "description": "Serviço especializado de Personal Shopper, assessoria de compras e importação segura do Paraguai para todo o Brasil.",
      "inLanguage": "pt-BR",
      "parentOrganization": {
        "@id": "https://egemporiodigital.com.br/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      }
    },
    // Entidade da Empresa Matriz & Criadora (EG Empório Digital)
    {
      "@type": "WebDesignCompany",
      "@id": "https://egemporiodigital.com.br/#organization",
      "name": "EG Empório Digital",
      "url": "https://egemporiodigital.com.br",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://egemporiodigital.com.br/#logo",
        "url": "https://egemporiodigital.com.br/assets/images/logo.png",
        "caption": "EG Empório Digital"
      },
      "telephone": "+5511916053292",
      "taxID": "67.096.896/0001-25",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "São Paulo",
        "addressRegion": "SP",
        "addressCountry": "BR"
      },
      "sameAs": [
        "https://share.google/ZEX1CMUlRAKlUPOPu", // Perfil / Localização Google
        "https://www.instagram.com/eg.emporio.digital/",
        "https://egkairos.com.br",
        "https://horizon.egemporiodigital.com.br"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Injeção Nativa do Grafo de Autoridade */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body>
        {children}

        {/* BOTÃO FLUTUANTE WHATSAPP EG OFICIAL */}
        <a
          href="https://wa.me/5511916053292?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Imports%20Paraguai%20e%20gostaria%20de%20tirar%20d%C3%BAvidas."
          className="wpp-pulsante"
          target="_blank"
          rel="noopener"
          aria-label="Fale conosco no WhatsApp"
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ margin: "auto" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 21.95l4.913-1.412A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.5c4.694 0 8.5 3.806 8.5 8.5s-3.806 8.5-8.5 8.5c-1.615 0-3.123-.45-4.415-1.233l-.317-.192-3.118.896.913-3.04-.21-.347A8.463 8.463 0 013.5 12c0-4.694 3.806-8.5 8.5-8.5zm4.72 10.932c-.258-.13-1.528-.754-1.764-.84-.237-.086-.41-.13-.582.13-.172.257-.667.84-.817 1.012-.15.172-.3.193-.558.064a7.043 7.043 0 01-2.074-1.28 7.76 7.76 0 01-1.435-1.787c-.15-.258-.016-.398.113-.527.117-.116.258-.3.387-.451.13-.15.172-.258.258-.43.086-.172.043-.322-.021-.452-.065-.129-.582-1.4-.797-1.914-.21-.505-.42-.435-.582-.443-.15-.008-.322-.01-.494-.01-.172 0-.452.065-.688.323-.237.258-.903.882-.903 2.15 0 1.27.925 2.502 1.054 2.674.129.172 1.82 2.78 4.41 3.896.616.265 1.096.422 1.471.542.618.196 1.18.169 1.625.102.496-.075 1.528-.624 1.743-1.226.215-.602.215-1.118.15-1.226-.064-.108-.236-.172-.494-.301z"
              fill="currentColor"
            />
          </svg>
        </a>
      </body>
    </html>
  );
}