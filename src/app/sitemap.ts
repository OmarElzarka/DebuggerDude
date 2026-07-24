import { MetadataRoute } from 'next';
import { getAllVideos } from '@/lib/youtube';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticRoutes = [
    '',
    '/learn',
    '/about',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const videos = getAllVideos();
  const dynamicVideoRoutes = videos.map((video) => ({
    url: `${baseUrl}/watch/${video.videoId}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicVideoRoutes];
}
