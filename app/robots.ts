import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'bingbot',
        allow: '/',
        crawlDelay: 0.5,
      },
    ],
    sitemap: 'https://safawalamumbai.com/sitemap.xml',
  }
}
