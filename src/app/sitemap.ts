import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://importsparaguai.com.br';
  
  // Data fixada conforme solicitado: 28/10/2026
  const lastModifiedDate = new Date('2026-10-28T00:00:00.000Z');

  // Mapeamento categorizado dos Hubs e seus pesos estratégicos
  const hubs = [
    { slug: 'personal-shopper', priority: 0.9, changeFrequency: 'weekly' as const },
    { slug: 'comprar-iphone-no-paraguai', priority: 0.85, changeFrequency: 'weekly' as const },
    { slug: 'comprar-perfumes-no-paraguai', priority: 0.8, changeFrequency: 'weekly' as const },
    { slug: 'comprar-notebook-no-paraguai', priority: 0.8, changeFrequency: 'weekly' as const },
    { slug: 'comprar-cosmeticos-no-paraguai', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  // Páginas locais de cada Hub
  const localCities = ['sao-paulo', 'teotonio-vilela'];

  // 1. URL Raiz (Home)
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: lastModifiedDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 2. Hubs de Categoria
  hubs.forEach((hub) => {
    routes.push({
      url: `${baseUrl}/${hub.slug}`,
      lastModified: lastModifiedDate,
      changeFrequency: hub.changeFrequency,
      priority: hub.priority,
    });

    // 3. Páginas Locais vinculadas ao Hub (10 páginas no total)
    localCities.forEach((city) => {
      routes.push({
        url: `${baseUrl}/${hub.slug}/${city}`,
        lastModified: lastModifiedDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return routes;
}