import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // =========================================================
    // 1. HOME (PRIORIDADE MÁXIMA: 1.0)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // =========================================================
    // 2. HUBS PRINCIPAIS (PRIORIDADE ALTA: 0.9)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/personal-shopper',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-perfumes-no-paraguai',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-notebook-no-paraguai',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-cosmeticos-no-paraguai',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // =========================================================
    // 3. HUB IPHONE (12 PÁGINAS LOCAIS - PRIORIDADE 0.8)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/sao-paulo',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/teotonio-vilela',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/av-sapopemba',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/carrao',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/guarulhos',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/itaquera',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/jd-imperador',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/santo-andre',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/sao-bernardo',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/sao-caetano',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/tatuape',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-iphone-no-paraguai/vila-prudente',
      lastModified: new Date('2026-10-30'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // =========================================================
    // 4. HUB COSMÉTICOS (2 PÁGINAS LOCAIS - PRIORIDADE 0.8)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/comprar-cosmeticos-no-paraguai/sao-paulo',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-cosmeticos-no-paraguai/teotonio-vilela',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // =========================================================
    // 5. HUB NOTEBOOK (2 PÁGINAS LOCAIS - PRIORIDADE 0.8)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/comprar-notebook-no-paraguai/sao-paulo',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-notebook-no-paraguai/teotonio-vilela',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // =========================================================
    // 6. HUB PERFUMES (2 PÁGINAS LOCAIS - PRIORIDADE 0.8)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/comprar-perfumes-no-paraguai/sao-paulo',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/comprar-perfumes-no-paraguai/teotonio-vilela',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // =========================================================
    // 7. HUB PERSONAL SHOPPER (2 PÁGINAS LOCAIS - PRIORIDADE 0.8)
    // =========================================================
    {
      url: 'https://importsparaguai.com.br/personal-shopper/sao-paulo',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://importsparaguai.com.br/personal-shopper/teotonio-vilela',
      lastModified: new Date('2026-10-28'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}