import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/mypage', '/reset-password'],
    },
    sitemap: 'https://relax-together.vercel.app/sitemap.xml',
  };
}
