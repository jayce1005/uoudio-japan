import type { MetadataRoute } from "next";
import { guideArticles } from "./guides";
import { manualGuides } from "./manual-guides";
import { products } from "./products";
import { SITE_URL } from "./site-config";

const LAST_UPDATED = new Date("2026-10-10T00:00:00+09:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [product.image, product.banner, ...(product.gallery?.map((item) => item.src) ?? [])]
      .filter((image): image is string => Boolean(image))
      .map((image) => `${SITE_URL}${image}`),
  }));
  const manualPages: MetadataRoute.Sitemap = manualGuides.map((guide) => ({
    url: `${SITE_URL}/support/manuals/${guide.slug}`,
    lastModified: new Date(`${guide.updatedAt}T00:00:00+09:00`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const guidePages: MetadataRoute.Sitemap = guideArticles.map((article) => ({
    url: `${SITE_URL}/guide/${article.slug}`,
    lastModified: new Date(`${article.updatedAt}T00:00:00+09:00`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 1,
      images: [
        `${SITE_URL}/home-hero-lifestyle-v1.png`,
        ...products.map((product) => `${SITE_URL}${product.image}`),
      ],
    },
    {
      url: `${SITE_URL}/support/contact`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/support/manuals`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/guide`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...manualPages,
    ...guidePages,
    ...productPages,
  ];
}
