import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Instrução específica liberando os bots de IA do Google (Google-Extended e Googlebot)
      {
        userAgent: ['Googlebot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://importsparaguai.com.br/sitemap.xml',
    host: 'https://importsparaguai.com.br',
  };
}