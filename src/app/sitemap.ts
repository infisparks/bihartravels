import { MetadataRoute } from 'next';
import { routesData, servicesData, packagesData } from '@/data/pagesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.taxiservicebihar.com';

  // Base routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // Dynamic Outstation Routes
  const dynamicRoutesList: MetadataRoute.Sitemap = Object.keys(routesData).map((slug) => ({
    url: `${baseUrl}/routes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Dynamic Services Routes
  const dynamicServicesList: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Dynamic Packages Routes
  const dynamicPackagesList: MetadataRoute.Sitemap = Object.keys(packagesData).map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...dynamicRoutesList,
    ...dynamicServicesList,
    ...dynamicPackagesList,
  ];
}
